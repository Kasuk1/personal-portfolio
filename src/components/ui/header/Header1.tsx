import { HTMLAttributes, ReactNode } from 'react';
import classes from './header1.module.scss';

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export const Header1 = ({ children, ...props }: Props) => {
  return (
    <h1 className={classes.header1} {...props}>
      {children}
    </h1>
  );
};
