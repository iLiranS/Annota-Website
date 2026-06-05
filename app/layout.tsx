import { Inter, Raleway } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SmartAppBanner } from "@/components/layout/smart-app-banner"
import { getGithubStars } from "@/lib/github"
import { cn } from "@/lib/utils";
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"
import { StructuredData } from "@/components/seo/StructuredData"

export const metadata: Metadata = {
  title: 'Annota - Your Secure Digital Mind & Local-First Note Taking App',
  description: 'Annota is a secure, local-first note taking and knowledge management tool. Own your data with end-to-end encryption for your digital mind.',
  keywords: ['annota', 'note taking', 'personal knowledge base', 'local-first', 'encrypted notes', 'digital mind', 'privacy-focused notes', 'knowledge management'],
  metadataBase: new URL('https://annota.online'),
  itunes: {
    appId: '6761501939',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Annota - Your Secure Digital Mind',
    description: 'Secure, local-first note taking and knowledge management tool.',
    url: 'https://annota.online',
    siteName: 'Annota',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Annota Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annota - Your Secure Digital Mind',
    description: 'Secure, local-first note taking and knowledge management tool.',
    images: ['/assets/logo.png'],
  },
};


const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const stars = await getGithubStars();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", interFont.variable, interFont.className)}
    >
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header stars={stars} />
            <main className="flex-1">{children}</main>
            <Footer stars={stars} />
            <SmartAppBanner />
          </div>
        </ThemeProvider>
        <Analytics />
        <StructuredData />
      </body>
    </html>
  )
}
