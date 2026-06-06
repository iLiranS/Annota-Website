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
            {/* Visual line representation */}
            <div
              className={cn(
                "h-1 rounded-full transition-all duration-200",
                isActive
                  ? `bg-primary ${activeWidth}`
                  : `bg-muted-foreground/25 group-hover:bg-muted-foreground/60 ${barWidth}`
              )}
            />

            {/* Title on the right of the bar (active = primary, hover = muted non-accent) */}
            <span
              className={cn(
                "absolute left-full ml-2.5 top-1/2 -translate-y-1/2 text-[11px] font-semibold transition-all duration-300 ease-out pointer-events-none select-none block truncate",
                isActive
                  ? "text-primary opacity-100 translate-x-0 max-w-[80px] lg:max-w-[100px] xl:max-w-[140px] 2xl:max-w-[200px]"
                  : "text-muted-foreground/80 opacity-0 -translate-x-2 max-w-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:max-w-[80px] lg:group-hover:max-w-[100px] xl:group-hover:max-w-[140px] 2xl:group-hover:max-w-[200px]"
              )}
              title={heading.text}
            >
              {heading.text}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
