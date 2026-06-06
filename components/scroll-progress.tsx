"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const totalScrollable = documentHeight - windowHeight

      if (totalScrollable <= 0) {
        setProgress(0)
        return
      }

      const percentage = (scrollPosition / totalScrollable) * 100
      setProgress(percentage)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-16 left-0 h-[2px] bg-primary/40 transition-all duration-75 z-40 ease-out"
      style={{ width: `${progress}%` }}
    />
  )
}
