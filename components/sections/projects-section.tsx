"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientButton } from "@/components/ui/gradient-button"
import { NumberedList, type NumberedListItem } from "@/components/ui/numbered-list"
import { GridScanLite } from "@/components/ui/grid-scan-lite"

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.category === "featured")
  const regularProjects = projects.filter((p) => p.category === "project")

  return (
    <section id="projects" className="section-padding relative z-10 gradient-bg overflow-hidden">
      {/* Lightweight CSS+SVG animated grid background */}
      <GridScanLite className="z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeader
          index="02"
          title="Featured Work"
          subtitle="Projects that demonstrate engineering depth, product thinking, and scalable architecture."
          gradient={true}
          align="center"
        />

        {/* Featured Projects - Stacked Cards (full-width image on top, content below) */}
        <div className="space-y-16 md:space-y-24 mb-24">
          {featuredProjects.map((project) => {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <GlassCard
                  hover={false}
                  className="flex flex-col gap-8 p-6 md:p-8 lg:p-10 border border-border/40 hover:border-primary/20 transition-colors duration-500"
                >
                  {/* Image — full-width on top, content below (stacked) */}
                  <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden group border border-border/30">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1040px"
                      className="object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <div>
                      {/* Badge */}
                      <span className="inline-block text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                        ✦ Featured Project
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                        {project.title}
                      </h3>

                      {/* Description — truncated by default, full text revealed on hover/focus */}
                      <p
                        tabIndex={0}
                        title={project.description}
                        className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base line-clamp-4 hover:line-clamp-none focus:line-clamp-none cursor-pointer transition-all duration-300"
                      >
                        {project.description}
                      </p>

                      {/* Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {project.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Metrics (inline block) */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-4 mb-6 border-y border-border/20 py-3">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="text-xs font-mono text-primary font-medium bg-primary/5 px-2 py-1 rounded border border-primary/10">
                              {metric}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-secondary/40 border border-border/30 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      {project.demoUrl && (
                        <GradientButton variant="primary" size="sm" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo <ExternalLink className="h-3.5 w-3.5 ml-1" />
                        </GradientButton>
                      )}
                      {project.githubUrl && (
                        <GradientButton variant="outline" size="sm" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          Source Code <Github className="h-3.5 w-3.5 ml-1" />
                        </GradientButton>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>

        {/* Other Contributions — Numbered list, reference-style */}
        {regularProjects.length > 0 && (
          <div>
            <div className="flex items-end justify-between mb-8 md:mb-10">
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground">
                Other Contributions
              </h3>
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground/60">
                {String(regularProjects.length).padStart(2, "0")} / {String(regularProjects.length).padStart(2, "0")}
              </span>
            </div>

            <NumberedList
              items={regularProjects.map<NumberedListItem>((p) => ({
                title: p.title,
                description: p.description,
                status: p.demoUrl ? "LIVE" : "ARCHIVED",
                statusTone: p.demoUrl ? "emerald" : "amber",
                href: p.demoUrl ?? p.githubUrl,
                meta: (
                  <div className="flex flex-wrap gap-1">
                    {p.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary/30 border border-border/20 px-2 py-0.5 rounded-full text-[10px] font-mono text-muted-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ),
              }))}
            />
          </div>
        )}
      </div>
    </section>
  )
}
