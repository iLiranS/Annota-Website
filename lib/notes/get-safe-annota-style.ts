import type { CSSProperties } from "react"
import { parseStyle } from "./parse-style"
import { isSafeHexColor, isSafeRgbaColor } from "./is-safe-color"

export function getSafeAnnotaStyle(
  style: unknown,
  tagName: "span" | "mark" | "div"
): CSSProperties | undefined {
  const properties = parseStyle(style)
  const safeStyle: CSSProperties = {}

  if (isSafeHexColor(properties.color)) {
    safeStyle.color = properties.color
  }

  if (isSafeRgbaColor(properties.backgroundColor)) {
    safeStyle.backgroundColor = properties.backgroundColor
  }

  return Object.keys(safeStyle).length > 0 ? safeStyle : undefined
}

