import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

import { getPublishedNotePath, getPublishedNoteTag } from "@/lib/published-notes"

interface RevalidateNoteBody {
  record?: {
    note_id?: unknown
  }
  old_record?: {
    note_id?: unknown
  }
  note_id?: unknown
}

export async function POST(request: Request) {
  const secret = process.env.NEXT_JS_SHARED_SECRET

  if (!secret) {
    return NextResponse.json(
      { error: "NEXT_JS_SHARED_SECRET is not configured." },
      { status: 500 },
    )
  }

  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: RevalidateNoteBody

  try {
    body = (await request.json()) as RevalidateNoteBody
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  const noteId = body.record?.note_id ?? body.old_record?.note_id ?? body.note_id

  if (typeof noteId !== "string" || noteId.trim().length === 0) {
    return NextResponse.json({ error: "Missing valid note_id." }, { status: 400 })
  }

  const normalizedNoteId = noteId.trim()

  revalidateTag(getPublishedNoteTag(normalizedNoteId), "max")
  revalidatePath(getPublishedNotePath(normalizedNoteId))

  return NextResponse.json({
    revalidated: true,
    note_id: normalizedNoteId,
  })
}
