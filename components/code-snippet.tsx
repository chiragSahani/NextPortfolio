"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import type { CodeSnippet as CodeSnippetType } from "@/lib/types"

interface CodeSnippetProps {
  snippet: CodeSnippetType
  index: number
}

export function CodeSnippet({ snippet, index }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = snippet.code.split("\n")

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  return (
    <motion.div className="code-snippet" variants={item}>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">{snippet.title}</h3>
        <p className="text-muted-foreground">{snippet.description}</p>
      </div>
      <div className="code-snippet-header">
        <div className="code-snippet-dots">
          <div className="code-snippet-dot code-snippet-dot-red"></div>
          <div className="code-snippet-dot code-snippet-dot-yellow"></div>
          <div className="code-snippet-dot code-snippet-dot-green"></div>
        </div>
        <div className="code-snippet-language">{snippet.language}</div>
      </div>
      <div className="code-snippet-content bg-muted/30">
        <motion.button
          className="code-snippet-copy"
          onClick={handleCopy}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </motion.button>
        <div className="code-snippet-line-numbers">
          {lines.map((_, i) => (
            <span key={i} className="code-snippet-line-number">
              {i + 1}
            </span>
          ))}
        </div>
        <pre>
          <code className="code-snippet-code">{snippet.code}</code>
        </pre>
      </div>
    </motion.div>
  )
}

