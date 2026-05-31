import type {
  Project,
  Skill,
  Experience,
  Education,
  Achievement,
  GitHubStats,
  SocialLink,
  NavItem,
} from "@/lib/types"

// ===== NAVIGATION =====
export const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

// ===== SOCIAL LINKS =====
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/chiragSahani",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chiragsahani/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:chiragsahani093@gmail.com",
    icon: "mail",
  },
]

export const resumeUrl =
  "https://drive.google.com/file/d/13LDiPleqBePhF-Z-mWzgQ_cfyg1sMbdL/view?usp=drive_link"

// ===== PROFILE =====
export const profile = {
  name: "Chirag Sahani",
  title: "Software Engineer",
  tagline: "Built for Performance. Engineered for Scale. Powered by Intelligence.",
  description:
    "Building production-grade applications and intelligent platforms using React, Next.js, TypeScript, Node.js, Express.js, AI workflows, RAG pipelines, OLTP systems, scalable backend architecture, and modern system design principles. I specialize in architecting high-performance full-stack applications engineered for scalability, reliability, real-time performance, and exceptional user experiences.",
  philosophy: [
    "Great software feels effortless. The best engineering is invisible — users should experience speed, intelligence, and reliability without ever noticing the complexity behind it.",

    "I build systems with a long-term engineering mindset, prioritizing scalability, performance, type safety, developer experience, and maintainable architecture from day one.",

    "From AI-powered platforms and RAG pipelines to high-performance dashboards and distributed backend systems, I engineer products designed to scale, evolve, and deliver real-world impact.",
  ],
  location: "India",
  email: "chiragsahani093@gmail.com",
  image:
    "https://res.cloudinary.com/dlyctssmy/image/upload/v1734845393/android-chrome-512x512_oh3h9a.png",
  stats: [
    { label: "DSA Problems", value: "600+", description: "Solved across platforms" },
    { label: "GitHub Repos", value: "80+", description: "Public projects shipped" },
    { label: "Months at Trao AI", value: "18+", description: "Software Developer role" },
    { label: "Tech Stack", value: "30+", description: "Technologies mastered" },
  ],
}

// ===== PROJECTS =====
export const projects: Project[] = [
  {
    title: "AI-Powered Learning Management System",
    description:
      "Architected and developed LMS, a production-grade AI-powered Learning Management System using Next.js 14, TypeScript, Node.js, Express.js, MongoDB, Prisma ORM, and Redis, delivering a scalable platform for learners, instructors, and administrators. Built secure authentication, role-based access control (RBAC), course management, assessments, content delivery, learner progress tracking, and administrative dashboards through a modular full-stack architecture. Designed and orchestrated RAG-based AI agents using LangChain, LangGraph, OpenAI models, embedding pipelines, and Qdrant Vector Database, enabling semantic search, context-aware question answering, intelligent content generation, and personalized learning assistance. Developed document ingestion, chunking, embedding, and retrieval workflows to power AI-driven learning experiences across large knowledge bases. Leveraged OLTP and OLAP data architectures to support both high-volume transactional LMS operations and analytical reporting for learner engagement and performance insights. Optimized database access through Prisma ORM, indexing strategies, caching layers, and efficient API design, resulting in a highly maintainable, enterprise-grade platform capable of supporting AI-enhanced learning at scale.",
    techStack: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Yup",
      "Better Auth",
      "Axios",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Qdrant Vector Database",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "RAG Architecture",
      "AI Agents",
      "Embedding Models",
      "OLTP",
      "OLAP",
      "Docker",
      "GitHub Actions",
      "AWS"
    ],
    image: "/lms.png",
    category: "featured",
    highlights: [
      "Next.js 14 App Router with middleware-based protected routes",
      "Full authentication flow: register, login, forgot password, reset password",
      "Centralized API service layer with Axios calling the LMS backend",
      "Form management with React Hook Form + Yup schema validation",
      "shadcn/ui component system with Tailwind theming",
    ],
    challenges: [
      "Designing a typed API layer that gracefully handles auth token refresh and error states",
      "Coordinating client/server contracts between the LMS client and the LMS backend API",
    ],
    metrics: ["Next.js 14 App Router", "Better-auth", "RAG + Vector Search", "Agent Orchestration with LangGraph"],
  },
  {
    title: "EduReach — AI College Counseling Platform",
    description:
      "Full-stack AI-powered college counseling platform with a RAG-based chatbot, voice counselor calls via Vapi, persistent conversation history, and a personalized dashboard. Built with React 19, Express 5, and MongoDB Atlas.",
    techStack: ["React 19", "TypeScript", "Express 5", "MongoDB Atlas", "OpenAI GPT-4o-mini", "Vapi", "Tailwind 4", "Framer Motion"],
    demoUrl: "https://edu-reach-1.onrender.com/",
    githubUrl: "https://github.com/chiragSahani/edu-reach",
    image:
      "/edu.png",
    category: "featured",
    highlights: [
      "RAG-powered chatbot using GPT-4o-mini with knowledge base grounding",
      "AI voice counselor for outbound calls via Vapi integration",
      "Persistent chat history with MongoDB-backed conversation storage",
      "JWT auth with bcrypt password hashing and rate limiting",
      "WCAG-conscious UI: ARIA labels, skip nav, focus trapping, reduced-motion support",
    ],
    challenges: [
      "Engineering a RAG pipeline that stays grounded in the knowledge base without hallucinating",
      "Building accessible, animated UI without compromising motion-sensitive users",
    ],
    metrics: ["RAG + Voice AI", "GPT-4o-mini grounded", "Full-stack TypeScript"],
  },
  {
    title: "AI Inbox Onebox — Enterprise Email Intelligence",
    description:
      "Enterprise-grade AI-powered email management platform with real-time IMAP synchronization, intelligent inbox categorization, and RAG-based suggested replies — designed to make high-volume inboxes actionable.",
    techStack: ["TypeScript", "Node.js", "IMAP", "RAG", "LLM APIs", "MongoDB", "WebSockets"],
    githubUrl: "https://github.com/chiragSahani/ai-based-inbox-onebox",
    image:
      "/inbox.png",
    category: "featured",
    highlights: [
      "Real-time IMAP sync across multiple inboxes with WebSocket push updates",
      "Intelligent categorization to surface high-signal messages first",
      "RAG-based suggested replies trained on user's tone and prior responses",
      "Enterprise-ready architecture: multi-tenant, auditable, secure",
    ],
    challenges: [
      "Building a reliable IMAP sync layer that handles reconnection, dedup, and large mailboxes",
      "Tuning RAG context windows to balance reply quality vs. token cost",
    ],
    metrics: ["Real-time IMAP", "RAG suggested replies", "Enterprise-grade"],
  },
  {
    title: "ResumeATS Analyser — AI Resume Optimization",
    description:
      "Live AI-powered platform that scores resumes against job descriptions, surfaces keyword gaps, and uses Google Gemini to rewrite bullet points for ATS compatibility — in under 2 minutes.",
    techStack: ["React 19", "Vite 7", "Node.js", "Express 4", "MongoDB Atlas", "Google Gemini", "JWT", "Framer Motion", "TanStack Query"],
    demoUrl: "https://ats-resume-9807.onrender.com/",
    githubUrl: "https://github.com/chiragSahani/ats-resume",
    image:
      "/ats.png",
    category: "featured",
    highlights: [
      "ATS compatibility score with detailed keyword gap analysis",
      "Gemini-powered bullet-point rewrites for stronger impact and ATS parsing",
      "PDF resume parsing via Multer + pdf-parse",
      "JWT-secured accounts with bcryptjs hashed credentials",
      "Single-service full-stack deployment on Render",
    ],
    challenges: [
      "Reliable PDF parsing across the wide variance of real-world resume layouts",
      "Prompt engineering Gemini to produce ATS-friendly rewrites that stay truthful",
    ],
    metrics: ["Live on Render", "Gemini-powered", "<2 min analysis"],
  },
  {
    title: "CryptoWeather Nexus",
    description:
      "Real-time multi-source dashboard combining cryptocurrency market data with weather analytics, featuring WebSocket live updates and advanced state management.",
    techStack: ["Next.js", "TypeScript", "Redux Toolkit", "WebSockets", "Tailwind CSS"],
    demoUrl: "https://chiragnexus.netlify.app/",
    githubUrl: "https://github.com/chiragSahani/Nexus.git",
    image:
      "/Dashboard.png",
    category: "featured",
    highlights: [
      "Live WebSocket integration for real-time crypto price streaming",
      "Redux Toolkit with normalized state for complex data relationships",
      "Multi-API orchestration with error boundaries and fallbacks",
      "Responsive dashboard with interactive data visualizations",
    ],
    challenges: [
      "Managing WebSocket reconnection and data consistency",
      "Optimizing re-renders with normalized Redux state",
    ],
    metrics: ["Live data streams", "Multi-API integration", "Real-time updates"],
  },
  {
    title: "Resume Formatter",
    description:
      "AI-powered web app that transforms unstructured resume/CV documents (PDF, DOCX) into a structured, editable format and exports back to PDF / DOCX / TXT.",
    techStack: ["TypeScript", "React", "AI / LLM", "PDF parsing"],
    demoUrl: "https://github.com/chiragSahani/resume-formatter",
    githubUrl: "https://github.com/chiragSahani/resume-formatter",
    image:
      "/formatter.png",
    category: "featured",
    highlights: [
      "AI-driven extraction of structured fields from messy resumes",
      "Round-trip export: PDF / DOCX / TXT with preserved layout intent",
      "Editable structured view before export",
    ],
  },
  {
    title: "Wedding Website",
    description:
      "Modern, animated wedding event site with TypeScript — built as a personal full-stack project for an upcoming celebration.",
    techStack: ["TypeScript", "React", "Tailwind CSS"],
    demoUrl: "https://wedding-anumollife.netlify.app/",
    githubUrl: "https://github.com/chiragSahani/wedding-website",
    image:
      "/wedding.png",
    category: "featured",
    highlights: [
      "Custom event landing experience with rich animations",
      "Fully responsive design tuned for mobile-first guest flows",
    ],
  },
  {
    title: "Nxt Trendz E-Commerce",
    description:
      "Full-stack e-commerce platform with JWT authentication, product catalog, cart system, and secure checkout — built with production-grade architecture.",
    techStack: ["React", "JWT Authentication", "REST APIs", "CSS"],
    demoUrl: "https://chiragtech.ccbp.tech/",
    githubUrl: "https://github.com/chiragSahani/ecommQuadB.git",
    image:
      "/trendz.png",
    category: "featured",
    highlights: [
      "JWT-based authentication with protected routes",
      "Product catalog with search, filter, and sort",
      "Cart state management with persistent storage",
      "RESTful API integration with error handling",
    ],
  },
 
]

// ===== SKILLS =====
export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "shadcn/ui", category: "frontend" },
  { name: "React Hook Form", category: "frontend" },
  {name:"React Native", category:"frontend"},
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "C++", category: "backend" },
  // AI & GenAI
  { name: "GPT-4 / LLMs", category: "ai" },
  { name: "TensorFlow", category: "ai" },
  { name: "NLP", category: "ai" },
  { name: "Scikit-learn", category: "ai" },
  { name: "Prompt Engineering", category: "ai" },
  // Databases
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Supabase", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Firebase", category: "database" },
  // DevOps & Cloud
  { name: "Azure", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "DigitalOcean", category: "devops" },
  // Tools
  { name: "VS Code", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Netlify", category: "tools" },
  // AI & GenAI
  { name: "OpenAI API", category: "ai" },
  { name: "Google Gemini", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "RAG Architecture", category: "ai" },

//data Analytics
{name:"Olap", category:"data processing"},
{name:"Oltp", category:"data processing"},
]

export const skillCategories = [
  { key: "frontend", label: "Frontend", color: "from-blue-500 to-cyan-500" },
  { key: "backend", label: "Backend", color: "from-green-500 to-emerald-500" },
  { key: "ai", label: "AI & GenAI", color: "from-purple-500 to-pink-500" },
  { key: "database", label: "Databases", color: "from-orange-500 to-yellow-500" },
  { key: "devops", label: "DevOps & Cloud", color: "from-sky-500 to-indigo-500" },
  { key: "tools", label: "Tools", color: "from-rose-500 to-red-500" },
] as const

// ===== EXPERIENCE =====
export const experience: Experience[] = [
  {
    title: "Software Development Engineer AI",
    company: "Trao AI",
    location: "New Delhi",
    period: "August 2025 — Present · 1 yrs",
    type: "work",
    responsibilities: [
      "Architecting and shipping production-grade AI-powered web applications, including a Next.js 14 LMS dashboard with JWT authentication, protected routing, and a typed REST API layer integrated with the LMS backend",
      "Building enterprise email intelligence systems with real-time IMAP synchronization, RAG-based suggested replies, and intelligent categorization (AI Inbox Onebox)",
      "Designing reusable component systems with shadcn/ui, TailwindCSS, and React Hook Form + Yup validation across multiple internal products",
      "Owning end-to-end delivery: system design, API contracts, database schemas, deployment, and iteration on user feedback",
    ],
    technologies: ["Next.js 14", "TypeScript", "React 19", "Node.js", "MongoDB", "Better-auth", "shadcn/ui", "TailwindCSS", "OpenAI / Gemini", "RAG","LangChain", "LangGraph", "Prisma ORM", "Redis", "JWT Authentication", "Framer Motion", "TanStack Query", "Docker", "DigitalOcean", "AWS","CI/CD with GitHub Actions"],
  },
  {
    title: "Associate Software Engineer (Internship)",
    company: "Nxtwave",
    location: "Hyderabad ",
    period: "May 2025 — August 2025",
    type: "work",
    responsibilities: [
      "Developed full-stack applications using React, Node.js, and MongoDB, delivering production-ready projects with a focus on clean architecture and maintainability ,RAG-based AI agents using LangChain and OpenAI models, enabling intelligent features like semantic search and context-aware question answering , React Native mobile app development for cross-platform user experiences, implementing features such as authentication, API integration, and responsive design , Collaborated in an agile team environment, participating in code reviews, sprint planning, and iterative development cycles to deliver high-quality software solutions",
    ],
    technologies: ["JavaScript", "Python", "React", "Node.js", "React Native", "MongoDB", "OpenAI", "LangChain", "RAG Architecture", "Git", "Agile Methodologies"],
  },
  {
    title: "Content Strategist (Internship) - Software Development Focus",
    company: "UpGrad",
    location: "Bangalore",
    period: "October 2024 — March 2025",
    type: "work",
    responsibilities: [
      "Created in-depth technical content on software development topics, including tutorials, project walkthroughs, and industry insights, to educate and engage a developer audience , Developed comprehensive guides on full-stack development, AI integration, and modern web technologies, contributing to UpGrad's educational resources for aspiring software engineers , Collaborated with subject matter experts to ensure technical accuracy and relevance of content, while optimizing for SEO and readability to maximize reach and impact",
    ],
    technologies: ["JavaScript", "Python", "React", "Node.js", "AI / LLMs", "Web Development", "Content Strategy", "SEO Optimization", "Technical Writing","Design Software Architecture Diagrams", "Code Snippet Creation", "Collaboration with SMEs"],
  },
]

// ===== EDUCATION =====
export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Chandigarh Group of Colleges (CGC), Mohali",
    period: "Aug 2021 — May 2025",
    description:
      "Gold Medalist — GPA: 8.7/10.0. Deep focus on Data Structures, Algorithms, System Design, DBMS, Operating Systems, and Software Engineering.",
    achievements: [
      "Gold Medalist for Academic Excellence",
      "Ranked in top 5% of the class",
      "Active member of the college coding club",
    ],
  },
  {
    degree: "Industry Ready Certification (In Progress)./ MS in Computer Science",
    institution: "Nxtwave / Woolf University, England (via NxtWave)",
    period: "2022 — 2026 (In Progress)",
    description:
      "Advanced studies in AI, Cloud Computing, and Full-Stack Development with hands-on project-based learning.",
    achievements: [
      "Ranked top in DSA contests by NxtWave",
      "Built scalable applications using modern tech stack",
    ],
  },
]

// ===== ACHIEVEMENTS =====
export const achievements: Achievement[] = [
  {
    title: "Gold Medalist — Academic Excellence",
    issuer: "CGC Jhanjeri",
    date: "2025",
    description:
      "Awarded gold medal for outstanding academic performance throughout the B.Tech program with 8.7 GPA.",
    icon: "medal-gold",
    highlight: true,
  },
  {
    title: "Silver Medal — Skill India State Level",
    issuer: "Skill India",
    date: "2024",
    description:
      "Secured silver medal in Industry 4.0 Domain at the state level competition organized by Skill India.",
    icon: "medal-silver",
    highlight: true,
  },
  {
    title: "Ranked 12th — National DSA Contest",
    issuer: "NxtWave",
    date: "2025",
    description:
      "Secured 12th position in the national level Data Structures and Algorithms contest among thousands of participants.",
    icon: "trophy",
  },
  {
    title: "1300+ DSA Problems Solved",
    issuer: "LeetCode, HackerRank, CodeChef",
    date: "2021 — 2025",
    description:
      "Solved over 1300 problems across multiple competitive programming platforms, demonstrating strong algorithmic thinking.",
    icon: "code",
    highlight: true,
  },
  {
    title: "Industry-Ready Certification (IRC)",
    issuer: "NxtWave",
    date: "2023",
    description:
      "Completed the Industry-Ready Certification with distinction, covering full-stack development and cloud technologies.",
    icon: "certificate",
  },
]

// ===== GITHUB STATS =====
export const githubStats: GitHubStats = {
  totalRepos: 81,
  totalContributions: 1200,
  longestStreak: 60,
  topLanguages: [
    { name: "TypeScript", percentage: 48, color: "#3178c6" },
    { name: "JavaScript", percentage: 30, color: "#f7df1e" },
    { name: "Python", percentage: 12, color: "#3776ab" },
    { name: "HTML/CSS", percentage: 7, color: "#e34c26" },
    { name: "Other", percentage: 3, color: "#b07219" },
  ],
  featuredRepos: [
    {
      name: "edu-reach",
      description: "AI college counseling platform with RAG chatbot + voice calls (Vapi)",
      stars: 1,
      language: "TypeScript",
      url: "https://github.com/chiragSahani/edu-reach",
    },
    {
      name: "ai-based-inbox-onebox",
      description: "Enterprise email AI: IMAP sync, categorization, RAG suggested replies",
      stars: 2,
      language: "TypeScript",
      url: "https://github.com/chiragSahani/ai-based-inbox-onebox",
    },
    {
      name: "ats-resume",
      description: "Live AI resume analyser with Gemini-powered ATS optimization",
      stars: 1,
      language: "JavaScript",
      url: "https://github.com/chiragSahani/ats-resume",
    },
    {
      name: "lms-dashboard",
      description: "Production Next.js 14 LMS client built at Trao AI",
      stars: 1,
      language: "TypeScript",
      url: "https://github.com/chiragSahani/lms-dashboard",
    },
    {
      name: "CareConnect",
      description: "Healthcare booking platform — live on Netlify",
      stars: 2,
      language: "TypeScript",
      url: "https://github.com/chiragSahani/CareConnect",
    },
    {
      name: "resume-formatter",
      description: "AI-powered PDF/DOCX resume parser with round-trip export",
      stars: 2,
      language: "TypeScript",
      url: "https://github.com/chiragSahani/resume-formatter",
    },
  ],
}
