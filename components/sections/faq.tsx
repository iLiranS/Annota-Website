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
    question: "Does Annota work completely offline?",
    answer: "Yes, absolutely! Annota is built local-first, meaning all your notes, folders, flashcards, and search features work 100% offline without needing any active internet connection. Your changes are saved locally instantly and will sync seamlessly in the background once you are back online."
  },
  {
    question: "Can I import and export my notes?",
    answer: "Yes! Annota supports importing notes from standard Markdown (.md) format, making migration from other tools seamless. You can also export your notes at any time to either Markdown (.md) or professionally formatted PDF files."
  },
  {
    question: "Is Annota for me?",
    answer: "Annota is designed for anyone who needs a powerful, private digital mind. It's perfect for students 🎓 who need to organized course structure and study with flashcards, programmers 💻 who want clean code blocks and an AI-powered coding assistant, teachers 🍎 who need to organize complex information into beautiful tables and notes, and professionals 💼 who value data privacy and local-first performance."
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
    question: "Which AI models does Annota support?",
    answer: "We support a wide array of leading AI providers including OpenAI, Gemini, and Anthropic. Additionally, for maximum privacy, Annota integrates with Ollama, allowing you to run fully local, offline AI models on your own machine without sending any data to the cloud."
  },
  {
    question: "How does Annota handle my data when using AI features?",
    answer: "Your privacy is our utmost priority. Only the notes that you explicitly choose as context in Annota will be exposed to the selected AI provider. Outside of the notes you actively share as context, your data is 100% private and encrypted both locally on your device and outside of it (with the exception of local files, such as PDFs or images, which are stored unencrypted on your device's local filesystem)."
  },
  {
    question: "Is Annota free to use?",
    answer: "Yes! Annota is 100% free and open-source. All core features, including local-first storage and cross-device synchronization, are available to everyone without any subscriptions or fees."
  },
  {
    question: "How long is my data stored if I'm inactive?",
    answer: "Cloud-synced data is subject to deletion if the account remains inactive for more than 90 consecutive days. This helps us maintain a fast and efficient service for active users. Note that this only applies to data on our sync servers; your local notes stored on your device are never deleted."
  },
]

export function FaqSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="faq" className="min-h-screen py-20  bg-background relative overflow-hidden flex flex-col justify-center">

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
            Have more questions? Contact us at{" "}
            <a
              href="mailto:support@annota.online"
              className="text-primary font-bold hover:underline transition-all"
            >
              support@annota.online
            </a>{" "}
            for direct support.
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
