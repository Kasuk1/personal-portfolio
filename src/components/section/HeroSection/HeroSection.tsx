import { motion } from 'framer-motion';
import classes from './heroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={classes.main_hero}>
      {/* <Canvas
        shadows
        camera={{ position: [0, 0, 3], fov: 35 }}
        style={{ position: 'absolute', zIndex: 1 }}
      >
        <Planet />
      </Canvas> */}
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
          Hola! I'm <br />
          <span>Igor Chinchay</span>
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
          A <span>Software Engineer</span> that loves frontend, 3D, music,
          videogames and wealthness.
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
    </section>
  );
};
