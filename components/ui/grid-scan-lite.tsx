"use client"

import { cn } from "@/lib/utils"

interface GridScanLiteProps {
  className?: string
  lineColor?: string
  scanColor?: string
  gridSize?: number
  scanDuration?: string
}

export function GridScanLite({
  className,
  lineColor = "hsl(var(--primary) / 0.14)",
  scanColor = "hsl(var(--primary) / 0.4)",
  gridSize = 56,
  scanDuration = "6s",
}: GridScanLiteProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden
    >
      {/* Static grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(var(--primary) / 0.07), transparent 70%)",
        }}
      />

      {/* Horizontal scan beam — top to bottom */}
      <div
        className="grid-scan-lite-beam-h absolute left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(to right, transparent 0%, ${scanColor} 50%, transparent 100%)`,
          boxShadow: `0 0 12px ${scanColor}, 0 0 24px ${scanColor}`,
          animationDuration: scanDuration,
        }}
      />

      {/* Vertical scan beam — left to right, offset timing */}
      <div
        className="grid-scan-lite-beam-v absolute top-0 bottom-0 w-[2px]"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${scanColor} 50%, transparent 100%)`,
          boxShadow: `0 0 12px ${scanColor}, 0 0 24px ${scanColor}`,
          animationDuration: `calc(${scanDuration} * 1.4)`,
        }}
      />

      {/* Corner brackets — software-HUD style */}
      <CornerBracket position="top-left" />
      <CornerBracket position="top-right" />
      <CornerBracket position="bottom-left" />
      <CornerBracket position="bottom-right" />

      <style jsx>{`
        @keyframes grid-scan-h {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes grid-scan-v {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        .grid-scan-lite-beam-h {
          animation-name: grid-scan-h;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        .grid-scan-lite-beam-v {
          animation-name: grid-scan-v;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
          animation-delay: 1.5s;
        }

        @media (prefers-reduced-motion: reduce) {
          .grid-scan-lite-beam-h,
          .grid-scan-lite-beam-v {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

function CornerBracket({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}) {
  const positionClasses = {
    "top-left": "top-6 left-6 border-l-2 border-t-2",
    "top-right": "top-6 right-6 border-r-2 border-t-2",
    "bottom-left": "bottom-6 left-6 border-l-2 border-b-2",
    "bottom-right": "bottom-6 right-6 border-r-2 border-b-2",
  }
  return (
    <div
      className={cn(
        "absolute h-5 w-5 border-primary/40",
        positionClasses[position]
      )}
    />
  )
}
