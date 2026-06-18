"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { profile, socialLinks, resumeUrl } from "@/lib/data"
import { Magnetic } from "@/components/ui/magnetic"
import { Reveal, TextReveal } from "@/components/ui/motion-primitives"

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-28"
    >
      {/* Animated gradient lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px] animate-aurora-b" />
        <div className="absolute left-[60%] top-[40%] h-[24rem] w-[24rem] rounded-full bg-grad-3/15 blur-[120px] animate-aurora-c" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for opportunities
          </span>
        </Reveal>

        <h2 className="mt-6 font-display text-display-sm font-bold tracking-tight text-foreground">
          <TextReveal text="Let's build something" />
          <br />
          <span className="text-gradient-vivid">
            <TextReveal text="extraordinary." delay={0.2} />
          </span>
        </h2>

        <Reveal y={20} delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm open to new roles and ambitious software projects. Whether you
            want to discuss a build, ask a question, or just say hello — my inbox
            is always open.
          </p>
        </Reveal>

        <Reveal y={20} delay={0.3}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_32px_-12px_hsl(var(--primary)/0.7)] transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Send Email
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal y={16} delay={0.4}>
          <div className="mx-auto mt-12 max-w-md border-t border-border pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Connect
            </p>
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon.toLowerCase()] || Mail
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
