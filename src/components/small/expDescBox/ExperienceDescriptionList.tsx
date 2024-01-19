import { useId } from 'react';
import classes from './experienceDescriptionList.module.scss';

type Props = {
  description: string[];
  showDescription: boolean;
};

export const ExperienceDescriptionList = ({
  description,
  showDescription,
}: Props) => {
  const id = useId();

  if (!showDescription) return null;

  return (
    <ul className={classes.experienceDescriptionBoxList}>
      <hr />
      {description.map((item, key) => {
        return <li key={`${id}_${key}`}>{item}</li>;
      })}
    </ul>
  );
};
