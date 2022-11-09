import { MAIN_ROUTE_NAME } from '../conts';
import { NavbarDataType } from '../types/uiComponents';

export const navbarData: NavbarDataType = [
  {
    name: 'Hello!',
    to: `${MAIN_ROUTE_NAME}/`,
    exact: true,
  },
  {
    name: 'Projects',
    to: `${MAIN_ROUTE_NAME}/project`,
    exact: false,
  },
  {
    name: 'Skills',
    to: `${MAIN_ROUTE_NAME}/skill`,
    exact: false,
  },
  {
    name: 'About',
    to: `${MAIN_ROUTE_NAME}/aboutme`,
    exact: false,
  },
  {
    name: 'Contact',
    to: `${MAIN_ROUTE_NAME}/contact`,
    exact: false,
  },
];
