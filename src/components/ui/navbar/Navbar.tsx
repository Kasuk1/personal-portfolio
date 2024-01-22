import { useContext } from 'react';
import { SquareArrowUpRight } from 'components/svg';
import { MenuOverlay } from '../menuOverlay/MenuOverlay';
import { Logo, SquareButton, StatusCirle } from 'components';
import { useNavbarGSAPAnimation } from './useNavbarGSAPAnimation';
import classes from './navbar.module.scss';
import { UIContext } from 'context';

export const Navbar = () => {
  const { isMenuOverlayOpened } = useContext(UIContext);
  const { contextSafe } = useNavbarGSAPAnimation({
    isMenuOverlayOpened,
  });

  return (
    <div className={classes.wrapper}>
      <nav id='navbar' className={classes.navbar}>
        <Logo />
        <ul className={classes.navbar_list}>
          <li>
            <StatusCirle />
            <a href='https://www.linkedin.com/in/igorcf/' target='_blank'>
              Available for <strong>Part-time work</strong>
            </a>
          </li>
          <li>
            <SquareArrowUpRight fill='white' width={10} height={10} />
            <a href='mailto:igor2008_11@hotmail.com' target='_blank'>
              <strong>igor2008_11@hotmail.com</strong>
            </a>
          </li>
        </ul>
        <SquareButton contextSafe={contextSafe} />
        <MenuOverlay />
      </nav>
    </div>
  );
};
