import { useEffect, useState } from 'react';

export type MousePosition = { x?: number; y?: number };

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};
