"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import type { CodeSnippet as CodeSnippetType } from "@/lib/types";

interface CodeSnippetProps {
  snippet: CodeSnippetType;
  index: number;
}

export function CodeSnippet({ snippet, index }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = snippet.code.split("\n");

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
  };

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg" 
      variants={item}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{snippet.title}</h3>
        <p className="text-gray-400 text-sm">{snippet.description}</p>
      </div>
      
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-xs text-gray-300">{snippet.language}</span>
      </div>
      
      <div className="relative bg-gray-800 p-4 rounded-b-lg overflow-auto">
        <motion.button
          className="absolute top-3 right-3 bg-gray-700 p-2 rounded-md text-gray-300 hover:bg-gray-600"
          onClick={handleCopy}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </motion.button>
        
        <div className="flex">
          <div className="text-gray-500 pr-3 text-right text-xs">
            {lines.map((_, i) => (
              <span key={i} className="block">
                {i + 1}
              </span>
            ))}
          </div>
          <pre className="overflow-auto w-full">
            <code className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
              {snippet.code}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
