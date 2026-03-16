'use client';

import { Analytics } from '@vercel/analytics/react';

export function AnalyticsWrapper() {
  return (
    <Analytics 
      beforeSend={(event) => {
        // Drop the event if the URL is our background app relay
        if (event.url.includes('/embed/')) {
          return null;
        }
        return event;
      }} 
    />
  );
}
