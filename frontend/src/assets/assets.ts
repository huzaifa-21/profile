import { skill } from "@/types/skills";
import { Link } from "@/types/links";
import bootstrap from "./images/bootstrap.svg";
import express from "./images/express.svg";
import git from "./images/git.svg";
import github from "./images/github.svg";
import gulp from "./images/gulp.svg";
import html from "./images/html.svg";
import mongodb from "./images/mongodb.svg";
import nodejs from "./images/nodejs.svg";
import react from "./images/react.svg";
import sass from "./images/sass.svg";
import tailwind from "./images/tailwind.svg";
import typescript from "./images/typescript.svg";
import next from "./images/next.svg";
import css from "./images/css.svg";
import portfolio from "./images/portfolio.png";
import rock from "./images/rock.png";
import easybank from "./images/easybank.png";
import blackdantella from "./images/blackdantella.png";
import fylo from "./images/fylo.png";
import dashboard from "./images/dashboard.png";
import email from "./images/email.png";
import { Project } from "@/types/projects";

const links: Link[] = [
  {
    label: "Home",
    href: "#home",
    curr: true,
  },
  {
    label: "Skills",
    href: "#skills",
    curr: false,
  },
  {
    label: "Projects",
    href: "#projects",
    curr: false,
  },
  {
    label: "Contact",
    href: "#contact",
    curr: false,
  },
];

const skills: skill[] = [
  {
    title: "HTML",
    image: html,
    description:
      "HTML is the cornerstone of web development, serving as the backbone for creating structured and interactive web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
    alt: "Skill Image",
  },
  {
    title: "CSS",
    image: css,
    description:
      "HTML is the cornerstone of web development, serving as the backbone for creating structured and interactive web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
    alt: "Skill Image",
  },
  {
    title: "Typescript",
    image: typescript,
    description:
      "JavaScript revolutionizes the web development, empowering dynamic and interactive website experiences online.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "Skill Image",
  },
  {
    title: "NextJs",
    image: next,
    description:
      "JavaScript revolutionizes the web development, empowering dynamic and interactive website experiences online.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "Skill Image",
  },
  {
    title: "NodeJs",
    image: nodejs,
    description:
      "JavaScript revolutionizes the web development, empowering dynamic and interactive website experiences online.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "Skill Image",
  },
  {
    title: "ExpressJs",
    image: express,
    description:
      "JavaScript revolutionizes the web development, empowering dynamic and interactive website experiences online.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "Skill Image",
  },
  {
    title: "MongoDB",
    image: mongodb,
    description:
      "JavaScript revolutionizes the web development, empowering dynamic and interactive website experiences online.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "Skill Image",
  },
  {
    title: "Tailwind",
    image: tailwind,
    description:
      "JavaScript revolutionizes the web development, empowering dynamic and interactive website experiences online.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "Skill Image",
  },

  {
    title: "Sass",
    image: sass,
    description:
      "Sass, is a great CSS preprocessor, simplifies styling with advanced features and syntax enhancements you must learn it.",
    link: "https://sass-lang.com/documentation/",
    alt: "Skill Image",
  },

  {
    title: "Bootstrap",
    image: bootstrap,
    description:
      "Bootstrap simplifies web development with its responsive design components, versatile utility classes, empowering developers.",
    link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/",
    alt: "Skill Image",
  },

  {
    title: "React.js",
    image: react,
    description:
      "React revolutionizes web development with its declarative, component-based approach, and efficient rendering.",
    link: "https://legacy.reactjs.org/docs/getting-started.html",
    alt: "Skill Image",
  },

  {
    title: "Gulp",
    image: gulp,
    description:
      "Gulp.js simplifies task automation for web development workflows, enhancing productivity and streamlining project management processes.",
    link: "https://gulpjs.com/",
    alt: "Skill Image",
  },

  {
    title: "Git",
    image: git,
    description:
      "Git streamlines version control for collaborative software development projects effortlessly, ensuring efficiency and seamless collaboration.",
    link: "https://git-scm.com/doc",
    alt: "Skill Image",
  },
  {
    title: "GitHub",
    image: github,
    description:
      "Git streamlines version control for collaborative software development projects effortlessly, ensuring efficiency and seamless collaboration.",
    link: "https://git-scm.com/doc",
    alt: "Skill Image",
  },
];

const projects: Project[] = [
  {
    image: portfolio,
    title: "Portfolio",
    description:
      "Crafted with <b>HTML</b>, <b>SASS</b> and <b>JavaScript</b>, this interacDve game elevated my skills, parDcularly in SASS where I utilized mixins to style the disDnct shapes of rock, paper, and scissors efficiently.",
    link: "https://huzaifa-21.github.io/frontendmentor-challenge/",
    date: "September 2024",
    skills: [
      "react.js",
      "tailwind",
      "typescript",
      "next.js",
      "node.js",
      "express.js",
    ],
  },
  {
    image: blackdantella,
    title: "Blackdantella E-commerce",
    description:
      "Crafted with <b>HTML</b>, <b>SASS</b> and <b>JavaScript</b>, this interacDve game elevated my skills, parDcularly in SASS where I utilized mixins to style the disDnct shapes of rock, paper, and scissors efficiently.",
    link: "https://blackdantella.com",
    date: " august 2024",
    skills: [
      "reactJs",
      "sass",
      "javascript",
      "express",
      "mongoDB",
      "node.js",
      "bootstrap",
      "responsive Design",
    ],
  },
  {
    image: easybank,
    title: "Easybank",
    description:
      "Crafted with <b>HTML</b>, <b>SASS</b> and <b>JavaScript</b>, this interacDve game elevated my skills, parDcularly in SASS where I utilized mixins to style the disDnct shapes of rock, paper, and scissors efficiently.",
    link: "https://huzaifa-21.github.io/bank-landing-page/",
    date: "june 2024",
    skills: ["html", "css", "javascript", "bootstrap", "responsive Design"],
  },
  {
    image: rock,
    title: "Rock-Paper-Scissor Game",
    description:
      "Crafted with <b>HTML</b>, <b>SASS</b> and <b>JavaScript</b>, this interacDve game elevated my skills, parDcularly in SASS where I utilized mixins to style the disDnct shapes of rock, paper, and scissors efficiently.",
    link: "https://huzaifa-21.github.io/rock-paper-scissors-game/",
    date: "october 2023",
    skills: ["html", "sass", "javascript"],
  },
  {
    image: fylo,
    title: "Fylo Landing Page",
    description:
      "Crafted with <b>HTML</b>, <b>SASS</b> and <b>JavaScript</b>, this interacDve game elevated my skills, parDcularly in SASS where I utilized mixins to style the disDnct shapes of rock, paper, and scissors efficiently.",
    link: "https://huzaifa-21.github.io/Fylo-page/",
    date: " may 2023",
    skills: ["html", "css", "javascript","bootstrap","responsive Design"],
  },
  {
    image: dashboard,
    title: "Dashboard",
    description:
      "Crafted with <b>HTML</b>, <b>SASS</b> and <b>JavaScript</b>, this interacDve game elevated my skills, parDcularly in SASS where I utilized mixins to style the disDnct shapes of rock, paper, and scissors efficiently.",
    link: "https://huzaifa-21.github.io/dashboard/",
    date: "july 2023",
    skills: ["html", "css","responsive design"],
  },
  {
    image: email,
    title: "Email Subscription",
    description:
      "Crafted with <b>HTML</b>, <b>SASS</b> and <b>JavaScript</b>, this interacDve game elevated my skills, parDcularly in SASS where I utilized mixins to style the disDnct shapes of rock, paper, and scissors efficiently.",
    link: "https://huzaifa-21.github.io/frontendmentor-challenge/",
    date: "Novemeber 2023",
    skills: ["html", "css", "javascript"],
  },
];

export { skills, links, projects };
