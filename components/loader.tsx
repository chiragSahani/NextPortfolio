"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const BOOT_LINES = [
  "$ initializing system...",
  "$ loading modules: react, next.js, framer-motion",
  "$ establishing webgl context [ok]",
  "$ mounting portfolio runtime",
  "$ ready — welcome",
] as const

const TOTAL_DURATION_MS = 3400
const EASE = [0.21, 0.47, 0.32, 0.98] as const

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [visibleLines, setVisibleLines] = useState(0)
  const [progress, setProgress] = useState(0)

  // Boot line cascade
  useEffect(() => {
    if (!isLoading) return
    const perLine = 380
    const timeouts = BOOT_LINES.map((_, i) =>
      setTimeout(() => setVisibleLines((n) => Math.max(n, i + 1)), 700 + i * perLine)
    )
    return () => timeouts.forEach(clearTimeout)
  }, [isLoading])

  // Smooth progress 0 → 100
  useEffect(() => {
    if (!isLoading) return
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / (TOTAL_DURATION_MS - 600)) * 100)
      setProgress(pct)
      if (pct < 100) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isLoading])

  // Exit
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), TOTAL_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
            transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="fixed inset-0 w-full h-full bg-black z-[100] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Background scanlines */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0, transparent 2px, white 2px, white 3px)",
            }}
          />

          {/* Background dot grid */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] pointer-events-none dot-grid"
          />

          {/* Vignette glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, hsl(var(--primary) / 0.18), transparent 55%)",
            }}
          />

          <div className="relative flex flex-col items-center w-[min(92vw,520px)] px-4">
            {/* Logo with scan reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative mb-8"
            >
              <Image
                src="/Logo.png"
                alt="Chirag Sahani"
                width={1536}
                height={1024}
                priority
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_0_40px_hsl(var(--primary)/0.6)]"
              />

              {/* Horizontal scan line sweep */}
              <motion.span
                aria-hidden
                initial={{ y: "-110%", opacity: 0 }}
                animate={{ y: "210%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
                className="pointer-events-none absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_18px_hsl(var(--primary))]"
              />
            </motion.div>

            {/* Identity title */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="text-center mb-1"
            >
              <span className="font-display text-base sm:text-lg font-bold tracking-[0.35em] text-foreground/90 uppercase">
                Chirag Sahani
              </span>
            </motion.div>

            {/* Role tag */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
              className="text-center mb-8"
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] text-primary uppercase">
                Software Developer · Trao AI
              </span>
            </motion.div>

            {/* Terminal boot lines */}
            <div
              className="w-full font-mono text-[11px] sm:text-xs text-emerald-400/85 mb-6 h-[120px] sm:h-[110px] overflow-hidden"
              aria-live="polite"
            >
              {BOOT_LINES.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={
                    i < visibleLines
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -8 }
                  }
                  transition={{ duration: 0.3, ease: EASE }}
                  className="leading-relaxed truncate"
                >
                  <span className="text-muted-foreground/60 mr-2">{`>`}</span>
                  {line}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-full">
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_10px_hsl(var(--primary))]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[10px] tracking-widest text-muted-foreground/70">
                <span>BOOT</span>
                <span className="tabular-nums">{Math.floor(progress)}%</span>
                <span>READY</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
