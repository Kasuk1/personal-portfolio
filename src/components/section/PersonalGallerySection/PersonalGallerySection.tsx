import personal1 from '/assets/images/personal1.webp';
import personal2 from '/assets/images/personal2.webp';
import personal3 from '/assets/images/personal3.webp';
import personal4 from '/assets/images/personal4.webp';

import classes from './personalGallerySection.module.scss';

export const PersonalGallerySection = () => {
  return (
    <div className={classes.personalGallerySection}>
      <img src={personal2} alt='personal2' />
      <img src={personal1} alt='personal1' />
      <img src={personal3} alt='personal3' />
      <img src={personal4} alt='personal4' />
    </div>
  );
};
