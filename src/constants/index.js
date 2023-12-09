import { meta, shopify, starbucks, tesla } from "../assets/images";
import { car, contact, css, express, git, github, html, javascript, linkedin, mongodb, nodejs, pricewise, react, snapgram, bootstrap, tailwindcss, threads, postman, xampp } from "../assets/icons";
import { teslahsg } from "../assets/mockup";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend"
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend"
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend"
  },
  // {
  //   imageUrl: motion,
  //   name: "Motion",
  //   type: "Animation"
  // },
  // {
  //   imageUrl: mui,
  //   name: "Material-UI",
  //   type: "Frontend"
  // },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend"
  // },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database"
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend"
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend"
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend"
  },

  // {
  //   imageUrl: redux,
  //   name: "Redux",
  //   type: "State Management"
  // },
  // {
  //   imageUrl: sass,
  //   name: "Sass",
  //   type: "Frontend"
  // },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend"
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend"
  },
  // {
  //   imageUrl: typescript,
  //   name: "TypeScript",
  //   type: "Frontend"
  // }
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control"
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control"
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "API"
  },
  {
    imageUrl: xampp,
    name: "Apache",
    type: "Dev Environment"
  }
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: ["Developing and maintaining web applications using React.js and other related technologies.", "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.", "Implementing responsive design and ensuring cross-browser compatibility.", "Participating in code reviews and providing constructive feedback to other developers."]
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: ["Developing and maintaining web applications using React.js and other related technologies.", "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.", "Implementing responsive design and ensuring cross-browser compatibility.", "Participating in code reviews and providing constructive feedback to other developers."]
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: ["Developing and maintaining web applications using React.js and other related technologies.", "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.", "Implementing responsive design and ensuring cross-browser compatibility.", "Participating in code reviews and providing constructive feedback to other developers."]
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: ["Developing and maintaining web applications using React.js and other related technologies.", "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.", "Implementing responsive design and ensuring cross-browser compatibility.", "Participating in code reviews and providing constructive feedback to other developers."]
  }
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact"
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/diniftryn"
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/dini-fitriyani/"
  }
];

export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Productivity Workspace",
    description: "Created a full-stack web app that allows users to be productive by tracking their tasks and working through them via Pomodoro sessions. Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js)",
    link: "https://productivity-workspace.vercel.app/",
    mockup: teslahsg
  },
  {
    iconUrl: car,
    theme: "btn-back-red",
    name: "TeslahSG",
    description: "Developed a mini web ERP to integrate manual work processes for a hypothetical company, TeslahSG Pte Ltd. " + "Tech Stack: HTML, CSS, JavaScript, Bootstrap, PHP, MySQL. " + "Test the app using these credentials - username: dini201, password: 201.",
    link: "https://teslahsg.dinifitriyani.com/",
    mockup: teslahsg
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-blue",
    name: "Booklibs",
    description: "Developed a mobile application for avid readers to track books they have read and wish to read. Functionality: Firebase Authentication, CRUD, Search, Implementation of Google API and JSON Parsing. Tech Stack: Flutter, Firebase",
    link: "https://github.com/diniftryn/flutter-book-tracker",
    mockup: teslahsg
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Spend",
    description: "Developed a mobile application to track expenses. Tech Stack: React Native ",
    link: "https://github.com/diniftryn/reactnative-budget-tracker",
    mockup: teslahsg
  }
  // {
  //   iconUrl: pricewise,
  //   theme: "btn-back-red",
  //   name: "Amazon Price Tracker",
  //   description: "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
  //   link: "https://github.com/adrianhajdin/pricewise"
  // },
  // {
  //   iconUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://github.com/adrianhajdin/threads"
  // },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description: "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase"
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description: "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app"
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description: "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate"
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description: "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer"
  // }
];
