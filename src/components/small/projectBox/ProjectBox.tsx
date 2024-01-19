import { ProjectDataType } from 'types/project';
import { ReferenceItem } from '../referenceItem/ReferenceItem';
import classes from './projectBox.module.scss';

export const ProjectBox = ({
  id: projectId,
  references,
  name,
  tags,
}: ProjectDataType) => {
  return (
    <div className={classes.projectBox}>
      <div className={classes.projectBox_info}>
        <a
          className={classes.projectBox_name}
          href={references[0].url}
          target='_blank'
          rel='noreferrer'
        >
          {name}
        </a>
        <p className={classes.projectBox_tags}>
          {tags.map((tag) => (
            <span key={`${projectId}_${tag}`}>
              {'#'}
              {tag}
            </span>
          ))}
        </p>
      </div>

      <ul className={classes.projectBox_references}>
        {references.map((ref, i) => (
          <ReferenceItem
            key={`${projectId}_${i}`}
            {...ref}
            projectId={projectId}
          />
        ))}
      </ul>
    </div>
  );
};
