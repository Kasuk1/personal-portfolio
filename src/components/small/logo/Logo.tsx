import { MouseEvent, useContext } from 'react';
import { UIContext } from 'context';
import { Link, RouterContext } from 'routes';
import { MAIN_ROUTE } from 'const';
import classes from './logo.module.scss';

export const Logo = () => {
  const { closeMenuOverlay } = useContext(UIContext);
  const { to } = useContext(RouterContext);

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
    >
      igor
    </Link>
  );
};
