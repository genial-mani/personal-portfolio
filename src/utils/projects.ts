import { projectInterface } from "./interfaces";
import {  
    JavaScript, TypeScript, HTML5, CSS3, TailwindCSS, Bootstrap5, Framer,  
    React, NextJs, NodeJs, ExpressJsLight, MongoDB, Prisma, MySQL,  
    Cloudinary, Render, VercelLight  
} from "developer-icons";

export const projects: projectInterface[] = [
    {
        src: '/Assets/doit-project.png',
        title: 'DoIt',
        desc: 'A task manager platform with a dashboard where users can manage their tasks efficiently, get the analysis of all the completed and pending tasks and interact within the platform in a seamless way. (Made use of advanced routing technique in Next.js)',
        techStack: [
            { name: "Next.js", icon: NextJs }, { name: "React", icon: React },
            { name: "TypeScript", icon: TypeScript },{ name: "TailwindCSS", icon: TailwindCSS },
            { name: "Framer", icon: Framer }, { name: "Node.js", icon: NodeJs },
            { name: "Express.js", icon: ExpressJsLight }, { name: "MongoDB", icon: MongoDB },
            { name: "Prisma ORM", icon: Prisma }, { name: "Cloudinary", icon: Cloudinary },
            { name: "Vercel", icon: VercelLight }
        ],
        liveLink: 'http://doit-ochre.vercel.app/',
        githubLink: 'https://github.com/genial-mani/task-manager',
    },
    {
        src: '/Assets/marketing-project.png',
        title: 'Marketing Hub',
        desc: 'A platform where products meet their right promoters. Clients search and connect with their influencers, track their social media promotions and chat with them within the platform.',
        techStack: [
            { name: "React", icon: React }, { name: "JavaScript", icon: JavaScript },
            { name: "TailwindCSS", icon: TailwindCSS }, { name: "Framer", icon: Framer },
            { name: "Node.js", icon: NodeJs }, { name: "Express.js", icon: ExpressJsLight },
            { name: "MongoDB", icon: MongoDB }, { name: "Cloudinary", icon: Cloudinary },
            { name: "Render", icon: Render }, { name: "Vercel", icon: VercelLight }
        ],
        liveLink: 'https://fullstack-marketing-hub.vercel.app/',
        githubLink: 'https://github.com/genial-mani/fullstack-marketing-hub',
    },
    {
        src: '/Assets/food-blog-project.png',
        title: 'Food Blog',
        desc: 'A platform where users can share their food recipes and search for specific recipes. Users can like the recipe and subscribe to the platform for email notifications.',
        techStack: [
            { name: "React", icon: React }, { name: "JavaScript", icon: JavaScript },
            { name: "TailwindCSS", icon: TailwindCSS }, { name: "Node.js", icon: NodeJs },
            { name: "Express.js", icon: ExpressJsLight }, { name: "MongoDB", icon: MongoDB },
            { name: "Cloudinary", icon: Cloudinary }, { name: "Render", icon: Render },
            { name: "Vercel", icon: VercelLight }
        ],
        liveLink: 'https://recipe-blogging-website-frontend.vercel.app/',
        githubLink: 'https://github.com/genial-mani/recipe-blogging-website-frontend',
    },
    {
        src: '/Assets/moovy-project.png',
        title: 'Moovy App',
        desc: 'A place where a user can find all the details about movies and search for new upcoming movies too.',
        techStack: [
            { name: "React", icon: React }, { name: "CSS3", icon: CSS3 },
            { name: "Bootstrap5", icon: Bootstrap5 }, { name: "Vercel", icon: VercelLight }
        ],
        liveLink: 'https://fullstack-marketing-hub.vercel.app/',
        githubLink: 'https://github.com/genial-mani/fullstack-marketing-hub',
    },
    {
        src: '/Assets/portal-project.png',
        title: 'Institute Placement Portal',
        desc: 'A platform where students and recruiters of the institute can interact, recruiters can post jobs and students can apply for them. Recruiters can also view student profiles despite applications.',
        techStack: [
            { name: "JavaScript", icon: JavaScript }, { name: "HTML5", icon: HTML5 },
            { name: "CSS3", icon: CSS3 }, { name: "Node.js", icon: NodeJs },
            { name: "Express.js", icon: ExpressJsLight }, { name: "MySQL", icon: MySQL }
        ],
        liveLink: '',
        githubLink: 'https://github.com/genial-mani/Placement-Cell-Portal',
    },
    {
        src: '/Assets/news-project.png',
        title: 'News App',
        desc: 'API-based News App with all the latest news across all countries. Users can choose the category and the country.',
        techStack: [
            { name: "React", icon: React }, { name: "CSS3", icon: CSS3 },
            { name: "Bootstrap5", icon: Bootstrap5 }
        ],
        liveLink: '',
        githubLink: 'https://github.com/genial-mani/Placement-Cell-Portal',
    },
];
