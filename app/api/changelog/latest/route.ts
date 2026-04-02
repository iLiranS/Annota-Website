import { NextResponse } from 'next/server';
import { changelogData } from '@/lib/changelog-data';

export const dynamic = 'force-dynamic';

export async function GET() {
  const versions = Object.keys(changelogData);
  if (versions.length === 0) {
    return NextResponse.json(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  // Assuming keys are version numbers like "0.1.0", "1.0.1", etc.
  // We sort them to find the latest
  const latestVersion = versions.sort((a, b) => {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);
    for (let i = 0; i < 3; i++) {
      if (aParts[i] > bParts[i]) return -1;
      if (aParts[i] < bParts[i]) return 1;
    }
    return 0;
  })[0];

  const latestEntry = (changelogData as any)[latestVersion];

  return NextResponse.json({
    version: latestVersion,
    ...latestEntry
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
