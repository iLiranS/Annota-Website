export function normalizeAnnotaMarkdown(markdown: string): string {
  return markdown.replace(/<summary>([\s\S]*?)<\/summary>/gi, (_, summary: string) => {
    const trimmed = summary.trim()
    const match = trimmed.match(/^(#{2,4})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      const text = match[2].trim()
      return `<summary><h${level}>${text}</h${level}></summary>`
    }
    return `<summary>${trimmed}</summary>`
  })
}
