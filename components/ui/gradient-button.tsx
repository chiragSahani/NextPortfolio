"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface GradientButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  loading?: boolean;
  icon?: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]",
    "text-white font-medium",
    "hover:bg-[position:100%_0]",
    "hover:shadow-[0_0_24px_hsl(217_91%_60%/0.35),0_0_48px_hsl(258_90%_66%/0.15)]"
  ),
  secondary: cn(
    "bg-transparent gradient-border",
    "text-gradient font-medium"
  ),
  outline: cn(
    "bg-transparent border border-border",
    "text-foreground font-medium",
    "hover:border-primary hover:text-primary"
  ),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5 rounded-lg",
  md: "px-6 py-3 text-sm gap-2 rounded-xl",
  lg: "px-8 py-4 text-base gap-2.5 rounded-xl",
};

const HOVER_EASE = [0.21, 0.47, 0.32, 0.98] as const;

export const GradientButton = forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      loading = false,
      icon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "group relative inline-flex items-center justify-center",
      "transition-colors duration-300",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-50",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const content = (
      <>
        {loading && (
          <Loader2 className="h-4 w-4 animate-spin" />
        )}
        {!loading && icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {!loading && !icon && (
          <motion.span
            className="inline-flex shrink-0"
            initial={{ x: 0, opacity: 0.7 }}
            whileHover={{ x: 4, opacity: 1 }}
            transition={{ duration: 0.3, ease: HOVER_EASE }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        )}
      </>
    );

    if (href) {
      const isExternal = href.startsWith("http");

      if (isExternal) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: HOVER_EASE }}
          >
            {content}
          </motion.a>
        );
      }

      return (
        <Link href={href} className={classes}>
          <motion.span
            className="inline-flex items-center gap-inherit w-full justify-center"
            style={{ gap: "inherit" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: HOVER_EASE }}
          >
            {content}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: HOVER_EASE }}
        {...(props as HTMLMotionProps<"button">)}
      >
        {content}
      </motion.button>
    );
  }
);

GradientButton.displayName = "GradientButton";
