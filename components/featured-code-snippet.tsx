"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { codeSnippets } from "@/lib/data"

export function FeaturedCodeSnippet() {
  const [copied, setCopied] = useState(false)

  // Get the first code snippet
  const snippet = codeSnippets[0]

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = snippet.code.split("\n")

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto p-4 bg-card rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-muted/30 rounded-t-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm font-medium">{snippet.language}</span>
      </div>

      {/* Code Content */}
      <div className="relative bg-muted/30 p-4 rounded-b-lg overflow-hidden">
        {/* Copy Button */}
        <motion.button
          className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
          onClick={handleCopy}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </motion.button>

        {/* Code Content with Line Numbers */}
        <div className="flex">
          {/* Line Numbers */}
          <div className="pr-4 text-gray-400 text-sm select-none">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code Block */}
          <pre className="text-sm whitespace-pre-wrap overflow-x-auto max-w-full">
            <code className="font-mono">{snippet.code}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  )
}
