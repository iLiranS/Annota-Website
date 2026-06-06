import { slugify } from "./slugify"

export interface TocItem {
  text: string
  id: string
  level: number
}

export function extractHeadings(markdown: string): TocItem[] {
  const withoutCodeBlocks = markdown.replace(/```[\s\S]*?```/g, "")
  const lines = withoutCodeBlocks.split(/\r?\n/)
  const headings: TocItem[] = []
  const slugCounts: Record<string, number> = {}

  for (const line of lines) {
    let level = 0
    let text = ""

    const markdownMatch = line.match(/^(#{2,4})\s+(.+)$/)
    if (markdownMatch) {
      level = markdownMatch[1].length
      text = markdownMatch[2].trim()
    } else {
      const htmlMatch = line.match(/<h([2-4])(?:\s+[^>]*)*>([\s\S]*?)<\/h\1>/i)
      if (htmlMatch) {
        level = parseInt(htmlMatch[1], 10)
        text = htmlMatch[2].trim()
      }
    }

    if (level > 0 && text) {
      const cleanText = text
        .replace(/\[([^\]]+)]\([^)]*\)/g, "$1") // link text
        .replace(/[*_`~]/g, "") // markdown formatting
        .replace(/<[^>]+>/g, "") // remove HTML tags
        .replace(/\\(.)/g, "$1") // remove backslash escapes

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
