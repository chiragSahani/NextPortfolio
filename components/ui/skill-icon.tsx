import type { IconType } from "react-icons"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiRedux,
  SiShadcnui,
  SiReacthookform,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiCplusplus,
  SiOpenai,
  SiTensorflow,
  SiScikitlearn,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiDigitalocean,
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiGooglegemini,
  SiLangchain,
} from "react-icons/si"
import { FaAws, FaJava, FaBrain, FaRobot, FaDatabase, FaCode } from "react-icons/fa"
import { TbApi, TbBrandAzure, TbBrandVscode } from "react-icons/tb"
import type { ReactElement } from "react"

interface IconEntry {
  icon: IconType
  color: string
}

// Brand logo + a color that stays legible on the dark glass cards.
// Logos that are natively black/very dark (Next.js, Express, OpenAI, Vercel,
// shadcn, Flask, LangChain) are rendered white instead.
const ICON_MAP: Record<string, IconEntry> = {
  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Framer Motion": { icon: SiFramer, color: "#0099FF" },
  "HTML/CSS": { icon: SiHtml5, color: "#E34F26" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  "shadcn/ui": { icon: SiShadcnui, color: "#FFFFFF" },
  "React Hook Form": { icon: SiReacthookform, color: "#EC5990" },
  "React Native": { icon: SiReact, color: "#61DAFB" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  Python: { icon: SiPython, color: "#4B8BBE" },
  Flask: { icon: SiFlask, color: "#FFFFFF" },
  "REST APIs": { icon: TbApi, color: "#38BDF8" },
  Java: { icon: FaJava, color: "#F89820" },
  "C++": { icon: SiCplusplus, color: "#659AD2" },

  // AI & GenAI
  "GPT-4 / LLMs": { icon: SiOpenai, color: "#FFFFFF" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  NLP: { icon: FaBrain, color: "#C084FC" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  "Prompt Engineering": { icon: FaRobot, color: "#C084FC" },
  "OpenAI API": { icon: SiOpenai, color: "#FFFFFF" },
  "Google Gemini": { icon: SiGooglegemini, color: "#8E75B2" },
  LangChain: { icon: SiLangchain, color: "#FFFFFF" },
  "RAG Architecture": { icon: FaRobot, color: "#C084FC" },

  // Databases
  PostgreSQL: { icon: SiPostgresql, color: "#4F9CD9" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Supabase: { icon: SiSupabase, color: "#3FCF8E" },
  MySQL: { icon: SiMysql, color: "#5B8DBE" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },

  // DevOps & Cloud
  Azure: { icon: TbBrandAzure, color: "#0078D4" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "CI/CD": { icon: FaCode, color: "#38BDF8" },
  Git: { icon: SiGit, color: "#F05032" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  AWS: { icon: FaAws, color: "#FF9900" },
  DigitalOcean: { icon: SiDigitalocean, color: "#0080FF" },

  // Tools
  "VS Code": { icon: TbBrandVscode, color: "#007ACC" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  Netlify: { icon: SiNetlify, color: "#00C7B7" },

  // Data processing
  Olap: { icon: FaDatabase, color: "#14B8A6" },
  Oltp: { icon: FaDatabase, color: "#14B8A6" },
}

const FALLBACK: IconEntry = { icon: FaCode, color: "currentColor" }

interface SkillIconProps {
  name: string
  className?: string
}

export function SkillIcon({ name, className }: SkillIconProps): ReactElement {
  const { icon: Icon, color } = ICON_MAP[name] ?? FALLBACK
  return <Icon aria-hidden className={className} color={color} />
}
