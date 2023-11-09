import { ISkillData } from 'data/skillData';
import classes from './skillDescBox.module.scss';

export const SkillDescBox = ({
  skillLevel,
  skillName,
  companyName,
  date,
  role,
}: ISkillData) => {
  return (
    <>
      {skillLevel && skillName && (
        <div className={classes.skillChunk_tech}>
          {skillLevel && (
            <div
              className={classes.skillChunk_tech_level}
              style={{
                backgroundColor:
                  skillLevel === 'basic'
                    ? '#EEC4ED'
                    : skillLevel === 'intermediate'
                    ? '#CE45C9'
                    : '#FF006A',
              }}
            />
          )}
          {skillName && (
            <p className={classes.skillChunk_tech_name}>{skillName}</p>
          )}
        </div>
      )}

      {date && companyName && role && (
        <div className={classes.skillChunk_experience}>
          <p className={classes.skillChunk_experience_date}>{date}</p>

          <p className={classes.skillChunk_experience_companyName}>
            {companyName}
          </p>
          <p className={classes.skillChunk_experience_role}>{role}</p>
        </div>
      )}
    </>
  );
};
