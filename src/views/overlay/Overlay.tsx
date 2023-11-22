import {
  ContactSection,
  HeroSection,
  Navbar,
  ProjectSection,
  SkillSection,
} from 'components';
import { MutableRefObject } from 'react';
import classes from './Overlay.module.scss';

interface OverlayProps {
  scroll: MutableRefObject<number>;
}

export const Overlay = ({ scroll }: OverlayProps) => {
  return (
    <div
      className={classes.overlayContainer}
      onScroll={(e) => {
        const target = e.target as HTMLElement;
        const scroll01 =
          target.scrollTop / (target.scrollHeight - window.innerHeight);
        scroll.current = scroll01;
      }}
    >
      <Navbar />
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};
