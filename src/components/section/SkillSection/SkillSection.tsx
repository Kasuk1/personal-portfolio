import { SkillDescBox } from 'components';
import { skillTechData } from 'data/skillData';
import classes from './skillSection.module.scss';

export const SkillSection = () => {
  return (
    <section id='skill_section' className={classes.skillSection}>
      <div className={classes.skillSection_left}>
        <h2 className={classes.skillSection_title}>Skills</h2>
      </div>

      <div className={classes.skillSection_right}>
        <div className={classes.skillSection_chunk}>
          {skillTechData.map(({ skillLevel, skillName, logo }) => (
            <SkillDescBox
              key={skillName}
              skillLevel={skillLevel}
              skillName={skillName}
              logo={logo}
            />
          ))}
        </div>

        <p className={classes.skillSection_description}>
          Soft skills could be here, but I think,
          <br />
          it would be better to talk about it in a meeting.
        </p>
      </div>
    </section>
  );
};
