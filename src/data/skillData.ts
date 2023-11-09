export type ISkillData = {
  date?: string;
  skillLevel?: 'basic' | 'intermediate' | 'advanced';
  skillName?: string;
  companyName?: string;
  role?: string;
};

export const skillTechData: ISkillData[] = [
  { skillLevel: 'advanced', skillName: 'Javascript/Typescript' },
  { skillLevel: 'advanced', skillName: 'HTML/CSS' },
  { skillLevel: 'advanced', skillName: 'React/Redux' },
  { skillLevel: 'intermediate', skillName: 'CSS Preprocessors' },
  { skillLevel: 'intermediate', skillName: 'Node/Express' },
  { skillLevel: 'intermediate', skillName: 'MongoDB' },
  { skillLevel: 'intermediate', skillName: 'Figma' },
  { skillLevel: 'basic', skillName: 'Docker' },
  { skillLevel: 'basic', skillName: 'AWS' },
];

export const skillExpData: ISkillData[] = [
  {
    date: 'Mar 2022 - Mar 2023',
    companyName: 'Sharpminds',
    role: 'React Developer',
  },
  {
    date: 'Dec 2021 - Mar 2022',
    companyName: 'Pragma',
    role: 'Software Engineer',
  },
  {
    date: 'Sep 2021 - Nov 2021',
    companyName: 'NTT Data',
    role: 'Centers Junior (CJ)',
  },
  {
    date: 'Apr 2021 - May 2021',
    companyName: 'IQ Comunicación Integral',
    role: 'Front-End Web Developer',
  },
];
