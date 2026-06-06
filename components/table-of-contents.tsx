"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

export interface TocItem {
  text: string
  id: string
  level: number
}

interface TableOfContentsProps {
  headings: TocItem[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id || "")
  const isClickScrolling = useRef(false)

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return

        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          const closest = visibleEntries.reduce((prev, curr) => {
            return Math.abs(curr.boundingClientRect.top - 80) < Math.abs(prev.boundingClientRect.top - 80)
              ? curr
              : prev
          })
          setActiveId(closest.target.id)
        } else {
          const scrollPosition = window.scrollY
          let currentHeading = headings[0].id
          for (const heading of headings) {
            const el = document.getElementById(heading.id)
            if (el && el.offsetTop - 120 <= scrollPosition) {
              currentHeading = heading.id
            } else {
              break
            }
          }
          setActiveId(currentHeading)
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    )

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    })

    const handleScroll = () => {
      if (isClickScrolling.current) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveId(headings[headings.length - 1].id)
        return
      }

      const firstEl = document.getElementById(headings[0].id)
      if (firstEl && scrollPosition < firstEl.offsetTop - 120) {
        setActiveId(headings[0].id)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id)
        if (el) observer.unobserve(el)
      })
      window.removeEventListener("scroll", handleScroll)
    }
  }, [headings])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      isClickScrolling.current = true
      setActiveId(id)

      const headerOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      setTimeout(() => {
        isClickScrolling.current = false
      }, 800)
    }
  }

  if (headings.length === 0) return null

  return (
    <nav className="flex flex-col gap-2 py-4 w-12 items-end pr-2" aria-label="Table of contents">
      {headings.map((heading) => {
        const isActive = activeId === heading.id

        // Render line lengths representing headers hierarchy (H2 is longest, H3 shorter, H4 shortest)
        let barWidth = "w-16"
        let activeWidth = "w-20"
        if (heading.level === 3) {
          barWidth = "w-11"
          activeWidth = "w-14"
        } else if (heading.level === 4) {
          barWidth = "w-6"
          activeWidth = "w-9"
        }

        return (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => handleScrollTo(e, heading.id)}
            className="group relative flex h-3 items-center focus:outline-none"
          >
            {/* Tooltip on the left of the bar */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-150 bg-popover/95 border border-border/60 text-foreground px-2 py-1 rounded-md shadow-sm text-[11px] font-medium text-nowrap pointer-events-none backdrop-blur-xs select-none">
              {heading.text}
            </span>

            {/* Visual line representation */}
            <div
              className={cn(
                "h-1 rounded-full transition-all duration-200",
                isActive
                  ? `bg-primary ${activeWidth}`
                  : `bg-muted-foreground/25 group-hover:bg-muted-foreground/60 ${barWidth}`
              )}
            />
          </a>
        )
      })}
    </nav>
  )
}
