import { projectsData } from 'data/projectsData';
import { ProjectBox } from 'components/small';
import classes from './projectSection.module.scss';

export const ProjectSection = () => {
  return (
    <section id='project_section' className={classes.projectSection}>
      <div className={classes.projectSection_info}>
        <h1 className={classes.projectSection_title}>Projects</h1>
        <p className={classes.projectSection_description}>
          Here are some projects that I've been working on <br /> in my
          self-learning journey.
        </p>
      </div>
      <div className={classes.projectSection_list}>
        {projectsData.map((project) => (
          <ProjectBox key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
