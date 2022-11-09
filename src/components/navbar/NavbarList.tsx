import { navbarData } from '../../data/navbarData';
import { NavbarLink } from './NavbarLink';

export const NavbarList = () => {
  return (
    <ul className='nav-list'>
      {navbarData.map((navbarLink) => (
        <NavbarLink key={navbarLink.name} {...navbarLink} />
      ))}
    </ul>
  );
};
