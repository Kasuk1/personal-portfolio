import { ContacMeSection, SectionOverlay, TopicSection } from 'components';

export const Contact = () => {
  return (
    <SectionOverlay
      extraClassName='view_flex'
      ceo={{
        title: 'Portfolio Igor Chinchay - Software Engineer | Contact Me',
        description:
          'Contact opportunities to get in touch with Igor Chinchay. Take a look at them!.',
      }}
    >
      <ContacMeSection />
      <TopicSection />
    </SectionOverlay>
  );
};
