import { HTMLAttributes, ReactNode } from 'react';
import { CEO, Props as CEOProps } from '../ceo/CEO';
import classes from './sectionOverlay.module.scss';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  extraClassName?: CSSModuleClasses[string];
  ceo?: CEOProps;
};

export const SectionOverlay = ({
  children,
  extraClassName,
  ceo,
  ...props
}: Props) => {
  return (
    <section
      className={`${classes.sectionOverlay} ${extraClassName}`}
      {...props}
    >
      {ceo ? <CEO {...ceo} /> : null}
      {children}
    </section>
  );
};
