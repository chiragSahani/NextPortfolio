"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

const HOVER_EASE = [0.21, 0.47, 0.32, 0.98] as const;

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hover = true, glow = false, gradient = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hover
            ? {
                y: -4,
                transition: { duration: 0.3, ease: HOVER_EASE },
              }
            : undefined
        }
        className={cn(
          "glass rounded-xl overflow-hidden",
          gradient && "gradient-border",
          glow && "hover:glow",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
