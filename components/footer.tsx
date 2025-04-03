"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="w-full border-t py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">© {currentYear} Chirag Sahani. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/chiragSahani"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/chiragsahani/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:chiragsahani093@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </Link>
          <Link
            href="tel:+919528299664"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Call
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}

