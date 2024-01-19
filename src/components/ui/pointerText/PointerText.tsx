import { ReactNode, useState } from 'react';
import { useMousePosition } from 'hooks';
import classes from './pointerText.module.scss';

type Props = {
  children: ReactNode;
  hiddenText: ReactNode;
  underlined?: boolean;
  bold?: boolean;
  uppercase?: boolean;
};

export const PointerText = ({
  children,
  hiddenText,
  underlined = true,
  bold = false,
  uppercase = false,
}: Props) => {
  const [showText, setShowText] = useState<boolean>(false);
  const mousePosition = useMousePosition();

  return (
    <>
      <span
        onMouseOver={() => setShowText(true)}
        onMouseOut={() => setShowText(false)}
        style={{
          cursor: 'pointer',
          textDecoration: underlined ? 'underline' : 'none',
          textTransform: uppercase ? 'uppercase' : 'none',
          fontWeight: bold ? '500' : '300',
        }}
      >
        {children}
      </span>
      {showText ? (
        <span
          className={classes.pointerText}
          style={{
            top: String(mousePosition.y! + 15 + 'px'),
            left: String(mousePosition.x! + 12 + 'px'),
          }}
        >
          {hiddenText}
        </span>
      ) : null}
    </>
  );
};
