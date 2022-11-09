/* eslint-disable */
import {
  Project1_1,
  Project1_2,
  Project1_3,
  Project1_4,
  Project2_1,
  Project2_2,
  Project2_3,
  Project3_1,
  Project3_2,
  Project3_3,
  Project4_1,
  Project4_2,
  Project4_3,
  Project4_4,
  Project4_5,
  Project5_1,
  Project5_2,
  Project6_1,
  Project6_2,
  Project6_3,
  Project6_4,
} from '../assets/images/projects';
import { ProjectDataType } from '../types/project';

export const projectsData: ProjectDataType[] = [
  {
    id: 6,
    name: 'NoiseApp',
    description: `This project was created to be part of my portfolio and will probably receive updates through my learning process. The requirements were self-assigned with basis in my daily learning.`,
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
        src: Project6_1,
        alt: 'Noise Image 1',
      },
      {
        id: 2,
        src: Project6_2,
        alt: 'Noise Image 2',
      },
      {
        id: 3,
        src: Project6_3,
        alt: 'Noise Image 3',
      },
      {
        id: 4,
        src: Project6_4,
        alt: 'Noise Image 4',
      },
    ],
    status: 'Active',
  },
  {
    id: 5,
    name: 'Destiny',
    description: `This project was planned to be part of my portfolio and will probably receive updates through my learning process.`,
    technologies: {
      ['Design']: ['Figma'],
      ['Frontend']: [
        'HTML5',
        'CSS3',
        'TypeScript',
        'Styled Components',
        'Redux',
        'RTK',
        'React-Router-V6',
        'Reddit API',
        'React-Markdown',
        'React-Icons',
      ],
    },
    references: [
      {
        id: 1,
        name: 'Official Web',
        url: 'https://destiny-our.netlify.app/',
      },
      {
        id: 2,
        name: 'GitHub - Frontend',
        url: 'https://github.com/Kasuk1/personal-destiny-app',
      },
    ],
    images: [
      {
        id: 1,
        src: Project5_1,
        alt: 'Destiny Image 1',
      },
      {
        id: 2,
        src: Project5_2,
        alt: 'Destiny Image 2',
      },
    ],
    status: 'Active',
  },
  {
    id: 4,
    name: 'Just Reddit',
    description: `This project was planned to be part of my portfolio and will probably receive updates through my learning process. The first requirements were delivered by Codecademy and it's part of my Front-End Enginner Path's curriculum as well.`,
    technologies: {
      ['Design']: ['Figma'],
      ['Frontend']: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Redux',
        'RTK',
        'React-Router-V6',
        'Reddit API',
      ],
    },
    references: [
      {
        id: 1,
        name: 'Official Web',
        url: 'https://just-reddit.netlify.app/',
      },
      {
        id: 2,
        name: 'GitHub - Frontend',
        url: 'https://github.com/Kasuk1/personal-justreddit',
      },
    ],
    images: [
      {
        id: 1,
        src: Project4_1,
        alt: 'JustReddit Image 1',
      },
      {
        id: 2,
        src: Project4_2,
        alt: 'JustReddit Image 2',
      },
      {
        id: 3,
        src: Project4_3,
        alt: 'JustReddit Image 3',
      },
      {
        id: 4,
        src: Project4_4,
        alt: 'JustReddit Image 4',
      },
      {
        id: 5,
        src: Project4_5,
        alt: 'JustReddit Image 5',
      },
    ],
    status: 'Active',
  },
  {
    id: 3,
    name: 'My Dear Character',
    description:
      'Web application based with sockets. Created with the aim to entertain with games 1v1 and use the skills gained in a bootcamp. This project will receive improvements and updates through the creator’s learning process.',
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
        src: Project3_1,
        alt: 'Hero Section - My Dear Character',
      },
      {
        id: 2,
        src: Project3_2,
        alt: 'Characters Section - My Dear Character',
      },
      {
        id: 3,
        src: Project3_3,
        alt: 'Footer - My Dear Character',
      },
    ],
    status: 'Active',
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
    status: 'Active',
  },
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
    status: 'Deprecated',
  },
];
