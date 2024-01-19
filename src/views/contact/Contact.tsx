import { ContacMeSection, SectionOverlay, TopicSection } from 'components';

export const Contact = () => {
  return (
    <SectionOverlay extraClassName='view_flex'>
      <ContacMeSection />
      <TopicSection />
    </SectionOverlay>
  );
};
