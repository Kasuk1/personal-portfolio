import { ReactNode, useContext } from 'react';
import { RoutesContext } from 'routes/context';

type Props = {
  children: ReactNode;
};

export const Fallback = ({ children }: Props) => {
  const { shouldFallback } = useContext(RoutesContext);

  if (shouldFallback) return children;

  return null;
};
