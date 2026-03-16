'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Helper to reliably extract the 11-character ID from any YouTube string
function extractVideoId(urlOrId: string | null) {
  if (!urlOrId) return null;
  
  // If it's already just an 11-character ID (standard YouTube ID format), return it
  if (/^[a-zA-Z0-9_-]{11}$/.test(urlOrId)) {
    return urlOrId;
  }

  // Otherwise, extract it from a full URL (covers watch?v=, embed/, youtu.be/, etc.)
  const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match ? match[1] : null;
}

/**
 * YouTubePlayer component handles the actual iframe rendering.
 * It uses position: fixed and a high z-index to ensure it covers the main site's layout
 * (header/footer) when used as an embed source for the Tauri app.
 */
function YouTubePlayer() {
  const searchParams = useSearchParams();
  const rawV = searchParams.get('v');
  const videoId = extractVideoId(rawV);

  if (!videoId) {
    return (
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 9999, 
        backgroundColor: 'black', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'sans-serif'
      }}>
        No valid YouTube video ID provided
      </div>
    );
  }

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      zIndex: 9999, 
      backgroundColor: 'black' 
    }}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1&autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="YouTube Video Player"
      />
    </div>
  );
}

export default function YouTubeEmbed() {
  return (
    <Suspense fallback={<div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'black' }} />}>
      <YouTubePlayer />
    </Suspense>
  );
}
