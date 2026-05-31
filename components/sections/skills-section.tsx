"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skills, skillCategories } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { GridScanLite } from "@/components/ui/grid-scan-lite"
import { SkillIcon } from "@/components/ui/skill-icon"
import { cn } from "@/lib/utils"

// Single restrained accent glow for every category (no multi-color rainbow)
const skillGlow = "hover:shadow-[0_0_18px_hsl(var(--primary)/0.22)] hover:border-primary/50"

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  // Filter skills list
  const filteredSkills =
    activeFilter === "all" ? skills : skills.filter((s) => s.category === activeFilter)

  return (
    <section id="skills" className="section-padding relative z-10 gradient-bg overflow-hidden">
      <GridScanLite className="z-0" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeader
          index="04"
          title="Tech Ecosystem"
          subtitle="Technologies I use to build scalable, production-grade systems and AI integrations."
          gradient={true}
          align="center"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={cn(
              "px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 border",
              activeFilter === "all"
                ? "bg-primary text-white border-primary shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                : "glass border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
            )}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={cn(
                "px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 border",
                activeFilter === cat.key
                  ? "bg-primary text-white border-primary shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                  : "glass border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const glowClass = skillGlow

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className={cn(
                    "glass rounded-xl p-4 flex flex-col items-center justify-center gap-2.5 border border-border/40",
                    "transition-all duration-300 text-center h-32 select-none relative group overflow-hidden",
                    glowClass
                  )}
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Brand Icon */}
                  <SkillIcon
                    name={skill.name}
                    className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Skill Name */}
                  <span className="font-display text-sm font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>

                  {/* Category Label */}
                  <span className="text-[9px] font-mono font-medium text-muted-foreground uppercase tracking-wider">
                    {skill.category}
                  </span>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
