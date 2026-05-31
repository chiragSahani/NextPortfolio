"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  index: string
  title: string
  subtitle?: string
  gradient?: boolean
  align?: "left" | "center"
}

const REVEAL_EASE = [0.21, 0.47, 0.32, 0.98] as const

const indexVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: REVEAL_EASE },
  },
}

const wordVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: REVEAL_EASE },
  },
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: REVEAL_EASE },
  },
}

export function SectionHeader({
  index,
  title,
  subtitle,
  gradient = false,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center"
  const words = title.split(" ")

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
      className={cn("mb-16 md:mb-20", isCenter && "text-center")}
    >
      {/* Section number badge */}
      <motion.div
        variants={indexVariants}
        className={cn(
          "flex items-center gap-4 mb-6",
          isCenter && "justify-center"
        )}
      >
        <span className="font-mono text-sm tracking-wider text-primary/80">
          {index}
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: REVEAL_EASE, delay: 0.15 }}
          className="h-px w-12 bg-gradient-to-r from-primary/60 to-transparent origin-left"
        />
      </motion.div>

      {/* Title — word-by-word mask reveal */}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]",
          gradient ? "text-gradient" : "text-foreground"
        )}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-1 mr-[0.25em] last:mr-0"
          >
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          className={cn(
            "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl",
            isCenter && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
