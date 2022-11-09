import { FC } from 'react';
import { NavbarList } from './NavbarList';
import { NabarLogo } from './NabarLogo';
import './navbar-style.scss';

export const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <NabarLogo />
      <NavbarList />
    </nav>
  );
};
