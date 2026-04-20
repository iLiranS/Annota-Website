import { Badge } from "@/components/ui/badge"
import { CalendarDays, Globe, Monitor, Smartphone, Sparkles, Wrench } from "lucide-react"
import { changelogData } from "@/lib/changelog-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog | Annota",
  description: "Stay up to date with the latest features, improvements, and bug fixes in Annota.",
}

interface PlatformUpdates {
  features: string[]
  fixes: string[]
}

interface ChangelogEntry {
  date: string
  title: string
  common?: PlatformUpdates
  desktop?: PlatformUpdates
  mobile?: PlatformUpdates
}

type Changelog = Record<string, ChangelogEntry>

export default function ChangelogPage() {
  const changelog = changelogData as Changelog
  // Sort versions in descending order (highest version first)
  const versions = Object.keys(changelog).sort((a, b) => {
    const aParts = a.split(".").map(Number)
    const bParts = b.split(".").map(Number)
    for (let i = 0; i < 3; i++) {
      if (aParts[i] > bParts[i]) return -1
      if (aParts[i] < bParts[i]) return 1
    }
    return 0
  })

  const renderUpdates = (updates: PlatformUpdates | undefined, label: string, icon: React.ReactNode, variant: "accent" | "muted" = "muted") => {
    if (!updates || (updates.features.length === 0 && updates.fixes.length === 0)) return null

    const bgStyles = variant === "accent"
      ? "bg-primary/5 border-primary/20 shadow-[0_0_15px_-3px_rgba(var(--primary),0.05)]"
      : "bg-muted/40 border-border/50"

    return (
      <div className={`rounded-2xl border ${bgStyles} p-2 transition-all duration-200`}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className={`flex h-6 w-6 items-center justify-center rounded-lg ${variant === "accent" ? "bg-primary/10 text-primary" : "bg-foreground/5 text-muted-foreground"}`}>
              {icon}
            </div>
            <h3 className={`text-[11px] font-bold uppercase tracking-wider ${variant === "accent" ? "text-primary" : "text-foreground/60"}`}>{label}</h3>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2  gap-3 ">
            {updates.features.length > 0 && (
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tight text-muted-foreground/40">
                  <Sparkles className="h-3 w-3" />
                  <span>Features</span>
                </div>
                <ul className="space-y-2.5 pl-5 list-disc marker:text-primary">
                  {updates.features.map((feature, i) => (
                    <li key={i} className="text-sm text-foreground/80 leading-relaxed ps-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {updates.fixes.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tight text-muted-foreground/40 border-b border-border/5 pb-1">
                  <Wrench className="h-3 w-3" />
                  <span>Fixes</span>
                </div>
                <ul className="space-y-2.5 pl-5 list-disc marker:text-muted-foreground/40">
                  {updates.fixes.map((fix, i) => (
                    <li key={i} className="text-sm text-muted-foreground/70 leading-relaxed ps-2">
                      {fix}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 max-w-5xl">
      <div className="mb-16 text-center text-balance">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">Changelog</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          The latest features, improvements, and bug fixes for Annota.
        </p>
      </div>

      <Accordion type="single" collapsible defaultValue={versions[0]} className="w-full space-y-4">
        {versions.map((version) => {
          const entry = changelog[version]
          return (
            <AccordionItem
              key={version}
              value={version}
              className="rounded-2xl border border-border/50 bg-muted/5 px-4 sm:px-6 transition-all duration-300 hover:bg-muted/10 data-[state=open]:bg-muted/20"
            >
              <AccordionTrigger className="group/trigger hover:no-underline py-6 px-0 decoration-transparent">
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="flex items-center gap-4 overflow-hidden pr-2">
                    <Badge variant="outline" className="font-mono text-[10px] sm:text-xs py-0.5 h-6 px-2 shrink-0 bg-primary/10 text-primary border-primary/20 rounded-md">v{version}</Badge>
                    <h2 className="text-base sm:text-lg font-bold tracking-tight leading-tight text-foreground/90">{entry.title}</h2>
                  </div>
                  <div className="hidden sm:flex shrink-0 items-center gap-2 text-[10px] sm:text-xs text-muted-foreground pr-2">
                    <CalendarDays className="h-3.5 w-3.5 opacity-50" />
                    <span className="tabular-nums font-medium">{entry.date}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-0 overflow-visible h-fit">
                <div className="flex flex-col gap-4">
                  {/* Mobile Date - only visible below sm breakpoint */}
                  <div className="flex sm:hidden items-center justify-center gap-2 text-[10px] text-muted-foreground border-b border-border/5 pb-2 mb-1">
                    <CalendarDays className="h-3.5 w-3.5 opacity-40" />
                    <span className="tabular-nums font-medium">{entry.date}</span>
                  </div>

                  {renderUpdates(entry.common, "Global", <Globe className="h-4 w-4" />, "accent")}
                  {renderUpdates(entry.desktop, "Desktop", <Monitor className="h-4 w-4" />)}
                  {renderUpdates(entry.mobile, "Mobile", <Smartphone className="h-4 w-4" />)}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>




      <div className="mt-20 text-center">
        <p className="text-sm text-muted-foreground">
          Want to see more details? Visit our{" "}
          <a
            href="https://github.com/ilirans/annota"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            GitHub repository
          </a>.
        </p>
      </div>
    </div>
  )
}
