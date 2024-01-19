import { ReactNode, useState } from 'react';
import { UIContext } from './UIContext';

type Props = {
  children: ReactNode;
};

export const UIProvider = ({ children }: Props) => {
  const [isMenuOverlayOpened, setIsMenuOverlayOpened] =
    useState<boolean>(false);

  const openMenuOverlay = () => setIsMenuOverlayOpened(true);
  const closeMenuOverlay = () => setIsMenuOverlayOpened(false);

  return (
    <UIContext.Provider
      value={{
        isMenuOverlayOpened: isMenuOverlayOpened,
        openMenuOverlay,
        closeMenuOverlay,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
