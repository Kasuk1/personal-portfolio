import { useEffect, useState } from 'react';
import { isMobileOrTablet } from 'utils';

type Props = {
  containerRef: React.RefObject<HTMLDivElement>;
};

/**
 * @deprecated since version 3.0 - Using GSAP
 * Observer its a core of GSAP animations(like scroller).
 * Not need to import this hook anymore as it's just a basic/primitive approach
 */
export const useObserver = ({ containerRef }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const cb: IntersectionObserverCallback = ([entry]) => {
    setIsVisible(entry.isIntersecting);
  };

  const options: IntersectionObserverInit = {
    rootMargin: isMobileOrTablet() ? '0px' : '-300px',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);
    observer.observe(containerRef.current!);

    return () => observer.disconnect();
  }, []);

  return {
    isVisible,
  };
};
