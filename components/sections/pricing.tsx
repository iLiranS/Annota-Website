"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Sparkles, HardDrive, Cloud, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function PricingSection() {
  return (
    <section id="pricing" className="lg:py-20 bg-background relative overflow-hidden">

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl"
          >
            Simple, <span className="text-primary italic font-serif">Honest</span> Pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Annota is Offline local-first by design. Our subscription supports development and covers secure cloud recovery and multi-device synchronization.
          </motion.p>
        </div>

        <div className="relative">
          {process.env.NEXT_PUBLIC_APP_ALPHA === 'true' && (
            <div className="absolute backdrop-blur-sm inset-0 z-50 w-full h-full bg-background/40 flex flex-col items-center justify-center gap-6 text-center px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex flex-col items-center gap-6"
              >
                {process.env.NEXT_PUBLIC_ALPHA_STARTED === 'true' ? (
                  <div className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-black uppercase tracking-[0.3em] text-2xl shadow-[0_0_30px_rgba(var(--primary),0.5)] -rotate-2 border-4 border-primary-foreground/20 transition-all cursor-default group relative overflow-hidden">
                    <span className="relative z-10">In Alpha</span>
                    <motion.div
                      className="absolute inset-0 z-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                ) : (
                  <a
                    href={process.env.NEXT_PUBLIC_ALPHA_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-black uppercase tracking-[0.3em] text-2xl shadow-[0_0_30px_rgba(var(--primary),0.5)] -rotate-2 border-4 border-primary-foreground/20 transition-all hover:scale-105 hover:rotate-0 active:scale-95 pointer-events-auto group relative overflow-hidden"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <motion.div
                      className="absolute inset-0 z-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </a>
                )}

                {process.env.NEXT_PUBLIC_ALPHA_STARTED !== 'true' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <p className="text-foreground font-black text-xl uppercase lg:text-3xl tracking-tight italic">
                      AND Get <span className="text-primary underline decoration-wavy decoration-2">Lifetime Discount</span> later on!
                    </p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Sparkles key={i} className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3 items-stretch"
          >
            {/* Local Only Card */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="flex flex-col h-full border-border bg-background/50  transition-all hover:border-primary/20 hover:shadow-2xl group overflow-hidden">
                <CardHeader className="lg:p-8 p-6 pb-0 lg:pb-0  flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <HardDrive className="h-5 w-5 text-primary" />
                    <CardTitle className="text-2xl font-black tracking-tight text-foreground">Local Only</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground ">The ultimate privacy setup.</CardDescription>
                </CardHeader>
                <div className="relative border-y border-border/40 py-6 px-8 bg-muted/20  flex items-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tighter text-foreground">
                      {process.env.NEXT_PUBLIC_APP_ALPHA === 'true' ? '???' : '$0'}
                    </span>
                    <span className="text-sm font-bold text-muted-foreground">/ forever</span>
                  </div>
                </div>
                <CardContent className="flex-1 lg:p-8 p-6 pt-8 space-y-6">
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="text-[10px] uppercase tracking-widest text-muted-foreground font-black flex items-center gap-2 mb-4">

                      <div className="h-px bg-border/40 flex-1" />
                      Offline Features
                      <div className="h-px bg-border/40 flex-1" />
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Unlimited Notes & Assets
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Encrypted Local Storage
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Local Version History
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Full Access to All the Features
                    </li>
                    <li className="flex items-center gap-3 font-medium text-foreground">
                      <div className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                        <X className="h-3 w-3 text-destructive" />
                      </div>
                      No Cloud Synchronization
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-6 border-t border-transparent">
                  <div className=" h-5 uppercase tracking-widest text-primary font-bold flex gap-1 items-center ">
                    <p className="text-muted-foreground text-[10px] opacity-60"></p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Cloud Free Card */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="flex flex-col h-full border-border bg-background/50  transition-all hover:border-primary/20 hover:shadow-2xl overflow-hidden">
                <CardHeader className="lg:p-8 p-6 pb-0 lg:pb-0 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Cloud className="h-5 w-5 text-primary" />
                    <CardTitle className="text-2xl font-black tracking-tight text-foreground">Cloud Free</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">Lightweight sync for your data.</CardDescription>
                </CardHeader>
                <div className="relative border-y border-border/40 py-6 px-8 bg-muted/20 flex items-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tighter text-foreground">
                      {process.env.NEXT_PUBLIC_APP_ALPHA === 'true' ? '???' : '$0'}
                    </span>
                    <span className="text-sm font-bold text-muted-foreground">/ forever</span>
                  </div>
                </div>
                <CardContent className="flex-1 lg:p-8 p-6 pt-8 flex flex-col">
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="text-[10px] uppercase tracking-widest text-muted-foreground font-black flex items-center gap-2 mb-4">

                      <div className="h-px bg-border/40 flex-1" />
                      Cloud & Sync
                      <div className="h-px bg-border/40 flex-1" />
                    </li>
                    <li className="flex items-center gap-3 text-foreground font-semibold">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <p>
                        Limited Data <span className="text-primary">*</span>

                      </p>
                    </li>
                    <li className="flex items-center gap-3 text-foreground font-semibold">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      25MB Secure Cloud Storage
                    </li>
                    <li className="flex items-center gap-3 font-semibold text-foreground">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      E2E Encrypted Sync
                    </li>
                    <li className="flex items-center gap-3 text-foreground font-semibold">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Full Access to All Features
                    </li>
                    <li className="flex items-center gap-3 text-foreground font-semibold">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Local Version History
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-6 text-center border-t border-border/50 flex flex-col">
                  <div className="flex items-center gap-1 h-5 uppercase tracking-widest text-primary font-bold text-[10px]">
                    <span className="relative top-0.5">*</span>
                    <span className="text-muted-foreground opacity-60">
                      100 notes, 250 tasks, 20 folders, 20 tags
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Cloud Pro Card */}
            <motion.div variants={itemVariants} className="h-full relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-primary/50 to-purple-500/50 rounded-[inherit]  opacity-20 group-hover:opacity-40 transition-opacity" />
              <Card className="relative flex flex-col h-full border-2 border-primary/60 bg-background shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Sparkles className="text-primary opacity-20" size={48} />
                </div>

                <CardHeader className="lg:p-8 p-6 pb-0 lg:pb-0 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <CardTitle className="text-2xl font-black tracking-tight text-foreground">Cloud Pro</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground ">The complete Annota experience.</CardDescription>
                </CardHeader>

                <div className="relative border-y border-border/40 py-6 px-4 xl:px-8 bg-muted/20 flex items-center">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-baseline px-2">
                      <span className="text-3xl font-black text-muted-foreground">
                        {process.env.NEXT_PUBLIC_APP_ALPHA === 'true' ? '' : '$'}
                      </span>
                      <span className="text-5xl font-black tracking-tighter text-foreground">
                        {process.env.NEXT_PUBLIC_APP_ALPHA === 'true' ? '???' : '3'}
                      </span>
                      <span className="text-[10px] pl-1 font-black text-muted-foreground uppercase tracking-widest leading-none">Monthly</span>
                    </div>

                    <div className="h-8 w-px bg-border/40" />

                    <div className="flex items-baseline  relative px-2">
                      <div className="absolute -top-4 -right-2">
                        <span className="inline-block rounded-full bg-primary px-2 py-0.5 text-[9px] text-primary-foreground font-black uppercase tracking-tighter shadow-lg ring-2 ring-background">
                          25% OFF
                        </span>
                      </div>
                      <span className="text-3xl font-black text-muted-foreground">
                        {process.env.NEXT_PUBLIC_APP_ALPHA === 'true' ? '' : '$'}
                      </span>
                      <span className="text-5xl font-black text-foreground">
                        {process.env.NEXT_PUBLIC_APP_ALPHA === 'true' ? '???' : '27'}
                      </span>
                      <span className="text-[10px] pl-1 font-black text-muted-foreground uppercase tracking-widest leading-none">Yearly</span>
                    </div>
                  </div>
                </div>

                <CardContent className="flex-1 lg:p-8 p-6 pt-8 flex flex-col">
                  <ul className="space-y-3 text-sm text-foreground">
                    <li className="text-[10px] uppercase tracking-widest text-primary font-black flex items-center gap-2 mb-4">

                      <div className="h-px bg-primary/20 flex-1" />
                      Everything in Free +
                      <div className="h-px bg-primary/20 flex-1" />
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Unlimited Notes and data
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      2.5GB Secured Storage
                    </li>
                    <li className="flex items-center gap-3 font-semibold text-foreground">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Priority Support & Custom Roles
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Universal Multi-device Sync
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      Secure Cloud Backup & Recovery
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-6 text-center border-t border-border/50 flex flex-col">
                  <div className="flex items-center gap-1 h-5 uppercase tracking-widest text-primary font-bold text-[10px]">
                    <span className="relative top-0.5">*</span>
                    <span className="text-muted-foreground opacity-60">
                      Very high limit for operational safety
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >

        </motion.div>
      </div>
    </section>
  )
}
