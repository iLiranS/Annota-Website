"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon, FileText, Bot, History, ShieldAlert, Heart } from "lucide-react"
import Image from "next/image"

interface Feature {
  id: string
  title: string
  description: string
  icon: LucideIcon
  videoUrl?: string
  imageUrl?: string
  color: string
}

const features: Feature[] = [
  {
    id: "editor",
    title: "Powerful Editor",
    description: "Embed images, PDFs, tables, LaTeX, FlashCards, Code and more in a distraction-free environment. Everything you need to capture complex ideas with ease.",
    icon: FileText,
    videoUrl: "https://f3zt4im3rd.ufs.sh/f/F0BpEl6F0ft7cavnK6lumECBjSXTAIlpFv7Otubixk8dq2Za",
    color: "text-purple-500"
  },
  {
    id: "ai",
    title: "AI Assistant",
    description: "Chat with your notes and folders or use the in-editor assistant for instant help. Supports local Ollama or BYOK for maximum power and absolute privacy.",
    icon: Bot,
    videoUrl: "https://f3zt4im3rd.ufs.sh/f/F0BpEl6F0ft7wxPqtVQ4rIB5CJ0Sq1PQaXUVNzZL2iduGvk9",
    color: "text-orange-500"
  },
  {
    id: "version",
    title: "Total Continuity",
    description: "Instant recovery with version history and safety-first deletion. Your thoughts are safe with Annota, always.",
    icon: History,
    imageUrl: "/assets/features/version.webp",
    color: "text-pink-500"
  },
  {
    id: "privacy",
    title: "Absolute Privacy",
    description: "Full offline capability with E2E encryption. Your data, your keys. The server sees absolutely nothing by design.",
    icon: ShieldAlert,
    imageUrl: "/assets/features/privacy.webp",
    color: "text-emerald-500"
  },
  {
    id: "support",
    title: "Always Local & Free",
    description: "All features are 100% free for local use on both mobile and desktop. Support our development with a subscription to sync your content across devices.",
    icon: Heart,
    imageUrl: "/assets/features/support.webp",
    color: "text-red-500"
  },
]

export function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * features.length), features.length - 1)
    if (index !== activeIndex) {
      setActiveIndex(index)
    }
  })

  // Preload all video URLs eagerly
  const videoUrls = features.filter(f => f.videoUrl).map(f => f.videoUrl!)

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative h-[300vh] bg-background"
    >
      {/* Hidden Eager Preloader */}
      <div className="hidden" aria-hidden="true">
        {videoUrls.map(url => (
          <video key={url} src={url} preload="auto" muted playsInline />
        ))}
      </div>

      {/* Shared Sticky Container */}
      <div className="sticky top-0 pt-20 bg-background lg:bg-transparent  lg:pt-0  lg:h-screen w-full overflow-hidden z-30 lg:z-10 ">
        <div className="flex h-full w-full flex-col lg:flex-row">
          {/* Left/Top Side: Visual Container */}
          <div className="w-full lg:w-3/5 h-full relative flex items-center justify-center p-4 lg:p-12 xl:p-20">
            <div className="relative w-full aspect-16/10 rounded-2xl lg:rounded-3xl bg-muted/20 border border-border/50 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] lg:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <FeatureVisual
                    url={features[activeIndex].videoUrl || features[activeIndex].imageUrl || ""}
                    type={features[activeIndex].videoUrl ? "video" : "image"}
                    title={features[activeIndex].title}
                  />
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[80px] lg:blur-[120px] rounded-full -z-10" />
          </div>

          {/* Right Side: Spacer for desktop */}
          <div className="hidden lg:block w-2/5 h-full" />
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <div className="container mx-auto px-6 flex flex-col lg:items-end">
          {/* Spacer to align with the TOP of the video frame */}
          <div className="h-[45vh] lg:h-[20vh]" />

          {features.map((feature, index) => (
            <div key={feature.id} className="h-[50vh] lg:h-[50vh] w-full lg:w-2/5 flex flex-col justify-start pointer-events-auto">
              <motion.div
                initial={{ opacity: 0.1, y: 20, scale: 0.95 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.1,
                  y: activeIndex === index ? 0 : 20,
                  scale: activeIndex === index ? 1 : 0.95
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "flex flex-col gap-4 lg:gap-6 p-6 lg:p-0 rounded-3xl lg:rounded-none",
                  "bg-card/80 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-border/50 lg:border-none shadow-2xl lg:shadow-none"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-2.5 lg:p-3 rounded-xl lg:rounded-2xl bg-muted/50 transition-colors duration-500 shadow-sm",
                    activeIndex === index && "bg-primary/10 " + feature.color
                  )}>
                    <feature.icon className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl lg:text-4xl xl:text-5xl font-black tracking-tighter">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-base lg:text-xl text-muted-foreground leading-relaxed max-w-md">
                  {feature.description}
                </p>


              </motion.div>
            </div>
          ))}
          {/* Bottom spacer */}
          <div className="h-[25vh] lg:h-[25vh]" />
        </div>
      </div>

      {/* Global Scroll Progress */}
      <motion.div
        className="fixed left-0 bottom-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
    </section>
  )
}

function FeatureVisual({ url, type, title }: { url: string; type: "video" | "image"; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center bg-black/5 overflow-hidden",
        type === "video" && "group/video"
      )}
    >
      {type === "video" ? (
        <video
          ref={videoRef}
          src={url}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-full object-cover"
          preload="auto"
        />
      ) : (
        <Image
          src={url}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      )}

      {/* Enhanced Placeholder/Fallback */}
      <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-muted/5 to-muted/20 backdrop-blur-[1px] -z-10">
        <div className="flex flex-col items-center gap-4 opacity-10">
          <div className="text-8xl font-black uppercase tracking-widest -rotate-12 select-none">
            Annota
          </div>
          <div className="text-2xl font-bold tracking-widest uppercase">
            {title}
          </div>
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/5 to-transparent" />
    </div>
  )
}
