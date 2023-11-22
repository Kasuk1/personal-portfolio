import { motion } from 'framer-motion';
import { projectsData } from 'data/projectsData';
import classes from './projectSection.module.scss';

export const ProjectSection = () => {
  return (
    <section className={classes.projectSection}>
      <div className={classes.projectSection_descriptionContainer}>
        <motion.h1
          className={classes.projectSection_title}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
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
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
        >
          Here are some projects that it's too probably that will receive
          updates! 👽
        </motion.p>
        <motion.div
          className={classes.projectSection_description}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.7,
            },
          }}
        >
          {projectsData.map(({ images, name, description, id, references }) => (
            <div key={id}>
              <a href={references[0].url} target='_blank' rel='noreferrer'>
                {name}
              </a>
              <p>{description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
