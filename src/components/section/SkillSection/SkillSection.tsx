import { ColorfulText, SkillDescBox } from 'components';
import { skillTechData } from 'data/skillData';
import classes from './skillSection.module.scss';

export const SkillSection = () => {
  return (
    <section className={classes.skillSection}>
      <ColorfulText title='Skills' />

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
        I'm a self learner Software Engineer and I've been adquiring different
        <br />
        skills focused on the frontend. Soft skills could be here, but I think,
        <br />
        it would be better to talk about it in a meeting.
      </p>
    </section>
  );
};
