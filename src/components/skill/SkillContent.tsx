import { useState, SetStateAction } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Skill1, Skill2, Skill3 } from '../../assets/images/skills';
import { findAndUpdateDividerSkillSelector } from '../../utils';
import {
  LoadableSkillContentDesign,
  LoadableSkillContentFrontend,
  LoadableSkillContentBackend,
} from './LoadableSkillsContent';
import './skill-content.scss';

const skillDividers: SetStateAction<{
  [key: string]: 'design' | 'frontend' | 'backend' | null;
}> = {
  design: 'design',
  frontend: 'frontend',
  backend: 'backend',
};

export const SkillContent = () => {
  const [activeSkill, setActiveSkill] = useState<
    'design' | 'frontend' | 'backend' | null
  >();

  const findAndActiveSkillDivider = () => {
    const divider = document.querySelector('.skill-divider.opened');
    setActiveSkill(skillDividers[divider?.id!]);
  };

  const activeDivider = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    findAndUpdateDividerSkillSelector(event);
    findAndActiveSkillDivider();
  };

  return (
    <main className='skill-container'>
      <section id='design' className='skill-divider' onClick={activeDivider}>
        <LazyLoadImage
          className='skill-divider-img1'
          alt=''
          src={Skill1}
          effect='blur'
        />
        <h1 className='skill-title'>Web Design</h1>
        {activeSkill === 'design' && <LoadableSkillContentDesign />}
      </section>

      <section id='frontend' className='skill-divider' onClick={activeDivider}>
        <LazyLoadImage
          className='skill-divider-img2'
          alt=''
          src={Skill2}
          effect='blur'
        />
        <h1 className='skill-title'>Front-end</h1>
        {activeSkill === 'frontend' && <LoadableSkillContentFrontend />}
      </section>

      <section id='backend' className='skill-divider' onClick={activeDivider}>
        <LazyLoadImage
          className='skill-divider-img3'
          alt=''
          src={Skill3}
          effect='blur'
        />
        <h1 className='skill-title'>Back-end</h1>
        {activeSkill === 'backend' && <LoadableSkillContentBackend />}
      </section>
    </main>
  );
};
