export function isSafeColor(value: string | undefined): boolean {
  if (!value) return false

  return (
    /^#[\da-f]{3}(?:[\da-f]{3})?$/i.test(value) ||
    /^rgba?\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/i.test(value)
  )
}
