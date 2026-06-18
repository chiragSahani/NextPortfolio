"use client"

import Image from "next/image"
import { ArrowUpRight, Github, Check } from "lucide-react"
import { projects } from "@/lib/data"
import type { Project } from "@/lib/types"
import { SectionHeader } from "@/components/ui/section-header"
import { Reveal, ParallaxLayer } from "@/components/ui/motion-primitives"
import { cn } from "@/lib/utils"

/* Browser-chrome device mockup that frames each project screenshot */
function BrowserMockup({ src, alt, url }: { src: string; alt: string; url?: string }) {
  const host = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "localhost:3000"
  return (
    <div className="group/mockup relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-40px_hsl(226_57%_20%/0.4)]">
      {/* gradient sheen */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      {/* top bar */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 hidden flex-1 truncate rounded-md bg-background/70 px-3 py-1 text-xs text-muted-foreground sm:block">
          {host}
        </div>
      </div>
      {/* screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform [transition-duration:1.2s] ease-out group-hover/mockup:scale-[1.04]"
        />
      </div>
    </div>
  )
}

function ProjectStory({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1
  const num = String(index + 1).padStart(2, "0")

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Mockup */}
      <Reveal
        y={40}
        className={cn("order-1", flipped ? "lg:order-2" : "lg:order-1")}
      >
        <ParallaxLayer distance={40}>
          {project.demoUrl || project.githubUrl ? (
            <a
              href={project.demoUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <BrowserMockup src={project.image} alt={project.title} url={project.demoUrl} />
            </a>
          ) : (
            <BrowserMockup src={project.image} alt={project.title} url={project.demoUrl} />
          )}
        </ParallaxLayer>
      </Reveal>

      {/* Content */}
      <Reveal
        y={30}
        delay={0.1}
        className={cn("order-2", flipped ? "lg:order-1" : "lg:order-2")}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-primary">{num}</span>
          <span className="h-px w-10 bg-gradient-to-r from-primary/60 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Featured Project
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-5 text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Problem / Solution from highlights + challenges */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-6 space-y-2.5">
            {project.highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Results / metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 9).map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.techStack.length > 9 && (
            <span className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 text-xs text-muted-foreground">
              +{project.techStack.length - 9}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-12px_hsl(var(--primary)/0.7)] transition-transform hover:-translate-y-0.5"
            >
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </Reveal>
    </div>
  )
}

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.category === "featured")

  return (
    <section id="projects" className="section-padding relative z-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHeader
          index="02"
          title="Selected Work"
          subtitle="Each project told as a product story — the problem, the build, and the result. Engineering depth meets product thinking."
          gradient
          align="center"
        />

        <div className="mt-8 space-y-28 md:space-y-36">
          {featured.map((project, i) => (
            <ProjectStory key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
