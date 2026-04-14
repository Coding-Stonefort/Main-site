import StarterHero from "@/components/trading-accounts/starter-account/StarterHero";
import StarterOverview from "@/components/trading-accounts/starter-account/StarterOverview";
import StarterIntro from "@/components/trading-accounts/starter-account/StarterIntro";


import Faqs, { FAQItem } from "@/components/Faqs";

const marketFaqs: FAQItem[] = [
  {
    question: " What is the minimum deposit for the Starter Account?",
    answer:
      " The minimum deposit is $50.",
  },
  {
    question: "Is there any commission on the Starter Account?",
    answer:
      " No, the Starter Account offers zero commission.",
  },
  {
    question: "Which platform can I use with this account?",
    answer:
      "You can trade using MetaTrader 5 (MT5).",
  },
  {
    question: "Is the Starter Account suitable for beginners?",
    answer:
      "Yes, it is designed as an accessible option for traders starting their journey",
  },

];


export default function StarterPage() {
  return (
    <>
      <StarterHero />
      <StarterOverview />
      <StarterIntro />
      <Faqs />
    </>
  );
}