import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AlertCircle, Calendar, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"

import { getPublishedNote, getPublishedNotePath } from "@/lib/published-notes"
import { TableOfContents } from "@/components/table-of-contents"
import { ScrollProgress } from "@/components/scroll-progress"
import { cn } from "@/lib/utils"

interface PublishedNotePageProps {
  params: Promise<{
    id: string
  }>
}

interface TocItem {
  text: string
  id: string
  level: number
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function getChildrenText(children: React.ReactNode): string {
  if (typeof children === "string") return children
  if (typeof children === "number") return String(children)
  if (Array.isArray(children)) return children.map(getChildrenText).join("")
  if (children && typeof children === "object" && "props" in children) {
    return getChildrenText((children as any).props.children)
  }
  return ""
}

function extractHeadings(markdown: string): TocItem[] {
  const withoutCodeBlocks = markdown.replace(/```[\s\S]*?```/g, "")
  const lines = withoutCodeBlocks.split(/\r?\n/)
  const headings: TocItem[] = []
  const slugCounts: Record<string, number> = {}

  for (const line of lines) {
    const match = line.match(/^(#{2,4})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      const text = match[2].trim()
      const cleanText = text
        .replace(/\[([^\]]+)]\([^)]*\)/g, "$1") // link text
        .replace(/[*_`~]/g, "") // markdown formatting

      let slug = slugify(cleanText)
      if (slugCounts[slug] !== undefined) {
        slugCounts[slug] += 1
        slug = `${slug}-${slugCounts[slug]}`
      } else {
        slugCounts[slug] = 0
      }

      headings.push({
        text: cleanText,
        id: slug,
        level,
      })
    }
  }
  return headings
}

export async function generateMetadata({ params }: PublishedNotePageProps): Promise<Metadata> {
  const { id } = await params
  const note = await getPublishedNote(id)

  if (!note) {
    return {
      title: "Note not found | Annota",
    }
  }

  const description = getMarkdownDescription(note.md_data)
  const path = getPublishedNotePath(id)

  return {
    title: `${note.title} | Annota`,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: note.title,
      description,
      type: "article",
      url: path,
      publishedTime: note.published_at,
      modifiedTime: note.updated_at,
    },
    twitter: {
      card: "summary",
      title: note.title,
      description,
    },
  }
}

export default async function PublishedNotePage({ params }: PublishedNotePageProps) {
  const { id } = await params
  const note = await getPublishedNote(id)

  if (!note) {
    notFound()
  }

  const readTime = getReadTime(note.md_data)
  const headings = extractHeadings(note.md_data)

  const headingCounts: Record<string, number> = {}

  const getUniqueSlug = (text: string) => {
    let slug = slugify(text)
    if (headingCounts[slug] !== undefined) {
      headingCounts[slug] += 1
      slug = `${slug}-${headingCounts[slug]}`
    } else {
      headingCounts[slug] = 0
    }
    return slug
  }

  const headingComponents = {
    h2: ({ node, children, ...props }: any) => {
      const id = getUniqueSlug(getChildrenText(children))
      return <h2 id={id} {...props}>{children}</h2>
    },
    h3: ({ node, children, ...props }: any) => {
      const id = getUniqueSlug(getChildrenText(children))
      return <h3 id={id} {...props}>{children}</h3>
    },
    h4: ({ node, children, ...props }: any) => {
      const id = getUniqueSlug(getChildrenText(children))
      return <h4 id={id} {...props}>{children}</h4>
    },
  }

  return (
    <>
      <ScrollProgress />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-3xl">
        <article className="w-full">
          <header className="mb-8 border-b border-border/70 pb-8">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {note.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1 text-muted-foreground border border-border/40">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground/80" />
                  <time dateTime={note.published_at}>Published {formatDate(note.published_at)}</time>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1 text-muted-foreground border border-border/40">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground/80" />
                  <span>{readTime} min read</span>
                </div>
              </div>
              <Link
                href="/support"
                className="flex items-center gap-1 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 px-2.5 py-1 text-amber-600 dark:text-amber-400 font-medium transition-colors"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                <span>Report</span>
              </Link>
            </div>
          </header>

          <div className="prose prose-neutral max-w-none dark:prose-invert prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[[rehypeHighlight, { detect: true }]]}
              components={headingComponents}
            >
              {note.md_data}
            </ReactMarkdown>
          </div>
        </article>

        {headings.length > 0 && (
          <aside className="hidden lg:block absolute left-full lg:ml-16 xl:ml-28 top-0 bottom-0 w-12">
            <div className="sticky top-[50vh] -translate-y-1/2">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        )}
      </div>
    </div>
    </>
  )
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(new Date(value))
}

function getMarkdownDescription(markdown: string) {
  const plainText = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[#>*_~\-\n\r]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  return plainText.slice(0, 160) || "A published note from Annota."
}

function getReadTime(markdown: string) {
  const plainText = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[#>*_~\-\n\r]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  const words = plainText.split(/\s+/).filter(Boolean).length
  const wordsPerMinute = 200
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}
