"use client"

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
  FolderTree,
  Files,
  Sparkles,
  BrainCircuit,
  Images,
  FileText,
  Lock,
  MonitorSmartphone,
  Share,
  History,
  Network,
  Terminal,
  LucideIcon
} from "lucide-react"

interface MainFeatureItem {
  id: string
  title: string
  icon: LucideIcon
  imageUrl: string
  colorClass: string
}

interface SpecialFeatureItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  colorClass: string
}

// ─── Main grid features (9 items) ─────────────────────────────────────────────
const mainFeatures: MainFeatureItem[] = [
  {
    id: "editor",
    title: "Rich Editor",
    icon: FileText,
    imageUrl: "/assets/features/rich_editor.webp",
    colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/40",
  },
  {
    id: "organization",
    title: "Organization",
    icon: FolderTree,
    imageUrl: "/assets/features/tabs.gif",
    colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/40",
  },
  {
    id: "customization",
    title: "Customization",
    icon: Files,
    imageUrl: "/assets/features/customization.gif",
    colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/40",
  },
  {
    id: "ai",
    title: "AI",
    icon: Sparkles,
    imageUrl: "/assets/features/ai.gif",
    colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/40",
  },
  {
    id: "flashcards",
    title: "Flashcards",
    icon: BrainCircuit,
    imageUrl: "/assets/features/flashcards.gif",
    colorClass: "text-rose-400 bg-rose-500/10 border-rose-500/20 group-hover:border-rose-500/40",
  },
  {
    id: "gallery",
    title: "Image Gallery",
    icon: Images,
    imageUrl: "/assets/features/gallery.webp",
    colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/20 group-hover:border-pink-500/40",
  },
  {
    id: "syncing",
    title: "Cross-Device Syncing",
    icon: MonitorSmartphone,
    imageUrl: "/assets/features/sync.webp",
    colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-500/40",
  },
  {
    id: "history",
    title: "Version History",
    icon: History,
    imageUrl: "/assets/features/version.webp",
    colorClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-500/40",
  },
  {
    id: "slash",
    title: '/ Commands',
    icon: Terminal,
    imageUrl: "/assets/features/slash.gif",
    colorClass: "text-violet-400 bg-violet-500/10 border-violet-500/20 group-hover:border-violet-500/40",
  },
]

// ─── Special features below (3 items, minimal description, no images) ─────────
const specialFeatures: SpecialFeatureItem[] = [
  {
    id: "privacy",
    title: "E2E Encrypted",
    description: "On device and also on the server - server see nothing.",
    icon: Lock,
    colorClass: "text-teal-400 bg-teal-500/10 border-teal-500/20 group-hover:border-teal-500/40",
  },
  {
    id: "linked",
    title: "Linked Notes",
    description: "Can link between notes or specific blocks inside them.",
    icon: Network,
    colorClass: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20 group-hover:border-fuchsia-500/40",
  },
  {
    id: "exports",
    title: "Exports",
    description: "PDF / HTML / Markdown",
    icon: Share,
    colorClass: "text-orange-400 bg-orange-500/10 border-orange-500/20 group-hover:border-orange-500/40",
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col aspect-video w-full mt-1.5 sm:mt-2 shrink-0">
      {/* Traffic lights */}
      <div className="flex items-center gap-1 px-2.5 py-1.5 border-b border-zinc-850 bg-zinc-900/60 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
      </div>
      <div className="relative flex-1 min-h-0 overflow-hidden bg-zinc-950">{children}</div>
    </div>
  )
}

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      unoptimized
    />
  )
}

function IconBadge({ icon: Icon, colorClass }: { icon: LucideIcon; colorClass: string }) {
  return (
    <div className={cn("p-2 rounded-xl border transition-all duration-300 shrink-0", colorClass)}>
      <Icon className="w-4 h-4" strokeWidth={2.5} />
    </div>
  )
}

// ── Main section ───────────────────────────────────────────────────────────────

export function FeatureSection() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4"
          >
            Powerful Core Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter"
          >
            Engineered for <span className="text-primary italic font-serif">Deep Thinking</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            A high-performance personal workspace containing all the tools you need to capture, connect, study, and protect your digital mind.
          </motion.p>
        </div>

        {/* ── Main Core Features Grid (Normal grid, 16:9 images) ─────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {mainFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-4 sm:p-5 flex flex-col gap-3.5 justify-between",
                "transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5"
              )}
            >
              <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/8 via-transparent to-primary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center gap-2.5 shrink-0">
                <IconBadge icon={feature.icon} colorClass={feature.colorClass} />
                <h3 className="text-sm sm:text-base font-black tracking-tight text-foreground">{feature.title}</h3>
              </div>

              <BrowserChrome>
                <FeatureImage src={feature.imageUrl} alt={feature.title} />
              </BrowserChrome>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Separate Section Below (Exports, E2E Encrypted, Linked Notes) ───── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 sm:mt-16 pt-8  border-t border-white/8 relative"
        >
          {/* Decorative glowing gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

          {/* Centered muted text on the divider line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground/60 font-semibold select-none whitespace-nowrap">
            And much more
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {specialFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-4 sm:p-5 flex flex-col gap-2.5 min-h-[110px] sm:min-h-[130px] justify-center",
                  "transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5"
                )}
              >
                <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/8 via-transparent to-primary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center gap-2.5">
                  <IconBadge icon={feature.icon} colorClass={feature.colorClass} />
                  <h3 className="text-xs sm:text-sm font-black tracking-tight text-foreground">{feature.title}</h3>
                </div>

                <p className="text-[10px] sm:text-xs leading-relaxed text-muted-foreground font-medium pl-0.5">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}