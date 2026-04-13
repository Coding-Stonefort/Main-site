import DemoaccountHero from "@/components/trading-accounts/demoaccount/DemoAccountHero";
import DemoAccountBenefits from "@/components/trading-accounts/demoaccount/DemoAccountBenefits";
import DemoAccountsteps from "@/components/trading-accounts/demoaccount/DemoAccountsteps";

import Faqs, { FAQItem } from "@/components/Faqs";

const demoAccountFaqs: FAQItem[] = [
  {
    question: "What is a Demo Account?",
    answer:
      "A Demo Account is a practice trading account that allows you to explore the platform and test trading strategies using virtual funds.",
  },
  {
    question: "Do I need to deposit funds to open a Demo Account?",
    answer:
      "No, a Demo Account can be opened without making any deposit.",
  },
  {
    question: "Can I use the Demo Account before opening a live account?",
    answer:
      "Yes, the Demo Account is designed to help you get familiar with the platform before moving to live trading.",
  },
  {
    question: "Who is the Demo Account best suited for?",
    answer:
      "It is ideal for beginners, new users exploring the platform, and traders who want to practice strategies in a risk-free environment.",
  },
];

export default function DemoPage() {
    return (
        <>
            <DemoaccountHero />
            <DemoAccountBenefits />
            <DemoAccountsteps />
            <Faqs items={demoAccountFaqs} />
        </>
    )
}