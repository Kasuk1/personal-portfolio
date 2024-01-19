import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import classes from './navbar.module.scss';

type Props = {
  isMenuOverlayOpened: boolean;
};

export const useNavbarGSAPAnimation = ({ isMenuOverlayOpened }: Props) => {
  const { contextSafe } = useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#navbar`,
            start: 'top top',
            end: 'center top',
            scrub: 1,
            id: 'navbar',
            markers: false,
          },
        })
        .to(`.${classes.navbar}`, {
          paddingTop: '1rem',
          paddingBottom: '1rem',
        })
        .to(`.${classes.navbar_list}`, { flexDirection: 'row', gap: '3rem' });

      gsap
        .timeline()
        .to('#menuOverlay', {
          top: isMenuOverlayOpened ? 0 : '-100vh',
          display: isMenuOverlayOpened ? 'flex' : 'none',
          duration: 0.35,
        })
        .to(`.${classes.navbar_list} li a`, {
          color: isMenuOverlayOpened ? '#ffffff' : '#b8b8b8',
          duration: 0.1,
        })
        .to(`.${classes.wrapper}`, {
          background: isMenuOverlayOpened
            ? 'linear-gradient(90deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%)'
            : 'transparent',
          zIndex: isMenuOverlayOpened ? 100 : 10,
          bottom: isMenuOverlayOpened ? 0 : '100%',
          duration: 0.35,
        });
    },
    { dependencies: [isMenuOverlayOpened] }
  );

  return { contextSafe };
};
