"use client"

/*
  Layered ambient background — mounted once globally behind all content.
  Layer 1: drifting aurora gradient blobs (GPU transforms only)
  Layer 2: mesh gradient wash
  Layer 3: soft radial lights / vignette
  Layer 4: fine grid fade
  All pointer-events-none, fixed, and reduced-motion aware via CSS.
*/

export default function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* Layer 2 — mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-90" />

      {/* Layer 1 — aurora blobs */}
      <div className="absolute -left-[10%] -top-[15%] h-[55vw] w-[55vw] rounded-full bg-grad-1/30 blur-[120px] animate-aurora-a will-change-transform" />
      <div className="absolute right-[-12%] top-[5%] h-[48vw] w-[48vw] rounded-full bg-grad-3/25 blur-[120px] animate-aurora-b will-change-transform" />
      <div className="absolute bottom-[-18%] left-[20%] h-[50vw] w-[50vw] rounded-full bg-grad-4/22 blur-[130px] animate-aurora-c will-change-transform" />

      {/* Layer 3 — soft radial highlight + vignette */}
      <div className="absolute inset-0 [background:radial-gradient(60%_45%_at_50%_-5%,hsl(var(--primary)/0.12),transparent_70%)]" />
      <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_50%_120%,hsl(var(--foreground)/0.05),transparent_60%)]" />

      {/* Layer 4 — fine grid, faded at edges */}
      <div className="absolute inset-0 dot-grid opacity-[0.5] fade-edges" />
    </div>
  )
}
