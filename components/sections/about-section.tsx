"use client"

import Image from "next/image"
import { profile } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Reveal } from "@/components/ui/motion-primitives"

/* Split "600+" -> { value: 600, suffix: "+" } */
function parseStat(raw: string): { value: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/)
  if (!match) return { value: 0, suffix: raw }
  return { value: Number(match[1]), suffix: match[2] }
}

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHeader
          index="01"
          title="Engineering Philosophy"
          subtitle="The best engineering is invisible. I build for performance, scale, and intelligence — from day one."
          gradient
        />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait */}
          <Reveal y={30}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-[conic-gradient(from_140deg,hsl(var(--grad-1)/0.5),hsl(var(--grad-3)/0.4),hsl(var(--grad-4)/0.4),hsl(var(--grad-1)/0.5))] opacity-70 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={520}
                  height={620}
                  className="aspect-[5/6] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full glass px-4 py-2 text-sm font-medium text-foreground">
                {profile.name} · {profile.location}
              </div>
            </div>
          </Reveal>

          {/* Philosophy */}
          <div className="space-y-6">
            {profile.philosophy.map((para, i) => (
              <Reveal key={i} y={20} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
                  <span className="font-medium text-foreground">{para.split(".")[0]}.</span>
                  {para.slice(para.indexOf(".") + 1)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Metrics band */}
        <Reveal y={24} className="mt-20">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {profile.stats.map((stat) => {
              const { value, suffix } = parseStat(stat.value)
              return (
                <div key={stat.label} className="bg-surface p-6 text-center md:p-8">
                  <div className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                    <span className="text-gradient">
                      <AnimatedCounter value={value} suffix={suffix} />
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
