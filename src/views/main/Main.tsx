import classes from './styles/index.module.scss';

export const Main = () => {
  return (
    <div className='container'>
      <div className={classes.main}>
        <p
          className={`${classes.main_title} animate__animated animate__fadeInLeft`}
        >
          Hello mate! I’m <span>Igor</span>, a Software Engineer, that loves the{' '}
          <span>Front-end</span> world.
        </p>
        <p
          className={`${classes.main_description} animate__animated animate__fadeInDown`}
        >
          Welcome to my portfolio. You can see more information about me and my
          experience through my profesional career in here. I hope you find it
          interesting.
        </p>
      </div>
    </div>
  );
};
