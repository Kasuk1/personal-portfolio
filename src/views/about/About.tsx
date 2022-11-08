import { AboutHeader, AboutContent } from '../../components/about';
import classes from './styles/index.module.scss';

export const About = () => {
  return (
    <div className='container'>
      <div className={classes.aboutContainer}>
        <AboutHeader />
        <AboutContent />
      </div>
    </div>
  );
};
