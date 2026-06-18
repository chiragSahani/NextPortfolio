"use client"

import { useRef, type ReactNode } from "react"
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion"
import { cn } from "@/lib/utils"

export const EASE = [0.21, 0.47, 0.32, 0.98] as const

/* ---------- Reveal: scroll-in fade/slide with optional stagger ---------- */

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  as?: "div" | "section" | "li" | "span"
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  )
}

/* ---------- Stagger container + item ---------- */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

interface StaggerProps {
  children: ReactNode
  className?: string
  once?: boolean
}

export function Stagger({ children, className, once = true }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  )
}

/* ---------- TextReveal: word-by-word mask reveal ---------- */

interface TextRevealProps {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  once?: boolean
}

export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  once = true,
}: TextRevealProps) {
  const words = text.split(" ")
  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            variants={{
              hidden: { y: "115%" },
              visible: { y: "0%", transition: { duration: 0.7, ease: EASE } },
            }}
            className={cn("inline-block will-change-transform", wordClassName)}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

/* ---------- ParallaxLayer: scroll-linked translate ---------- */

interface ParallaxLayerProps {
  children: ReactNode
  className?: string
  /** total travel in px across the element's scroll range */
  distance?: number
}

export function ParallaxLayer({
  children,
  className,
  distance = 60,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
