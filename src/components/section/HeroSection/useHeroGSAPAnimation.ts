import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classes from './heroSection.module.scss';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  containerRef?: React.RefObject<HTMLDivElement>;
};

export const useHeroGSAPAnimation = ({ containerRef }: Props) => {
  useGSAP(
    () => {
      gsap.to(`.${classes.main_hero_header}`, {
        scrollTrigger: {
          trigger: `.${classes.main_hero_header}`,
          pin: true,
          start: '20 top',
          end: '200 top',
          scrub: 1,
          markers: false,
          id: 'hero_header',
        },
        opacity: 0,
      });
    },
    { scope: containerRef }
  );

  return;
};
