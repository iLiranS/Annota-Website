import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, CheckCircle2, Monitor, Rocket, Smartphone } from "lucide-react"
import { changelogData } from "@/lib/changelog-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

  const renderUpdates = (updates: PlatformUpdates | undefined, label: string, icon: React.ReactNode) => {
    if (!updates || (updates.features.length === 0 && updates.fixes.length === 0)) return null

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-border/40 pb-2">
          {icon}
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{label}</h3>
        </div>
        
        {updates.features.length > 0 && (
          <div className="space-y-3 pt-1">
            <div className="flex items-center gap-2 font-semibold text-primary/90">
              <Rocket className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Features</span>
            </div>
            <ul className="space-y-2.5 pl-1">
              {updates.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-foreground/85 leading-relaxed">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {updates.fixes.length > 0 && (
          <div className="space-y-3 pt-1">
            <div className="flex items-center gap-2 font-semibold text-green-600/90">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Fixes</span>
            </div>
            <ul className="space-y-2.5 pl-1">
              {updates.fixes.map((fix, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground leading-relaxed">
                  <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/30" />
                  <span>{fix}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 max-w-3xl">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Changelog</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Follow our journey as we build Annota. All updates, now organized by platform.
        </p>
      </div>

      <Accordion type="single" collapsible defaultValue={versions[0]} className="w-full space-y-3">
        {versions.map((version) => {
          const entry = changelog[version]
          return (
            <AccordionItem
              key={version}
              value={version}
              className="rounded-xl border border-border/50 bg-muted/20 px-4 transition-all duration-150 hover:bg-muted/30 data-[state=open]:bg-muted/40"
            >
              <AccordionTrigger className="group/trigger hover:no-underline py-4 px-0">
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="flex items-center gap-3 overflow-hidden pr-2">
                    <Badge variant="outline" className="font-mono text-[10px] sm:text-xs py-0 h-5 px-1.5 shrink-0 bg-primary/10 text-primary border-primary/20">v{version}</Badge>
                    <h2 className="text-base sm:text-lg font-bold tracking-tight leading-tight">{entry.title}</h2>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground pr-8">
                    <CalendarDays className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span className="tabular-nums">{entry.date}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 overflow-visible">
                <div className="flex flex-col gap-8 pt-2">
                  {renderUpdates(entry.common, "Global Updates", <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />)}
                  {renderUpdates(entry.desktop, "Desktop", <Monitor className="h-4 w-4 text-muted-foreground/70" />)}
                  {renderUpdates(entry.mobile, "Mobile", <Smartphone className="h-4 w-4 text-muted-foreground/70" />)}
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
