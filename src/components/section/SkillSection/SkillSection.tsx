import { motion } from 'framer-motion';
import { SkillDescBox } from 'components';
import { skillExpData, skillTechData } from 'data/skillData';
import classes from './skillSection.module.scss';

export const SkillSection = () => {
  return (
    <section className={classes.skillSection}>
      <motion.div
        className={classes.skillSection_chunk}
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
        <h1 className={classes.skillSection_title}>Skills</h1>
        {skillTechData.map(({ skillLevel, skillName }) => (
          <SkillDescBox
            key={skillName}
            skillLevel={skillLevel}
            skillName={skillName}
          />
        ))}
      </motion.div>

      <motion.div
        className={classes.skillSection_chunk}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.8,
          },
        }}
      >
        <h1 className={classes.skillSection_title}>Experience</h1>
        {skillExpData.map(({ date, role, companyName }) => (
          <SkillDescBox
            key={companyName}
            date={date}
            role={role}
            companyName={companyName}
          />
        ))}
      </motion.div>
    </section>
  );
};
