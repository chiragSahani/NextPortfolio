"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Sparkles,
  Database,
  Workflow,
  Bot,
  Search,
  Rocket,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Reveal } from "@/components/ui/motion-primitives"

const capabilities = [
  {
    icon: Brain,
    title: "LLM Systems",
    desc: "Production GPT-4o / Gemini integrations with structured output, streaming, and guardrails.",
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    desc: "Grounded, deterministic prompting tuned for accuracy, cost, and latency.",
  },
  {
    icon: Database,
    title: "RAG Pipelines",
    desc: "Ingestion, chunking, embeddings, and retrieval over large knowledge bases.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Multi-step agent orchestration with LangGraph and tool-calling workflows.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Event-driven automation that turns AI output into real product actions.",
  },
  {
    icon: Search,
    title: "Vector Search",
    desc: "Semantic search with Qdrant — context-aware retrieval at scale.",
  },
  {
    icon: Rocket,
    title: "Production AI",
    desc: "Observability, caching, and OLTP/OLAP architecture for AI at scale.",
  },
]

/* Nodes for the animated RAG/agent pipeline diagram */
const nodes = [
  { id: "query", label: "Query", x: 60, y: 90 },
  { id: "embed", label: "Embed", x: 210, y: 50 },
  { id: "vector", label: "Vector DB", x: 210, y: 150 },
  { id: "retrieve", label: "Retrieve", x: 370, y: 100 },
  { id: "llm", label: "LLM", x: 520, y: 60 },
  { id: "agent", label: "Agent", x: 520, y: 150 },
  { id: "response", label: "Response", x: 660, y: 100 },
] as const

const edges: Array<[string, string]> = [
  ["query", "embed"],
  ["query", "vector"],
  ["embed", "retrieve"],
  ["vector", "retrieve"],
  ["retrieve", "llm"],
  ["retrieve", "agent"],
  ["llm", "response"],
  ["agent", "response"],
]

function node(id: string) {
  return nodes.find((n) => n.id === id)!
}

function NetworkDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-4">
     <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <svg
        viewBox="0 0 720 200"
        className="h-auto w-full min-w-[560px]"
        role="img"
        aria-label="RAG and agent pipeline diagram"
      >
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--grad-1))" />
            <stop offset="100%" stopColor="hsl(var(--grad-3))" />
          </linearGradient>
        </defs>

        {/* edges */}
        {edges.map(([from, to], i) => {
          const a = node(from)
          const b = node(to)
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#edge-grad)"
              strokeWidth={1.5}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeInOut" }}
            />
          )
        })}

        {/* animated pulses traveling along edges */}
        {edges.map(([from, to], i) => {
          const a = node(from)
          const b = node(to)
          return (
            <motion.circle
              key={`pulse-${from}-${to}`}
              r={2.5}
              fill="hsl(var(--primary))"
              initial={{ cx: a.x, cy: a.y, opacity: 0 }}
              whileInView={{
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 1, 0],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                delay: 1 + (i % 4) * 0.3,
                repeat: Infinity,
                repeatDelay: 1.4,
                ease: "easeInOut",
              }}
            />
          )
        })}

        {/* nodes */}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle cx={n.x} cy={n.y} r={22} className="fill-background" stroke="hsl(var(--primary))" strokeWidth={1.5} strokeOpacity={0.35} />
            <circle cx={n.x} cy={n.y} r={5} fill="hsl(var(--primary))" />
            <text
              x={n.x}
              y={n.y + 38}
              textAnchor="middle"
              className="fill-muted-foreground text-[11px] font-medium"
            >
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
     </div>
    </div>
  )
}

export default function AiSection() {
  return (
    <section id="ai" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHeader
          index="03"
          title="AI Engineering"
          subtitle="Designing and shipping production AI — from RAG pipelines and vector search to multi-step agents that take real action."
          gradient
        />

        <Reveal y={30} className="mb-12">
          <NetworkDiagram />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} y={24} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_50px_-30px_hsl(var(--primary)/0.5)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <cap.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
