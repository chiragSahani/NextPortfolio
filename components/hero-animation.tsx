"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalX: number
      originalY: number
      density: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.size = Math.random() * 3 + 1
        this.speedX = 0
        this.speedY = 0
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`
        this.density = Math.random() * 30 + 1
      }

      update(mouseX: number | null, mouseY: number | null) {
        // Mouse interaction
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const maxDistance = 100
          const force = (maxDistance - distance) / maxDistance

          if (distance < maxDistance) {
            this.speedX += forceDirectionX * force * this.density * 0.6
            this.speedY += forceDirectionY * force * this.density * 0.6
          }
        }

        // Return to original position
        const dx = this.originalX - this.x
        const dy = this.originalY - this.y
        this.speedX += dx * 0.05
        this.speedY += dy * 0.05

        // Apply friction
        this.speedX *= 0.9
        this.speedY *= 0.9

        // Update position
        this.x += this.speedX
        this.y += this.speedY
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const particleCount = 100
    const gridSize = 10

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      particlesArray.push(new Particle(x, y))
    }

    // Connect particles with lines
    function connectParticles() {
      if (!ctx) return
      const maxDistance = 100
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Mouse interaction
    let mouseX: number | null = null
    let mouseY: number | null = null

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    })

    canvas.addEventListener("mouseleave", () => {
      mouseX = null
      mouseY = null
    })

    // Animation loop
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mouseX, mouseY)
        particlesArray[i].draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", () => {})
      canvas.removeEventListener("mouseleave", () => {})
    }
  }, [])

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 to-primary/5"
      />
    </motion.div>
  )
}

