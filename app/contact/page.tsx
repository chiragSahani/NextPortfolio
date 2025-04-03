"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to a server
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1000)
  }

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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm currently looking for new opportunities. Let's connect!
              </p>
            </div>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.h2 className="text-2xl font-bold mb-6" variants={item}>
                Contact Information
              </motion.h2>
              <motion.div className="space-y-6" variants={item}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-0">
                    <a
                      href="mailto:chiragsahani093@gmail.com"
                      className="flex items-center gap-4 p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">chiragsahani093@gmail.com</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-0">
                    <a
                      href="tel:+919528299664"
                      className="flex items-center gap-4 p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">+91 9528299664</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-0">
                    <a
                      href="https://github.com/chiragSahani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">GitHub</h3>
                        <p className="text-sm text-muted-foreground">github.com/chiragsahani</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-0">
                    <a
                      href="https://www.linkedin.com/in/chiragsahani/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">LinkedIn</h3>
                        <p className="text-sm text-muted-foreground">linkedin.com/in/chiragsahani</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <Button type="submit" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                {submitSuccess && (
                  <p className="text-green-500 text-center mt-2">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

