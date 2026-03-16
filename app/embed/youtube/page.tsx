'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/**
 * YouTubePlayer component handles the actual iframe rendering.
 * It uses position: fixed and a high z-index to ensure it covers the main site's layout
 * (header/footer) when used as an embed source for the Tauri app.
 */
function YouTubePlayer() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get('v');

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
        No video ID provided
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
