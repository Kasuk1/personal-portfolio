import { ReactNode } from 'react';
import classes from './viewOverlay.module.scss';

type Props = {
  children: ReactNode;
};

export const ViewOverlay = ({ children }: Props) => {
  return <div className={classes.overlay}>{children}</div>;
};
