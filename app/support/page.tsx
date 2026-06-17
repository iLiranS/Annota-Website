"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, ExternalLink } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How can we help?</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question, feedback, or need some help? We're here for you.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Email Support */}
          <Card className="bg-primary/5 border-primary/20 flex flex-col max-w-md w-full">
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
        </div>
      </div>
    </div>
  )
}
