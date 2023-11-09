import {
  SkillSection,
  HeroSection,
  ProjectSection,
  ContactSection,
} from 'components';
import { MotionConfig } from 'framer-motion';

export const Main = () => {
  return (
    <div className='container'>
      <MotionConfig
        transition={{
          type: 'spring',
          mass: 5,
          stiffness: 300,
          damping: 80,
          restDelta: 0.0001,
        }}
      >
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </MotionConfig>
    </div>
  );
};
