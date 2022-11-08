import { AboutDataType } from '../types/about';

export const aboutData: AboutDataType = {
  ownerName: 'Igor Chinchay',
  career: 'Software Engineer',
  introduction:
    'Front-End Engineer passionate about technologies with +1 year of experience, specializing in different tools and concepts to develop high fidelity products. Systems Engineer with knowledge and soft skills required to enhance the work environment productivity.',
  experience: {
    titleName: 'Experience',
    description: '',
    fields: [
      {
        entityName: 'Sharpminds',
        date: 'Mar 2022 - Present',
        position: 'React Developer',
        functions: [
          'Migrate code functionality to React environment following current practices and functionalities.',
          'Refactor and deprecate old code to React environment.',
        ],
      },
      {
        entityName: 'Pragma',
        date: 'Dec 2021 - Mar 2022',
        position: 'Software Engineer',
        functions: [
          'Developed web applications in the front-end environment with different technologies and methodologies: React, Typescript, Redux Toolkit, Sass, React-Router-v6, React-Hook-Form, TDD.',
          'Worked with agile methodologies like Scrum to deliver a high quality product developed and tested.',
          'Guided new peers in projects and did inspections to show the current project’s state.',
        ],
      },
      {
        entityName: 'NTT Data',
        date: 'Sep 2021 - Nov 2021',
        position: 'Centers Junior (CJ)',
        functions: [
          'Developed web applications in the front-end environment with Angular, RxJS, Sass.',
          'Worked with peers with different background  to enhance productivity and efficiency with agile methodologies.',
        ],
      },
      {
        entityName: 'IQ Comunicación Integral',
        date: 'Apr 2021 - May 2021',
        position: 'Front-End Web Developer',
        functions: [
          'Designed wireframes and medium fidelity prototypes for web applications that include blogs/landing page.',
          'Developed web applications using HTML, CSS, Javascript as core languages/technologies.',
          'Implemented the back-end including PHP, MySQL and PostgreSQL chaining with the front-end.',
        ],
      },
    ],
  },
  education: {
    titleName: 'Education',
    description: '',
    fields: [
      {
        entityName: 'Make it Real',
        date: 'Nov 2021 - Feb 2022',
        position: 'Full Stack Web Developer, Software Development',
      },
      {
        entityName: 'Universidad Católica Santo Toribio de Mogrovejo',
        date: 'Jan 2014 - Dec 2018',
        position: 'Systems Engineer',
      },
    ],
  },
  technologies: {
    titleName: 'Technologies',
    fields: [
      {
        entityName: 'Vanilla/Markup Languages',
        functions: ['HTML, CSS, JavaScript, TypeScript'],
      },
      {
        entityName: 'Libraries & Frameworks',
        functions: [
          'React, Angular, Redux, RTK, RxJs, Sass, Styled Components, Tailwind, Bootstrap, Express, Socket.IO, Axios, React-Hook-Form',
        ],
      },
      {
        entityName: 'Databases',
        functions: ['PostgreSQL, MongoDB, MySQL'],
      },
      {
        entityName: 'Services & APIs',
        functions: ['Docker, AWS, Amplify, Cognito, CircleCI'],
      },
      {
        entityName: 'Other',
        functions: [
          'Git, GitHub, GitLab, Jira, Trello, Figma, AdobeXD, inVision, Postman',
        ],
      },
    ],
  },
  languages: {
    titleName: 'Languages',
    fields: [
      {
        functions: ['Spanish (Native)', 'English - B2'],
      },
    ],
  },
};
