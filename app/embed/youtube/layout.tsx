import { Metadata } from 'next';

/**
 * Layout for the YouTube embed route to prevent search engines from indexing it.
 */
export const metadata: Metadata = {
  title: 'Embed - Annota',
  robots: {
    index: false,
    follow: false,
  },
};

export default function YouTubeEmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
