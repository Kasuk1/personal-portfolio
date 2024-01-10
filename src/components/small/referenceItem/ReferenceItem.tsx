import { useEffect, useState } from 'react';
import { FigmaLogo, GithubLogo, LinkLogo } from 'components/svg';
import { ProjectReferenceType } from 'types/project';
import classes from './referenceItem.module.scss';

const logoRefProject = {
  web: LinkLogo,
  github: GithubLogo,
  figma: FigmaLogo,
};

export const ReferenceItem = ({
  logo,
  url,
  name,
}: ProjectReferenceType & { projectId: string }) => {
  const Logo = logoRefProject[logo];
  const [showRefName, setShowRefName] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{
    x?: number;
    y?: number;
  }>({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    if (showRefName) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [showRefName]);

  return (
    <li className={classes.referenceItem}>
      <a
        href={url}
        target='_blank'
        onMouseEnter={() => setShowRefName(true)}
        onMouseLeave={() => setShowRefName(false)}
      >
        <Logo fill='white' width={28} height={28} />
        {showRefName ? (
          <p
            className={classes.referenceItem_besideMouseText}
            style={{
              top: String(mousePosition.y! + 15 + 'px'),
              left: String(mousePosition.x! + 12 + 'px'),
            }}
          >
            {name}
          </p>
        ) : null}
      </a>
    </li>
  );
};
