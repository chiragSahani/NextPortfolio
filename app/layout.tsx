import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteNav from "@/components/site-nav"
import Footer from "@/components/footer"
import Loader from "@/components/loader"
import SmoothScroll from "@/components/smooth-scroll"
import CursorGlow from "@/components/cursor-glow"
import ScrollProgress from "@/components/scroll-progress"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chirag Sahani — Software Engineer",
  description:
    "Software Engineer building scalable AI-powered digital experiences. Expertise in React, Next.js, TypeScript, and system design. View featured projects, engineering philosophy, and technical achievements.",
  keywords: [
    "Chirag Sahani",
    "Software Engineer",
    "Frontend Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Chirag Sahani" }],
  creator: "Chirag Sahani",
  icons: {
    icon: [{ url: "/Logo.png", type: "image/png" }],
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chiragsahani.com",
    title: "Chirag Sahani — Software Engineer",
    description:
      "Building scalable AI-powered digital experiences with precision engineering. React, Next.js, TypeScript.",
    siteName: "Chirag Sahani Portfolio",
    images: [
      {
        url: "/Logo.png",
        width: 1536,
        height: 1024,
        alt: "Chirag Sahani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Sahani — Software Engineer",
    description:
      "Building scalable AI-powered digital experiences with precision engineering.",
    creator: "@chiragsahani",
    images: ["/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${geist.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SmoothScroll>
            <Loader />
            <CursorGlow />
            <ScrollProgress />
            <div className="relative flex min-h-screen flex-col noise">
              <SiteNav />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}