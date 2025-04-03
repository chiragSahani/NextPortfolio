import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Loader } from "@/components/loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chirag Sahani | Software Developer",
  description:
    "Personal portfolio of Chirag Sahani, a Software Developer specializing in building exceptional digital experiences",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chiragsahani.com",
    title: "Chirag Sahani | Software Developer",
    description:
      "Personal portfolio of Chirag Sahani, a Software Developer specializing in building exceptional digital experiences",
    siteName: "Chirag Sahani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Sahani | Software Developer",
    description:
      "Personal portfolio of Chirag Sahani, a Software Developer specializing in building exceptional digital experiences",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Loader />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'