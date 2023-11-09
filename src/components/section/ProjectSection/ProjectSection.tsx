import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { SpaceBoy } from 'components';
import { projectsData } from 'data/projectsData';
import classes from './projectSection.module.scss';

export const ProjectSection = () => {
  return (
    <section className={classes.projectSection}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 35 }}
        style={{ position: 'absolute' }}
      >
        <SpaceBoy />
        {/* <OrbitControls /> */}
      </Canvas>

      <div className={classes.projectSection_descriptionContainer}>
        <motion.h1
          className={classes.projectSection_title}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.3,
            },
          }}
        >
          Projects
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
              delay: 0.5,
            },
          }}
        >
          Here are some projects that it's too probably that will receive
          updates!👽
        </motion.p>

        {projectsData.map(({ images, name, description, id, references }) => (
          <motion.div
            key={id}
            className={classes.projectSection_description}
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
            <a href={references[0].url} target='_blank' rel='noreferrer'>
              {name}
            </a>
            <p>{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
