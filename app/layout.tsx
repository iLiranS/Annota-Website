import { Inter, Raleway } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getGithubStars } from "@/lib/github"
import { cn } from "@/lib/utils";
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Annota App', // This is the website name/title
  description: 'Annota App Official Website',
};


const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const ralewayFont = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
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
      className={cn("antialiased scroll-smooth", interFont.className)}
    >
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header stars={stars} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
