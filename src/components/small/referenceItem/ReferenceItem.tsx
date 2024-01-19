import { ReactNode, useEffect, useState } from 'react';
import { FigmaLogo, GithubLogo, LinkLogo } from 'components/svg';
import { ProjectReferenceType } from 'types/project';
import { PointerText } from 'components';
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

  return (
    <PointerText hiddenText={name}>
      <li className={classes.referenceItem}>
        <a href={url} target='_blank'>
          <Logo fill='white' width={28} height={28} />
        </a>
      </li>
    </PointerText>
  );
};
