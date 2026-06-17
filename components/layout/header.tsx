"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "../theme-toggle"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { getPlatform, type Platform } from "@/utils/getPlatform"
import { Github, Star } from "lucide-react"
import { AppleIcon, WindowsIcon, LinuxIcon, AndroidIcon } from "@/components/ui/icons"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

interface HeaderProps {
  stars: number | null
}

export function Header({ stars }: HeaderProps) {
  const [platform, setPlatform] = useState<Platform | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isNotePage = pathname?.startsWith("/notes/")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    setPlatform(getPlatform())
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isNotePage) {
    return (
      <div className="w-full flex flex-col z-50 sticky top-0">
        <div className="w-full bg-amber-100 border-b border-amber-500/20 py-2 px-4 text-center text-xs text-amber-700 dark:text-amber-900 font-medium">
          Notice: Annota will no longer receive active development. The app remains available in the App Store for existing license holders.
        </div>
        <header className={cn(
          "w-full transition-all duration-300",
          isScrolled
            ? "border-b bg-background/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}>
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
              <div className="flex h-8 w-8 items-center justify-center">
                <Image src={'/assets/logo.png'} alt="Annota Logo" width={24} height={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">Annota</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggle />
            </div>
          </div>
        </header>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col z-50 sticky top-0">
      <div className="w-full bg-amber-100 border-b border-amber-500/20 py-2 px-4 text-center text-xs text-amber-700 dark:text-amber-400 dark:bg-amber-900 font-medium">
        Notice: Annota will no longer receive active development. The app remains available in the App Store for existing license holders.
      </div>
      <header className={cn(
        "w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
              <div className="flex h-8 w-8 items-center justify-center">
                <Image src={'/assets/logo.png'} alt="Annota Logo" width={24} height={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">Annota</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <Link href="/#features" className="text-muted-foreground transition-colors hover:text-foreground">
                Features
              </Link>
              <Link href="/#faq" className="text-muted-foreground transition-colors hover:text-foreground">
                FAQ
              </Link>
              <Link href="/changelog" className="text-muted-foreground transition-colors hover:text-foreground">
                Changelog
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {stars !== null && (
              <Link
                href="https://github.com/ilirans/annota"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors border border-border/50 group"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-500 fill-yellow-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-semibold tabular-nums">{stars.toLocaleString()}</span>
                </div>
              </Link>
            )}
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="relative overflow-hidden gap-2 bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 border border-primary/20 group/button"
                asChild
              >
                <a
                  href={
                    platform === 'ios'
                      ? 'https://apps.apple.com/us/app/annota-notes/id6761501939'
                      : platform === 'macos'
                        ? 'https://apps.apple.com/us/app/annota-notes/id6761501939'
                        : 'https://github.com/iLiranS/Annota/releases/latest'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 text-white flex items-center gap-2"
                >
                  <span className="flex items-center gap-2 transition-transform duration-300 group-hover/button:translate-x-0.5">
                    {platform === 'macos' && <AppleIcon className="h-4 w-4 transition-transform group-hover/button:-rotate-12" />}
                    {platform === 'windows' && <WindowsIcon className="h-4 w-4 transition-transform group-hover/button:rotate-12" />}
                    {platform === 'linux' && <LinuxIcon className="h-4 w-4 transition-transform group-hover/button:rotate-12" />}
                    {platform === 'android' && <AndroidIcon className="h-4 w-4 transition-transform group-hover/button:rotate-12" />}
                    {platform === 'ios' && <AppleIcon className="h-4 w-4 transition-transform group-hover/button:-rotate-12" />}
                  </span>
                  Download App
                  <motion.div
                    className="absolute inset-0 z-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>
    </div>
  )
}
