export function stripTitle(markdown: string): string {
  const lines = markdown.split(/\r?\n/)

  // Find the index of the first non-empty line
  const firstNonEmptyIndex = lines.findIndex(line => line.trim().length > 0)
  if (firstNonEmptyIndex === -1) {
    return markdown
  }

  // Check if it's a Setext-style heading (next line is === or ---)
  const nextLine = lines[firstNonEmptyIndex + 1]
  const hasSetextUnderline = nextLine && /^(={3,}|-{3,})$/.test(nextLine.trim())

  if (hasSetextUnderline) {
    // Remove both the title line and the underline line
    const remainingLines = lines.slice(firstNonEmptyIndex + 2)
    const firstRemainingNonEmpty = remainingLines.findIndex(line => line.trim().length > 0)
    if (firstRemainingNonEmpty !== -1) {
      return remainingLines.slice(firstRemainingNonEmpty).join("\n")
    }
    return ""
  }

  // Otherwise, just remove the first non-empty line (the title)
  const remainingLines = lines.slice(firstNonEmptyIndex + 1)
  const firstRemainingNonEmpty = remainingLines.findIndex(line => line.trim().length > 0)
  if (firstRemainingNonEmpty !== -1) {
    return remainingLines.slice(firstRemainingNonEmpty).join("\n")
  }
  return ""
}
