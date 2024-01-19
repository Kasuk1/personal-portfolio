import { ReactNode } from 'react';
import { RouterProvider, RoutesProvider } from '../context';

type Props = {
  children: ReactNode;
};

export const Router = ({ children }: Props) => {
  return (
    <RouterProvider>
      <RoutesProvider>{children}</RoutesProvider>
    </RouterProvider>
  );
};
