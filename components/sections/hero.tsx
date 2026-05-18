"use client"

import { Button } from "@/components/ui/button"
import { Shield, PenLine, Monitor } from "lucide-react"
import { motion, Variants, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { FaDiscord, FaApple, FaGooglePlay, FaWindows, FaLinux } from "react-icons/fa"
import { getPlatform, type Platform } from "@/utils/getPlatform"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useMediaQuery } from "@/hooks/use-media-query"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [platform, setPlatform] = useState<Platform | null>(null)
  const theme = useTheme()
  const sectionRef = useRef<HTMLElement>(null)

  const isDesktop = useMediaQuery("(min-width: 768px)")

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Scroll-based reveal for the device stack - Only on Desktop
  const stackY = useTransform(scrollYProgress, [0, 0.5], [0, isDesktop ? -40 : 0])
  const desktopRotateX = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? 5 : 0])
  const mobileTranslateX = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? 10 : 0])
  const mobileTranslateY = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? -80 : 0])

  useEffect(() => {
    setMounted(true)
    setPlatform(getPlatform())
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }


  const glowVariants: Variants = {
    animate: {
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.1, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-fit w-full bg-background flex flex-col items-center pt-8 sm:pt-12 lg:pt-16 pb-0 px-4"
    >


      <div className="container relative z-20 mx-auto flex flex-col items-center flex-1">
        {/* Main Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full"
        >
          {/* Header & Badges Row - Better Integration */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
            <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] font-[Inter] font-black tracking-tighter text-foreground">
              Your digital mind <br /> <span className="text-primary italic">Simple & Secure</span>
            </motion.h1>

            <motion.div className="flex items-center justify-center p-1 rounded-full sm:rounded-2xl bg-muted/30 border border-border/50 w-full sm:w-auto overflow-hidden">
              {/* Trust & Community Badges grouped together */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 whitespace-nowrap">
                <Shield size={14} className="text-primary" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-foreground/70">Local-First</span>
              </div>
              <a
                href="https://discord.gg/dG5nNJPDAh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 bg-primary text-white rounded-full sm:rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <FaDiscord size={14} className="text-white" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide">Discord</span>
              </a>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 whitespace-nowrap">
                <PenLine size={14} className="text-primary" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-foreground/70">Encrypted</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Download Buttons - Professional Grid */}
          <div className="relative w-full max-w-4xl px-2 sm:px-4">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 w-full relative z-40"
            >
              {[
                { id: 'macos', name: 'TestFlight', icon: FaApple, label: 'Download from', href: 'https://testflight.apple.com/join/mmgSW44D' },
                { id: 'windows', name: 'Windows', icon: FaWindows, label: 'Get it for', href: 'https://github.com/iLiranS/Annota/releases/latest' },
                { id: 'linux', name: 'Linux', icon: FaLinux, label: 'Get it for', href: '#' },
                { id: 'android', name: 'Google Play', icon: FaGooglePlay, label: 'Available on', href: '#' },
              ].map((p) => {
                const isActive = platform === p.id || (p.id === 'macos' && platform === 'ios');
                const isAvailable = p.href !== '#';
                const Icon = p.icon;

                const labelText = isAvailable ? p.label : "Coming soon";
                const iconClass = cn(
                  "transition-transform group-hover:scale-110",
                  isActive ? "text-white" : "text-foreground/70",
                  p.id === 'macos' ? "w-6 h-6 sm:w-7 sm:h-7" : "w-5 h-5 sm:w-6 sm:h-6"
                );

                const buttonContent = (
                  <>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Icon className={iconClass} />
                      <div className="text-left leading-none">
                        <span className="block text-[8px] sm:text-[10px] uppercase font-black opacity-60 tracking-wider sm:tracking-widest">{labelText}</span>
                        <span className="text-xs sm:text-sm font-black">{p.name}</span>
                      </div>
                    </div>
                    {!isAvailable && (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-inherit text-[8px] font-black uppercase tracking-widest text-muted-foreground">
                        Coming Soon
                      </div>
                    )}
                  </>
                );

                return (
                  <Button
                    key={p.id}
                    asChild={isAvailable}
                    disabled={!isActive && !isAvailable}
                    variant={isActive ? "default" : "outline"}
                    className={cn(
                      "group relative  min-h-16 w-full flex-col items-center justify-center gap-0.5 rounded-xl sm:rounded-2xl transition-all hover:scale-105 active:scale-95 px-2.5 sm:px-4 text-center",
                      isActive
                        ? "bg-primary text-white shadow-2xl shadow-primary/30"
                        : "border-border/60 bg-background/40 text-foreground  hover:bg-muted/50"
                    )}
                  >
                    {isAvailable ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full">
                        {buttonContent}
                      </a>
                    ) : (
                      buttonContent
                    )}
                  </Button>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Product Hub Visualization - Cohesive Desktop & Mobile Stack */}
        <motion.div
          style={{ y: stackY }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl mt-4 lg:mt-16 pointer-events-none flex flex-col items-center"
        >
          <div className="relative w-full flex items-center justify-center lg:justify-end pr-0 lg:pr-32 -z-10">

            {/* Desktop Preview - Clean, borderless */}
            <motion.div
              style={{ rotateX: desktopRotateX }}
              className="relative w-full lg:w-[85%]   aspect-16/10 overflow-hidden"
            >
              <Image
                src={mounted && theme.resolvedTheme === 'dark' ? "/assets/desktop/preview_dark.webp" : "/assets/desktop/preview_light.webp"}
                alt="Annota Desktop"
                fill
                className="object-fit"
                priority
                unoptimized
              />

            </motion.div>

            {/* Mobile Preview Frame - Overlapping Desktop */}
            <motion.div
              style={{ x: mobileTranslateX, y: mobileTranslateY }}
              className="absolute right-3 sm:right-4 bottom-[-15%] sm:bottom-[-10%] w-24 sm:w-[28%] lg:w-[22%] aspect-9/19.5 rounded-[1rem] sm:rounded-[2rem] overflow-hidden shadow-[0_50px_80px_-15px_rgba(0,0,0,0.4)] z-30 ring-2 ring-border/50"
            >
              <Image
                src={mounted && theme.resolvedTheme === 'dark' ? "/assets/mobile/preview_dark.webp" : "/assets/mobile/preview_light.webp"}
                alt="Annota Mobile"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </motion.div>

            {/* Ambient Lighting */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
