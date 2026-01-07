import DisciplineProHero from "@/components/Platform/DisciplinePro/DisciplineProHero";
import DisciplineProCommandSection from "@/components/Platform/DisciplinePro/DisciplineProCommandSection";
import DisciplineProHowItWorksLaptop from "@/components/Platform/DisciplinePro/DisciplineProHowItWorksLaptop";
import Faqs, { FAQItem } from "@/components/Faqs";
import GetStartedCta from "@/components/GetStartedCta";

export const DisciplineProFaqs: FAQItem[] = [
  {
    question: "How can I access DisciplinePro?",
    answer:
      "You can access DisciplinePro through the Performance Analytics section. Simply log in to your trading platform and select Performance Analytics from the top menu to start using DisciplinePro.",
  },
  {
    question: "Are tutorials available for DisciplinePro?",
    answer:
      "Yes. DisciplinePro includes step-by-step video tutorials, guided walkthroughs, and help articles available directly within the Performance Analytics section. These resources are designed to help you understand discipline metrics, risk controls, and behavioral insights effectively.",
  },
  {
    question: "How much does DisciplinePro cost?",
    answer:
      "DisciplinePro is completely free and available to all eligible traders who have access to Performance Analytics.",
  },
  {
    question: "How often should I use DisciplinePro?",
    answer: `
      DisciplinePro is designed to support your trading discipline on an ongoing basis:
      <ul>
        <li>Review it after every closed trade to assess discipline and rule adherence</li>
        <li>Use it daily to monitor risk limits, streaks, and execution consistency</li>
        <li>Analyze weekly and monthly reports to identify behavioral patterns</li>
        <li>Leverage insights before new trading sessions to reinforce disciplined decision-making</li>
      </ul>
      Regular use helps shift focus from short-term outcomes to long-term consistency and process quality.
    `,
  },
];

export const metadata = {
  title: "DisciplinePro Trading Analytics | Trade with Discipline | Stonefort",

  description:
    "DisciplinePro by Stonefort delivers advanced trading discipline and performance analytics. Monitor trading behaviour, strengthen risk management, track consistency, and improve decision-making with real-time PlayMaker insights.",

  keywords: [
    "trading discipline analytics",
    "trading behaviour analysis",
    "trading psychology tools",
    "risk management analytics",
    "trading consistency tracking",
    "discipline trading system",
    "performance discipline trading",
    "PlayMaker trading insights",
    "Stonefort trading platform",
    "professional trading analytics",
  ],
};


export default function DisciplinePro() {
    return (
        <>
            <DisciplineProHero />
            <DisciplineProCommandSection />
            <DisciplineProHowItWorksLaptop />
            <Faqs
                badgeLabel="DisciplinePro FAQs"
                title="Your Questions Answered"
                subtitle="Everything you need to know about discipline analytics, risk control, and behavioral insights."
                items={DisciplineProFaqs}
                initiallyOpenIndex={null}
            />
            <GetStartedCta />

        </>
    )
}