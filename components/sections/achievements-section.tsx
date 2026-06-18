"use client"

import { Trophy, Award, FileCheck, Code, type LucideIcon } from "lucide-react"
import { achievements } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  "medal-gold": Trophy,
  "medal-silver": Award,
  trophy: Trophy,
  certificate: FileCheck,
  code: Code,
}

const accentMap: Record<string, string> = {
  "medal-gold": "text-amber-500 bg-amber-500/10",
  "medal-silver": "text-slate-400 bg-slate-400/10",
  trophy: "text-amber-500 bg-amber-500/10",
  certificate: "text-primary bg-primary/10",
  code: "text-emerald-500 bg-emerald-500/10",
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHeader
          index="07"
          title="Achievements & Recognition"
          subtitle="Honors, competitive programming milestones, and certifications."
          gradient
          align="center"
        />

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => {
            const Icon = iconMap[a.icon] || Award
            const accent = accentMap[a.icon] || "text-primary bg-primary/10"
            return (
              <StaggerItem key={a.title} className="h-full">
                <div
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 md:p-8",
                    a.highlight
                      ? "surface-card border-primary/20"
                      : "border-border bg-surface/60 hover:border-primary/30"
                  )}
                >
                  {a.highlight && (
                    <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br from-primary/15 to-grad-3/15 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  )}
                  <div className="mb-6 flex items-center justify-between">
                    <div className={cn("grid h-12 w-12 place-items-center rounded-xl", accent)}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-border bg-surface-2/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {a.date}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {a.title}
                  </h4>
                  <span className="mt-1.5 block text-xs font-semibold uppercase tracking-wider text-primary/90">
                    {a.issuer}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
