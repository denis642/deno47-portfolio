import project1 from './1_project.jpg';
import project2 from './project2aa.png';
import project3 from './project3a.png';
// Add all project images

const mywork_data = [
  {
    w_img: project1,
    title: "Project Management System",
    description: "A web-based system for managing 4th-year students' projects. Students can log in, manage their projects, and interact with their lecturers.",
    github: 'https://github.com/denis642/Project-Management-System',
    demo: 'https://project-pms-kyu.netlify.app/',
  },
  {
    w_img: project2,
    title: "CryptoPlace",
    description: "A React app that provides real-time cryptocurrency data using the CoinGecko API. Users can track market prices and switch currencies.",
    github: 'https://github.com/denis642/Cryptoplace',
    demo: 'https://deno-cryptoplace.netlify.app/',
  },
  {
    w_img: project3,
    title: "GBV Reporting Tool",
    description: "A secure platform to report gender-based violence cases, access support resources, and raise awareness for prevention.",
    github: 'https://github.com/denis642/GBV-REPORTING-TOOL',
    demo: 'https://project2.live',
  },
  // more projects...
];

export default mywork_data;
