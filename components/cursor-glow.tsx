"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 120, mass: 0.8 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    checkIsDesktop()
    window.addEventListener("resize", checkIsDesktop)

    if (!isDesktop) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 192)
      mouseY.set(e.clientY - 192)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("resize", checkIsDesktop)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isDesktop, isVisible, mouseX, mouseY])

  if (!isDesktop) return null

  return (
    <motion.div
      style={{
        left: glowX,
        top: glowY,
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 70%)",
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-96 h-96 rounded-full pointer-events-none z-0 hidden md:block"
    />
  )
}
