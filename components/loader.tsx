"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Volume2, Brain, Cpu, Sparkles, Bot, Network, Binary } from "lucide-react"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

/* Cinematic story beats — each paired with a code-flavored caption */
const STORY = [
  { text: "Most software is built to ship.", code: '$ git commit -m "v1.0"' },
  { text: "I build it to scale.", code: "// 10  →  10,000,000 users" },
  {
    text: "AI-powered products.\nProduction-grade systems.",
    code: "const answer = await rag.invoke(query)",
  },
  { text: "Engineered with intent.", code: "export default Craftsmanship" },
] as const

/* Background ambient code tokens (deterministic positions, no randomness) */
const TOKENS = [
  "const", "</>", "RAG", "async", "Next.js", "TypeScript", "useEffect()",
  "LangGraph", "Qdrant", "{ }", "=>", "Docker", "Redis", "vector.search()",
  "npm run build", "200 OK", "git push", "Prisma", "embeddings", "Node.js",
  "0x1F", "await", "POST /api", "OpenAI",
] as const

/* AI neural-network constellation — decorative animated illustration */
const N_NODES = [
  { x: 90, y: 90 }, { x: 230, y: 60 }, { x: 200, y: 200 }, { x: 350, y: 130 },
  { x: 320, y: 270 }, { x: 470, y: 80 }, { x: 460, y: 220 }, { x: 560, y: 160 },
  { x: 140, y: 300 }, { x: 600, y: 300 },
] as const
const N_EDGES: Array<[number, number]> = [
  [0, 1], [1, 3], [3, 5], [0, 2], [2, 3], [2, 4], [4, 6], [3, 6],
  [6, 7], [5, 7], [2, 8], [4, 9], [6, 9],
]

function NeuralConstellation() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 w-[min(900px,128vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.35]"
    >
      <svg viewBox="0 0 690 360" className="h-auto w-full">
        <defs>
          <linearGradient id="loader-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(248 84% 70%)" />
            <stop offset="100%" stopColor="hsl(199 92% 62%)" />
          </linearGradient>
        </defs>

        {N_EDGES.map(([a, b], i) => {
          const p = N_NODES[a]
          const q = N_NODES[b]
          return (
            <motion.line
              key={i}
              x1={p.x} y1={p.y} x2={q.x} y2={q.y}
              stroke="url(#loader-edge)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.5, 0.25] }}
              transition={{ duration: 1.4, delay: 0.15 * i, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
            />
          )
        })}

        {/* signal pulses traveling across synapses */}
        {N_EDGES.slice(0, 7).map(([a, b], i) => {
          const p = N_NODES[a]
          const q = N_NODES[b]
          return (
            <motion.circle
              key={`p-${i}`}
              r={2.5}
              fill="hsl(199 92% 70%)"
              initial={{ cx: p.x, cy: p.y, opacity: 0 }}
              animate={{ cx: [p.x, q.x], cy: [p.y, q.y], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, delay: 0.4 * i, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            />
          )
        })}

        {N_NODES.map((n, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <motion.circle
              cx={n.x} cy={n.y} r={6}
              fill="hsl(248 84% 70%)"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx={n.x} cy={n.y} r={12} fill="none" stroke="hsl(248 84% 70%)" strokeOpacity={0.25} />
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

/* Floating AI glyphs */
const AI_GLYPHS = [Brain, Cpu, Sparkles, Bot, Network, Binary] as const

function FloatingGlyphs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {AI_GLYPHS.map((Glyph, i) => {
        const top = ((i * 67) % 80) + 8
        const left = ((i * 43) % 86) + 6
        const delay = (i % 4) * 0.6
        const dur = 6 + (i % 3)
        return (
          <motion.span
            key={i}
            className="absolute text-white/[0.06]"
            style={{ top: `${top}%`, left: `${left}%` }}
            animate={{ opacity: [0.04, 0.1, 0.04], y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Glyph className="h-7 w-7 sm:h-9 sm:w-9" />
          </motion.span>
        )
      })}
    </div>
  )
}

function FloatingCode() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {TOKENS.map((tok, i) => {
        const top = ((i * 53) % 90) + 4
        const left = ((i * 37) % 92) + 3
        const delay = (i % 6) * 0.5
        const dur = 5 + (i % 4)
        return (
          <motion.span
            key={tok + i}
            className="absolute font-mono text-[11px] tracking-tight text-white/[0.07] sm:text-xs"
            style={{ top: `${top}%`, left: `${left}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.04, 0.12, 0.04], y: [0, -14, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {tok}
          </motion.span>
        )
      })}
    </div>
  )
}

const BEAT_MS = 1600
const FINAL_MS = 2000

/* ---- Intro audio: plays /audio/Open_Task.mp3, unlocked by the Enter tap ---- */
const INTRO_SRC = "/audio/Open_Task.mp3"
const INTRO_VOLUME = 0.85

function fadeAudio(el: HTMLAudioElement, to: number, ms: number, onDone?: () => void) {
  const from = el.volume
  const start = performance.now()
  const tick = (now: number) => {
    const k = Math.min(1, (now - start) / ms)
    el.volume = Math.max(0, Math.min(1, from + (to - from) * k))
    if (k < 1) requestAnimationFrame(tick)
    else onDone?.()
  }
  requestAnimationFrame(tick)
}

export default function Loader() {
  const [phase, setPhase] = useState<"gate" | "playing" | "done">("gate")
  const [step, setStep] = useState(0)
  const [hidden, setHidden] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  // Skip the intro for return visits or reduced-motion users
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const seen = sessionStorage.getItem("introSeen") === "1"
    if (reduce || seen) setHidden(true)
  }, [])

  const finish = useCallback(() => {
    sessionStorage.setItem("introSeen", "1")
    const el = audioRef.current
    if (el) {
      fadeAudio(el, 0, 700, () => {
        el.pause()
        el.src = ""
      })
    }
    setPhase("done")
  }, [])

  const run = useCallback(
    () => {
      // Unlocked by the Enter tap → autoplay with sound is allowed
      const el = new Audio(INTRO_SRC)
      el.volume = 0
      el.preload = "auto"
      audioRef.current = el
      el.play()
        .then(() => fadeAudio(el, INTRO_VOLUME, 900))
        .catch(() => {
          /* if it still can't play, the story continues silently */
        })

      setPhase("playing")
      timers.current.forEach(clearTimeout)
      timers.current = []
      for (let i = 1; i < STORY.length; i++) {
        timers.current.push(setTimeout(() => setStep(i), i * BEAT_MS))
      }
      timers.current.push(
        setTimeout(() => setStep(STORY.length), STORY.length * BEAT_MS)
      )
      timers.current.push(setTimeout(finish, STORY.length * BEAT_MS + FINAL_MS))
    },
    [finish]
  )

  // keyboard: Esc to skip
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish()
    }
    window.addEventListener("keydown", onKey)
    const t = timers.current
    return () => {
      window.removeEventListener("keydown", onKey)
      t.forEach(clearTimeout)
      const el = audioRef.current
      if (el) {
        el.pause()
        el.src = ""
      }
    }
  }, [finish])

  if (hidden) return null

  const showFinal = step >= STORY.length

  return (
    <AnimatePresence mode="wait">
      {phase !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#06070b] text-white"
        >
          {/* animated aura */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(248_84%_64%/0.28),transparent_60%)] blur-[60px] animate-aurora-b" />
            <div className="absolute left-[58%] top-[44%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,hsl(199_92%_60%/0.22),transparent_60%)] blur-[60px] animate-aurora-c" />
          </div>
          {/* circuit-style grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          />
          {/* AI neural-network illustration */}
          <NeuralConstellation />
          {/* ambient code tokens + AI glyphs */}
          <FloatingCode />
          <FloatingGlyphs />
          {/* film grain */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* ===== GATE ===== */}
          {phase === "gate" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative z-10 flex flex-col items-center px-6 text-center"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/50">
                Chirag Sahani
              </span>
              <p className="mt-5 max-w-md font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
                A short story about building <span className="text-gradient-vivid">at scale</span>.
              </p>

              <motion.button
                type="button"
                onClick={() => run()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_-8px_hsl(248_84%_64%/0.8)]"
              >
                <Play className="h-4 w-4 fill-black" /> Enter
              </motion.button>

              <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-white/40">
                <Volume2 className="h-3.5 w-3.5" /> sound on
              </div>
            </motion.div>
          )}

          {/* ===== STORY ===== */}
          {phase === "playing" && (
            <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6 text-center">
              <AnimatePresence mode="wait">
                {!showFinal ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="flex flex-col items-center"
                  >
                    <p className="whitespace-pre-line font-display text-2xl font-semibold leading-tight text-white xs:text-3xl sm:text-5xl">
                      {STORY[step].text}
                    </p>
                    <motion.code
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35, duration: 0.4 }}
                      className="mt-6 inline-flex max-w-[90vw] items-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-grad-3/90 xs:text-xs sm:text-sm"
                    >
                      <span className="mr-2 text-white/30">›</span>
                      {STORY[step].code}
                      <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-grad-3/70" />
                    </motion.code>
                  </motion.div>
                ) : (
                  <motion.div
                    key="final"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="flex flex-col items-center"
                  >
                    <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                      <span className="text-gradient-vivid">CHIRAG SAHANI</span>
                    </h1>
                    <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-xs sm:tracking-[0.35em]">
                      Software Engineer · AI Engineer
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* progress beats */}
              <div className="mt-12 flex items-center gap-2">
                {STORY.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i <= step ? "w-8 bg-white/80" : "w-4 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* skip */}
          {phase !== "gate" && (
            <button
              type="button"
              onClick={finish}
              className="absolute bottom-7 right-7 z-10 text-xs font-medium uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/80"
            >
              Skip
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
