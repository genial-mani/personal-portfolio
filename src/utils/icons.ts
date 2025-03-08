import React from "react";
import {
  C,
  CPlusPlus,
  JavaScript,
  JQuery,
  Bash,
  Bootstrap5,
  BulmaUI,
  CSS3,
  Canva,
  Cloudinary,
  ExpressJsLight,
  ExpressJsDark,
  Figma,
  Framer,
  Git,
  GitHubLight,
  HTML5,
  Hashnode,
  Heroku,
  MaterialUI,
  MongoDB,
  MySQL,
  NPM,
  Netlify,
  NextJs,
  NodeJs,
  PHP,
  Postman,
  Prisma,
  Python,
  React as ReactIcon, // Rename to avoid conflict with core React
  Render,
  Sass,
  TailwindCSS,
  TypeScript,
  Ubuntu,
  VercelLight,
  ViteJS,
} from "developer-icons";

export function TechStackIcon({ iconName }: { iconName: string }) {
  let IconComponent: React.ElementType | null = null; // Ensure it's a valid React component type

  switch (iconName) {
    case "C":
      IconComponent = C;
      break;
    case "CPlusPlus":
      IconComponent = CPlusPlus;
      break;
    case "JavaScript":
      IconComponent = JavaScript;
      break;
    case "JQuery":
      IconComponent = JQuery;
      break;
    case "Bash":
      IconComponent = Bash;
      break;
    case "Bootstrap5":
      IconComponent = Bootstrap5;
      break;
    case "BulmaUI":
      IconComponent = BulmaUI;
      break;
    case "CSS3":
      IconComponent = CSS3;
      break;
    case "Canva":
      IconComponent = Canva;
      break;
    case "Cloudinary":
      IconComponent = Cloudinary;
      break;
    case "ExpressJsLight":
      IconComponent = ExpressJsLight;
      break;
    case "ExpressJsDark":
      IconComponent = ExpressJsDark;
      break;
    case "Figma":
      IconComponent = Figma;
      break;
    case "Framer":
      IconComponent = Framer;
      break;
    case "Git":
      IconComponent = Git;
      break;
    case "GitHubLight":
      IconComponent = GitHubLight;
      break;
    case "HTML5":
      IconComponent = HTML5;
      break;
    case "Hashnode":
      IconComponent = Hashnode;
      break;
    case "Heroku":
      IconComponent = Heroku;
      break;
    case "MaterialUI":
      IconComponent = MaterialUI;
      break;
    case "MongoDB":
      IconComponent = MongoDB;
      break;
    case "MySQL":
      IconComponent = MySQL;
      break;
    case "NPM":
      IconComponent = NPM;
      break;
    case "Netlify":
      IconComponent = Netlify;
      break;
    case "NextJs":
      IconComponent = NextJs;
      break;
    case "NodeJs":
      IconComponent = NodeJs;
      break;
    case "PHP":
      IconComponent = PHP;
      break;
    case "Postman":
      IconComponent = Postman;
      break;
    case "Prisma":
      IconComponent = Prisma;
      break;
    case "Python":
      IconComponent = Python;
      break;
    case "React":
      IconComponent = ReactIcon;
      break;
    case "Render":
      IconComponent = Render;
      break;
    case "Sass":
      IconComponent = Sass;
      break;
    case "TailwindCSS":
      IconComponent = TailwindCSS;
      break;
    case "TypeScript":
      IconComponent = TypeScript;
      break;
    case "Ubuntu":
      IconComponent = Ubuntu;
      break;
    case "VercelLight":
      IconComponent = VercelLight;
      break;
    case "ViteJS":
      IconComponent = ViteJS;
      break;
    default:
      return <span>Icon not found</span>; // Handle unknown icons
  }

  return IconComponent ? <IconComponent /> : null; // Ensure a valid component is returned
}
