import { Dispatch, SetStateAction, createContext } from 'react';

type Props = {
  routes: Array<string>;
  setRoutes: Dispatch<SetStateAction<Array<string>>>;
  shouldFallback: boolean;
};

export const RoutesContext = createContext<Props>({
  routes: [],
  setRoutes: () => {},
  shouldFallback: false,
});
