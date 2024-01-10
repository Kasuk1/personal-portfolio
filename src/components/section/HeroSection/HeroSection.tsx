import { motion } from 'framer-motion';
import { SPEObject } from '@splinetool/react-spline';
import { Suspense, lazy, useRef } from 'react';
import { Application } from '@splinetool/runtime';
import { ArrowSignDownLogo } from 'components/svg';
import classes from './heroSection.module.scss';

const Spline = lazy(() => import('@splinetool/react-spline'));

export const HeroSection = () => {
  const cubRef = useRef<SPEObject | undefined>(undefined);

  const onLoad = (spline: Application) => {
    const obj = spline.findObjectById('612ba4fc-2e13-452f-b27c-9cca9da18b2b');

    // save it in a ref for later use
    cubRef.current = obj;
  };

  return (
    <section className={classes.main_hero}>
      <Suspense fallback={<div style={{ color: 'white' }}>Loading...</div>}>
        <Spline
          onLoad={onLoad}
          scene='https://prod.spline.design/j8STDjRfooC5mStz/scene.splinecode'
          className={classes.main_hero_scene}
        />
      </Suspense>

      <header className={classes.main_hero_headers}>
        <motion.p
          className={classes.main_hero_headers_title}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.4,
            },
          }}
        >
          Hi there! <br />
          <span>I'm Igor,</span>
        </motion.p>
        <motion.p
          className={`${classes.main_hero_headers_description}`}
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
          a Software Engineer who loves frontend, 3D, music, video games and
          sci-fi topics 👾.
          <br />
          It's a pleasure to have you here. Scroll down to know a little more
          about me.
        </motion.p>
        <motion.a
          href='#contact'
          className={classes.main_hero_headers_button}
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
            transition: { duration: 1, delay: 0.7 },
          }}
        >
          Contact me
        </motion.a>
      </header>
      <motion.div
        className={classes.main_hero_arrowLogo}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.2,
          },
        }}
      >
        <ArrowSignDownLogo fill='white' width={35} height={35} />
      </motion.div>
    </section>
  );
};
