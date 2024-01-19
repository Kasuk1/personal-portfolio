import { ReactNode, useEffect, useMemo, useState } from 'react';
import { RouterContext } from './RouterContext';

type Props = {
  children: ReactNode;
};

export const RouterProvider = ({ children }: Props) => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const updateInternalPath = (e: PopStateEvent) => {
      const windowObject = e.target as Window;
      const pathname = windowObject.location.pathname;

      setPath(pathname);
    };

    window.addEventListener('popstate', updateInternalPath);

    return () => window.removeEventListener('popstate', updateInternalPath);
  }, []);

  const to = (path: string) => {
    window.history.pushState(null, path, path);
    setPath(path);
  };

  const value = useMemo(
    () => ({
      path,
      setPath,
      to,
    }),
    [path, setPath, to]
  );

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};
