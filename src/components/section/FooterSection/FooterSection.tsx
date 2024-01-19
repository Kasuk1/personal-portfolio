import { contactData } from 'data/contactData';
import { SectionOverlay } from 'components/ui';
import classes from './footerSection.module.scss';

export const FooterSection = () => {
  return (
    <SectionOverlay id='contact_section' extraClassName={classes.footerSection}>
      <footer className={classes.footerSection_footer}>
        <div className={classes.footerSection_footer_social}>
          {contactData.map(({ id, url, logo: Logo }) => {
            return (
              <div
                key={id}
                className={classes.footerSection_footer_social_item}
              >
                <a href={url} target='_blank' rel='noreferrer'>
                  <Logo width={25} height={25} fill='white' />
                </a>
              </div>
            );
          })}
        </div>
        <div className={classes.footerSection_footer_copyright}>
          <p>© Igor Chinchay {new Date().getFullYear()}</p>
          <p>Software Engineer</p>
        </div>
      </footer>
      <p className={classes.footerSection_phrase}>
        <strong>Time</strong> is the most precious gift we have, and without
        will and consistency, it'll be wasted.
      </p>
    </SectionOverlay>
  );
};
