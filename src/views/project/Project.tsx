import { ProjectImage, ProjectContent } from '../../components/project';
import { projectsData } from '../../data/projectsData';
import classes from './styles/index.module.scss';

export const Project = () => {
  return (
    <div className='container'>
      <main className={classes.project_container}>
        {projectsData.map((project) => {
          const { images, ...content } = project;

          return (
            <div key={project.name} className={classes.project_box}>
              <ProjectContent {...content} />
              <ProjectImage images={images} />
            </div>
          );
        })}
      </main>
    </div>
  );
};
