"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react"
import { profile, socialLinks, resumeUrl } from "@/lib/data"
import { SectionHeader } from "@/components/ui/section-header"
import { GridScanLite } from "@/components/ui/grid-scan-lite"
import { GradientButton } from "@/components/ui/gradient-button"

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden flex items-center justify-center min-h-[70vh] z-10"
    >
      <GridScanLite className="z-0" />
      {/* Ambient Gradient Blur Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] absolute opacity-70" />
        <div className="w-[300px] h-[300px] rounded-full bg-accent/5 blur-[90px] absolute translate-x-32 -translate-y-20 opacity-55" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 text-center z-10">
        <SectionHeader
          index="07"
          title="Let's Build Something Extraordinary"
          gradient={true}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-8"
        >
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-medium text-emerald-400 mx-auto select-none">
            Available for opportunities
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm currently looking for new roles and exciting software development opportunities. Whether you want to discuss a project, ask a question, or just say hello — my inbox is always open.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <GradientButton variant="primary" size="lg" href={`mailto:${profile.email}`}>
              Send Email <Mail className="h-4 w-4 ml-2" />
            </GradientButton>
            <GradientButton variant="secondary" size="lg" href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Download Resume
            </GradientButton>
          </div>

          {/* Social Links Grid */}
          <div className="pt-10 border-t border-border/20 mt-10">
            <p className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Connect on Socials
            </p>
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon.toLowerCase()] || Mail
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2.5 rounded-full bg-secondary/10 hover:bg-secondary/30 border border-border/10 hover:border-primary/20 flex items-center justify-center"
                    title={link.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
