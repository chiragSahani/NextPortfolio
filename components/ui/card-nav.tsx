"use client"

import React, { useLayoutEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ArrowUpRight } from "lucide-react"

type CardNavLink = {
  label: string
  href: string
  ariaLabel: string
}

export type CardNavItem = {
  label: string
  bgColor: string
  textColor: string
  links: CardNavLink[]
}

export interface CardNavProps {
  logo: string
  logoAlt?: string
  items: CardNavItem[]
  className?: string
  ease?: string
  baseColor?: string
  menuColor?: string
  buttonBgColor?: string
  buttonTextColor?: string
  ctaLabel?: string
  ctaHref?: string
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#0a0a0c",
  menuColor = "#fff",
  buttonBgColor = "#3b82f6",
  buttonTextColor = "#fff",
  ctaLabel = "Resume",
  ctaHref = "#contact",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const calculateHeight = () => {
    const navEl = navRef.current
    if (!navEl) return 260

    const isMobile = window.matchMedia("(max-width: 768px)").matches
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement
      if (contentEl) {
        const wasVisible = contentEl.style.visibility
        const wasPointerEvents = contentEl.style.pointerEvents
        const wasPosition = contentEl.style.position
        const wasHeight = contentEl.style.height

        contentEl.style.visibility = "visible"
        contentEl.style.pointerEvents = "auto"
        contentEl.style.position = "static"
        contentEl.style.height = "auto"

        contentEl.offsetHeight

        const topBar = 60
        const padding = 16
        const contentHeight = contentEl.scrollHeight

        contentEl.style.visibility = wasVisible
        contentEl.style.pointerEvents = wasPointerEvents
        contentEl.style.position = wasPosition
        contentEl.style.height = wasHeight

        return topBar + contentHeight + padding
      }
    }
    return 260
  }

  const createTimeline = () => {
    const navEl = navRef.current
    if (!navEl) return null

    gsap.set(navEl, { height: 60, overflow: "hidden" })
    gsap.set(cardsRef.current, { y: 50, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    })

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, "-=0.1")

    return tl
  }

  useLayoutEffect(() => {
    const tl = createTimeline()
    tlRef.current = tl

    return () => {
      tl?.kill()
      tlRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items])

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return

      if (isExpanded) {
        const newHeight = calculateHeight()
        gsap.set(navRef.current, { height: newHeight })

        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          newTl.progress(1)
          tlRef.current = newTl
        }
      } else {
        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          tlRef.current = newTl
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded])

  const toggleMenu = () => {
    const tl = tlRef.current
    if (!tl) return
    if (!isExpanded) {
      setIsHamburgerOpen(true)
      setIsExpanded(true)
      tl.play(0)
    } else {
      setIsHamburgerOpen(false)
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false))
      tl.reverse()
    }
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        // Close menu after navigation
        if (isExpanded) toggleMenu()
      }
    }
  }

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el
  }

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[1.5em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""} block h-[60px] p-0 rounded-xl shadow-lg shadow-black/40 relative overflow-hidden will-change-[height] border border-white/10 backdrop-blur-xl`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
              } group-hover:opacity-75`}
            />
          </div>

          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none"
            aria-label="Home"
          >
            <Image
              src={logo}
              alt={logoAlt}
              width={1536}
              height={1024}
              priority
              className="logo h-[28px] w-auto object-contain"
            />
          </a>

          <a
            href={ctaHref}
            onClick={(e) => handleLinkClick(e, ctaHref)}
            target={ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card-nav-cta-button hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] px-4 items-center h-full font-medium cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            {ctaLabel}
          </a>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
            isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-[12px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-display font-semibold tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    onClick={(e) => handleLinkClick(e, lnk.href)}
                    target={lnk.href.startsWith("http") || lnk.href.startsWith("mailto") ? "_blank" : undefined}
                    rel={lnk.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={lnk.ariaLabel}
                  >
                    <ArrowUpRight className="nav-card-link-icon shrink-0 h-4 w-4" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default CardNav
