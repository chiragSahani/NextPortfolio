"use client"

import dynamic from "next/dynamic"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { socialLinks } from "@/lib/data"
import { GradientButton } from "@/components/ui/gradient-button"
import { Magnetic } from "@/components/ui/magnetic"

const GradientSphere = dynamic(() => import("@/components/ui/gradient-sphere"), {
  ssr: false,
  loading: () => <SphereFallback />,
})

function SphereFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-[clamp(16rem,32vw,30rem)] w-[clamp(16rem,32vw,30rem)] rounded-full bg-[conic-gradient(from_140deg,hsl(var(--grad-1)),hsl(var(--grad-2)),hsl(var(--grad-3)),hsl(var(--grad-4)),hsl(var(--grad-1)))] blur-2xl opacity-70 animate-spin-slow [animation-duration:24s]" />
    </div>
  )
}

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Hero compresses smoothly as the next section emerges
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const sphereScale = useTransform(scrollYProgress, [0, 1], [1, 1.35])
  const sphereOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const sphereY = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ===== Left — content ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 max-w-2xl"
        >
          <motion.div variants={item}>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Software Engineer · AI Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display font-bold text-display text-foreground"
          >
            CHIRAG
            <br />
            <span className="text-gradient-vivid">SAHANI</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground md:text-xl"
          >
            Building intelligent products and scalable systems. I build
            AI-powered products, full-stack platforms, and developer experiences
            that scale.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic strength={0.25}>
              <GradientButton variant="primary" size="lg" href="#projects">
                View Work
              </GradientButton>
            </Magnetic>
            <Magnetic strength={0.25}>
              <GradientButton variant="outline" size="lg" href="#contact">
                Contact
              </GradientButton>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon.toLowerCase()] || Mail
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-[0_8px_24px_-12px_hsl(var(--primary)/0.5)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </motion.div>
        </motion.div>

        {/* ===== Right — gradient sphere ===== */}
        <motion.div
          style={{ scale: sphereScale, opacity: sphereOpacity, y: sphereY }}
          className="relative mx-auto aspect-square w-full max-w-[17rem] xs:max-w-[20rem] sm:max-w-[26rem] lg:max-w-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-0"
          >
            <GradientSphere />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        style={{ opacity: contentOpacity }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary md:flex"
        aria-label="Scroll to about section"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
        Scroll
      </motion.button>
    </section>
  )
}
