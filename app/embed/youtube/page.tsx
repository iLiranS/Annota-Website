'use client';

import { useEffect, useState } from 'react';

export default function YouTubeEmbed() {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    // Grab the raw hash from the URL
    const hashPayload = window.location.hash;

    // Hunt for exactly 11 characters of valid YouTube ID characters anywhere in the hash
    const match = hashPayload.match(/[a-zA-Z0-9_-]{11}/);

    if (match) {
      setVideoId(match[0]); // match[0] contains the clean ID
    }
  }, []);

  if (!videoId) {
    return <div style={{ color: 'white' }}>No valid YouTube video ID found in URL hash.</div>;
  }

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
    />
  );
}