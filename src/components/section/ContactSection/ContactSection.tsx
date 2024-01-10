import { contactData } from 'data/contactData';
import classes from './contactSection.module.scss';

export const ContactSection = () => {
  return (
    <section id='contact' className={classes.contactSection}>
      <h1 className={classes.contactSection_title}>Contact</h1>

      <div className={classes.contactSection_logosContainer}>
        {contactData.map(({ id, url, logo: Logo, data, name }) => {
          return (
            <div key={id} className={classes.contactSection_logoItem}>
              <a href={url} target='_blank' rel='noreferrer'>
                <Logo width={20} height={20} fill='white' />
              </a>
              <a href={url} target='_blank' rel='noreferrer'>
                {name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
