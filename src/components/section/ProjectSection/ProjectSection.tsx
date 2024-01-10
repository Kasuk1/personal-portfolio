import { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { projectsData } from 'data/projectsData';
import { ProjectBox } from 'components/small';
import { LinkLogo } from 'components/svg';
import classes from './projectSection.module.scss';

export const ProjectSection = () => {
  const [toggleScene, setToggleScene] = useState<boolean>(false);
  const isMobileOrTablet = window.screen.width <= 768;

  const handleToggleScene: (e: React.MouseEvent<HTMLDivElement>) => void = (
    e
  ) => {
    if (isMobileOrTablet) {
      e.stopPropagation();
      return;
    }
    setToggleScene(!toggleScene);
  };

  return (
    <section className={classes.projectSection}>
      <div className={classes.projectSection_info} onClick={handleToggleScene}>
        <h1 className={classes.projectSection_title}>
          Proj
          <br />
          ects
        </h1>
        <p className={classes.projectSection_description}>
          Here are some projects that I've been working on <br /> in my
          self-learning journey. You can take a look at them by clicking in the{' '}
          <LinkLogo fill='white' /> icon.
        </p>
      </div>
      <div className={classes.projectSection_list}>
        {projectsData.map((project) => (
          <ProjectBox key={project.id} {...project} />
        ))}
      </div>
      {!isMobileOrTablet ? (
        <Suspense fallback={<div style={{ color: 'white' }}>Loading...</div>}>
          <Spline
            onClick={handleToggleScene}
            className={classes.projectSection_scene}
            style={{ zIndex: toggleScene ? -10 : 10 }}
            scene='https://prod.spline.design/iVi2SJNohGg18ogx/scene.splinecode'
          />
        </Suspense>
      ) : null}
    </section>
  );
};
