"use client"

import { motion } from "framer-motion"
import {
  CheckCircle2, Clock, Smartphone, Monitor, Zap, FileText, Image as ImageIcon,
  Hash, Command, Plus, Type, Code, Youtube, Table2, Sigma, FolderTree,
  CalendarDays, Link2, History, Palette, ShieldCheck, Users
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaDiscord } from "react-icons/fa"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function RoadmapPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary px-4 py-1">
                Roadmap
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black tracking-tighter mb-6"
            >
              The Future of <span className="text-primary italic">Annota</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              See what we've built and where we're heading. Our mission is to create the most secure, local-first workspace for your mind.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Platforms Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <Monitor className="h-6 w-6 text-primary" />
                  Platforms
                </h2>
                <div className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Done Platforms */}
                <motion.div variants={itemVariants}>
                  <Card className="h-full border-primary/20 bg-primary/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                      <CheckCircle2 className="h-12 w-12 text-primary" />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Available Now
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3 bg-background/50 p-3 rounded-lg border border-border/50">
                        <Monitor className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">MacOS App (Alpha)</span>
                        <Badge variant="secondary" className="ml-auto">v0.1</Badge>
                      </div>
                      <div className="flex items-center gap-3 bg-background/50 p-3 rounded-lg border border-border/50">
                        <Smartphone className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">iOS App (Alpha)</span>
                        <Badge variant="secondary" className="ml-auto">v0.1</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Soon Platforms */}
                <motion.div variants={itemVariants}>
                  <Card className="h-full border-dashed flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-amber-500" />
                        Coming Soon
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1">
                      <div className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border border-transparent italic">
                        <Monitor className="h-5 w-5 text-muted-foreground/50" />
                        <span className="text-muted-foreground">Windows Version</span>
                      </div>
                      <div className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border border-transparent italic">
                        <Smartphone className="h-5 w-5 text-muted-foreground/50" />
                        <span className="text-muted-foreground">Android App</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </section>

            {/* Features Section */}
            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2 text-primary">
                  <Zap className="h-6 w-6" />
                  Features & Capabilities
                </h2>
                <div className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
              </div>

              {/* Implemented Features Grid */}
              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <Card className="border-primary/20 bg-primary/5 overflow-hidden">
                    <CardHeader className="border-b border-primary/10 bg-primary/5">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Now in Annota Alpha
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-primary/10">
                        {/* Editor capabilities */}
                        <div className="p-6 space-y-6">
                          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                            <Zap className="h-4 w-4" /> Editor Capabilities
                          </h3>
                          <ul className="space-y-4">
                            <FeatureItem
                              icon={<Type className="h-4 w-4 text-primary" />}
                              title="Rich Text Formatting"
                              desc="Comprehensive suite of standard text styling options."
                            />
                            <FeatureItem
                              icon={<Code className="h-4 w-4 text-primary" />}
                              title="Advanced Code Blocks"
                              desc="Syntax highlighting for multiple programming languages."
                            />
                            <FeatureItem
                              icon={<ImageIcon className="h-4 w-4 text-primary" />}
                              title="Rich Media Support"
                              desc="Insert images via camera, library, or URLs."
                            />
                            <FeatureItem
                              icon={<Youtube className="h-4 w-4 text-primary" />}
                              title="Video Integration"
                              desc="Native support for embedding YouTube videos."
                            />
                            <FeatureItem
                              icon={<Table2 className="h-4 w-4 text-primary" />}
                              title="Structured Content"
                              desc="Table integration for organizing data."
                            />
                            <FeatureItem
                              icon={<Sigma className="h-4 w-4 text-primary" />}
                              title="LaTeX Support"
                              desc="Built-in support for mathematical formulas."
                            />
                            <FeatureItem
                              icon={<Command className="h-4 w-4 text-primary" />}
                              title="Slash Commands"
                              desc="Quick access to editor tools via '/' menu."
                            />
                          </ul>
                        </div>

                        {/* Organization & Additional */}
                        <div className="p-6 space-y-6">
                          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                            <FolderTree className="h-4 w-4" /> Organization & Security
                          </h3>
                          <ul className="space-y-4">
                            <FeatureItem
                              icon={<FolderTree className="h-4 w-4 text-primary" />}
                              title="Folder Hierarchy"
                              desc="Tree-based structure with soft delete management."
                            />
                            <FeatureItem
                              icon={<CalendarDays className="h-4 w-4 text-primary" />}
                              title="Daily Notes"
                              desc="Dedicated system for journaling and daily logs."
                            />
                            <FeatureItem
                              icon={<Link2 className="h-4 w-4 text-primary" />}
                              title="Deep Linking"
                              desc="Link directly to note headings via annota:// protocol."
                            />
                            <FeatureItem
                              icon={<Hash className="h-4 w-4 text-primary" />}
                              title="Tagging System"
                              desc="Powerful framework for tagging and filtering."
                            />
                            <FeatureItem
                              icon={<History className="h-4 w-4 text-primary" />}
                              title="Version History"
                              desc="Local history to revert to previous versions."
                            />
                            <FeatureItem
                              icon={<Palette className="h-4 w-4 text-primary" />}
                              title="Customization"
                              desc="Color themes, custom fonts, and editor settings."
                            />
                            <FeatureItem
                              icon={<ShieldCheck className="h-4 w-4 text-primary" />}
                              title="E2E Security"
                              desc="Zero-knowledge encryption for total privacy."
                            />
                            <FeatureItem
                              icon={<Users className="h-4 w-4 text-primary" />}
                              title="Multi-account"
                              desc="Support for multiple user accounts."
                            />
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Future Horizon */}
                <motion.div variants={itemVariants}>
                  <Card className="border-dashed bg-transparent">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg opacity-80">
                        <Plus className="h-5 w-5 text-primary/50" />
                        On the Horizon
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-transparent">
                          <div className="p-2 bg-background rounded-lg">
                            <Plus className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-bold text-sm">Files & Attachments</p>
                            <p className="text-xs text-muted-foreground">Full document support within notes.</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-transparent italic">
                          <div className="p-2 bg-background rounded-lg opacity-50">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-bold text-sm text-muted-foreground">TBA</p>
                            <p className="text-xs text-muted-foreground">More features being announced soon.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-3xl bg-primary text-background text-center shadow-2xl shadow-primary/20"
          >
            <h3 className="text-3xl font-black mb-4">Have a feature request?</h3>
            <p className="text-background/80 mb-8 max-w-md mx-auto">
              Join our community on Discord and help us prioritize what to build next.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="font-bold gap-2 text-primary">
                <a href="https://discord.gg/dG5nNJPDAh" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="h-5 w-5" />
                  Join the Discord
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <li className="flex items-start gap-4">
      <div className="p-2 bg-background rounded-lg border border-primary/10 shadow-sm mt-0.5">
        {icon}
      </div>
      <div>
        <p className="font-bold text-sm leading-none mb-1">{title}</p>
        <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
      </div>
    </li>
  )
}
