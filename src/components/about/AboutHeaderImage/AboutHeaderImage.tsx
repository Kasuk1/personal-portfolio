import { LazyLoadImage } from 'react-lazy-load-image-component';
import ProfilePhoto from '../../../assets/images/profile.jpg';
import './about-image.scss';

export const AboutHeaderImage = () => {
  return (
    <div className='image-profile-container-outside'>
      <div className='image-profile-container-inside'>
        <LazyLoadImage src={ProfilePhoto} alt='' effect='blur' />
      </div>
    </div>
  );
};
