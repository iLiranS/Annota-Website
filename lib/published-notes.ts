const DEFAULT_EDGE_FUNCTION_URL =
  "https://vgpqpliqwfvbqivgofww.supabase.co/functions/v1/fetch-published-note"

export const PUBLISHED_NOTE_REVALIDATE_SECONDS = 3600

export interface PublishedNote {
  note_id: string
  title: string
  md_data: string
  published_at: string
  updated_at: string
}

export function getPublishedNoteTag(noteId: string) {
  return `note-${noteId}`
}

export function getPublishedNotePath(noteId: string) {
  return `/notes/${encodeURIComponent(noteId)}`
}

export async function getPublishedNote(noteId: string): Promise<PublishedNote | null> {
  const secret = process.env.NEXT_JS_SHARED_SECRET

  if (!secret) {
    throw new Error("NEXT_JS_SHARED_SECRET is not configured.")
  }

  const endpoint = new URL(process.env.PUBLISHED_NOTE_EDGE_FUNCTION_URL ?? DEFAULT_EDGE_FUNCTION_URL)
  endpoint.searchParams.set("id", noteId)

  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${secret}`,
    },
    next: {
      revalidate: PUBLISHED_NOTE_REVALIDATE_SECONDS,
      tags: [getPublishedNoteTag(noteId)],
    },
  })

  if (response.status === 404) {
    return null
  }

  if (response.status === 401 || response.status === 403) {
    throw new Error("Published note fetch was rejected. Check NEXT_JS_SHARED_SECRET.")
  }

  if (!response.ok) {
    throw new Error(`Published note fetch failed with status ${response.status}.`)
  }

  const data: unknown = await response.json()

  if (!isPublishedNote(data)) {
    throw new Error("Published note response had an unexpected shape.")
  }

  return data
}

function isPublishedNote(value: unknown): value is PublishedNote {
  if (!value || typeof value !== "object") {
    return false
  }

  const note = value as Record<string, unknown>

  return (
    typeof note.note_id === "string" &&
    typeof note.title === "string" &&
    typeof note.md_data === "string" &&
    typeof note.published_at === "string" &&
    typeof note.updated_at === "string"
  )
}
