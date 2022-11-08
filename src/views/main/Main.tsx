import classes from './styles/index.module.scss';

export const Main = () => {
  return (
    <div className='container animate__animated animate__fadeInUp'>
      <div className={classes.main}>
        <p className={classes.main_title}>
          Hello mate! I’m <span>Igor</span>, a Software Engineer, that loves the{' '}
          <span>Front-end</span> world.
        </p>
        <p className={classes.main_description}>
          Welcome to my world. You can see more information about me and my
          experience through my profesional career. I hope you find it
          interesting.
        </p>
      </div>
    </div>
  );
};
