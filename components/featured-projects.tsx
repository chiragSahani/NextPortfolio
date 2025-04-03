"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

export function FeaturedProjects() {
  // Only show the first 3 projects
  const featuredProjects = projects.slice(0, 3)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className="mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {featuredProjects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </motion.div>
  )
}

