import type { CSSProperties } from "react"
import { parseStyle } from "./parse-style"
import { isSafeColor } from "./is-safe-color"

export function getSafeAnnotaStyle(style: unknown, tagName: "span" | "mark"): CSSProperties | undefined {
  const properties = parseStyle(style)
  const safeStyle: CSSProperties = {}

  if (tagName === "span" && isSafeColor(properties.color)) {
    safeStyle.color = properties.color
  }

  if (tagName === "mark" && isSafeColor(properties.backgroundColor)) {
    safeStyle.backgroundColor = properties.backgroundColor
  }

  return Object.keys(safeStyle).length > 0 ? safeStyle : undefined
}
