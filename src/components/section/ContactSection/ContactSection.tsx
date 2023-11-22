import { motion } from 'framer-motion';
import classes from './contactSection.module.scss';

export const ContactSection = () => {
  return (
    <section id='contact' className={classes.contactSection}>
      <motion.form
        className={classes.contactSection_emailForm}
        id='emailForm'
        action='mailto:igor2008_11@hotmail.com'
        method='post'
        encType='text/plain'
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.2,
          },
        }}
      >
        <motion.h1
          className={classes.contactSection_title}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.6,
            },
          }}
        >
          Contact
        </motion.h1>
        <motion.input
          className={classes.contactSection_emailInput}
          type='email'
          name='email'
          placeholder='youremail@gmail.com'
          required
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.9,
            },
          }}
        />
        <motion.textarea
          className={classes.contactSection_messageInput}
          name='message'
          placeholder={`Hey it's nice to meet you....`}
          rows={5}
          cols={33}
          maxLength={300}
          minLength={50}
          required
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.1,
            },
          }}
        />
        <motion.button
          type='submit'
          className={classes.contactSection_submitButton}
          initial={{
            backgroundColor: '#FAF8FD',
            color: '#000',
            opacity: 0,
            y: 50,
          }}
          whileHover={{
            backgroundColor: '#d3712f',
            color: '#FAF8FD',
            transition: { duration: 0.01 },
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.4 },
          }}
        >
          Send
        </motion.button>
        <motion.div
          className={classes.contactSection_logosContainer}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.4,
            },
          }}
        >
          <a
            href='https://www.facebook.com/IgorPRI1/'
            target='_blank'
            rel='noreferrer'
          >
            <img src='assets/images/facebook-logo.svg' alt='' />
          </a>
          <a
            href='https://www.linkedin.com/in/igorcf/'
            target='_blank'
            rel='noreferrer'
          >
            <img src='assets/images/linkedin-logo.svg' alt='' />
          </a>
          <a
            href='https://github.com/Kasuk1?tab=repositories'
            target='_blank'
            rel='noreferrer'
          >
            <img src='assets/images/github-logo.svg' alt='' />
          </a>
          <a
            href='https://www.instagram.com/yesimigori/'
            target='_blank'
            rel='noreferrer'
          >
            <img src='assets/images/instagram-logo.svg' alt='' />
          </a>
          <a
            href='https://www.youtube.com/@gnosiophobia'
            target='_blank'
            rel='noreferrer'
          >
            <img src='assets/images/youtube-logo.svg' alt='' />
          </a>
        </motion.div>
      </motion.form>
    </section>
  );
};
