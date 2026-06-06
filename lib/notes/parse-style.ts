export function parseStyle(style: unknown): Record<string, string> {
  const properties: Record<string, string> = {}

  if (typeof style === "string") {
    for (const declaration of style.split(";")) {
      const [rawName, ...rawValue] = declaration.split(":")
      if (!rawName || rawValue.length === 0) continue

      const name = rawName.trim().toLowerCase()
      const value = rawValue.join(":").trim()

      if (name === "color") {
        properties.color = value
      } else if (name === "background-color") {
        properties.backgroundColor = value
      }
    }
  } else if (style && typeof style === "object") {
    const styleObject = style as Record<string, unknown>
    if (typeof styleObject.color === "string") {
      properties.color = styleObject.color
    }
    if (typeof styleObject.backgroundColor === "string") {
      properties.backgroundColor = styleObject.backgroundColor
    }
  }

  return properties
}
