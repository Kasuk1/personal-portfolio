import classes from './styles/index.module.scss';
import { aboutData } from '../../../data/aboutData';
import { AboutContentSection } from '../AboutContentSection/AboutContentSection';

export const AboutContent = () => {
  const { experience, education, technologies, languages } = aboutData;

  return (
    <section className={classes.aboutContent}>
      <div className={classes.aboutContent_left}>
        <AboutContentSection {...experience} />
      </div>
      <div className={classes.aboutContent_right}>
        <AboutContentSection {...education} />
        <AboutContentSection {...technologies} />
        <AboutContentSection {...languages} />
      </div>
    </section>
  );
};
