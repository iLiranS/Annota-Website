import React, { isValidElement, Children } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AlertCircle, Calendar, Clock, ShieldCheck } from "lucide-react"
import ReactMarkdown from "react-markdown"
import type { Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeRaw from "rehype-raw"
import rehypeKatex from "rehype-katex"
import rehypeHighlight from "rehype-highlight"
import rehypeSanitize, { defaultSchema } from "rehype-sanitize"

import { getPublishedNote, getPublishedNotePath } from "@/lib/published-notes"
import { TableOfContents } from "@/components/table-of-contents"
import { ScrollProgress } from "@/components/scroll-progress"
import { Mermaid } from "@/components/mermaid"
import { normalizeAnnotaMarkdown } from "@/lib/notes/normalize-annota-markdown"
import { stripTitle } from "@/lib/notes/strip-title"
import { getReadTime } from "@/lib/notes/get-read-time"
import { extractHeadings, type TocItem } from "@/lib/notes/extract-headings"
import { getMarkdownDescription } from "@/lib/notes/get-markdown-description"
import { getChildrenText } from "@/lib/notes/get-children-text"
import { getSafeAnnotaStyle } from "@/lib/notes/get-safe-annota-style"
import { formatDate } from "@/lib/notes/format-date"
import { slugify } from "@/lib/notes/slugify"

interface PublishedNotePageProps {
  params: Promise<{
    id: string
  }>
}


const markdownSanitizeSchema = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames ?? []).filter((tag) => tag !== "img"),
    "details", "summary", "span", "mark", "u", "div",
  ],
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code ?? []), ["className", /^language-./, "math-inline", "math-display"]],
    details: ["open"],
    // Allow only style on spans/divs/marks — className is stripped for security
    span: [...(defaultSchema.attributes?.span ?? []), "style"],
    div: ["style"],
    mark: [...(defaultSchema.attributes?.mark ?? []), "style"],
  },
}


export async function generateMetadata({ params }: PublishedNotePageProps): Promise<Metadata> {
  const { id } = await params
  const note = await getPublishedNote(id)

  if (!note) {
    return {
      title: "Note not found | Annota",
    }
  }

  const description = getMarkdownDescription(stripTitle(note.md_data))
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

  const markdown = normalizeAnnotaMarkdown(stripTitle(note.md_data))
  const readTime = getReadTime(markdown)
  const headings = extractHeadings(markdown)

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

  const markdownComponents: Components = {
    h2: (componentProps) => {
      const { node, children, ...props } = componentProps
      void node
      const id = getUniqueSlug(getChildrenText(children))
      return <h2 id={id} {...props}>{children}</h2>
    },
    h3: (componentProps) => {
      const { node, children, ...props } = componentProps
      void node
      const id = getUniqueSlug(getChildrenText(children))
      return <h3 id={id} {...props}>{children}</h3>
    },
    h4: (componentProps) => {
      const { node, children, ...props } = componentProps
      void node
      const id = getUniqueSlug(getChildrenText(children))
      return <h4 id={id} {...props}>{children}</h4>
    },
    a: (componentProps) => {
      const { node, href, children, ...props } = componentProps
      void node
      const isExternal = href?.startsWith("http://") || href?.startsWith("https://")
      return (
        <a
          {...props}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer nofollow" : undefined}
        >
          {children}
        </a>
      )
    },
    span: (componentProps) => {
      const { node, style, className, children, ...props } = componentProps
      void node
      void className
      return <span {...props} style={getSafeAnnotaStyle(style, "span")}>{children}</span>
    },
    div: (componentProps) => {
      const { node, style, className, children, ...props } = componentProps
      void node
      void className
      return <div {...props} style={getSafeAnnotaStyle(style, "div")}>{children}</div>
    },
    mark: (componentProps) => {
      const { node, style, className, children, ...props } = componentProps
      void node
      void className
      return <mark {...props} style={getSafeAnnotaStyle(style, "mark")}>{children}</mark>
    },
    details: (componentProps) => {
      const { node, children, ...props } = componentProps
      void node
      return (
        <details {...props} open={props.open ?? true}>
          {children}
        </details>
      )
    },
    code: (componentProps) => {
      const { node, className, children, ...props } = componentProps
      void node
      const match = /language-mermaid/.exec(className || "")
      if (match) {
        return <Mermaid chart={String(children).replace(/\n$/, "")} />
      }
      return <code className={className} {...props}>{children}</code>
    },
    pre: (componentProps) => {
      const { node, children, ...props } = componentProps
      void node

      const isMermaid = Children.toArray(children).some(
          (child) =>
              isValidElement(child) &&
              /language-mermaid/.test((child.props as any)?.className || "")
      )

      if (isMermaid) {
        return <>{children}</>
      }

      return <pre {...props}>{children}</pre>
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
                  {note.is_admin && (
                    <div className="flex items-center gap-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 px-3 py-1 text-blue-600 dark:text-blue-400 border border-blue-500/20 dark:border-blue-400/20 font-semibold">
                      <ShieldCheck className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                      <span>Official</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1 text-muted-foreground border border-border/40">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <time dateTime={note.published_at}> {formatDate(note.published_at)}</time>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1 text-muted-foreground border border-border/40">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    <span>{readTime} min</span>
                  </div>
                </div>
                {!note.is_admin && (
                  <Link
                    href="/support"
                    className="flex items-center gap-1 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 px-2.5 py-1 text-amber-600 dark:text-amber-400 font-medium transition-colors"
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>Report</span>
                  </Link>
                )}
              </div>
            </header>

            <div className="prose prose-neutral max-w-none dark:prose-invert prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[
                  rehypeRaw,
                  // sanitize first to clean raw HTML, keeping math elements intact
                  [rehypeSanitize, markdownSanitizeSchema],
                  // katex runs after sanitize so its generated layout markup and inline styles are not stripped
                  [rehypeKatex, { output: "html" }],
                  [rehypeHighlight, { detect: true }],
                ]}
                components={markdownComponents}
              >
                {markdown}
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

