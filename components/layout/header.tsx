"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "../theme-toggle"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { getPlatform, type Platform } from "@/utils/getPlatform"
import { FaApple, FaWindows, FaLinux, FaAndroid } from "react-icons/fa"

export function Header() {
  const [platform, setPlatform] = useState<Platform | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    setPlatform(getPlatform())
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
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

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/#features" className="text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="/#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="/#faq" className="text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            className="gap-2 text-background dark:text-foreground"
            asChild={process.env.NEXT_PUBLIC_APP_ALPHA === 'true'}
          >
            {process.env.NEXT_PUBLIC_APP_ALPHA === 'true' ? (
              <a 
                href={process.env.NEXT_PUBLIC_ALPHA_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold uppercase tracking-widest text-[10px]"
              >
                {process.env.NEXT_PUBLIC_ALPHA_STARTED === 'true' ? 'In Alpha' : 'Apply Now'}
              </a>
            ) : (
              <>
                {platform === 'macos' && <FaApple className="h-4 w-4" />}
                {platform === 'windows' && <FaWindows className="h-4 w-4" />}
                {platform === 'linux' && <FaLinux className="h-4 w-4" />}
                {platform === 'android' && <FaAndroid className="h-4 w-4" />}
                {platform === 'ios' && <FaApple className="h-4 w-4" />}
                Download App
              </>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
