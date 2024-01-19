import { useContext } from 'react';
import gsap from 'gsap';
import { UIContext } from 'context';
import classes from './squareButton.module.scss';

type Props = {
  contextSafe: (func: Function) => Function;
};

export const SquareButton = ({ contextSafe }: Props) => {
  const { isMenuOverlayOpened, openMenuOverlay, closeMenuOverlay } =
    useContext(UIContext);

  const onSquareMouseOver = contextSafe(() => {
    gsap.to(`.${classes.squareButton}`, { borderWidth: 11.5, duration: 0.1 });
  });
  const onSquareMouseOut = contextSafe(() => {
    gsap.to(`.${classes.squareButton}`, { borderWidth: 2, duration: 0.3 });
  });

  return (
    <span
      className={classes.squareButton}
      onMouseOverCapture={() => onSquareMouseOver()}
      onMouseOutCapture={() => onSquareMouseOut()}
      onClick={() =>
        isMenuOverlayOpened ? closeMenuOverlay() : openMenuOverlay()
      }
    ></span>
  );
};
