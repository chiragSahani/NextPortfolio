"use client"

import CardNav, { type CardNavItem } from "@/components/ui/card-nav"
import { resumeUrl, socialLinks } from "@/lib/data"

const githubUrl = socialLinks.find((l) => l.icon === "github")?.url ?? "https://github.com/chiragSahani"
const linkedinUrl = socialLinks.find((l) => l.icon === "linkedin")?.url ?? "#"
const emailUrl = socialLinks.find((l) => l.icon === "mail")?.url ?? "mailto:chiragsahani093@gmail.com"

const items: CardNavItem[] = [
  {
    label: "Work",
    bgColor: "#0f1219",
    textColor: "#fff",
    links: [
      { label: "About", href: "#about", ariaLabel: "Jump to About section" },
      { label: "Experience", href: "#experience", ariaLabel: "Jump to Experience section" },
      { label: "Skills", href: "#skills", ariaLabel: "Jump to Skills section" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#141828",
    textColor: "#fff",
    links: [
      { label: "Featured", href: "#projects", ariaLabel: "Jump to Featured Projects" },
      { label: "GitHub Activity", href: "#github", ariaLabel: "Jump to GitHub section" },
      { label: "Achievements", href: "#achievements", ariaLabel: "Jump to Achievements section" },
    ],
  },
  {
    label: "Connect",
    bgColor: "#1a1f33",
    textColor: "#fff",
    links: [
      { label: "Email", href: emailUrl, ariaLabel: "Email Chirag" },
      { label: "LinkedIn", href: linkedinUrl, ariaLabel: "Open LinkedIn profile" },
      { label: "GitHub", href: githubUrl, ariaLabel: "Open GitHub profile" },
    ],
  },
]

export default function SiteNav() {
  return (
    <CardNav
      logo="/Logo.png"
      logoAlt="Chirag Sahani"
      items={items}
      baseColor="rgba(10, 10, 12, 0.85)"
      menuColor="#fff"
      buttonBgColor="#3b82f6"
      buttonTextColor="#fff"
      ctaLabel="Resume"
      ctaHref={resumeUrl}
    />
  )
}
