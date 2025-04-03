"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold tracking-tighter">CS</div>
            </motion.div>
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            >
              <circle
                className="text-muted-foreground/20"
                cx="50"
                cy="50"
                r="45"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              />
              <motion.path
                className="text-primary"
                d="M50 5 A45 45 0 0 1 95 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.svg>
            <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-muted-foreground">
              <div className="flex justify-center space-x-1">
                <motion.span
                  className="inline-block"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0 }}
                >
                  .
                </motion.span>
                <motion.span
                  className="inline-block"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.2 }}
                >
                  .
                </motion.span>
                <motion.span
                  className="inline-block"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.4 }}
                >
                  .
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

