"use client"

import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { skills, skillCategories } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { SkillIcon } from "@/components/ui/skill-icon"
import { cn } from "@/lib/utils"

const filters = [{ key: "all", label: "All" }, ...skillCategories.map((c) => ({ key: c.key, label: c.label }))]

export default function SkillsSection() {
  const [active, setActive] = useState<string>("all")

  const visible =
    active === "all" ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHeader
          index="05"
          title="Technology Ecosystem"
          subtitle="A connected toolkit spanning frontend, backend, AI, data, and cloud — chosen for performance and scale."
          gradient
          align="center"
        />

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === f.key
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active === f.key && (
                <motion.span
                  layoutId="skill-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {f.label}
            </button>
          ))}
        </div>

        {/* Badge ecosystem */}
        <LayoutGroup>
          <motion.div
            layout
            className="flex flex-wrap justify-center gap-3"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.32, delay: (i % 12) * 0.015, ease: [0.21, 0.47, 0.32, 0.98] }}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-2.5 rounded-2xl border border-border bg-surface/70 px-3.5 py-2.5 shadow-[0_2px_10px_-6px_hsl(226_57%_20%/0.2)] transition-colors hover:border-primary/30"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[hsl(226_40%_11%)]">
                    <SkillIcon name={skill.name} className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
