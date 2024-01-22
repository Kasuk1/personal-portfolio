import { useRef } from 'react';
import { ArrowUpRightFromLogo } from 'components/svg';
import { useHeroGSAPAnimation } from './useHeroGSAPAnimation';
import { PointerText } from 'components/ui';
import classes from './heroSection.module.scss';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useHeroGSAPAnimation({ containerRef });

  return (
    <section id='hero_section' className={classes.main_hero}>
      <div ref={containerRef}>
        <header className={classes.main_hero_header}>
          <p className={classes.main_hero_header_left}>
            Software
            <br />
            Engineer
          </p>
          <p className={classes.main_hero_header_right}>
            Igor
            <br />
            Chinchay
          </p>
        </header>

        <div className={classes.main_hero_description}>
          <p>
            I'm a passionate Software
            <br />
            Engineer, that loves Frontend
            <br />
            with over{' '}
            <PointerText
              hiddenText={
                <>
                  <ArrowUpRightFromLogo fill='black' width={10} height={10} />{' '}
                  Linkedin
                </>
              }
            >
              <a href='https://www.linkedin.com/in/igorcf' target='_blank'>
                2 years experience
              </a>
            </PointerText>
            ,
            <br /> based where destiny wants.
          </p>
        </div>
      </div>
    </section>
  );
};
