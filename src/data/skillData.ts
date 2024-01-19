import {
  CSSLogo,
  FigmaLogo,
  HtmlLogo,
  JavascriptLogo,
  NodeLogo,
  ReactLogo,
} from 'components/svg';
import { SkillTechType } from 'types/skill';

export const skillTechData: SkillTechType[] = [
  {
    skillLevel: 'advanced',
    skillName: 'Javascript/Typescript',
    logo: JavascriptLogo,
  },
  { skillLevel: 'advanced', skillName: 'HTML', logo: HtmlLogo },
  { skillLevel: 'advanced', skillName: 'CSS', logo: CSSLogo },
  { skillLevel: 'advanced', skillName: 'React/Redux', logo: ReactLogo },
  { skillLevel: 'intermediate', skillName: 'Node/Express', logo: NodeLogo },
  { skillLevel: 'intermediate', skillName: 'Figma', logo: FigmaLogo },
];
