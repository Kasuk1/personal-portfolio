import {
  AboutMeSection,
  CVSection,
  InterestSection,
  PersonalGallerySection,
  SectionOverlay,
} from 'components';

export const About = () => {
  return (
    <SectionOverlay extraClassName='view_flex'>
      <AboutMeSection />
      <PersonalGallerySection />
      <InterestSection />
      <CVSection />
    </SectionOverlay>
  );
};
