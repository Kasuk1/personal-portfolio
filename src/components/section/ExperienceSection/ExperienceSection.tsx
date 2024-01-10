import { Suspense, useId } from 'react';
import Spline from '@splinetool/react-spline';
import { experienceData } from 'data/skillData';
import { ExpDescBox } from 'components/small';
import classes from './experienceSection.module.scss';

export const ExperienceSection = () => {
  const isMobileOrTablet = window.screen.width <= 768;

  return (
    <section className={classes.expSection}>
      {!isMobileOrTablet ? (
        <Suspense fallback={<div style={{ color: 'white' }}>Loading...</div>}>
          <Spline
            className={classes.expSection_scene}
            scene='https://prod.spline.design/Tbqfyh7xAROmh6Od/scene.splinecode'
          />
        </Suspense>
      ) : null}

      <div className={classes.expSection_info}>
        <h2 className={classes.expSection_title}>Exp</h2>
        <p className={classes.expSection_description}>
          I proudly assimilated different knowledge <br /> and lived good
          experiences in the next companies.
          <br /> It has been a pleaseure to work with them.
        </p>
      </div>

      <div className={classes.expSection_data}>
        {experienceData.map((exp) => {
          const id = useId();

          return <ExpDescBox key={id} {...exp} />;
        })}
      </div>
    </section>
  );
};
