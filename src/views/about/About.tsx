import {
  AboutMeSection,
  CVSection,
  InterestSection,
  PersonalGallerySection,
  SectionOverlay,
} from 'components';

export const About = () => {
  return (
    <SectionOverlay
      extraClassName='view_flex'
      ceo={{
        title: 'Portfolio Igor Chinchay - Software Engineer | About Me',
        description:
          'A brief introduction about Igor Chinchay. A Software Engineer that loves Frontend.',
      }}
    >
      <AboutMeSection />
      <PersonalGallerySection />
      <InterestSection />
      <CVSection />
    </SectionOverlay>
  );
};
