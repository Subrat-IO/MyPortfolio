// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import chatappLogo from './assets/work_logo/chatapp.png';
import countdowntimerLogo from './assets/work_logo/countdowntimer.png';
import Web_SurferLogo from './assets/work_logo/Web_Sufer.png';
import simonsayLogo from './assets/work_logo/simonsaygame.png';
import travelgoLogo from './assets/work_logo/TravelGo.png';
import weatherappLogo from './assets/work_logo/weatherapp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

import netlifyLogo from './assets/tech_logo/netlify.png';


// Experience Section Logo's
import nirmalyaLogo from './assets/company_logo/images.jpg';
import niitLogo from './assets/company_logo/images1.png';

// Education Section Logo's
import gecLogo from './assets/education_logo/gec.png';
import peoplesCollegeLogo from './assets/education_logo/Peoples..jpg';
import biswaLogo from './assets/education_logo/Biswa.jpg';

// Project Section Logo's
import dockerLogo from './assets/tech_logo/docker.png';
import jwtLogo from './assets/tech_logo/jwt.png';
import websocketLogo from './assets/tech_logo/websockets.png';
import cpanelLogo from './assets/tech_logo/cpanel.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },

      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],

  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'JWT', logo: jwtLogo },
      { name: 'WebSockets', logo: websocketLogo },
      { name: 'cPanel', logo: cpanelLogo },

    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'Responsive Design', img: null },
      { name: 'Problem-Solving', img: null },
      { name: 'Teamwork', img: null },
      { name: 'Communication', img: null },
    ],
  }

];

export const experiences = [
  {
    id: 0,
    img: nirmalyaLogo, // replace with your logo asset path
    role: "Web Development Intern",
    company: "Nirmalya Metropolis Pvt. Ltd.",
    date: "April 2024 - March 2025",
    desc: "Developed and optimized websites using HTML, CSS, JavaScript, and PHP. Improved navigation and layout for smoother user experience. Managed CMS content, backups, and cPanel configurations.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "CMS",
      "cPanel",
    ],
  },
  {
    id: 1,
    img: niitLogo, // replace with your logo asset path
    role: "Graphic Design Intern",
    company: "Microsoft–NIIT Foundation",
    date: "July 2023 - October 2023",
    desc: "Created responsive UI layouts using HTML, CSS, and JavaScript. Designed graphics and assets aligned with Microsoft’s branding guidelines for training platforms.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI Design",
    ],
  },
];


export const education = [
  {
    id: 0,
    img: gecLogo, // replace with your logo asset path
    school: "Gandhi Engineering College, Bhubaneswar",
    date: "2020 - 2024",
    grade: "8.3 CGPA",
    desc: "Completed B.Tech in Computer Science & Engineering with a strong foundation in Data Structures, Algorithms, Database Systems, and Web Development. Worked on multiple projects using MERN stack, React, and Next.js.",
    degree: "Bachelor of Technology - B.Tech (CSE)",
  },
  {
    id: 1,
    img: peoplesCollegeLogo, // replace with your logo asset path
    school: "People’s College, Buguda",
    date: "2018 - 2020",
    grade: "63%",
    desc: "Completed Class XII in Science (PCM) under CHSE Board, Odisha. Built strong fundamentals in Mathematics and Computer Science.",
    degree: "Class XII - Science (PCM)",
  },
  {
    id: 2,
    img: biswaLogo, // replace with your logo asset path
    school: "Biswa Varatee Residential High School",
    date: "2016 - 2018",
    grade: "78%",
    desc: "Completed Class X under BSE Board, Odisha. Focused on Science and Computer Applications.",
    degree: "Class X",
  },
];

export const projects = [
  {
    id: 3,
    title: "Image Web_Sur",
    description:
      "Web Surfer is a modern full-stack Next.js web application. It allows users to interact with AI-powered responses in real-time. The frontend is hosted on Vercel, the backend API on Render, and MongoDB is used for persisting user and chat data.",
    image: Web_SurferLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS,Next.js, MongoDB,Redux"],
    github: "https://github.com/Subrat-IO/Web_Surfer",
    webapp: "https://web-surfer-nine.vercel.app/",
  },
  {
    id: 0,
    title: "TravelGo",
    description:
      "A modern travel website providing users with curated destinations, booking options, and travel tips. Features a responsive design with smooth animations.",
    image: travelgoLogo,
    tags: ["React JS", "Tailwind CSS", "API Integration"],
    github: "https://github.com/Subrat-IO/TravelGo",
    webapp: "https://travelgo-1wn1.onrender.com/listings",
  },

  {
    id: 1,
    title: "ChatApp",
    description:
      "A real-time chat application that allows users to send and receive messages instantly. Built with modern web technologies to provide a smooth and interactive messaging experience.",
    image: chatappLogo,
    tags: ["React JS", "Node.js", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/Subrat-IO/BasicChat",
    webapp: "https://basicchat-lhr6.onrender.com/chats",
  },

  {
    id: 2,
    title: "Weather App",
    description:
      "A weather forecast application that fetches real-time weather data based on user location or city search. Provides temperature, conditions, and other details.",
    image: weatherappLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Subrat-IO/Material_ui",
    webapp: "https://weatherappsubrat.netlify.app/",
  },

  {
    id: 4,
    title: "Simon Say",
    description:
      "A fun memory game where players repeat random sequences of colors and sounds generated by the app. Built with JavaScript for an interactive gaming experience.",
    image: simonsayLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Subrat-IO/Simonsay",
    webapp: "https://subrat-io.github.io/Simonsay/",
  },

  {
    id: 5,
    title: "Countdown Timer",
    description:
      "A simple and customizable countdown timer application. Users can set specific dates or durations, and the app provides a live countdown with a clean UI.",
    image: countdowntimerLogo,
    tags: ["HTML", "CSS", "JavaScript",],
    github: "https://github.com/Subrat-IO/countdown-timer",
    webapp: "https://subrat-io.github.io/countdown-timer/",
  },
];
