import { useState } from 'react';
import { CaretArrowUpDown, PointerText } from 'components';
import { ArrowUpRightFromLogo } from 'components/svg';
import { IExperienceType } from 'types/skill';
import { ExperienceDescriptionList } from './ExperienceDescriptionList';
import classes from './experienceDescriptionBox.module.scss';

export const ExperienceDescriptionBox = ({
  companyName,
  date,
  role,
  pageUrl,
  description,
}: IExperienceType) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <div
      className={`${classes.expDescBox} ${
        showDescription ? classes.opened : classes.closed
      }`}
    >
      <span className='small_title'>{date}</span>

      <PointerText
        hiddenText={
          <>
            Website <ArrowUpRightFromLogo fill='black' width={10} height={10} />
          </>
        }
      >
        <a
          href={pageUrl}
          target='_blank'
          className={classes.expDescBox_company}
        >
          {companyName}
        </a>
      </PointerText>

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
