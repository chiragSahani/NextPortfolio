"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { experience, achievements, education } from "@/lib/data"

export default function ExperiencePage() {
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience & Achievements</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My professional journey and accomplishments
              </p>
            </div>
          </motion.div>

          {/* Experience Section */}
          <div className="mb-16">
            <motion.h2
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Work Experience
            </motion.h2>
            <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
              {experience.map((job, index) => (
                <motion.div key={index} className="relative pl-8 border-l border-muted-foreground/20" variants={item}>
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-muted-foreground">{job.company}</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <motion.h2
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h2>
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="h-full transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      <p className="text-sm mb-4">{edu.description}</p>
                      {edu.achievements && (
                        <div>
                          <p className="font-medium mb-2">Achievements:</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievements Section */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Achievements & Certifications
            </motion.h2>
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.issuer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.date}</p>
                      <p className="text-sm">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

