import { FC } from 'react';
import { AboutDataSectionFieldType } from '../../../types/about';
import classes from './styles/index.module.scss';

export const AboutContentField: FC<AboutDataSectionFieldType> = ({
  date,
  entityName,
  position,
  functions,
}) => {
  return (
    <div className={classes.aboutContentField}>
      {date && <span className={classes.aboutContentField_date}>{date}</span>}
      {entityName && (
        <p className={classes.aboutContentField_entity}>{entityName}</p>
      )}
      {position && (
        <p className={classes.aboutContentField_position}>{position}</p>
      )}
      {functions && (
        <ul className={classes.aboutContentField_functions}>
          {functions.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
