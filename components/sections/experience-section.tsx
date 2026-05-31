"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { experience, education } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { GridScanLite } from "@/components/ui/grid-scan-lite"
import { GlassCard } from "@/components/ui/glass-card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export default function ExperienceSection() {
  // Filter experiences of type "work"
  const workExperiences = experience.filter((exp) => exp.type === "work")

  return (
    <section id="experience" className="section-padding relative z-10 overflow-hidden">
      <GridScanLite className="z-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          index="03"
          title="Experience & Education"
          subtitle="My professional trajectory and academic foundations in computer science."
          gradient={true}
          align="center"
        />

        {/* WORK EXPERIENCE TIMELINE */}
        <div className="mb-20">
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-12 flex items-center gap-3 justify-center md:justify-start">
            Work Experience
          </h3>

          <div className="relative border-l border-border/40 pl-6 md:pl-10 space-y-12">
            {/* Timeline Line Glow/Gradient */}
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent pointer-events-none" />

            {workExperiences.map((exp, idx) => (
              <motion.div
                key={exp.company + exp.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_12px_hsl(var(--primary))] z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <GlassCard
                  hover={true}
                  className="p-6 md:p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h4 className="font-display text-lg md:text-xl font-bold text-foreground">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium mt-1">
                        <span>{exp.company}</span>
                        <span className="text-muted-foreground/50">•</span>
                        <span className="text-muted-foreground font-normal">{exp.location}</span>
                      </div>
                    </div>
                    <span className="inline-block text-xs font-mono font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full border border-border/30 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="list-none space-y-2 mb-6 text-sm text-muted-foreground/90">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-primary mt-1.5 shrink-0 select-none">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 border-t border-border/20 pt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary/40 border border-border/30 px-2.5 py-0.5 rounded-full text-xs font-mono text-muted-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent my-16" />

        {/* EDUCATION */}
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-12 flex items-center gap-3 justify-center md:justify-start">
            Education
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
                  },
                }}
                className="h-full"
              >
                <GlassCard
                  hover={true}
                  className="p-6 md:p-8 flex flex-col justify-between h-full border border-border/40 hover:border-accent/20 transition-all duration-300"
                >
                  <div>
                    <div className="flex flex-col gap-2 mb-4">
                      <span className="inline-block text-[10px] font-mono font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20 w-fit">
                        {edu.period}
                      </span>
                      <h4 className="font-display text-lg font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-muted-foreground/90 font-medium">
                        {edu.institution}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
                      {edu.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="border-t border-border/20 pt-4 mt-auto">
                      <span className="block text-xs font-mono font-semibold uppercase text-accent mb-3 tracking-wider">
                        Key Accomplishments
                      </span>
                      <ul className="space-y-2">
                        {edu.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Check className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
