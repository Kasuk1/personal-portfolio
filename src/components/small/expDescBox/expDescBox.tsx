import { useId, useState } from 'react';
import { CaretArrowUpDown } from 'components';
import { ArrowUpRightFromLogo } from 'components/svg';
import { IExperienceType } from 'types/skill';
import classes from './expDescBox.module.scss';

export const ExpDescBox = ({
  companyName,
  date,
  role,
  pageUrl,
  description,
}: IExperienceType) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <div className={classes.expDescBox}>
      <span className={classes.expDescBox_date}>{date}</span>
      <a href={pageUrl} target='_blank' className={classes.expDescBox_company}>
        {companyName} <ArrowUpRightFromLogo fill='white' />
      </a>
      <p className={classes.expDescBox_role}>{role}</p>
      <ExperienceDescriptionList
        description={description}
        showDescription={showDescription}
      />
      <CaretArrowUpDown
        showDescription={showDescription}
        setShowDescription={setShowDescription}
      />
    </div>
  );
};

const ExperienceDescriptionList = ({
  description,
  showDescription,
}: {
  description: string[];
  showDescription: boolean;
}) => {
  const id = useId();

  if (!showDescription) return null;

  return (
    <ul className={classes.expDescBox_descriptionList}>
      <hr />
      {description.map((item, key) => {
        return <li key={`${id}_${key}`}>{item}</li>;
      })}
    </ul>
  );
};
