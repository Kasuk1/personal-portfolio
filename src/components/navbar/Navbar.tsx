import './navbar-style.scss';
import { FC } from 'react';

type NavbarProps = {
  links: JSX.Element;
};

export const Navbar: FC<NavbarProps> = ({ links }) => {
  return (
    <nav className='navbar'>
      <span className='logo'>
        <span className='letter-i'>i</span>
        <span className='letter-c'>c</span>
        <span className='letter-f'>f</span>
      </span>
      <ul className='nav-list'>{links}</ul>
    </nav>
  );
};
