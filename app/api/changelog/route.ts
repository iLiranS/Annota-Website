import { NextResponse } from 'next/server';
import { changelogData } from '@/lib/changelog-data';

export async function GET() {
  // This forces the CORS headers to attach
  return NextResponse.json(changelogData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    },
  });
}
