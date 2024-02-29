import { meta, shopify, starbucks, tesla } from "../assets/images";
import { car, contact, css, express, git, github, html, javascript, linkedin, mongodb, postgresql, mysql, nodejs, pricewise, react, bootstrap, tailwindcss, threads, postman, xampp, motion, mui, nextjs, typescript } from "../assets/icons";
import { teslahsg, focus, productivity, moneybuds } from "../assets/mockup";

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
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend"
  },
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
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend"
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend"
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend"
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation"
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database"
  },
  {
    imageUrl: postgresql,
    name: "MySQL",
    type: "Database"
  },
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
    tech: "MERN (MongoDB, Express.js, React.js, Node.js)",
    description: "Inspired by how the Pomodoro technique has helped me get through my list of tasks, I decided to develop a web app that allows users to track their tasks and working through them via Pomodoro sessions.",
    functionality: "JWT Authentication, Timer,  CRUD to add tasks, view, delete, update and mark as complete.",
    link: "https://productivity-workspace.vercel.app/",
    mockup: productivity
  },
  {
    iconUrl: threads,
    theme: "btn-back-black",
    name: "Focus",
    tech: "Next.js, Shadcn UI",
    description: "Similar to the Productivity Workspace app, this app uses Next.js instead of React.",
    functionality: "Timer,  CRUD to add tasks, view, delete, update and mark as complete.",
    link: "https://focus-ecru.vercel.app/",
    mockup: focus
  },
  {
    iconUrl: car,
    theme: "btn-back-red",
    name: "TeslahSG",
    tech: "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL",
    description: "Before graduating from my Diploma in IT, my last project was to develop a mini web ERP to integrate manual work processes for a hypothetical company, TeslahSG Pte Ltd. Test the app using these credentials - username: dini201, password: 201.",
    functionality: "Authentication, Authorization, Session Management, CRUD to track sales orders, view, delete and update.",
    link: "https://teslahsg.dinifitriyani.com/",
    mockup: teslahsg
  },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-blue",
  //   name: "Booklibs",
  //   tech: "Flutter, Firebase",
  //   description: "Developed a mobile application for avid readers to track books they have read and wish to read.",
  //   functionality: "Firebase Authentication, CRUD, Search, Implementation of Google API and JSON Parsing.",
  //   link: "https://github.com/diniftryn/flutter-book-tracker",
  //   mockup: ""
  // },
  {
    iconUrl: pricewise,
    theme: "btn-back-pink",
    name: "moneybuds",
    tech: "React Native, Supabase",
    description: "Developed a mobile application to track and manage shared expenses.",
    functionality: "Authentication, Accessing Contacts, Gallery and Camera, CRUD for friends, groups and expenses.",
    link: "https://github.com/diniftryn/splitbill",
    mockup: moneybuds
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
