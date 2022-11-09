import { FC } from 'react';
import { ProjectDataType } from '../../../types/project';
import './project-content.scss';

type ProjectContentProps = Omit<ProjectDataType, 'images'>;

export const ProjectContent: FC<ProjectContentProps> = ({
  name,
  description,
  references,
  technologies,
  status,
}) => {
  const statusStyle = {
    backgroundColor: status === 'Active' ? 'green' : 'red',
  };

  return (
    <section className='project-content'>
      <div className='flex column align-item-start gap-5'>
        <h1 className='project-content__title'>{name}</h1>
        <span className='project-content__status' style={statusStyle}>
          {status}
        </span>
      </div>
      <section>
        <h2>Description</h2>
        <p>{description}</p>
      </section>
      <section>
        <h2>Stack</h2>
        <div className='technologies-list'>
          {Object.keys(technologies).map((key, index) => (
            <div key={index}>
              <h3>{key}</h3>
              <ul>
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
