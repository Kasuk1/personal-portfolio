import { Dispatch, MouseEvent, SetStateAction, createContext } from 'react';

type Props = {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
  to: (path: string) => void;
};

export const RouterContext = createContext<Props>({
  path: '',
  setPath: () => {},
  to: () => {},
});
