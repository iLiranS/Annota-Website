import { Hero } from "@/components/sections/hero"
import { FeatureSection } from "@/components/sections/features"
import { FaqSection } from "@/components/sections/faq"

export default function Page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeatureSection />
      <FaqSection />
    </div>
  )
}
