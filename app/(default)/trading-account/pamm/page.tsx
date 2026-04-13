import PammHero from "@/components/trading-accounts/pamm/PammHero";
import PammFeatures from "@/components/trading-accounts/pamm/PammFeatures";
import PammHowItWorks from "@/components/trading-accounts/pamm/PammHowItWorks";
import HowToBecomeMoneyManager from "@/components/trading-accounts/pamm/HowToBecomeMoneyManager";
import Faqs, { FAQItem } from "@/components/Faqs";

const marketFaqs: FAQItem[] = [
  {
    question: "What is the minimum deposit for the Elite Account?",
    answer:
      "The minimum deposit is $10,000.",
  },
  {
    question: "Does the Elite Account charge commission?",
    answer:
      "Yes, the Elite Account includes a commission of $8.",
  },
  {
    question: "What spreads are available on the Elite Account?",
    answer:
      "Spreads start from 0.1 pips.",
  },
  {
    question: "Who is the Elite Account best suited for?",
    answer:
      "It is ideal for experienced traders who want premium trading conditions, tighter spreads, and a more professional account setup.",
  },
];


export default function Page() {
  return (
    <>
      <PammHero />
      <PammFeatures />
      <PammHowItWorks />
      <HowToBecomeMoneyManager />
      <Faqs items={marketFaqs} />
    </>
  );
}