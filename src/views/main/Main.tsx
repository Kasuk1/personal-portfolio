import {
  ExperienceSection,
  HeroSection,
  ProjectSection,
  SkillSection,
  MainScene,
  SectionOverlay,
} from 'components';

export const Main = () => {
  return (
    <SectionOverlay
      ceo={{
        title: 'Portfolio Igor Chinchay - Software Engineer',
        description: `Presentation view where we show Igor Chinchay's skills, experience and projects.`,
      }}
    >
      <HeroSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <MainScene />
    </SectionOverlay>
  );
};
