import { SVGComponentProps } from './ui';

export type SkillTechType = {
  skillLevel: 'basic' | 'intermediate' | 'advanced';
  skillName: string;
  logo: (props: SVGComponentProps) => JSX.Element;
};

export type IExperienceType = {
  date: string;
  companyName: string;
  role: string;
  pageUrl: string;
  description: string[];
};
