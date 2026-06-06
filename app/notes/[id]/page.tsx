import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AlertCircle, Calendar, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { getPublishedNote, getPublishedNotePath } from "@/lib/published-notes"

interface PublishedNotePageProps {
  params: Promise<{
    id: string
  }>
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

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
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

      <div className="prose prose-neutral max-w-none dark:prose-invert prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-pre:rounded-lg prose-pre:border prose-pre:border-border prose-pre:bg-muted/60 prose-code:text-foreground">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.md_data}</ReactMarkdown>
      </div>
    </article>
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
