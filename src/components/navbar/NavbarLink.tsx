import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItemType } from '../../types/uiComponents';

export const NavbarLink: FC<NavbarItemType> = ({ name, to, exact }) => {
  return (
    <li>
      <NavLink to={to} activeClassName='active' exact={exact}>
        {name}
      </NavLink>
    </li>
  );
};
