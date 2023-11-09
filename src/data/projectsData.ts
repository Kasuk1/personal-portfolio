/* eslint-disable */
import { ProjectDataType } from '../types/project';

export const projectsData: ProjectDataType[] = [
  {
    id: 1,
    name: 'NoiseApp',
    description: `Web app(Frontend) - Spotify API.`,
    technologies: {
      ['Design']: ['Figma'],
      ['Frontend']: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Sass',
        'Redux',
        'RTK',
        'React-Router-V6',
        'Spotify API',
        'Fontawesome',
      ],
    },
    references: [
      {
        id: 1,
        name: 'Official Web',
        url: 'https://noise-app.netlify.app/',
      },
      {
        id: 2,
        name: 'GitHub - Frontend',
        url: 'https://github.com/Kasuk1/personal-noiseapp',
      },
      {
        id: 3,
        name: 'Figma - Wireframe',
        url: 'https://www.figma.com/file/LUmoAiitPxxeCoy1ZmYgmO/Web---Noise?node-id=2%3A28',
      },
      {
        id: 4,
        name: 'Figma - Prototype',
        url: 'https://www.figma.com/file/LUmoAiitPxxeCoy1ZmYgmO/Web---Noise?node-id=2%3A29',
      },
    ],
    images: [
      {
        id: 1,
        src: '',
        alt: 'Noise Image 1',
      },
      {
        id: 2,
        src: '',
        alt: 'Noise Image 2',
      },
      {
        id: 3,
        src: '',
        alt: 'Noise Image 3',
      },
      {
        id: 4,
        src: '',
        alt: 'Noise Image 4',
      },
    ],
    status: 'Active',
  },
  {
    id: 2,
    name: 'My Dear Character',
    description: 'Web application(game) - Sockets - MERN.',
    technologies: {
      ['Design']: ['Figma'],
      ['Frontend']: [
        'HTML5',
        'CSS3',
        'TypeScript',
        'Sass',
        'React',
        'RTK',
        'Socket.IO Client',
        'React-Router-V6',
        'PokeAPI',
        'Styled-Components',
      ],
      ['Backend']: [
        'Node',
        'Express',
        'Socket.IO Server',
        'JWT',
        'Bcrypt',
        'Cors',
        'cross-fetch',
        'dotenv',
        'express-validator',
        'MongoDB',
        'Mongoose',
      ],
    },
    references: [
      {
        id: 1,
        name: 'Official Web',
        url: 'https://mdcharacter.netlify.app/',
      },
      {
        id: 2,
        name: 'GitHub - Frontend',
        url: 'https://github.com/Kasuk1/personal-mydearcharacter',
      },
      {
        id: 3,
        name: 'GitHub - Backend',
        url: 'https://github.com/Kasuk1/personal-mydearcharacter-backend',
      },
    ],
    images: [
      {
        id: 1,
        src: '',
        alt: 'Hero Section - My Dear Character',
      },
      {
        id: 2,
        src: '',
        alt: 'Characters Section - My Dear Character',
      },
      {
        id: 3,
        src: '',
        alt: 'Footer - My Dear Character',
      },
    ],
    status: 'Active',
  },
  {
    id: 3,
    name: 'My Little Friend',
    description: `Web application, MERN stack for veterinaries.`,
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
        src: '',
        alt: 'Hero Section - My Little Friend',
      },
      {
        id: 2,
        src: '',
        alt: 'My Pets Section - My Little Friend',
      },
      {
        id: 3,
        src: '',
        alt: 'Services - My Little Friend',
      },
    ],
    status: 'Active',
  },
];
