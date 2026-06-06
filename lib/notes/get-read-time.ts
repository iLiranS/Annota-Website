export function getReadTime(markdown: string): number {


  // Count code block content separately (read at half speed)
  const codeText = [...markdown.matchAll(/```[\s\S]*?```/g)]
    .map(m => m[0])
    .join(' ')
  const codeWords = codeText.split(/\s+/).filter(Boolean).length

  const plainText = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_~]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const words = plainText.split(/\s+/).filter(Boolean).length
  const wordsPerMinute = 238
  const textMins = words / wordsPerMinute
  const codeMins = codeWords / (wordsPerMinute / 2)
  const totalMins = textMins + codeMins

  return Math.max(1, Math.ceil(totalMins))
}