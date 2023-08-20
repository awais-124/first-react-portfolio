/* TESTIMONIALS IMPORTS */
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import avatar4 from './assets/avatar4.jpg';

/* PORTFOLIO IMAGES IMPORTS */
import IMG1 from './assets/portfolio1.jpg';
import IMG2 from './assets/portfolio2.jpg';
import IMG3 from './assets/portfolio3.jpg';
import IMG4 from './assets/portfolio4.jpg';
import IMG5 from './assets/portfolio5.png';
import IMG6 from './assets/portfolio6.jpg';

/*********************************** ABOUT CONTENT ************************************/

const AboutContent =
  'Experienced MERN Developer excelling in React, JavaScript, and NodeJS. Adept in cutting-edge web frameworks for dynamic user interfaces, with a strong portfolio spanning websites, web-based apps, and Android apps. Accomplished in both React and React-Native, backed by a track record of successfully completed projects';

/***********************************TESTIMONIAL CONTENT ************************************/
const TestimonialContent = [
  {
    id: 1,
    _name: 'Ernest Raw',
    image: avatar1,
    review:
      'Impressed by their web app development skills! They transformed our vision into a user-friendly reality. Great job!',
  },
  {
    id: 2,
    _name: 'Muhammad Ali',
    image: avatar2,
    review:
      'Exceptional database design! Their expertise optimized our data management, enhancing efficiency across our systems.',
  },
  {
    id: 3,
    _name: 'David Beggar',
    image: avatar3,
    review:
      'Professionalism at its best. Their web solutions brought a new level of functionality to our projects. Highly recommended!',
  },
  {
    id: 4,
    _name: 'Emily Jade',
    image: avatar4,
    review:
      'Outstanding teamwork in app development. Their dedication to quality and detail resulted in a seamless user experience.',
  },
];

/***********************************SERVICES CONTENT ************************************/
const ServicesContent = {
  db: [
    'Structured data organization.',
    'Efficient querying and data retrieval',
    'Scalable architecture for future growth',
    'Data security and privacy measures',
    'Normalization to eliminate data redundancy',
  ],
  app: [
    'Cross-platform app solutions.',
    'User-friendly interfaces for enhanced engagement.',
    'Streamlined coding for efficient performance.',
    'Real-time updates and synchronization.',
    'Robust backend systems for data management.',
    'In-app purchase and payment gateways.',
  ],
  web: [
    'Responsive, user-focused websites.',
    'Optimized for performance and SEO.',
    'E-commerce functionality for online businesses.',
    'Integration with third-party APIs and services.',
    'Mobile-responsive layouts for various devices.',
    'Fast loading times and smooth navigation.',
  ],
};

/***********************************PORTFOLIO CONTENT ************************************/
const PortfolioContent = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    liveDemo: 'https://dribble.com/Alien_pixels',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts Templates and infographics in figma',
    github: 'https://github.com',
    liveDemo: 'https://dribble.com/Alien_pixels',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma Dashboard UI Kit for data design web apps',
    github: 'https://github.com',
    liveDemo: 'https://dribble.com/Alien_pixels',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining Tasks and Tracking progress',
    github: 'https://github.com',
    liveDemo: 'https://dribble.com/Alien_pixels',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Graphs, Charts and Responsive Dashbords',
    github: 'https://github.com',
    liveDemo: 'https://dribble.com/Alien_pixels',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Material UI kit for web apps',
    github: 'https://github.com',
    liveDemo: 'https://dribble.com/Alien_pixels',
  },
];

/***********************************EXPERIENCE CONTENT ************************************/
const ExperienceContent = {
  frontend: {
    title: 'FrontEnd Development',
    details: [
      { title: 'HTML', level: 'Experienced' },
      { title: 'CSS', level: 'Experienced' },
      { title: 'Javascript', level: 'Experienced' },
      { title: 'React', level: 'Experienced' },
      { title: 'Bootstrap', level: 'Experienced' },
    ],
  },
  backend: {
    title: 'Backend Development',
    details: [
      { title: 'Node JS', level: 'Intermediate' },
      { title: 'MongoDB', level: 'Intermediate' },
      { title: 'MySQL', level: 'Experienced' },
      { title: 'PHP', level: 'Intermediate' },
      { title: 'Python', level: 'Basic' },
      { title: 'C++', level: 'Experienced' },
    ],
  },
};

/* ====================== CONTACT CONTENT ======================= */
const ContactContent = {
  emailTo: {
    title: 'Email',
    name: 'awais14940@gmail.com',
    link: 'mailto:awis14940@gmail.com',
  },
  messenger: {
    title: 'Messenger',
    name: 'Muhammad Awais',
    link: 'https://www.facebook.com/messages/t/100031103824349',
  },
  whatsapp: {
    title: 'Whatsapp',
    name: '+92 326 9872844',
    link: 'https://api.whatsapp.com/send?phone=923269872844',
  },
};

/**************************** NAMED EXPORTS ****************************/
export {
  AboutContent,
  TestimonialContent,
  ServicesContent,
  PortfolioContent,
  ExperienceContent,
  ContactContent,
};
