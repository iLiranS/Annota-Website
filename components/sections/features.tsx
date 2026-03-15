"use client"

import { useState, useEffect, useRef } from "react"
import { ShieldAlert, FolderTree, FileText, CheckCircle2, History, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Ultimate Organization",
    description: "Deep-nested folders and fluid tagging that adapt to your workflow.",
    icon: FolderTree,
    color: "bg-blue-500/10 text-blue-500",
    image: "/assets/desktop/folders.webp",
  },
  {
    title: "Absolute Privacy",
    description: "Full offline capability with E2E encryption. Your data, your keys. The server see nothing !",
    icon: ShieldAlert,
    color: "bg-emerald-500/10 text-emerald-500",
    image: "/assets/desktop/privacy.webp",
  },
  {
    title: "Powerful Editor",
    description: "Embed images, tables, and LaTeX in a distraction-free environment.",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-500",
    image: "/assets/desktop/editor.webp",
  },
  {
    title: "Integrated Tasks",
    description: "Manage and create to-dos and attach them to folders.",
    icon: CheckCircle2,
    color: "bg-orange-500/10 text-orange-500",
    image: "/assets/desktop/tasks.webp",
  },
  {
    title: "Total Continuity",
    description: "Instant recovery with version history and safety-first deletion.",
    icon: History,
    color: "bg-pink-500/10 text-pink-500",
    image: "/assets/desktop/version_history.webp",
  },
  {
    title: "Get Insights",
    description: "Get Weekly insights on your notes and tasks with beautiful dashboard.",
    icon: Lightbulb,
    color: "bg-indigo-500/10 text-indigo-500",
    image: "/assets/desktop/home.webp",
  }
]

export function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const autoPlayDuration = 6000 // 6 seconds per feature

  const timerRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })

  useEffect(() => {
    if (isPaused || !isInView) {
      if (timerRef.current) cancelAnimationFrame(timerRef.current)
      return;
    }

    // Use current progress to calculate a virtual start time in the past
    // This allows the animation to resume from exactly where it was.
    const startTime = Date.now() - (progress / 100 * autoPlayDuration);

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.min((elapsed / autoPlayDuration) * 100, 100);

      if (newProgress >= 100) {
        setProgress(0);
        setActiveIndex((prev) => (prev + 1) % features.length);
      } else {
        setProgress(newProgress);
        timerRef.current = requestAnimationFrame(updateProgress);
      }
    };

    timerRef.current = requestAnimationFrame(updateProgress);
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [activeIndex, isPaused, isInView])

  const handleSelect = (index: number) => {
    if (index === activeIndex) {
      setIsPaused((prev) => !prev)
      return
    }
    setActiveIndex(index)
    setProgress(0)
    setIsPaused(false)
  }

  return (
    <section id="features" ref={containerRef} className="relative lg:h-dvh lg:min-h-[800px] flex flex-col justify-center bg-background overflow-hidden py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        <div className="mb-8 shrink-0">
          <h2 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl lg:text-6xl max-w-2xl">
            Everything you need for <span className="text-primary italic font-serif">Deep Focus.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 flex-1 min-h-0 w-full h-full">
          {/* Main Visual Area (Desktop only) */}
          <div
            className="hidden lg:block flex-1 min-w-0 relative group h-full cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => setIsPaused((prev) => !prev)}
          >
            <div className="relative aspect-3104/1964 w-full overflow-hidden rounded-3xl border border-border bg-muted ring-1 ring-border/50 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center bg-card"
                >
                  <FeatureVisual index={activeIndex} isPaused={isPaused} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* List Area */}
          <div className="flex-none lg:w-[380px] xl:w-[420px] flex flex-col gap-3 h-full overflow-y-auto pr-2 custom-scrollbar">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={cn(
                  "relative flex flex-col items-start p-4 rounded-2xl border transition-all text-left group shrink-0",
                  activeIndex === index
                    ? "bg-card border-primary shadow-lg"
                    : "bg-transparent border-transparent hover:bg-muted/50"
                )}
              >
                {/* Progress background */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0, ease: "linear" }}
                    className="absolute inset-0 bg-primary/5 rounded-2xl pointer-events-none"
                  />
                )}

                <div className="relative z-10 flex items-center gap-3">
                  <div className={cn(
                    "h-8 w-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110",
                    activeIndex === index ? feature.color : "bg-muted text-muted-foreground"
                  )}>
                    <feature.icon size={16} />
                  </div>
                  <span className={cn(
                    "text-base font-bold tracking-tight transition-colors",
                    activeIndex === index ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {feature.title}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 4 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="relative z-10 w-full overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground leading-snug">
                        {feature.description}
                      </p>

                      {/* Mobile Visual Content */}
                      <div className="lg:hidden mt-4 pb-2">
                        <div className="rounded-xl overflow-hidden border border-border bg-muted/50">
                          <FeatureVisual index={index} isPaused={isPaused} isMobile />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureVisual({ index, isPaused, isMobile = false }: { index: number; isPaused: boolean; isMobile?: boolean }) {
  const feature = features[index]

  return (
    <div className={cn(
      "flex flex-col items-center text-center w-full h-full relative group/visual",
      isMobile ? "max-w-none p-0" : "max-w-none p-0"
    )}>
      {/* Container for Image */}
      <div className={cn(
        "w-full bg-muted border-border flex flex-col items-center justify-center relative overflow-hidden",
        isMobile ? "aspect-3104/1964 border-none" : "h-full border-none"
      )}>
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          loading="lazy"
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />

        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent pointer-events-none" />

        <AnimatePresence mode="wait">
          {isPaused && (
            <motion.div
              key="pause-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <div className="h-20 w-20 rounded-full bg-background/40 flex items-center justify-center  border border-primary/30 shadow-2xl">
                <div className="flex gap-2">
                  <div className="h-8 w-2.5 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                  <div className="h-8 w-2.5 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-6 left-6 z-10 bg-background/60 px-4 py-2 rounded-2xl border border-white/10 shadow-xl opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300">
          <p className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Live Preview: {feature.title}
          </p>
        </div>
      </div>

      {/* Status indicator */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={cn(
              "absolute z-30 bg-background/80 border border-primary/30  px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg",
              isMobile ? "bottom-4 right-4" : "top-8 right-8"
            )}
          >
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black tracking-widest uppercase text-primary">System Paused</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

