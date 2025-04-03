"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
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

  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md project-card"
      variants={item}
    >
      <div className="relative aspect-video overflow-hidden project-card-image">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-1 group">
              <ExternalLink className="h-4 w-4" />
              Demo
              <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
            </Button>
          </Link>
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-1">
              <Github className="h-4 w-4" />
              Code
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

