import { createContext } from 'react';

type Props = {
  isMenuOverlayOpened: boolean;
  openMenuOverlay: () => void;
  closeMenuOverlay: () => void;
};

export const UIContext = createContext<Props>({
  isMenuOverlayOpened: false,
  openMenuOverlay: () => {},
  closeMenuOverlay: () => {},
});
