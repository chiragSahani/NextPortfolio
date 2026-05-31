"use client"

import { motion } from "framer-motion"
import { Star, GitBranch, Github, ExternalLink } from "lucide-react"
import { githubStats, socialLinks } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { GridScanLite } from "@/components/ui/grid-scan-lite"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { GradientButton } from "@/components/ui/gradient-button"

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

export default function GithubSection() {
  const githubUrl = socialLinks.find((link) => link.name.toLowerCase() === "github")?.url || "https://github.com/chiragSahani"

  return (
    <section id="github" className="section-padding relative z-10 overflow-hidden">
      <GridScanLite className="z-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          index="05"
          title="Open Source & Activity"
          subtitle="Contributions, metrics, and highlighted projects from my GitHub profile."
          gradient={true}
          align="center"
        />

        {/* GitHub Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mb-12"
        >
          <motion.div variants={itemVariants}>
            <GlassCard hover={true} className="p-4 md:p-6 text-center border border-border/40 flex flex-col justify-center h-full">
              <span className="font-display text-2xl md:text-3xl font-bold text-gradient mb-1.5 block">
                <AnimatedCounter value={githubStats.totalRepos} />
              </span>
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                Total Repos
              </span>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard hover={true} className="p-4 md:p-6 text-center border border-border/40 flex flex-col justify-center h-full">
              <span className="font-display text-2xl md:text-3xl font-bold text-gradient mb-1.5 block">
                <AnimatedCounter value={githubStats.totalContributions} />
              </span>
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                Contributions
              </span>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard hover={true} className="p-4 md:p-6 text-center border border-border/40 flex flex-col justify-center h-full">
              <span className="font-display text-2xl md:text-3xl font-bold text-gradient mb-1.5 block">
                <AnimatedCounter value={githubStats.longestStreak} suffix="d" />
              </span>
              <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                Best Streak
              </span>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Language Distribution Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-16 glass border border-border/45 p-6 rounded-2xl"
        >
          <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-4 text-center">
            Top Languages Distribution
          </span>

          {/* Bar Chart */}
          <div className="h-3.5 w-full rounded-full overflow-hidden flex bg-secondary/30 mb-5 border border-border/20">
            {githubStats.topLanguages.map((lang) => (
              <div
                key={lang.name}
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color,
                }}
                className="h-full transition-all duration-500 first:rounded-l-full last:rounded-r-full"
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {githubStats.topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span
                  style={{ backgroundColor: lang.color }}
                  className="h-2 w-2 rounded-full shrink-0"
                />
                <span className="text-xs font-mono font-medium text-muted-foreground">
                  {lang.name} <span className="text-foreground/80">({lang.percentage}%)</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Repositories Grid */}
        <div className="mb-12">
          <h4 className="font-display text-lg font-bold text-foreground text-center mb-8 flex items-center justify-center gap-2">
            <GitBranch className="h-4 w-4 text-primary" /> Featured Repositories
          </h4>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {githubStats.featuredRepos.map((repo) => (
              <motion.div key={repo.name} variants={itemVariants} className="h-full">
                <GlassCard
                  hover={true}
                  className="p-5 border border-border/40 flex flex-col justify-between h-full hover:border-primary/20 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-sm font-bold text-primary hover:underline flex items-center gap-1.5"
                      >
                        {repo.name} <ExternalLink className="h-3 w-3 shrink-0" />
                      </a>
                      <span className="flex items-center gap-1 text-[10px] font-mono font-medium text-muted-foreground">
                        <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                        {repo.stars}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground/85 leading-relaxed mb-4 line-clamp-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 border-t border-border/10 pt-3 mt-auto">
                    <span className="text-[10px] font-mono font-medium text-muted-foreground">
                      {repo.language}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View Profile CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <GradientButton variant="primary" size="md" href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" /> View GitHub Profile
          </GradientButton>
        </motion.div>
      </div>
    </section>
  )
}
