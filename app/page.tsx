import { Hero } from "@/components/sections/hero"
import { FeatureSection } from "@/components/sections/features"
import { PricingSection } from "@/components/sections/pricing"
import { FaqSection } from "@/components/sections/faq"

export default function Page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeatureSection />
      <PricingSection />
      <FaqSection />
    </div>
  )
}
