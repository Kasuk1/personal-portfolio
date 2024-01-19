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
    <SectionOverlay>
      <HeroSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <MainScene />
    </SectionOverlay>
  );
};
