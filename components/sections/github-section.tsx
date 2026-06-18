"use client"

import { Star, GitBranch, Github, ArrowUpRight } from "lucide-react"
import { githubStats, socialLinks } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives"

export default function GithubSection() {
  const githubUrl =
    socialLinks.find((l) => l.name.toLowerCase() === "github")?.url ??
    "https://github.com/chiragSahani"

  const stats = [
    { value: githubStats.totalRepos, suffix: "", label: "Repositories" },
    { value: githubStats.totalContributions, suffix: "+", label: "Contributions" },
    { value: githubStats.longestStreak, suffix: "d", label: "Best Streak" },
  ]

  return (
    <section id="github" className="section-padding relative z-10">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <SectionHeader
          index="06"
          title="Open Source & Activity"
          subtitle="Contributions, language breakdown, and highlighted repositories from my GitHub."
          gradient
          align="center"
        />

        {/* Stat cards */}
        <div className="mx-auto mb-10 grid max-w-2xl grid-cols-3 gap-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="surface-card rounded-2xl p-5 text-center md:p-6">
                <div className="font-display text-2xl font-bold md:text-3xl">
                  <span className="text-gradient">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </span>
                </div>
                <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Language distribution */}
        <Reveal y={20} className="mx-auto mb-14 max-w-2xl">
          <div className="surface-card rounded-2xl p-6">
            <span className="mb-4 block text-center text-xs font-semibold uppercase tracking-wider text-primary">
              Top Languages
            </span>
            <div className="mb-5 flex h-3 w-full overflow-hidden rounded-full border border-border bg-surface-2">
              {githubStats.topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  className="h-full"
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {githubStats.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span style={{ backgroundColor: lang.color }} className="h-2 w-2 shrink-0 rounded-full" />
                  <span className="text-xs text-muted-foreground">
                    {lang.name} <span className="text-foreground/70">({lang.percentage}%)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Featured repos */}
        <h4 className="mb-8 flex items-center justify-center gap-2 font-display text-lg font-bold text-foreground">
          <GitBranch className="h-4 w-4 text-primary" /> Featured Repositories
        </h4>
        <Stagger className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          {githubStats.featuredRepos.map((repo) => (
            <StaggerItem key={repo.name}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_50px_-30px_hsl(var(--primary)/0.5)]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-display text-sm font-bold text-primary">
                    {repo.name}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {repo.stars}
                  </span>
                </div>
                <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {repo.description}
                </p>
                <span className="mt-auto border-t border-border pt-3 text-[11px] font-medium text-muted-foreground">
                  {repo.language}
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Github className="h-4 w-4" /> View GitHub Profile
          </a>
        </Reveal>
      </div>
    </section>
  )
}
