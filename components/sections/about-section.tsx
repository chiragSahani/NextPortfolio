"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { profile } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { GridScanLite } from "@/components/ui/grid-scan-lite"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"

// Helper to parse stats like "1300+" or "2" into numeric value and suffix
function parseStatValue(val: string): { value: number; suffix: string } {
  const numericString = val.replace(/[^0-9]/g, "")
  const suffix = val.replace(/[0-9]/g, "")
  return {
    value: parseInt(numericString, 10) || 0,
    suffix: suffix,
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative z-10 overflow-hidden">
      <GridScanLite className="z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeader index="01" title="About Me" gradient={true} align="left" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Philosophy Text */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {profile.philosophy.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-lg text-muted-foreground leading-relaxed font-sans"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="lg:col-span-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden ring-2 ring-primary/50 ring-offset-4 ring-offset-background group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                sizes="(max-w-768px) 100vw, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {profile.stats.map((stat, index) => {
            const { value, suffix } = parseStatValue(stat.value)
            return (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard
                  hover={true}
                  className="p-6 flex flex-col justify-center items-center text-center h-full border border-border/40 hover:border-primary/30"
                >
                  <span className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                    <AnimatedCounter value={value} suffix={suffix} />
                  </span>
                  <span className="font-display text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </span>
                  <span className="text-xs text-muted-foreground/80 leading-normal">
                    {stat.description}
                  </span>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
