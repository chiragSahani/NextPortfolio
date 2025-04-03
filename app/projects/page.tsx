"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null)

  // Get unique tech categories
  const categories = Array.from(new Set(projects.flatMap((project) => project.techStack)))

  const filteredProjects = filter ? projects.filter((project) => project.techStack.includes(filter)) : projects

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
    <main className="flex flex-col items-center justify-center w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A collection of my work, side projects, and experiments
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button variant={filter === null ? "default" : "outline"} onClick={() => setFilter(null)} className="m-1">
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="m-1"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <motion.div
            className="mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

