import { Database, Server, Code, Globe, Cloud, Cpu, Layers, GitBranch } from "lucide-react"

const technologies = [
  {
    category: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    items: ["Java", "Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    category: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  {
    category: "Frontend Technologies",
    icon: <Globe className="h-6 w-6" />,
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    items: ["Azure", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Software Development",
    icon: <Cpu className="h-6 w-6" />,
    items: ["Agile", "TDD", "API Development", "Debugging"],
  },
  {
    category: "Architecture",
    icon: <Layers className="h-6 w-6" />,
    items: ["Microservices", "System Design", "Scalable Applications"],
  },
  {
    category: "Version Control",
    icon: <GitBranch className="h-6 w-6" />,
    items: ["Git", "GitHub", "GitLab"],
  },
]

export function TechStack() {
  return (
    <>
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col p-6 bg-card rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            {tech.icon}
            <h3 className="font-medium">{tech.category}</h3>
          </div>
          <ul className="space-y-2">
            {tech.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

