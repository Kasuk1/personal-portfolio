import { ReactNode, useContext, useMemo, useState } from 'react';
import { RouterContext } from '../router/RouterContext';
import { RoutesContext } from './RoutesContext';

type Props = {
  children: ReactNode;
};

export const RoutesProvider = ({ children }: Props) => {
  const { path } = useContext(RouterContext);
  const [routes, setRoutes] = useState<Array<string>>([]);

  const shouldFallback = useMemo(() => {
    return !routes.some((route) => route === path);
  }, [routes, path]);

  const value = useMemo(
    () => ({
      routes,
      setRoutes,
      shouldFallback,
    }),
    [routes, setRoutes, shouldFallback]
  );

  return (
    <RoutesContext.Provider value={value}>{children}</RoutesContext.Provider>
  );
};
