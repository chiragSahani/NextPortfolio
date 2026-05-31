"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_8px_hsl(var(--primary))]"
      aria-hidden
    />
  )
}
