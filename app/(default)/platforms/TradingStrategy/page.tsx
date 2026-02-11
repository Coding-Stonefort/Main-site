import TradingHero from "@/components/Platform/TradingStrategy/TradingHero"
import TradingPillarsSection from "@/components/Platform/TradingStrategy/TradingPillarsSection"
import Faqs, { FAQItem } from "@/components/Faqs";
import GetStartedCta from "@/components/GetStartedCta";

const marketFaqs: FAQItem[] = [
  {
    question: "How can I access the Trading Plan?",
    answer:
      "You can access the Trading Plan via Performance Analytics. Simply log in to your trading platform and select Performance Analytics from the top navigation menu.",
  },
  {
    question: "Can I change my Trading Plan?",
    answer:
      "Yes. You can update your Trading Plan at any time. Whenever you modify your rules, the system automatically applies them to your entire trading history, allowing you to review your discipline and consistency over time.<br /><br />You can track your performance across daily, weekly, monthly, and yearly views.",
  },
  {
    question: "How much does the Trading Plan cost?",
    answer: "The Trading Plan feature is completely free for all traders.",
  },
  {
    question: "Are there tutorials available to help me use the Trading Plan?",
    answer:
      "Yes. You can access video tutorials and help articles directly from the Performance Analytics section. These resources will guide you through setup, usage, and best practices.",
  },
]


export default function () {
    return (
        <>
        <TradingHero />
        <TradingPillarsSection />
        <Faqs
            badgeLabel="FAQ – Trading Strategy"
            title="Trading Strategy FAQs"
            subtitle=""
            items={marketFaqs}
            initiallyOpenIndex={null}
            />
        <GetStartedCta />
        </>
    )
}