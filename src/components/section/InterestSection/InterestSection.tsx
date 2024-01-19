import { Header1, PointerText } from 'components';
import { ArrowUpRightFromLogo } from 'components/svg';
import classes from './interestSection.module.scss';

export const InterestSection = () => {
  return (
    <div className={classes.interestSection}>
      <Header1>Short term focus</Header1>
      <div className={classes.interestSection_list}>
        <div className={classes.interestSection_list_field}>
          <p className='small_title'>[01] Frontend Core</p>
          <p className='common_text'>
            The client side of a web application is my spoiled child. I've been
            mastering the basics with Javascript and trying to see as much
            libraries and frameworks as possible. I have feelings{' '}
            <PointerText
              bold
              hiddenText={
                <>
                  <ArrowUpRightFromLogo fill='black' width={10} height={10} />
                  React God
                </>
              }
            >
              <a href='https://react.dev/' target='_blank'>
                for one
              </a>
            </PointerText>{' '}
            though.
          </p>
        </div>
        <div className={classes.interestSection_list_field}>
          <p className='small_title'>[02] Web Design</p>
          <p className='common_text'>
            As a Frontend Engineer we have the responsibility to know about all
            the Client side's lifecycle to make a web application, and this
            includes to know about Web Design and the tools mostly used
            nowadays. My top choice is{' '}
            <PointerText
              bold
              hiddenText={
                <>
                  <ArrowUpRightFromLogo fill='black' width={10} height={10} />
                  Official Website
                </>
              }
            >
              <a href='https://www.figma.com/' target='_blank'>
                Figma
              </a>
            </PointerText>{' '}
            and Adobe XD.
          </p>
        </div>
        <div className={classes.interestSection_list_field}>
          <p className='small_title'>[03] 3D on the web</p>
          <p className='common_text'>
            Modelling and integration of 3D on the web is one of my fancy dreams
            and I take it as a relaxing time in my career. I'm trying to model
            with the easiest and smoothest tools up to date.{' '}
            <PointerText
              bold
              hiddenText={
                <>
                  <ArrowUpRightFromLogo fill='black' width={10} height={10} />
                  Official Website
                </>
              }
            >
              <a href='https://www.blender.org/' target='_blank'>
                Blender
              </a>
            </PointerText>{' '}
            has been the leader in this field. But since I know about{' '}
            <PointerText
              bold
              hiddenText={
                <>
                  <ArrowUpRightFromLogo fill='black' width={10} height={10} />
                  Official Website
                </>
              }
            >
              <a href='https://spline.design/' target='_blank'>
                Spline
              </a>
            </PointerText>
            , it has been a great option for me as a developer due to its
            easy-going learning curve. Now I'm stuck with it.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
