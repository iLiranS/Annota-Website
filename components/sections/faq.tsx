"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDownIcon } from "lucide-react"

const faqs = [
  {
    question: "What is Annota?",
    answer: "Annota is a Offline and local-first note taking app with E2E encryption sync capabilities. It is designed to help you capture, organize, and interact with your content seamlessly. At its core, it is built to speed up your workflow and keep your thoughts securely organized in one place, without getting in your way."
  },
  {
    question: "What features does Annota have?",
    answer: "Support for PDF 📄, images 🖼️, beautiful editor ✨ including customizable tables 📊, flashcards 🗂️, code blocks 💻, quotes, details, LaTeX and more. Alongside AI features 🤖 such as in-editor assistant and AI chat as well that can look for specific folder / notes."
  },
  {
    question: "Who is it for?",
    answer: "Annota is designed for anyone who needs a powerful, private digital mind. It's perfect for students 🎓 who need to annotate PDFs and study with flashcards, programmers 💻 who want clean code blocks and an AI-powered coding assistant, teachers 🍎 who need to organize complex information into beautiful tables and notes, and professionals 💼 who value data privacy and local-first performance."
  },
  {
    question: "What platforms does Annota support?",
    answer: "We currently support iOS, MacOS, and Windows, soon to be on Android as well."
  },
  {
    question: "How is my data stored and secured?",
    answer: "If you choose to sync your data, your privacy is our absolute priority. All your data is stored using Supabase with true End-to-End (E2E) encryption. We utilize a zero-knowledge architecture, meaning your encryption keys remain strictly on your device. We cannot see your data, and even Supabase cannot access or read it. You are the only one who holds the key to your content. You can always export your notes from your device to different formats as well"
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "If you cancel, you'll still have full access to your local notes. Your data remains on your device. You'll simply lose access to cloud synchronization and premium storage limits once your billing cycle ends."
  },
  {
    question: "How long is my data stored if I'm inactive?",
    answer: "For non-pro (Free) users, cloud-synced data is deleted if the account remains inactive for more than 90 consecutive days. This help us maintain a fast and efficient service for everyone. Note that this only applies to data on our servers; your local notes on your device are never deleted by us."
  },

]

export function FaqSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="faq" className="lg:h-dvh py-20 sm:py-32 bg-background relative overflow-hidden flex flex-col justify-center">

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tighter sm:text-5xl"
          >
            Frequently Asked <span className="text-primary italic font-serif">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have more questions? Join our{" "}
            <a
              href="https://discord.gg/dG5nNJPDAh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline transition-all"
            >
              Discord server
            </a>{" "}
            to connect with the community and get direct support.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {mounted ? (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border bg-background/50 rounded-xl px-6 transition-all hover:border-primary/20 hover:shadow-lg group"
                >
                  <AccordionTrigger className="text-left font-bold py-6  hover:no-underline data-[state=open]:text-primary  transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pb-6 leading-relaxed h-max">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border bg-background/50 rounded-xl px-6 py-6 transition-all flex items-center justify-between"
                >
                  <span className="text-left font-bold text-foreground/80">{faq.question}</span>
                  <ChevronDownIcon className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          )}
        </motion.div>


      </div>
    </section>
  )
}
