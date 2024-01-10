import { SkillTechType } from 'types/skill';
import classes from './skillDescBox.module.scss';

export const SkillDescBox = ({ skillName, logo: Logo }: SkillTechType) => {
  return (
    <div className={classes.skillDescBox}>
      <Logo fill='#fff' width={25} height={25} />
      <p className={classes.skillDescBox_name}>{skillName}</p>
    </div>
  );
};
