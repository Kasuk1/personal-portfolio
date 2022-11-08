/* eslint-disable */
import {
  Project1_1,
  Project1_2,
  Project1_3,
  Project1_4,
  Project2_1,
  Project2_2,
  Project2_3,
} from '../assets/images/projects';
import { ProjectDataType } from '../types/project';

export const projectsData: ProjectDataType[] = [
  {
    id: 1,
    name: 'Vive en Libertad',
    description:
      'Vive en Libertad is a blog that shows articles in 4 differentes categories: urban, culture, gastronomy and adventure. The objective was to express every aspect of the article through the images, specifically in the layout.',
    technologies: {
      ['Design']: ['Figma', 'Photoshop'],
      ['Frontend']: ['HTML5', 'CSS3', 'Sass', 'React'],
      ['Backend']: ['Php', 'MySQL'],
    },
    references: [
      {
        id: 1,
        name: 'Official Web',
        url: 'https://viveenlibertad.pe/',
      },
      {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com/Kasuk1/ViveEnLibertad',
      },
    ],
    images: [
      {
        id: 1,
        src: Project1_1,
        alt: 'Index Main Blog',
      },
      {
        id: 2,
        src: Project1_2,
        alt: 'Article Solo',
      },
      {
        id: 3,
        src: Project1_3,
        alt: 'Share Feature',
      },
      {
        id: 4,
        src: Project1_4,
        alt: 'Category Blog',
      },
    ],
  },
  {
    id: 2,
    name: 'My Little Friend',
    description:
      'My Little Friend is a web application created to help veterinaries and pet owners to find themselves faster if they get lost. It uses the skills gained in a bootcamp using the Scrum Methodology.',
    technologies: {
      ['Design']: ['Figma', 'Photoshop'],
      ['Frontend']: [
        'HTML5',
        'CSS3',
        'Sass',
        'React',
        'RTK',
        'React-Router-V6',
        'Ant-Design',
        '',
      ],
      ['Backend']: [
        'Node',
        'Express',
        'Bcrypt',
        'Cors',
        'dotenv',
        'Express-Validator',
        'Cloudinary',
        'Epayco-sdk-node',
        'Multer',
        'Passport',
        'MongoDB',
        'Mongoose',
      ],
    },
    references: [
      {
        id: 1,
        name: 'Official Web',
        url: 'https://mylittlefriend-top19.netlify.app/',
      },
      {
        id: 2,
        name: 'GitHub - Frontend',
        url: 'https://github.com/Kasuk1/MyLittleFriend',
      },
      {
        id: 3,
        name: 'GitHub - Backend',
        url: 'https://github.com/rivaldo-ortega/MyLittleFriend-backend',
      },
    ],
    images: [
      {
        id: 1,
        src: Project2_1,
        alt: 'Hero Section - My Little Friend',
      },
      {
        id: 2,
        src: Project2_2,
        alt: 'My Pets Section - My Little Friend',
      },
      {
        id: 3,
        src: Project2_3,
        alt: 'Services - My Little Friend',
      },
    ],
  },
];
