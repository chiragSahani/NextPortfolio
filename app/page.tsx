"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroAnimation } from "@/components/hero-animation"
import { FeaturedProjects } from "@/components/featured-projects"
import { FeaturedCodeSnippet } from "@/components/featured-code-snippet"
import { FeaturedTechnologies } from "@/components/featured-technologies"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="space-y-2" variants={container} initial="hidden" animate="show">
                <motion.h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none" variants={item}>
                  Chirag Sahani
                </motion.h1>
                <motion.p className="text-xl text-muted-foreground" variants={item}>
                  Software Developer specializing in building exceptional digital experiences
                </motion.p>
                <motion.div className="flex flex-col gap-2 min-[400px]:flex-row pt-4" variants={item}>
                  <Link href="/projects">
                    <Button className="group">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="group">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative h-[350px] lg:h-[450px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2
                className="text-3xl font-bold tracking-tighter mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Motivated Software Developer skilled in Java, Python, JavaScript, and C++, with expertise in backend
                development, API design, and cloud computing. Experienced in building scalable, high-performance
                applications using Node.js, Express.js, Flask, and PostgreSQL.
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Proficient in DevOps practices, CI/CD pipelines, and containerization (Docker, Azure, GitHub Actions).
                Passionate about problem-solving, data structures, and system design, with a strong track record in
                competitive coding and full-stack application development.
              </motion.p>
            </div>
            <div className="space-y-4">
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  variants={item}
                >
                  <h3 className="font-medium text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">Haldwani, Uttarakhand</p>
                </motion.div>
                <motion.div
                  className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  variants={item}
                >
                  <h3 className="font-medium text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">CGC, Mohali</p>
                </motion.div>
                <motion.div
                  className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  variants={item}
                >
                  <h3 className="font-medium text-lg mb-2">Experience</h3>
                  <p className="text-muted-foreground">2+ Years</p>
                </motion.div>
                <motion.div
                  className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  variants={item}
                >
                  <h3 className="font-medium text-lg mb-2">DSA Problems</h3>
                  <p className="text-muted-foreground">1300+ Solved</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my recent work
              </p>
            </div>
          </motion.div>
          <FeaturedProjects />
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Code Snippet */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Code Snippets</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore some of my code solutions and implementations
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FeaturedCodeSnippet />
          </motion.div>
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/snippets">
              <Button variant="outline" className="group">
                View More Snippets
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technologies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the technologies I work with
              </p>
            </div>
          </motion.div>
          <FeaturedTechnologies />
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/technologies">
              <Button variant="outline" className="group">
                View All Technologies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm currently looking for new opportunities. Let's connect!
              </p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button size="lg" className="group">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="https://drive.google.com/file/d/165tmz6uiVHXBZmFwMJ8k6_aX4aUWDXi5/view?usp=drive_link">
                <Button size="lg" variant="outline">
                  Download Resume
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

