import './project-content.scss';
import { ProjectDataType } from '../../../types/project';
import { FC } from 'react';

type ProjectContentProps = Omit<ProjectDataType, 'images'>;

export const ProjectContent: FC<ProjectContentProps> = ({
  name,
  description,
  references,
  technologies,
}) => {
  return (
    <section className='project-content'>
      <h1 className='text-highlight'>{name}</h1>
      <section>
        <h2>Description</h2>
        <p>{description}</p>
      </section>
      <section>
        <h2>Stack</h2>
        <div className='technologies-list'>
          {Object.keys(technologies).map((key) => (
            <div>
              <h3>{key}</h3>
              <ul key={`${key}_${name}`}>
                {technologies[key].map((tech) => (
                  <li key={`${tech}_${name}`}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>References</h2>
        <ul className='reference-list'>
          {references.map(({ id, name: referenceName, url }) => (
            <li key={`${referenceName}_${name}_${id}`}>
              <a href={url} target='_blank' rel='noreferrer'>
                {referenceName}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
