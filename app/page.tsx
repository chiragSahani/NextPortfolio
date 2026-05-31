"use client"

import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ProjectsSection from "@/components/sections/projects-section"
import ExperienceSection from "@/components/sections/experience-section"
import SkillsSection from "@/components/sections/skills-section"
import GithubSection from "@/components/sections/github-section"
import AchievementsSection from "@/components/sections/achievements-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <GithubSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  )
}
