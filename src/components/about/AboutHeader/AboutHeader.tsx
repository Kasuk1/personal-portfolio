import { AboutHeaderImage } from '../AboutHeaderImage/AboutHeaderImage';
import { AboutHeaderIntro } from '../AboutHeaderIntro/AboutHeaderIntro';
import classes from './styles/index.module.scss';

export const AboutHeader = () => {
  return (
    <div className={classes.aboutHeader}>
      <AboutHeaderIntro />
      <AboutHeaderImage />
    </div>
  );
};
