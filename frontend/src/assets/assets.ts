import { skill } from "@/types/skills";
import { Link } from "@/types/links";
import logo from "./images/Vector-4.svg";


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
    href: "#Projects",
    curr: false,
  },
  {
    label: "Contact",
    href: "#Contact",
    curr: false,
  },
];

const skills: skill[] = [
  {
    title: "HTML",
    image: "vector",
    description:
      "HTML is the cornerstone of web development, serving as the backbone for creating structured and interactive web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
    alt: "Skill Image",
  },

  {
    title: "CSS",
    image: "imgs/css-icon.svg",
    description:
      "CSS empowers web developers to style and design captivating web pages, enhancing user experience and visual appeal.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    alt: "Skill Image",
  },

  {
    title: "JavaScript",
    image: "imgs/javascript-icon.svg",
    description:
      "JavaScript revolutionizes the web development, empowering dynamic and interactive website experiences online.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "Skill Image",
  },

  {
    title: "Pug",
    image: "imgs/pug-icon.svg",
    description:
      "Pug.js simplifies HTML markup creation with its concise syntax for Node.js and browsers, enhancing developer productivity.",
    link: "https://pugjs.org/api/getting-started.html",
    alt: "Skill Image",
  },

  {
    title: "Sass",
    image: "imgs/sass-icon.svg",
    description:
      "Sass, is a great CSS preprocessor, simplifies styling with advanced features and syntax enhancements you must learn it.",
    link: "https://sass-lang.com/documentation/",
    alt: "Skill Image",
  },

  {
    title: "Bootstrap",
    image: "imgs/bootstrap-icon.svg",
    description:
      "Bootstrap simplifies web development with its responsive design components, versatile utility classes, empowering developers.",
    link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/",
    alt: "Skill Image",
  },

  {
    title: "Jest",
    image: "imgs/jest-icon.svg",
    description:
      "Jest, a robust JavaScript testing framework, simplifies test writing for Node.js projects with its API and powerful features.",
    link: "https://jestjs.io/docs/getting-started",
    alt: "Skill Image",
  },

  {
    title: "React.js",
    image: "imgs/react-icon.svg",
    description:
      "React revolutionizes web development with its declarative, component-based approach, and efficient rendering.",
    link: "https://legacy.reactjs.org/docs/getting-started.html",
    alt: "Skill Image",
  },

  {
    title: "Gulp",
    image: "imgs/gulp-icon.svg",
    description:
      "Gulp.js simplifies task automation for web development workflows, enhancing productivity and streamlining project management processes.",
    link: "https://gulpjs.com/",
    alt: "Skill Image",
  },

  {
    title: "Git",
    image: "imgs/git-icon.svg",
    description:
      "Git streamlines version control for collaborative software development projects effortlessly, ensuring efficiency and seamless collaboration.",
    link: "https://git-scm.com/doc",
    alt: "Skill Image",
  },
];

export { skills, links,logo };
