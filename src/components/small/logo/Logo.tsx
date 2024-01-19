import { MouseEvent, useContext } from 'react';
import gsap from 'gsap';
import { UIContext } from 'context';
import { Link, RouterContext } from 'routes';
import { MAIN_ROUTE } from 'const';
import classes from './logo.module.scss';

type Props = {
  contextSafe: (func: Function) => Function;
};

export const Logo = ({ contextSafe }: Props) => {
  const { closeMenuOverlay } = useContext(UIContext);
  const { to } = useContext(RouterContext);

  const onLogoMouseOver = contextSafe(() => {
    gsap
      .timeline()
      .to(`.${classes.logo_span}`, { opacity: 1, display: 'inline-block' })
      .to(`.${classes.logo}`, { gap: '0.5rem' });
  });
  const onLogoMouseOut = contextSafe(() => {
    gsap
      .timeline()
      .to(`.${classes.logo}`, { gap: 0 })
      .to(`.${classes.logo_span}`, { opacity: 0, display: 'none' });
  });

  const handleLogoClick = (path: string, e: MouseEvent) => {
    e.preventDefault();
    to(path);
    closeMenuOverlay();
  };

  return (
    <Link
      to={`${MAIN_ROUTE}/`}
      onClick={(e) => handleLogoClick(`${MAIN_ROUTE}/`, e)}
      className={classes.logo}
      onMouseEnter={() => onLogoMouseOver()}
      onMouseLeave={() => onLogoMouseOut()}
    >
      igor
      <span className={classes.logo_span}>engineer</span>
    </Link>
  );
};
