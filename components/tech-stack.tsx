import { FaJs, FaPython, FaReact, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiAzure, SiGit } from "react-icons/si";

export const technologies = [
  { name: "JavaScript", category: "Programming Languages", icon: <FaJs /> },
  { name: "TypeScript", category: "Programming Languages", icon: <SiTypescript /> },
  { name: "Python", category: "Programming Languages", icon: <FaPython /> },
  { name: "React.js", category: "Frontend Technologies", icon: <FaReact /> },
  { name: "Tailwind CSS", category: "Frontend Technologies", icon: <SiTailwindcss /> },
  { name: "Node.js", category: "Backend Development", icon: <FaNodeJs /> },
  { name: "Express.js", category: "Backend Development", icon: <FaNodeJs /> },
  { name: "MongoDB", category: "Databases", icon: <SiMongodb /> },
  { name: "PostgreSQL", category: "Databases", icon: <SiPostgresql /> },
  { name: "Docker", category: "Cloud & DevOps", icon: <FaDocker /> },
  { name: "Azure", category: "Cloud & DevOps", icon: <SiAzure /> },
  { name: "Git", category: "Version Control", icon: <SiGit /> },
];
