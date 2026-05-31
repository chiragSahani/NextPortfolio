"use client"

import { motion } from "framer-motion"
import { Trophy, Award, FileCheck, Code, LucideIcon } from "lucide-react"
import { achievements } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { GridScanLite } from "@/components/ui/grid-scan-lite"
import { GlassCard } from "@/components/ui/glass-card"

const iconMap: Record<string, LucideIcon> = {
  "medal-gold": Trophy,
  "medal-silver": Award,
  trophy: Trophy,
  certificate: FileCheck,
  code: Code,
}

const colorMap: Record<string, string> = {
  "medal-gold": "text-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.3)]",
  "medal-silver": "text-slate-400 shadow-[0_0_12px_rgba(148,163,184,0.3)]",
  trophy: "text-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.3)]",
  certificate: "text-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.3)]",
  code: "text-green-500 shadow-[0_0_12px_rgba(34,197,94,0.3)]",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative z-10 gradient-bg overflow-hidden">
      <GridScanLite className="z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeader
          index="06"
          title="Achievements & Recognition"
          subtitle="Honors, competitive programming milestones, and certifications."
          gradient={true}
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement) => {
            const IconComponent = iconMap[achievement.icon] || Award
            const iconColor = colorMap[achievement.icon] || "text-primary"
            const isHighlight = achievement.highlight === true

            return (
              <motion.div key={achievement.title} variants={itemVariants} className="h-full">
                <GlassCard
                  hover={true}
                  gradient={isHighlight}
                  glow={isHighlight}
                  className={`p-6 md:p-8 flex flex-col justify-between h-full border ${
                    isHighlight
                      ? "border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] bg-primary/[0.02]"
                      : "border-border/40"
                  } hover:border-primary/20 transition-all duration-300 relative group overflow-hidden`}
                >
                  {/* Subtle hover glow backdrop for highlighted items */}
                  {isHighlight && (
                    <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                  )}

                  <div>
                    {/* Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-secondary/35 border border-border/20 ${iconColor}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono font-medium text-muted-foreground bg-secondary/50 px-2.5 py-1 rounded-full border border-border/30">
                        {achievement.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h4>

                    {/* Issuer */}
                    <span className="block text-xs font-mono font-semibold text-primary/95 uppercase tracking-wider mb-4">
                      {achievement.issuer}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground/85 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
