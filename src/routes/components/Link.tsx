import {
  ReactNode,
  MouseEvent,
  useContext,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
} from 'react';
import { RouterContext } from 'routes';

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  to?: string;
  children: ReactNode;
};

export const Link = ({ to = '/', children, ...rest }: Props) => {
  const { setPath } = useContext(RouterContext);

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // We kept the window.history.pushState in our Link component because
    // we also need to reflect the path change in our browser,
    // and this API is made for that purpose.
    window.history.pushState(null, to, to);

    setPath(to);
  };

  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  );
};
