

import MT5Hero from "@/components/Platform/metatrader5/MT5Hero";
import MT5TradeSmarter from "@/components/Platform/metatrader5/MT5TradeSmarter";
import PlatformsHeroTabs from "@/components/Platform/PlatformsHeroTabs";
import MT5Reason from "@/components/Platform/metatrader5/MT5Reason";
import WhyMT5Stonefort from "@/components/Platform/metatrader5/WhyChooseStonefort";
import MT5TradingOptions from "@/components/Platform/metatrader5/MT5TradingOptions";
import MT5AccountSteps from "@/components/Platform/metatrader5/MT5AccountSteps";
import ExponentialGrowthSection from "@/components/Platform/metatrader5/ExponentialGrowthSection";
import Faqs, { FAQItem } from "@/components/Faqs";
import JoinGlobalTraders from "@/components/Platform/metatrader5/JoinGlobalTraders";
import RelatedPosts from "@/components/ChangelogRelatedPosts";


import GetStartedCta from "@/components/GetStartedCta";



export const MT5Faqs: FAQItem[] = [
  {
    question: "What is MetaTrader 5?",
    answer:
      "MetaTrader 5 (MT5) is Stonefort’s advanced multi-asset trading platform, designed to support trading across forex, indices, commodities, shares, and other CFD instruments. Compared to earlier platforms, MT5 offers enhanced charting, deeper analytical capabilities, and a more robust environment for automated and algorithmic trading.",
  },
  {
    question: "How do I open a Stonefort MT5 account?",
    answer: `
      Opening an MT5 account with Stonefort is simple:
      <ul>
        <li>Visit the Stonefort website</li>
        <li>Select <strong>Open Live Account</strong></li>
        <li>Choose <strong>MetaTrader 5</strong> as your platform</li>
        <li>Complete the online registration form</li>
        <li>Submit the required verification documents</li>
        <li>Fund your account using available payment methods</li>
        <li>Download MT5 and start trading</li>
      </ul>
    `,
  },
  {
    question: "What is a Stonefort MT5 demo account?",
    answer:
      "A Stonefort MT5 demo account allows you to practise trading in a risk-free environment using virtual funds. It mirrors live market conditions, including real-time pricing and full platform functionality, making it ideal for learning the platform and testing trading strategies before moving to a live account.",
  },
  {
    question: "How long does the MT5 demo account remain active?",
    answer:
      "Stonefort demo accounts are designed to give traders sufficient time to practise and explore the platform. If additional practice time is required, new demo accounts can be created easily, each with refreshed virtual funds.",
  },
  {
    question: "How do I download MetaTrader 5?",
    answer: `
      You can download MT5 directly through Stonefort:
      <ul>
        <li>Visit the Platforms section on the Stonefort website</li>
        <li>Select <strong>MetaTrader 5</strong></li>
        <li>Choose your preferred device (desktop or mobile)</li>
        <li>Follow the installation instructions</li>
      </ul>
      MT5 is available for desktop, web, and mobile devices, ensuring flexibility across trading environments.
    `,
  },
  {
    question: "What trading tools are available on MT5?",
    answer: `
      Stonefort’s MT5 platform includes a comprehensive set of professional trading tools, such as:
      <ul>
        <li>Advanced charting with a wide range of technical indicators</li>
        <li>Multiple timeframes for detailed market analysis</li>
        <li>Integrated economic and trading calendars</li>
        <li>Market depth and price ladder functionality</li>
        <li>Support for automated trading strategies</li>
        <li>Advanced pending order types</li>
        <li>A powerful strategy testing environment</li>
      </ul>
    `,
  },
  {
    question: "What additional features and enhancements are available?",
    answer: `
      Stonefort provides access to a range of platform enhancements designed to support active and professional traders, including:
      <ul>
        <li>VPS solutions for automated trading</li>
        <li>Advanced indicators and analytical tools</li>
        <li>Enhanced market depth and execution views</li>
        <li>Multi-account and trade management capabilities</li>
        <li>Web-based trading access</li>
        <li>Custom indicator and strategy support</li>
      </ul>
    `,
  },
];

export const metadata = {
  title: "MetaTrader 5 | Stonefort Platforms",
  description:
    "Trade global markets with MetaTrader 5 on Stonefort. Advanced tools, EAs, and multi-asset trading across desktop, web, and mobile.",
};

export default function MetaTrader5() {
  return (
    <>
      <MT5Hero />
      <MT5TradeSmarter />
      <PlatformsHeroTabs />
      <MT5Reason />
      <WhyMT5Stonefort />
      <MT5TradingOptions />
      <MT5AccountSteps />
      <ExponentialGrowthSection />
      <Faqs
        badgeLabel="MetaTrader 5 (MT5) FAQs"
        title="Your Questions Answered"
        subtitle=""
        items={MT5Faqs}
        initiallyOpenIndex={null}
      />
      <JoinGlobalTraders />
      <RelatedPosts
        title="Discover the Power of MT5 with Stonefort "
        limit={3}
        tag="forex" 
      />
      <GetStartedCta />

    </>
  );
}
