import AdvancedHero from "@/components/trading-accounts/advance-accounts/AdvancedHero";
import AdvancedAccountMobileShowcase from "@/components/trading-accounts/advance-accounts/AdvancedAccountMobileShowcase";
// import AdvancedAccountMotionHero from "@/components/trading-accounts/advance-accounts/AdvancedAccountMotionHero";
import AdvancedAccountHero from "@/components/trading-accounts/advance-accounts/AdvancedAccountHero";
import AdvancedAccountsTripleMotion from "@/components/trading-accounts/advance-accounts/AdvancedAccountsTripleMotion";

import Faqs, { FAQItem } from "@/components/Faqs";

const marketFaqs: FAQItem[] = [
  {
    question: "What is the minimum deposit for the Advanced Account?",
    answer:
      " The minimum deposit is $3,000.",
  },
  {
    question: "Does the Advanced Account charge commission?",
    answer:
      " No, the Advanced Account offers zero commission.",
  },
  {
    question: "What spreads are available on the Advanced Account?",
    answer:
      " Spreads start from 1.0 pips.",
  },
  {
    question: "Who is the Advanced Account best suited for?",
    answer:
      "It is ideal for traders looking for tighter spreads, greater flexibility, and a more advanced trading setup.",
  },

];



export default function Page() {
  return (
    <>
      <AdvancedHero />
      <AdvancedAccountMobileShowcase />
      {/* <AdvancedAccountMotionHero /> */}
      <AdvancedAccountHero />
      <AdvancedAccountsTripleMotion />
      <Faqs />
   
    </>
  );
}