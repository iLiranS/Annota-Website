export interface ColorOption {
  name: string
  value: string
}

export const COLOR_PALETTE: ColorOption[] = [
  { name: 'Yellow', value: '#FFE066' },
  { name: 'Orange', value: '#FFA94D' },
  { name: 'Red', value: '#FF6B6B' },
  { name: 'Pink', value: '#F783AC' },
  { name: 'Indigo', value: '#818CF8' },
  { name: 'Blue', value: '#74C0FC' },
  { name: 'Teal', value: '#20C997' },
  { name: 'Green', value: '#51CF66' },
  { name: 'Gray', value: '#757575' },
  { name: 'Brown', value: '#A07855' }
]

const ALLOWED_HEX_COLORS = new Set(
  COLOR_PALETTE.map((c) => c.value.toLowerCase())
)

const ALLOWED_RGBA_COLORS = new Set([
  "rgba(255,224,102,0.3)",
  "rgba(255,169,77,0.3)",
  "rgba(255,107,107,0.3)",
  "rgba(247,131,172,0.3)",
  "rgba(129,140,248,0.3)",
  "rgba(116,192,252,0.3)",
  "rgba(32,201,151,0.3)",
  "rgba(81,207,102,0.3)",
  "rgba(117,117,117,0.3)",
  "rgba(160,120,85,0.3)"
])

function normalizeColor(color: string): string {
  return color.replace(/\s+/g, "").toLowerCase()
}

export function isSafeHexColor(value: string | undefined): boolean {
  if (!value) return false
  return ALLOWED_HEX_COLORS.has(normalizeColor(value))
}

export function isSafeRgbaColor(value: string | undefined): boolean {
  if (!value) return false
  return ALLOWED_RGBA_COLORS.has(normalizeColor(value))
}

