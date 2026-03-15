"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, ExternalLink } from "lucide-react"
import { FaDiscord } from "react-icons/fa"

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How can we help?</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question, feedback, or need some help? We're here for you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Email Support */}
          <Card className="bg-primary/5 border-primary/20 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email Support
              </CardTitle>
              <CardDescription>
                For technical issues, account inquiries, or general feedback.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <a 
                href="mailto:support@annota.online" 
                className="group flex items-center justify-between rounded-lg border bg-background p-4 transition-colors hover:border-primary"
              >
                <span className="font-medium">support@annota.online</span>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary" />
              </a>
            </CardContent>
          </Card>

          {/* Community Support */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription>
                Join our Discord to chat with other users and the developers.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button asChild variant="outline" className="w-full justify-between">
                <a href="https://discord.gg/dG5nNJPDAh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <FaDiscord className="h-5 w-5 text-[#5865F2]" />
                    Join Discord
                  </div>
                  <ExternalLink size={16} />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
