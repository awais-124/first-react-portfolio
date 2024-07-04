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
  "I'm a Software Engineer specializing in Application Development with strong expertise in React Native, React, and JavaScript. I excel in problem-solving with a deep understanding of Data Structures and Algorithms. I thrive in challenging environments and continually expand my knowledge, exploring Machine Learning and AI concepts. As a dedicated and hardworking individual, I apply new technologies to craft innovative solutions. With a proven track record of successful projects during my university studies, I am accomplished in both React and React Native. Beyond my technical skills, I enjoy playing video games like Valorant and COD, and I consistently learn new IT concepts daily. I am actively seeking remote, part-time opportunities as an App/Web Developer, aiming to balance work with my studies while contributing my skills to the ever-evolving tech landscape.";

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
      'A Unique and Creative solution provided by him for my Brand. Their logos designs well-crafted with my business needs.',
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
  gd: [
    'Creative and innovative design concepts.',
    'Brand identity development.',
    'High-quality print and digital media design.',
    'User-centric UI/UX design.',
    'Custom illustrations and graphics.',
    'Logo and Banner Designs',
  ],
  app: [
    'Cross-platform app solutions.',
    'User-friendly interfaces.',
    'Optimized coding for efficient performance.',
    'Continuous integration and deployment.',
    'Responsive interfaces.',
    'In-app purchase and payment gateways.',
    'Robust back-end integration.',
    'Enhanced security features.',
  ],
  web: [
    'Responsive, user-focused websites.',
    'Optimized for performance and SEO.',
    'E-commerce functionality for online businesses.',
    'Integration with third-party APIs and services.',
    'Mobile-responsive layouts for various devices.',
    'Fast loading times and smooth navigation.',
    'Custom content management systems.',
    'Advanced analytics and tracking integration.',
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
  languages: {
    title: 'Programming Languages',
    details: [
      { title: 'Javascript', level: 'Intermediate' },
      { title: 'Python', level: 'Intermediate' },
      { title: 'C++', level: 'Experienced' },
      { title: 'SQL', level: 'Intermediate' },
      { title: 'PHP', level: 'Beginner' },
      { title: 'Assembly', level: 'Intermediate' },
    ],
  },
  frontend: {
    title: 'Frontend Technologies',
    details: [
      { title: 'HTML', level: 'Experienced' },
      { title: 'CSS', level: 'Experienced' },
      { title: 'React Native', level: 'Intermediate' },
      { title: 'React', level: 'Intermediate' },
      { title: 'TailwindCSS', level: 'Beginner' },
      { title: 'Bootstrap', level: 'Experienced' },
    ],
  },
  backend: {
    title: 'Backend Technologies',
    details: [
      { title: 'NodeJS', level: 'Intermediate' },
      { title: 'Firebase', level: 'Intermediate' },
      { title: 'ExpressJS', level: 'Intermediate' },
      { title: 'MongoDB', level: 'Intermediate' },
      { title: 'MySQL', level: 'Intermediate' },
    ],
  },
  libraries: {
    title: 'Libraries',
    details: [
      { title: 'STL', level: 'Experienced' },
      { title: 'Numpy', level: 'Beginner' },
      { title: 'Pandas', level: 'Beginner' },
      { title: 'PyCharm', level: 'Beginner' },
      { title: 'Tensorflow', level: 'Beginner' },
      { title: 'PyTorch', level: 'Beginner' },
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
