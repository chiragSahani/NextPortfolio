export interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  demoUrl: string
  githubUrl: string
}

export interface CodeSnippet {
  title: string
  description: string
  language: string
  code: string
}

export interface Technology {
  name: string
  category: string
  experience: string
  proficiency: number
}

export interface Experience {
  title: string
  company: string
  period: string
  responsibilities: string[]
  technologies: string[]
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
}

