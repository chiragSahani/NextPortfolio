"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { Technology } from "@/lib/types"
import { Database, Server, Code, Globe, Cloud, Cpu, Layers, GitBranch } from "lucide-react"

interface TechCardProps {
  tech: Technology
  index: number
}

export function TechCard({ tech, index }: TechCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  const getIcon = () => {
    switch (tech.category) {
      case "Programming Languages":
        return <Code className="h-6 w-6" />
      case "Backend Development":
        return <Server className="h-6 w-6" />
      case "Databases":
        return <Database className="h-6 w-6" />
      case "Frontend Technologies":
        return <Globe className="h-6 w-6" />
      case "Cloud & DevOps":
        return <Cloud className="h-6 w-6" />
      case "Software Development":
        return <Cpu className="h-6 w-6" />
      case "Architecture":
        return <Layers className="h-6 w-6" />
      case "Version Control":
        return <GitBranch className="h-6 w-6" />
      default:
        return <Code className="h-6 w-6" />
    }
  }

  return (
    <motion.div className="tech-card" variants={item}>
      <div className="tech-card-inner">
        <Card className="tech-card-front h-full">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
            <div className="mb-4 p-3 rounded-full bg-primary/10">{getIcon()}</div>
            <h3 className="font-medium text-lg mb-1">{tech.name}</h3>
            <p className="text-sm text-muted-foreground">{tech.category}</p>
          </CardContent>
        </Card>
        <Card className="tech-card-back h-full">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
            <h3 className="font-medium text-lg mb-2">{tech.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">Experience: {tech.experience}</p>
            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: `${tech.proficiency}%` }}></div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Proficiency: {tech.proficiency}%</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

