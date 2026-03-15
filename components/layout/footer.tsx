import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded  text-primary-foreground">
                <Image src="/assets/logo.png" alt="Logo" width={24} height={24} />
              </div>
              <span className="text-lg font-semibold tracking-tight">Annota</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              The ultimate privacy-focused workspace for notes and tasks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Product</h4>
              <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link>
              <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
              <Link href="/#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link>
              <Link href="/roadmap" className="text-sm text-muted-foreground hover:text-foreground">Roadmap</Link>
              <Link href="/#download" className="text-sm text-muted-foreground hover:text-foreground">Download</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Support</h4>
              <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
              <a href="mailto:support@annota.online" className="text-sm text-muted-foreground hover:text-foreground">support@annota.online</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Legal</h4>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link href="/tos" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Annota. All rights reserved. Built for security and peace of mind.
          </p>
        </div>
      </div>
    </footer>
  )
}
