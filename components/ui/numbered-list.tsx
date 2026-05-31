"use client"

import { useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NumberedListItem {
  title: string
  description: string
  status?: string
  statusTone?: "amber" | "emerald" | "sky" | "rose" | "violet"
  href?: string
  meta?: ReactNode
}

interface NumberedListProps {
  items: NumberedListItem[]
  className?: string
}

const statusToneMap = {
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  sky: "text-sky-400 bg-sky-500/10 border-sky-500/30",
  rose: "text-rose-400 bg-rose-500/10 border-rose-500/30",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/30",
} as const

const REVEAL_EASE = [0.21, 0.47, 0.32, 0.98] as const

export function NumberedList({ items, className }: NumberedListProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <ul
      className={cn("relative divide-y divide-border/30 border-y border-border/30", className)}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {items.map((item, idx) => {
        const isHovered = hoveredIdx === idx
        const isDimmed = hoveredIdx !== null && !isHovered
        const tone = item.statusTone ?? "amber"
        const RowTag = item.href ? motion.a : motion.div

        return (
          <motion.li
            key={item.title + idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.06,
              ease: REVEAL_EASE,
            }}
            className="relative"
          >
            <RowTag
              {...(item.href
                ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onMouseEnter={() => setHoveredIdx(idx)}
              animate={{
                opacity: isDimmed ? 0.35 : 1,
                filter: isDimmed ? "blur(0.4px)" : "blur(0px)",
              }}
              transition={{ duration: 0.35, ease: REVEAL_EASE }}
              className={cn(
                "group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-6",
                "px-4 md:px-6 py-5 md:py-6 cursor-pointer",
                "transition-colors duration-300"
              )}
            >
              {/* Hover spotlight bar — slides in from left */}
              <motion.span
                aria-hidden
                initial={false}
                animate={{
                  scaleY: isHovered ? 1 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: REVEAL_EASE }}
                className="absolute left-0 top-0 h-full w-[2px] origin-top bg-gradient-to-b from-primary via-accent to-primary"
              />

              {/* Hover background wash */}
              <motion.span
                aria-hidden
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.35, ease: REVEAL_EASE }}
                className="absolute inset-0 bg-gradient-to-r from-primary/[0.06] via-transparent to-transparent pointer-events-none"
              />

              {/* Index */}
              <span className="relative font-mono text-xs md:text-sm text-muted-foreground/60 tabular-nums tracking-wider w-8 md:w-10 shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Title + Description */}
              <div className="relative min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <h4
                    className={cn(
                      "font-display text-base md:text-lg font-semibold tracking-tight transition-colors duration-300",
                      isHovered ? "text-foreground" : "text-foreground/90"
                    )}
                  >
                    {item.title}
                  </h4>
                  {item.href && (
                    <motion.span
                      aria-hidden
                      animate={{
                        x: isHovered ? 2 : 0,
                        y: isHovered ? -2 : 0,
                        opacity: isHovered ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.3, ease: REVEAL_EASE }}
                      className="text-primary"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </motion.span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                {item.meta && <div className="mt-2">{item.meta}</div>}
              </div>

              {/* Status badge */}
              {item.status && (
                <span
                  className={cn(
                    "relative shrink-0 text-[10px] font-mono font-semibold uppercase tracking-wider",
                    "px-2.5 py-1 rounded-full border",
                    statusToneMap[tone]
                  )}
                >
                  {item.status}
                </span>
              )}
            </RowTag>
          </motion.li>
        )
      })}
    </ul>
  )
}
