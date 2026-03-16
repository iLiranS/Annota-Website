'use client';

import { useEffect, useState } from 'react';

// Helper to reliably extract the 11-character ID from any YouTube string
function extractVideoId(hashOrId: string | null) {
  if (!hashOrId) return null;
  
  // Clean up any common hash prefixes if they were included
  const cleaned = decodeURIComponent(hashOrId).replace(/^#/, '').trim();
  
  // If it's already just an 11-character ID, return it
  if (/^[a-zA-Z0-9_-]{11}$/.test(cleaned)) {
    return cleaned;
  }

  // Otherwise, extract it from a full URL (if the entire URL was passed as hash)
  const match = cleaned.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match ? match[1] : null;
}

/**
 * YouTubeEmbed component handles extraction of the video ID from the URL hash fragment.
 * Hash data stays local to the client's browser and is NEVER sent to the server.
 */
export default function YouTubeEmbed() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Grab the hash from the URL and remove the '#' symbol
    const hashPayload = window.location.hash.substring(1);
    const extractedId = extractVideoId(hashPayload);
    
    if (extractedId) {
      setVideoId(extractedId);
    }
    setInit(true);
  }, []);

  // Standard loading/fallback UI for a premium look
  if (!init) {
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'black' }} />
    );
  }

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
        fontFamily: 'sans-serif',
        padding: '20px',
        textAlign: 'center'
      }}>
        No valid YouTube video ID found in URL hash.
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
