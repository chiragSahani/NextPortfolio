"use client"

import { motion } from "framer-motion"
import { TechCard } from "@/components/tech-card"
import { technologies } from "@/lib/data"

export function FeaturedTechnologies() {
  // Only show the first 4 technologies
  const featuredTechnologies = technologies.slice(0, 4)

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
      className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-4 mt-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {featuredTechnologies.map((tech, index) => (
        <TechCard key={index} tech={tech} index={index} />
      ))}
    </motion.div>
  )
}

