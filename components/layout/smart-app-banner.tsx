"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SmartAppBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if user dismissed it previously
    const isDismissed = localStorage.getItem("annota-banner-dismissed") === "true"
    if (isDismissed) return

    const ua = navigator.userAgent.toLowerCase()

    // Detect iOS (iPhone, iPad, iPod)
    const isIOS = /ipad|iphone|ipod/.test(ua) || (ua.includes("mac") && navigator.maxTouchPoints > 1)

    // Detect iOS Safari (the native banner will handle Safari)
    const isSafari = ua.includes("safari") && !ua.includes("chrome") && !ua.includes("crios") && !ua.includes("fxios") && !ua.includes("opios")

    // Show custom banner only on iOS devices when NOT using native Safari
    if (isIOS && !isSafari) {
      // Delay showing the banner slightly for a premium feel
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("annota-banner-dismissed", "true")
  }

  if (!mounted || !isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-50 p-4 rounded-2xl border border-border/40 bg-background/80 backdrop-blur-lg shadow-2xl flex items-center justify-between gap-3"
        >
          {/* App Logo & Details */}
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-md border border-border/50 bg-card shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Annota Logo"
                fill
                className="object-cover p-2"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm tracking-tight text-foreground">Annota Notes</span>
              <span className="text-[11px] text-muted-foreground line-clamp-1">Simple & Secure Digital Mind</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded uppercase tracking-wider">Free</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary hover:bg-primary/95 text-white font-extrabold text-xs px-4 h-8 transition-transform hover:scale-105 active:scale-95"
            >
              <a
                href="https://apps.apple.com/us/app/annota-notes/id6761501939"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET
              </a>
            </Button>
            <button
              onClick={handleDismiss}
              className="p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss banner"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
