import { useEffect, useState } from 'react';

export type MousePosition = { x?: number; y?: number };

type Props = {
  activate: boolean;
};

export const useMousePosition = ({ activate }: Props) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({});

  useEffect(() => {
    if (!activate) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [activate]);

  return mousePosition;
};
