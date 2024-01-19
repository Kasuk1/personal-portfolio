import { ClassAttributes, HTMLAttributes, ReactNode } from 'react';
import classes from './sectionOverlay.module.scss';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  extraClassName?: CSSModuleClasses[string];
};

export const SectionOverlay = ({
  children,
  extraClassName,
  ...props
}: Props) => {
  return (
    <section
      className={`${classes.sectionOverlay} ${extraClassName}`}
      {...props}
    >
      {children}
    </section>
  );
};
