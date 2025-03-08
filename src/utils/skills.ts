import { skillInterface } from "./interfaces";
import { 
    C, CPlusPlus, JavaScript, TypeScript, Python, PHP, Bash,
    HTML5, CSS3, Sass, TailwindCSS, Bootstrap5, BulmaUI, MaterialUI, Framer,
    React, NextJs, JQuery, ViteJS,
    NodeJs, ExpressJsLight, ExpressJsDark, Prisma, MongoDB, MySQL,
    Canva, Figma,
    Git, GitHubLight, Postman, Cloudinary, Render, Netlify, VercelLight, Heroku,
    Hashnode,
    Ubuntu, NPM, Linux,
} from "developer-icons";

// Programming Languages
export const languages: skillInterface[] = [
    { name: "C", icon: C },
    { name: "C++", icon: CPlusPlus },
    { name: "JavaScript", icon: JavaScript },
    { name: "TypeScript", icon: TypeScript },
    { name: "Python", icon: Python },
    { name: "PHP", icon: PHP },
    { name: "Bash", icon: Bash }
];

// Frontend Technologies
export const frontend: skillInterface[] = [
    { name: "HTML5", icon: HTML5 },
    { name: "CSS3", icon: CSS3 },
    { name: "Sass", icon: Sass },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "Bootstrap", icon: Bootstrap5 },
    { name: "Bulma UI", icon: BulmaUI },
    { name: "Material UI", icon: MaterialUI },
    { name: "Framer Motion", icon: Framer },
    { name: "React.js", icon: React },
    { name: "Next.js", icon: NextJs },
    { name: "JQuery", icon: JQuery },
    { name: "Vite.js", icon: ViteJS }
];

// Backend Technologies
export const backend: skillInterface[] = [
    { name: "Node.js", icon: NodeJs },
    { name: "Express.js", icon: ExpressJsLight },
    // { name: "Express.js (Dark)", icon: ExpressJsDark },
    { name: "Prisma ORM", icon: Prisma }
];

// Databases
export const databases: skillInterface[] = [
    { name: "MongoDB", icon: MongoDB },
    { name: "MySQL", icon: MySQL }
];  

// Design & UI/UX
export const design: skillInterface[] = [
    { name: "Canva", icon: Canva },
    { name: "Figma", icon: Figma }
];

// DevOps & Cloud
export const devops: skillInterface[] = [
    { name: "Git", icon: Git },
    { name: "GitHub", icon: GitHubLight },
    { name: "Postman", icon: Postman },
    { name: "Cloudinary", icon: Cloudinary },
    { name: "Render", icon: Render },
    { name: "Netlify", icon: Netlify },
    { name: "Vercel", icon: VercelLight },
    { name: "Heroku", icon: Heroku }
];

// Tools & Platforms
export const tools: skillInterface[] = [
    { name: "Ubuntu", icon: Ubuntu },
    { name: "Linux", icon: Linux },
    { name: "NPM", icon: NPM },
    { name: "Hashnode", icon: Hashnode }
];

export const allSkills: skillInterface[] = [
    ...languages,
    ...frontend,
    ...backend,
    ...databases,
    ...design,
    ...devops,
    ...tools
];