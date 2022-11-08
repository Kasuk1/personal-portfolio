import { aboutData } from '../../../data/aboutData';
import classes from './styles/index.module.scss';

export const AboutHeaderIntro = () => {
  const { ownerName, career, introduction } = aboutData;

  return (
    <div className={classes.aboutHeaderIntro}>
      <h1>{ownerName}</h1>
      <h3>{career}</h3>
      <p>{introduction}</p>
    </div>
  );
};
