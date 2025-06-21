/* TESTIMONIALS IMPORTS */
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import avatar4 from './assets/avatar4.jpg';

/* PORTFOLIO IMAGES IMPORTS */
import IMG1 from './assets/projects/cipherchat.png';
import IMG2 from './assets/projects/jobspark.png';
import IMG3 from './assets/projects/car-rental.png';
import IMG4 from './assets/projects/sp.png';
import IMG5 from './assets/projects/nids.png';
import IMG6 from './assets/projects/payroll.png';
import IMG7 from './assets/projects/ps.png';
import IMG8 from './assets/projects/finetune.png';
import IMG9 from './assets/projects/bw.png';

/* ACADEMIC SERVICES IMAGES IMPORTS */
import IMAGE1 from './assets/services/coding.jpg';
import IMAGE2 from './assets/services/DSA.jpg';
import IMAGE3 from './assets/services/OOP.jpg';
import IMAGE4 from './assets/services/uml-ooad.jpg';
import IMAGE5 from './assets/services/software-artifacts.jpg';
import IMAGE6 from './assets/services/documentation.jpg';
import IMAGE7 from './assets/services/db-design.jpg';
import IMAGE8 from './assets/services/AI.jpg';
import IMAGE9 from './assets/services/problem-solving.jpg';
import IMAGE10 from './assets/services/tutor.jpg';
import IMAGE11 from './assets/services/web-2.jpg';
import IMAGE12 from './assets/services/app-dev.jpg';

/*********************************** ABOUT CONTENT ************************************/

const AboutContent = {
  education: {
    title: 'Education',
    subTitle: 'BCS - CUST Islamabad',
  },
  projects: {
    title: 'Projects',
    subTitle: '10+ Completed Projects',
  },
  experience: {
    title: 'Experience',
    subTitle: '3 Yrs Freelance Experience',
  },
  summary:
    "I'm Muhammad Awais, a Computer Scientist from Rawalpindi, Pakistan, passionate about delivering innovative and impactful solutions. With a strong foundation in mobile app development, full-stack web development, data analysis and machine learning, I specialize in crafting intuitive, scalable, and secure applications that solve real-world problems. My services include building seamless mobile apps using React Native and Flutter, developing robust web platforms with JavaScript, PHP, Laravel, and Next.js, and leveraging machine learning, AI, and LLMs to create data-driven solutions. I thrive in dynamic environments, drawing on my expertise in programming, data structures, algorithms, and emerging technologies to deliver user-centric products. My portfolio showcases a proven track record of successful projects, detailed in the Projects section below, demonstrating my ability to meet diverse client needs. As an avid learner and competitive programmer with experience in contests like ICPC, I continuously explore cutting-edge tools like Flutter and advanced AI techniques to stay at the forefront of technology. I’m eager to collaborate on remote opportunities, offering my skills and services (listed below) to drive innovation and deliver value to your business.",
};

/***********************************TESTIMONIAL CONTENT ************************************/
const TestimonialContent = [
  {
    id: 1,
    _name: 'Nimra Imtiaz',
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
    _name: 'Raja Adnan',
    image: avatar3,
    review:
      'Professionalism at its best. Their web solutions brought a new level of functionality to our projects. Highly recommended!',
  },
  {
    id: 4,
    _name: 'Emaan Zahra',
    image: avatar4,
    review:
      'Outstanding teamwork in app development. Their dedication to quality and detail resulted in a seamless user experience.',
  },
];

/***********************************SERVICES CONTENT ************************************/
const ServicesContent = [
  {
    title: 'Mobile App Development',
    details: [
      'Mobile apps that work smoothly on both Android and iPhone.',
      'Built-in security to keep your data safe.',
      'Easy-to-use designs that look great on any screen.',
      'Live updates and real-time features for a smooth experience.',
      'Cloud-based solutions to handle more users as you grow.',
      'Fast and reliable performance on all devices.',
      'Custom designs to match your brand and needs.',
      'Ongoing support and updates to keep your app running smoothly.',
    ],
  },
  {
    title: 'Web Development',
    details: [
      'Websites that work perfectly on phones, tablets, and computers.',
      'Complete website solutions, from the front page to the backend.',
      'Secure storage for your website data.',
      "Interactive websites focused on your users' needs.",
      'Built to rank well on search engines like Google.',
      'Add features like maps, payments, or chat easily.',
      'Custom systems so you can update content anytime.',
      'Fast-loading pages that work great on all screen sizes.',
    ],
  },
  {
    title: 'Smart AI & Automation',
    details: [
      'AI-powered tools tailored to your business needs.',
      'Smart systems trained for better accuracy and results.',
      'Advanced search features that improve answers and performance.',
      'Clear visual reports to help you understand your data.',
      'Smart features that understand and respond to human language.',
      'Tested and reliable AI solutions ready for real-world use.',
      'Automation tools to save time and boost productivity.',
      'Flexible AI solutions that grow with your business.',
    ],
  },
  {
    title: 'Database Solutions',
    details: [
      'Well-planned data storage that grows with your business.',
      'Clear diagrams to show how your data is organized.',
      'Structured systems that keep everything running fast and smooth.',
      'Safe and secure places to store important information.',
      'Organized data for better performance and accuracy.',
      'Tailored data solutions that match your business goals.',
      'Speed improvements so your systems respond quickly.',
    ],
  },
  {
    title: 'Design & Branding',
    details: [
      'User-friendly designs for websites and apps.',
      'Eye-catching posters, banners, and ads.',
      'Logos that clearly represent your brand.',
      'Smart layouts focused on what users want.',
      'Custom-made visuals for both online and print use.',
      'Consistent style across all your branding.',
      'Designs that look great on all devices.',
    ],
  },
  {
    title: 'Software Planning & Documentation',
    details: [
      'Clear documents that explain your software step by step.',
      'Visual charts that show how your system works.',
      'Organized layouts for how your software is built.',
      'Flow diagrams that explain how data flows.',
      'Interactive reports that mix text, visuals, and code.',
      'Polished documents ready for sharing or delivery.',
      'Professional visual materials for technical understanding.',
    ],
  },
];

/***********************************ACADEMICS CONTENT ************************************/

const AcademicsContent = {
  title: 'Academic Support for CS/IT Students',
  subTitle: 'Personalized Guidance from an Experienced Computer Scientist',
  details: [
    {
      image: IMAGE1,
      detail: 'Programming assignment help in JavaScript, Python, C++.',
    },
    {
      image: IMAGE2,
      detail: 'Data Structures and Algorithms (DSA) problem-solving support.',
    },
    {
      image: IMAGE3,
      detail: 'Object-Oriented Programming (OOP) project guidance.',
    },
    {
      image: IMAGE4,
      detail:
        'Object-Oriented Analysis and Design (OOAD) artifact development.',
    },
    {
      image: IMAGE5,
      detail: 'Software Engineering models, including UML diagrams.',
    },
    {
      image: IMAGE6,
      detail: 'Comprehensive software documentation for projects.',
    },
    {
      image: IMAGE7,
      detail: 'Database design and ERD creation for assignments.',
    },
    {
      image: IMAGE8,
      detail: 'Model training and evaluation with detailed reports.',
    },
    {
      image: IMAGE9,
      detail: 'Competitive programming strategies for contests like ICPC.',
    },
    {
      image: IMAGE10,
      detail: 'Customized tutoring for CS/IT course concepts.',
    },
    {
      image: IMAGE11,
      detail:
        'Learn web development from scratch (HTML, CSS, JS, React, and more).',
    },
    {
      image: IMAGE12,
      detail: 'Guided mobile app development using Flutter and React Native.',
    },
  ],
};

/***********************************PORTFOLIO CONTENT ************************************/
const PortfolioContent = [
  {
    id: 1,
    image: IMG1,
    title: 'CipherChat - A Secure Messaging App',
    github: 'https://github.com/awais-124/react-native-chat-app',
    description:
      'CipherChat is a privacy-first React Native messaging app that offers end-to-end encrypted communication. It features real-time messaging using Firebase, user authentication, media sharing, and sleek UI components. Designed for mobile-first use, the app emphasizes performance and security, making it suitable for private conversations or team communication.',
  },
  {
    id: 2,
    image: IMG2,
    title: 'JobSpark - Web Application built using PHP and MySQL',
    github: 'https://github.com/awais-124/JobSpark---PHP-SQL',
    description:
      'JobSpark is a job portal built with PHP and MySQL that connects job seekers with recruiters. It supports user registration, job postings, auto-generated resumes, profile management, search filters, and admin analytics. The backend uses structured SQL queries, and the frontend leverages custom CSS and Blade templates.',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Wallet App - Your best choice',
    github: 'https://github.com/awais-124/Wallet-App',
    description:
      'A mobile-friendly wallet app that allows users to manage expenses, set budgets, and track transactions. Built with React Native and Firebase, it includes biometric login, data visualization charts, dark mode, and local push notifications for spending alerts.',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Student Portal for Students, Teachers, and Admins',
    github: 'https://github.com/awais-124/react-student-portal',
    description:
      'A full-stack student portal built with React and Firebase. It provides role-based access for students, teachers, and admins to manage grades, attendance, assignments, and feedback. Teachers can upload materials, students can view progress, and admins can manage users and analytics.',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Car Rental Web App using PHP and SQL',
    github: 'https://github.com',
    description:
      'A car rental management system that allows customers to browse, book, and pay for vehicles. Admins can add new cars, manage bookings, and view reports. Built with PHP and MySQL, it features a responsive UI, real-time availability checking, and email-based booking confirmations.',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Presentation Studio - Sell your slides online',
    github: 'https://github.com/awais-124/presentation-studio',
    description:
      'A digital marketplace where users can upload, sell, or buy presentation slides. The platform uses PHP, MySQL, and JavaScript with Stripe integration for payments. It features user authentication, file previews, secure downloads, and a dashboard for tracking sales and purchases.',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Network Intrusion Detection System, ML-based project',
    github: 'https://github.com/awais-124/intrusion-detection-using-ml',
    description:
      'An ML-based intrusion detection system trained on the NSL-KDD dataset. It uses Scikit-learn models like Random Forests and SVM to classify network traffic into normal or attack types. The system outputs detection reports and model accuracy, and includes preprocessing pipelines for feature engineering.',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Payroll Management System using OOP with C++',
    github: 'https://github.com/awais-124/OOP_Project',
    description:
      'A console-based payroll system developed in C++ applying Object-Oriented Programming principles. It includes employee data management, salary calculation, overtime handling, and payslip generation. Designed to showcase class inheritance, file handling, and data encapsulation.',
  },
  {
    id: 8,
    image: IMG8,
    title: 'Fine-tuned DistilBert for Sentiment Analysis',
    github: 'https://github.com/awais-124/fine-tuning-distilbert',
    description:
      "A machine learning project that fine-tunes HuggingFace's DistilBERT transformer for sentiment classification on custom text datasets. The notebook includes tokenization, training loop, evaluation metrics, and visualization of attention layers for interpretation.",
  },
];

/***********************************EXPERIENCE CONTENT ************************************/

const Skills = [
  {
    title: 'Programming Languages',
    details: [
      { title: 'JavaScript', level: 'Experienced' },
      { title: 'Python', level: 'Experienced' },
      { title: 'C++', level: 'Experienced' },
      { title: 'PHP', level: 'Intermediate' },
      { title: 'SQL', level: 'Intermediate' },
      { title: 'Java', level: 'Beginner' },
    ],
  },
  {
    title: 'Frontend & Mobile Development',
    details: [
      { title: 'React', level: 'Intermediate' },
      { title: 'React Native', level: 'Intermediate' },
      { title: 'Next.js', level: 'Beginner' },
      { title: 'Flutter', level: 'Beginner' },
      { title: 'Bootstrap', level: 'Intermediate' },
      { title: 'TailwindCSS', level: 'Intermediate' },
    ],
  },
  {
    title: 'Backend & Databases',
    details: [
      { title: 'Node.js', level: 'Intermediate' },
      { title: 'Laravel', level: 'Intermediate' },
      { title: 'Express.js', level: 'Intermediate' },
      { title: 'Firebase', level: 'Intermediate' },
      { title: 'MySQL', level: 'Experienced' },
      { title: 'Db Design', level: 'Intermediate' },
    ],
  },
  {
    title: 'Machine Learning & AI',
    details: [
      { title: 'NumPy', level: 'Experienced' },
      { title: 'Pandas', level: 'Experienced' },
      { title: 'TensorFlow', level: 'Beginner' },
      { title: 'Matplotlib', level: 'Beginner' },
      { title: 'Scikit-Learn', level: 'Beginner' },
      { title: 'NLTK', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Platforms',
    details: [
      { title: 'VS Code', level: 'Experienced' },
      { title: 'Android Studio', level: 'Intermediate' },
      { title: 'Git', level: 'Intermediate' },
      { title: 'GitHub', level: 'Intermediate' },
      { title: 'Google Colab', level: 'Beginner' },
      { title: 'Hugging Face', level: 'Beginner' },
    ],
  },
  {
    title: 'Design & Productivity',
    details: [
      { title: 'Figma', level: 'Intermediate' },
      { title: 'Adobe Illustrator', level: 'Intermediate' },
      { title: 'Canva', level: 'Intermediate' },
      { title: 'Wordpress', level: 'Beginner' },
      { title: 'Adobe Photoshop', level: 'Beginner' },
      { title: 'MS Office', level: 'Expert' },
    ],
  },
];

/* ====================== CONTACT CONTENT ======================= */
const ContactContent = {
  emailTo: {
    title: 'Email',
    name: 'awais14940@gmail.com',
    link: 'mailto:awais14940@gmail.com',
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
  Skills,
  ContactContent,
  AcademicsContent,
};
