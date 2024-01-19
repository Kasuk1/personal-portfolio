import { PointerText } from 'components/ui';
import { contactData } from 'data/contactData';
import { ArrowUpRightFromLogo } from 'components/svg';
import personal1 from '/assets/images/personal1.jpg';
import personal2 from '/assets/images/personal2.jpg';
import personal3 from '/assets/images/personal3.jpg';
import classes from './contactMeSection.module.scss';

const socialContact = contactData.filter(({ id }) => id !== 'data_mail');

export const ContacMeSection = () => {
  return (
    <section className={classes.contactMeSection}>
      <div>
        <p className='small_title'>Contact me</p>
        <p className={classes.contactMeSection_title}>
          It would be great <br /> to be in contact with you
        </p>
        <p className='common_text'>
          I love multicultural teams and colleagues. Who knows what destiny has
          prepare for us...
        </p>
      </div>

      <PointerText bold uppercase hiddenText='igor2008_11@hotmail.com'>
        <a
          className={classes.contactMeSection_emailLink}
          href='mailto:igor2008_11@hotmail.com'
          target='_blank'
        >
          Let's be in touch by email
        </a>
      </PointerText>

      <div>
        <p className='common_text'>
          Or you can follow me and send me a message here:
        </p>

        <ul className={classes.contactMeSection_socialList}>
          {socialContact.map(({ id, name, url }) => (
            <PointerText
              key={id}
              bold
              uppercase
              hiddenText={
                <>
                  <ArrowUpRightFromLogo fill='black' width={10} height={10} />{' '}
                  {name}
                </>
              }
            >
              <li>
                <a href={url} target='_blank'>
                  {name}
                </a>
              </li>
            </PointerText>
          ))}
        </ul>
      </div>

      <div className={classes.contactMeSection_gallery}>
        <img src={personal1} alt='Personal 1' />
        <img src={personal2} alt='Personal 2' />
        <img src={personal3} alt='Personal 3' />
      </div>
    </section>
  );
};
