"use client"

import { motion } from "framer-motion"
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
  description: string
  icon: LucideIcon
  imageUrl: string
  colorClass: string
  hoverClass: string
  glowClass: string
}

interface SpecialFeatureItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  colorClass: string
  hoverClass: string
  glowClass: string
}

// ─── Main grid features (9 items) ─────────────────────────────────────────────
const mainFeatures: MainFeatureItem[] = [
  {
    id: "editor",
    title: "Rich Editor",
    description: "Markdown support, block-based elements, and seamless layout",
    icon: FileText,
    imageUrl: "/assets/features/rich_editor.webp",
    colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/40",
    hoverClass: "hover:border-purple-500/30 hover:shadow-purple-500/5",
    glowClass: "from-purple-500/8 to-purple-500/4",
  },
  {
    id: "organization",
    title: "Organization",
    description: "Organize your workflow with folders, tags, and  tabs",
    icon: FolderTree,
    imageUrl: "/assets/features/tabs.gif",
    colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/40",
    hoverClass: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
    glowClass: "from-emerald-500/8 to-emerald-500/4",
  },
  {
    id: "customization",
    title: "Customization",
    description: "Personalize your space with accent colors, custom editor fonts, and more",
    icon: Files,
    imageUrl: "/assets/features/customization.gif",
    colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/40",
    hoverClass: "hover:border-blue-500/30 hover:shadow-blue-500/5",
    glowClass: "from-blue-500/8 to-blue-500/4",
  },
  {
    id: "ai",
    title: "AI",
    description: "Leverage the power of the AI chatbot and quick in-editor actions",
    icon: Sparkles,
    imageUrl: "/assets/features/ai.gif",
    colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/40",
    hoverClass: "hover:border-amber-500/30 hover:shadow-amber-500/5",
    glowClass: "from-amber-500/8 to-amber-500/4",
  },
  {
    id: "flashcards",
    title: "Flashcards",
    description: "Create interactive study flashcards manually or generate them via AI",
    icon: BrainCircuit,
    imageUrl: "/assets/features/flashcards.gif",
    colorClass: "text-rose-400 bg-rose-500/10 border-rose-500/20 group-hover:border-rose-500/40",
    hoverClass: "hover:border-rose-500/30 hover:shadow-rose-500/5",
    glowClass: "from-rose-500/8 to-rose-500/4",
  },
  {
    id: "gallery",
    title: "Image Gallery",
    description: "Organize, search, and preview all your media assets in one place",
    icon: Images,
    imageUrl: "/assets/features/gallery.webp",
    colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/20 group-hover:border-pink-500/40",
    hoverClass: "hover:border-pink-500/30 hover:shadow-pink-500/5",
    glowClass: "from-pink-500/8 to-pink-500/4",
  },
  {
    id: "syncing",
    title: "Cross-Device Syncing",
    description: "Keep your notes up to date across all devices automatically",
    icon: MonitorSmartphone,
    imageUrl: "/assets/features/sync.webp",
    colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-500/40",
    hoverClass: "hover:border-cyan-500/30 hover:shadow-cyan-500/5",
    glowClass: "from-cyan-500/8 to-cyan-500/4",
  },
  {
    id: "history",
    title: "Version History",
    description: "Easily track changes, restore, or view older note versions",
    icon: History,
    imageUrl: "/assets/features/version.webp",
    colorClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-500/40",
    hoverClass: "hover:border-indigo-500/30 hover:shadow-indigo-500/5",
    glowClass: "from-indigo-500/8 to-indigo-500/4",
  },
  {
    id: "slash",
    title: '/ Commands',
    description: "Format elements instantly using quick keyboard slash commands",
    icon: Terminal,
    imageUrl: "/assets/features/slash.gif",
    colorClass: "text-violet-400 bg-violet-500/10 border-violet-500/20 group-hover:border-violet-500/40",
    hoverClass: "hover:border-violet-500/30 hover:shadow-violet-500/5",
    glowClass: "from-violet-500/8 to-violet-500/4",
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
    hoverClass: "hover:border-teal-500/30 hover:shadow-teal-500/5",
    glowClass: "from-teal-500/8 to-teal-500/4",
  },
  {
    id: "linked",
    title: "Linked Notes",
    description: "link between notes or specific blocks inside them and get back links.",
    icon: Network,
    colorClass: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20 group-hover:border-fuchsia-500/40",
    hoverClass: "hover:border-fuchsia-500/30 hover:shadow-fuchsia-500/5",
    glowClass: "from-fuchsia-500/8 to-fuchsia-500/4",
  },
  {
    id: "exports_imports",
    title: "Import / Export",
    description: "Markdown / HTML / PDF",
    icon: Share,
    colorClass: "text-orange-400 bg-orange-500/10 border-orange-500/20 group-hover:border-orange-500/40",
    hoverClass: "hover:border-orange-500/30 hover:shadow-orange-500/5",
    glowClass: "from-orange-500/8 to-orange-500/4",
  },
]

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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            Powerful Core Features
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
            Engineered for <span className="text-primary italic font-serif">Deep Thinking</span>.
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            A high-performance personal workspace containing all the tools you need to capture, connect, study, and protect your digital mind.
          </p>
        </div>

        {/* ── Main Core Features Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mainFeatures.map((feature) => (
            <div
              key={feature.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-4 sm:p-5 flex flex-col justify-between",
                "transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5",
                feature.hoverClass
              )}
            >
              <div className={cn("absolute -inset-px rounded-2xl bg-linear-to-br via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", feature.glowClass)} />

              <div className="flex flex-col gap-2 shrink-0">
                <div className="flex items-center gap-2.5">
                  <IconBadge icon={feature.icon} colorClass={feature.colorClass} />
                  <h3 className="text-sm sm:text-base font-black tracking-tight text-foreground">{feature.title}</h3>
                </div>
                <p className="text-[11px] sm:text-xs leading-normal text-muted-foreground/80 font-medium pl-0.5 line-clamp-1">
                  {feature.description}
                </p>
              </div>

              <BrowserChrome>
                <FeatureImage src={feature.imageUrl} alt={feature.title} />
              </BrowserChrome>
            </div>
          ))}
        </div>

        {/* ── Separate Section Below (Exports, E2E Encrypted, Linked Notes) ── */}
        <div className="mt-8 sm:mt-16 pt-8 border-t border-border/60 relative">
          {/* Decorative glowing gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

          {/* Centered muted text on the divider line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground/60 font-semibold select-none whitespace-nowrap">
            And much more
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {specialFeatures.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/60 bg-card/30 backdrop-blur-md p-4 sm:p-5 flex flex-col gap-2.5 min-h-[110px] sm:min-h-[130px] justify-center",
                  "transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5",
                  feature.hoverClass
                )}
              >
                <div className={cn("absolute -inset-px rounded-2xl bg-linear-to-br via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", feature.glowClass)} />

                <div className="flex items-center gap-2.5">
                  <IconBadge icon={feature.icon} colorClass={feature.colorClass} />
                  <h3 className="text-xs sm:text-sm font-black tracking-tight text-foreground">{feature.title}</h3>
                </div>

                <p className="text-[10px] sm:text-xs leading-relaxed text-muted-foreground font-medium pl-0.5">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}