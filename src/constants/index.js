import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/konpeeyush',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/konpeeyush',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Disney + Clone ',
        description: 'Developed a Disney+ clone app using React and Firebase, understood the concept to google auth and much more, also implemented css using styled components',
        link: 'https://github.com/konpeeyush/DisneyPlus-Clone',
    },
    {
        iconUrl: motion,
        theme: 'btn-back-green',
        name: 'AI Stylo',
        description: 'Built a web-based T-shirt customization platform that leverages React as the frontend framework, Node.js as the backend runtime, and Three.js for generating and visualizing T-shirt designs.',
        link: 'https://github.com/konpeeyush/AI-Stylo',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Cogni Draw',
        description: 'Designed an app to generate AI-generated images using the DALL-E API and incorporates Cloudinary for post-sharing functionality.',
        link: 'https://github.com/konpeeyush/CogniDraw',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Tic Tac Toe',
        description: 'Built a simple app using react to understand basic state management using useState also incorported various stylesheet techniques',
        link: 'https://github.com/konpeeyush/Tic-Tac-Toe',
    },
    
];