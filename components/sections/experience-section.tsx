"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin } from "lucide-react"
import { experience } from "@/lib/data"
import type { Experience } from "@/lib/types"
import { SectionHeader } from "@/components/ui/section-header"
import { Reveal } from "@/components/ui/motion-primitives"
import { cn } from "@/lib/utils"

function TimelineItem({ role, index }: { role: Experience; index: number }) {
  const isCurrent = index === 0

  return (
    <Reveal y={28} delay={index * 0.05} className="relative pl-10 md:pl-14">
      {/* node */}
      <span
        className={cn(
          "absolute left-0 top-1.5 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border md:left-1",
          isCurrent
            ? "border-primary/40 bg-primary text-primary-foreground shadow-[0_0_0_6px_hsl(var(--primary)/0.12)]"
            : "border-border bg-surface text-muted-foreground"
        )}
      >
        <Briefcase className="h-3.5 w-3.5" />
      </span>

      <div
        className={cn(
          "rounded-2xl border p-6 transition-colors md:p-7",
          isCurrent
            ? "surface-card border-primary/20"
            : "border-border bg-surface/60"
        )}
      >
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-lg font-bold tracking-tight text-foreground md:text-xl">
            {role.title}
          </h3>
          {isCurrent && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Current
            </span>
          )}
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-semibold text-primary">{role.company}</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> {role.location.trim()}
          </span>
          <span className="text-muted-foreground">· {role.period}</span>
        </div>

        <ul className="mt-4 space-y-2.5">
          {role.responsibilities.map((r, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              <span className="text-pretty">{r}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {role.technologies.slice(0, 12).map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {role.technologies.length > 12 && (
            <span className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 text-xs text-muted-foreground">
              +{role.technologies.length - 12}
            </span>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <SectionHeader
          index="04"
          title="Experience"
          subtitle="Impact, ownership, and engineering decisions across AI products and full-stack platforms."
          gradient
        />

        <div className="relative">
          {/* timeline rail */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute left-0 top-2 h-full w-px origin-top bg-gradient-to-b from-primary/50 via-border to-transparent md:left-1"
          />
          <div className="space-y-8">
            {experience.map((role, i) => (
              <TimelineItem key={role.company + i} role={role} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
