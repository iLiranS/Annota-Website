export function getMarkdownDescription(markdown: string): string {
  const plainText = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_~\-\n\r]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  return plainText.slice(0, 160) || "A published note from Annota."
}
