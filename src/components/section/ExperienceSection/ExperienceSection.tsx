import { useId } from 'react';
import { ExperienceDescriptionBox } from 'components';
import { experienceData } from 'data/experienceData';
import classes from './experienceSection.module.scss';

export const ExperienceSection = () => {
  return (
    <section id='exp_section' className={classes.expSection}>
      <div className={classes.expSection_info}>
        <h2 className={classes.expSection_title}>Experience</h2>
        <p className={classes.expSection_description}>
          I proudly assimilated different knowledge <br /> and lived good
          experiences in the next companies.
          <br /> It has been a pleaseure to work with them.
        </p>
      </div>

      <div className={classes.expSection_data}>
        {experienceData.map((exp) => {
          const id = useId();

          return <ExperienceDescriptionBox key={id} {...exp} />;
        })}
      </div>
    </section>
  );
};
