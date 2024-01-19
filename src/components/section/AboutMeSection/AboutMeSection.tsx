import { Header1, PointerText } from 'components';
import classes from './aboutMeSection.module.scss';
import { ArrowUpRightFromLogo } from 'components/svg';

export const AboutMeSection = () => {
  return (
    <section className={classes.aboutMeSection}>
      <Header1>About me</Header1>
      <p>
        I'm a graduate Systems Engineer since 2018. I started my self-learning
        process as a Software Engineer in 2020. After a lot of work, dedication
        and cups of coffe, I decided to be closer to the Front-Engineer path.
        Self-learning with{' '}
        <PointerText
          bold
          hiddenText={
            <>
              <ArrowUpRightFromLogo fill='black' width={10} height={10} />{' '}
              Mozilla Master
            </>
          }
        >
          <a href='https://developer.mozilla.org/en-US/' target='_blank'>
            documentation
          </a>
        </PointerText>{' '}
        ,{' '}
        <PointerText
          bold
          hiddenText={
            <>
              <ArrowUpRightFromLogo fill='black' width={10} height={10} />{' '}
              dev.to
            </>
          }
        >
          <a href='https://dev.to/' target='_blank'>
            articles
          </a>
        </PointerText>{' '}
        ,{' '}
        <PointerText
          bold
          hiddenText={
            <>
              <ArrowUpRightFromLogo fill='black' width={10} height={10} />{' '}
              codecademy
            </>
          }
        >
          <a href='https://www.codecademy.com/' target='_blank'>
            tutorials
          </a>
        </PointerText>{' '}
        and more have been valuable to shape my career as Software Engineer. And
        I also discovered my passion for visual details.
        <br />
        <br /> I'm currently focused on mastering different technologies related
        to the client-side of a web application. And I have the pleasure to
        learn step by step about 3D on the web.
      </p>
    </section>
  );
};
