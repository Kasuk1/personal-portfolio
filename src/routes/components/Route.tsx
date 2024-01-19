import { ReactNode, useContext, useEffect } from 'react';
import { RouterContext, RoutesContext } from 'routes';

type Props = {
  path: string;
  children: ReactNode;
};

export const Route = ({ path, children }: Props) => {
  const { path: currentPath } = useContext(RouterContext);
  const { setRoutes } = useContext(RoutesContext);

  useEffect(() => {
    setRoutes((routes) => [...routes, path]);
  }, [path, setRoutes]);

  if (path === currentPath) {
    return children;
  }

  return null;
};
