import PerformanceAnalyticsHero from "@/components/Platform/PerformanceandAnalysis/PerformanceAnalyticsHero";
import Performanceimprovement from "@/components/Platform/PerformanceandAnalysis/PerformanceImprovement";
import TradingBehaviourSection from "@/components/Platform/PerformanceandAnalysis/TradingBehaviourSection";
import RealTimeInsightsSection from "@/components/Platform/PerformanceandAnalysis/RealTimeInsightsSection";
import DiscoverTradingEdgeSection from "@/components/Platform/PerformanceandAnalysis/DiscoverTradingEdgeSection";

import Faqs, { type FAQItem } from "@/components/Faqs";

const performanceAnalyticsFaqs: FAQItem[] = [
  {
    question: "What are the requirements to access Performance Analytics?",
    answer: `
      <p>
        You can access Performance Analytics by logging into Web Trader, opening your Workspace,
        clicking the three-dot menu, and selecting <strong>Performance Analytics</strong>.
      </p>
      <br />
      <p>
        On the mobile app, go to <strong>More → Performance Analytics</strong> under
        <strong> My Trading History</strong>.
      </p>
    `,
  },
  {
    question: "How much does Performance Analytics cost?",
    answer: `
      <p>
        Performance Analytics is available at no additional cost to eligible live account holders.
      </p>
    `,
  },
  {
    question: "Can I use Performance Analytics with a demo account?",
    answer: `
      <p>
        No. Performance Analytics is not currently available on demo accounts.
      </p>
    `,
  },
  {
    question: "Can I access Performance Analytics via the mobile app?",
    answer: `
      <p>
        Yes. On the mobile app, select <strong>More</strong>, then go to
        <strong> Performance Analytics</strong> under <strong>My Trading History</strong>.
      </p>
    `,
  },
  {
    question: "Are there tutorials available on how to use Performance Analytics?",
    answer: `
      <p>
        Yes. You can learn how to use Performance Analytics through our platform video tutorials,
        which cover key features and functionality.
      </p>
    `,
  },
  {
    question: "Is the information real-time or delayed?",
    answer: `
      <p>
        When accessing Performance Analytics for the first time, there may be a short delay while
        historical trade data is processed, depending on trade volume.
      </p>
      <br />
      <p>
        After initial access, updates are near real-time, typically with a delay of only a few minutes.
      </p>
    `,
  },
  {
    question: "Why am I not seeing any insights or trading edges yet?",
    answer: `
      <p>
        Performance Analytics requires a minimum amount of closed trade data to generate meaningful
        insights.
      </p>
      <br />
      <p>
        If you haven’t closed enough positions yet, certain analytics and behavioural patterns may
        not be visible.
      </p>
    `,
  },
  {
    question: "If I have multiple accounts, can I view them all together?",
    answer: `
      <p>
        No. Performance Analytics is account-specific. You must log in to each individual account
        to view analytics for that account.
      </p>
    `,
  },
  {
    question: "Can I export performance data from Performance Analytics?",
    answer: `
      <p>
        Yes. You can export your trading data in <strong>CSV format</strong> for use in Excel or
        other analytical tools.
      </p>
      <br />
      <p>
        Go to the <strong>Statements</strong> section within Performance Analytics, select your
        preferred date range, and click <strong>Export</strong>.
      </p>
    `,
  },
  {
    question:
      "What does it mean if there are no positive or negative habits shown under Psychology Edges?",
    answer: `
      <p>
        This means there is not yet enough completed trade data for Performance Analytics to identify
        clear behavioural patterns.
      </p>
    `,
  },
  {
    question:
      "Why does the P&L in Performance Analytics differ from my account trade history?",
    answer: `
      <p>
        Performance Analytics reviews up to <strong>12 months</strong> of trade data, capped at
        <strong> 10,000 transactions</strong> per account.
      </p>
      <br />
      <p>
        If this limit is exceeded, lifetime P&amp;L figures may not match exactly.
        Additionally, P&amp;L calculations are based only on trade openings and closings.
        Costs such as financing, commissions, rebates, and dividend adjustments are not included.
      </p>
    `,
  },
];

export const metadata = {
    title: "Trading Performance & Discipline Analytics | Stonefort Web Trader",
  description:
    "Gain deeper insight into your trading performance, discipline, and strategy with Stonefort Web Trader. Analyse trading behaviour, track consistency, refine strategies, and improve decision-making using advanced performance and psychology analytics.",

  keywords: [
    "trading performance analytics",
    "trading discipline analysis",
    "trading psychology",
    "trading behaviour insights",
    "performance tracking",
    "trading strategy analysis",
    "Stonefort Web Trader",
    "online trading platform",
    "professional trading tools",
  ],
};

export default function PerformanceandAnalysis() {
    return (
        <>
            <PerformanceAnalyticsHero />
            <Performanceimprovement />
            <TradingBehaviourSection />
            <RealTimeInsightsSection
            videoSrc="https://www.youtube.com/embed/39aNnXPaDR4?rel=0&modestbranding=1&controls=1"
            />
            <DiscoverTradingEdgeSection />
<Faqs
  badgeLabel="Performance Analytics FAQs"
  title="Performance Analytics – Frequently Asked Questions"
  subtitle="Find answers to common questions about accessing, using, and understanding Performance Analytics."
  items={performanceAnalyticsFaqs}
  initiallyOpenIndex={null}
/>

        </>
    )
}