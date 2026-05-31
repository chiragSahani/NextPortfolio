"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { profile, socialLinks, resumeUrl } from "@/lib/data"
import { GradientButton } from "@/components/ui/gradient-button"
import { Magnetic } from "@/components/ui/magnetic"
import HeroAnimation from "@/components/hero-animation"

const LineWaves = dynamic(() => import("@/components/ui/line-waves"), { ssr: false })

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden px-6 md:px-12 lg:px-24 gradient-bg py-20"
    >
      {/* WebGL animated lines background — reactbits LineWaves */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 [mask-image:linear-gradient(to_right,transparent_0%,transparent_45%,black_75%,black_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,transparent_40%,black_70%,black_100%)]">
        <LineWaves
          speed={0.25}
          warpIntensity={1.0}
          rotation={-45}
          brightness={0.3}
          color1="#2563eb"
          color2="#3b82f6"
          color3="#60a5fa"
          enableMouseInteraction
          mouseInfluence={1.2}
        />
      </div>

      {/* Readability scrim — darkens left half where text lives */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-background via-background/70 to-transparent md:via-background/40"
      />

      <HeroAnimation />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/20 text-xs font-medium text-primary mb-8"
        >
          ✦ Available for opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
        >
          Building Scalable <br />
          <span className="text-gradient">AI-Powered Digital</span> <br />
          Experiences
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-sans"
        >
          {profile.tagline}. {profile.description}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
        >
          <Magnetic strength={0.25}>
            <GradientButton variant="primary" size="lg" href="#projects">
              View Projects
            </GradientButton>
          </Magnetic>
          <Magnetic strength={0.25}>
            <GradientButton variant="secondary" size="lg" href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Download Resume
            </GradientButton>
          </Magnetic>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6"
        >
          {socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon.toLowerCase()] || Mail
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all duration-300 p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 border border-transparent hover:border-primary/20"
                aria-label={link.name}
              >
                <IconComponent className="h-5 w-5" />
              </a>
            )
          })}
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
        </motion.div>
      </div>
    </section>
  )
}
