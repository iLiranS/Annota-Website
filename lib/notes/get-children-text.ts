import { isValidElement, type ReactNode } from "react"

export function getChildrenText(children: ReactNode): string {
  if (typeof children === "string") return children
  if (typeof children === "number") return String(children)
  if (Array.isArray(children)) return children.map(getChildrenText).join("")
  if (isValidElement<{ children?: ReactNode }>(children)) {
    return getChildrenText(children.props.children)
  }
  return ""
}
