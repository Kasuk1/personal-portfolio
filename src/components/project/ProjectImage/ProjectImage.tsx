import { FC } from 'react';
import { ProjectImageType } from '../../../types/project';
import './project-image.scss';

type ProjectImageProps = {
  images?: ProjectImageType[];
};

export const ProjectImage: FC<ProjectImageProps> = ({ images }) => {
  if (!images) return <p>No images available</p>;

  return (
    <section className='border-project-image animate__animated animate__fadeInRight'>
      <div className='project-image'>
        {images.map(({ id, src, alt }) => (
          <img key={src} src={src} alt={alt} />
        ))}
      </div>
    </section>
  );
};
