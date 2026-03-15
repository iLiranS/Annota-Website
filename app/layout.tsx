import { Inter, Raleway } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils";
import { Metadata } from 'next';

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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", interFont.className)}
    >
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
