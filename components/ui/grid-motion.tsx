"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import styles from "./grid-motion.module.css"

interface GridMotionProps {
  items?: (string | ReactNode)[]
  gradientColor?: string
}

export default function GridMotion({ items = [], gradientColor = "black" }: GridMotionProps) {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const mouseXRef = useRef<number>(typeof window !== "undefined" ? window.innerWidth / 2 : 0)

  const totalItems = 28
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`)
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems

  useEffect(() => {
    gsap.ticker.lagSmoothing(0)

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX
    }

    const updateMotion = () => {
      const maxMoveAmount = 300
      const baseDuration = 0.8
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) *
            direction

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          })
        }
      })
    }

    const removeAnimationLoop = gsap.ticker.add(updateMotion)

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      removeAnimationLoop()
    }
  }, [])

  return (
    <div className={styles.noscroll} ref={gridRef}>
      <section
        className={styles.intro}
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className={styles.gridMotionContainer}>
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={styles.row}
              ref={(el) => {
                rowRefs.current[rowIndex] = el
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex]
                const isImageUrl = typeof content === "string" && content.startsWith("http")
                return (
                  <div key={itemIndex} className={styles.rowItem}>
                    <div className={styles.rowItemInner} style={{ backgroundColor: "#111" }}>
                      {isImageUrl ? (
                        <div
                          className={styles.rowItemImg}
                          style={{ backgroundImage: `url(${content as string})` }}
                        />
                      ) : (
                        <div className={styles.rowItemContent}>{content}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
        <div className={styles.fullview} />
      </section>
    </div>
  )
}
