import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Astronaut } from 'components';
import FacebookLogo from 'assets/images/facebook-logo.svg';
import LinkedinLogo from 'assets/images/linkedin-logo.svg';
import GitHubLogo from 'assets/images/github-logo.svg';
import InstagramLogo from 'assets/images/instagram-logo.svg';
import YoutubeLogo from 'assets/images/youtube-logo.svg';
import classes from './contactSection.module.scss';

export const ContactSection = () => {
  return (
    <section id='contact' className={classes.contactSection}>
      <Canvas
        shadows
        camera={{ position: [-10, 8, 7], fov: 30 }}
        style={{ position: 'absolute', zIndex: -1 }}
      >
        {/* <fog attach='fog' args={['##f0f0f0', 5, 40]} /> */}
        <Astronaut />
      </Canvas>

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
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.6,
            },
          }}
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.7,
            },
          }}
        >
          You can send me an email with a short message 👨‍💻.
        </motion.p>
        <motion.input
          className={classes.contactSection_emailInput}
          type='email'
          name='email'
          placeholder='youremail@gmail.com'
          required
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
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
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
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
            backgroundColor: '#F84E70',
            color: '#FAF8FD',
            transition: { duration: 0.1 },
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.4 },
          }}
        >
          Contact me
        </motion.button>
      </motion.form>

      <div className={classes.contactSection_logosContainer}>
        <motion.a
          href='https://www.facebook.com/IgorPRI1/'
          target='_blank'
          rel='noreferrer'
          initial={{
            opacity: 0,
            y: -50,
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
          <img src={FacebookLogo} alt='' />
        </motion.a>
        <motion.a
          href='https://www.linkedin.com/in/igorcf/'
          target='_blank'
          rel='noreferrer'
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.5,
            },
          }}
        >
          <img src={LinkedinLogo} alt='' />
        </motion.a>
        <motion.a
          href='https://github.com/Kasuk1?tab=repositories'
          target='_blank'
          rel='noreferrer'
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.6,
            },
          }}
        >
          <img src={GitHubLogo} alt='' />
        </motion.a>
        <motion.a
          href='https://www.instagram.com/yesimigori/'
          target='_blank'
          rel='noreferrer'
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.7,
            },
          }}
        >
          <img src={InstagramLogo} alt='' />
        </motion.a>
        <motion.a
          href='https://www.youtube.com/@gnosiophobia'
          target='_blank'
          rel='noreferrer'
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.8,
            },
          }}
        >
          <img src={YoutubeLogo} alt='' />
        </motion.a>
      </div>
    </section>
  );
};
