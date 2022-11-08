import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ProjectImageType } from '../../../types/project';
import './project-image.scss';

type ProjectImageProps = {
  images?: ProjectImageType[];
};

export const ProjectImage: FC<ProjectImageProps> = ({ images }) => {
  if (!images) return <p>No images available</p>;

  return (
    <section className='border-project-image'>
      <div className='project-image'>
        {images.map(({ src, alt }) => (
          <LazyLoadImage key={src} alt={alt} src={src} effect='blur' />
        ))}
      </div>
    </section>
  );
};
