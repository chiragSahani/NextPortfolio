export interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  category: "featured" | "project"
  highlights?: string[]
  challenges?: string[]
  metrics?: string[]
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "ai" | "database" | "devops" | "tools" | "data processing" 
  icon?: string
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
  technologies: string[]
  type: "work" | "education"
}

export interface Education {
  degree: string
  institution: string
  period: string
  description: string
  achievements?: string[]
}

export interface Achievement {
  title: string
  issuer: string
  date: string
  description: string
  icon: "medal-gold" | "medal-silver" | "trophy" | "certificate" | "code"
  highlight?: boolean
}

export interface GitHubStats {
  totalRepos: number
  totalContributions: number
  longestStreak: number
  topLanguages: { name: string; percentage: number; color: string }[]
  featuredRepos: {
    name: string
    description: string
    stars: number
    language: string
    url: string
  }[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavItem {
  name: string
  href: string
}
