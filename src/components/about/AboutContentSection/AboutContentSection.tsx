import { FC } from 'react';
import { AboutDataSectionType } from '../../../types/about';
import { AboutContentField } from '../AboutContentField/AboutContentField';
import classes from './styles/index.module.scss';

export const AboutContentSection: FC<AboutDataSectionType> = ({
  titleName,
  description,
  fields,
}) => {
  return (
    <section className={classes.aboutContentSection}>
      <h2 className={classes.aboutContentSection_titleName}>{titleName}</h2>
      {description && (
        <p className={classes.aboutContentSection_description}>{description}</p>
      )}
      <div className={classes.aboutContentSection_fields}>
        {fields.map((field) => (
          <AboutContentField {...field} />
        ))}
      </div>
    </section>
  );
};
