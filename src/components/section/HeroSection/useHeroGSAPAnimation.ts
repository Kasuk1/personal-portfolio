import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classes from './heroSection.module.scss';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  containerRef?: React.RefObject<HTMLDivElement>;
};

export const useHeroGSAPAnimation = ({ containerRef }: Props) => {
  useGSAP(
    () => {
      gsap.to(`.${classes.main_hero_arrowLogo}`, {
        ease: 'none',
        yoyo: true,
        duration: 0.7,
        y: 20,
        repeat: -1,
      });

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

      gsap.to(`.${classes.main_hero_description}`, {
        scrollTrigger: {
          trigger: `.${classes.main_hero_header}`,
          pin: true,
          start: 'bottom center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
          id: 'hero_desc',
        },
        opacity: 1,
      });
    },
    { scope: containerRef ? containerRef : '#hero_section' }
  );

  return;
};
