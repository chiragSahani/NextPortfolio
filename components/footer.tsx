"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react"
import { socialLinks } from "@/lib/data"

const GridMotion = dynamic(() => import("@/components/ui/grid-motion"), { ssr: false })

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

const gridItems: (string | React.ReactNode)[] = [
  // Row 1
  "EduReach",
  "RAG",
  <span key="ts1" className="font-mono text-primary">TypeScript</span>,
  "AI Inbox",
  "Next.js 14",
  "GPT-4o",
  <span key="trao" className="font-display font-bold text-accent">Trao AI</span>,
  // Row 2
  "ATS Resume",
  "Gemini",
  "MongoDB",
  <span key="ts2" className="font-mono text-primary">React 19</span>,
  "Vapi",
  "LMS Dashboard",
  "Tailwind",
  // Row 3
  "CareConnect",
  "Framer Motion",
  <span key="ts3" className="font-display font-bold text-foreground">CHIRAG</span>,
  "Wedding",
  "Resume Formatter",
  "Express",
  "shadcn/ui",
  // Row 4
  "Military Asset",
  "Supabase",
  "WebSockets",
  <span key="ts4" className="font-mono text-primary">Node.js</span>,
  "Chat Room",
  "JWT",
  "Voicebot",
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative w-full border-t border-border/50 bg-background overflow-hidden">
      {/* GridMotion background — reactbits */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none opacity-25 [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%,black_70%,transparent_100%)]"
      >
        <GridMotion items={gridItems} gradientColor="hsl(var(--primary) / 0.15)" />
      </div>

      {/* Dark scrim for readability */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/80 via-background/60 to-background/90"
      />

      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-[2]" />

      <div className="relative z-10 container px-4 md:px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Brand Logo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group flex items-center"
            aria-label="Back to top"
          >
            <Image
              src="/Logo.png"
              alt="Chirag Sahani"
              width={1536}
              height={1024}
              className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-[opacity,filter] duration-300 group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
            />
          </motion.button>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            Back to top
          </motion.button>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Mail
              return (
                <motion.div key={link.name} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.url}
                    target={link.url.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Chirag Sahani. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground/60">
              Crafted with <Heart className="h-3 w-3 text-red-500/70" /> using Next.js &
              TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
 