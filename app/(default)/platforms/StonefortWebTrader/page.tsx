import MetaTraderWebHero from "@/components/Platform/StonefortWebTrader/MetaTraderWebHero"
import TradingPlatformTabs from "@/components/Platform/StonefortWebTrader/TradingPlatformTabs";
import WhyTradeWebTrader from "@/components/Platform/StonefortWebTrader/WhyTradeWebTrader"
import MaximiseWebTradingExperience from "@/components/Platform/StonefortWebTrader/MaximiseWebTradingExperience";
import TradeWithSupportGuidance from "@/components/Platform/StonefortWebTrader/TradeWithSupportGuidance";
import PlatformTutorialVideos from "@/components/Platform/StonefortWebTrader/PlatformTutorialVideos";
import StartedCFDTrading from "@/components/Platform/StonefortWebTrader/StartedCFDTrading";
import GetStartedCta from "@/components/GetStartedCta";

import Faqs, { FAQItem } from "@/components/Faqs";

const marketFaqs: FAQItem[] = [
  {
    question: "How current is the information on Web Trader?",
    answer: `
      <p>
        Web Trader uses real-time pricing data, allowing you to trade on live market prices across all available instruments.
        Live pricing is also available on demo accounts to provide a close approximation of real trading conditions.
      </p>
    `,
  },
  {
    question: "What browsers are supported?",
    answer: `
      <p>
        Web Trader is compatible with all modern browsers, including Google Chrome, Microsoft Edge, and Mozilla Firefox.
        For optimal performance and security, we recommend using the latest browser version.
      </p>
    `,
  },
  {
    question: "What can I trade on Web Trader?",
    answer: `
      <p>
        You can trade a wide range of instruments on Web Trader, including 80+ FX pairs, as well as gold and silver.
      </p>
      <br />
      <p>
        To explore all available markets, log in to the platform and select the <strong>“Range of Markets”</strong> tab.
        You can browse by asset class or view trending and popular instruments from the side menu.
      </p>
    `,
  },
  {
    question: "Is Web Trader secure?",
    answer: `
      <p>
        Yes. We use secure data transmission protocols across all platforms to ensure a safe and protected trading environment.
      </p>
    `,
  },
  {
    question: "What features does Web Trader offer?",
    answer: `
      <p>
        Web Trader includes a comprehensive set of professional tools, such as:
      </p>
      <br />
      <ul class="list-disc pl-5 space-y-1">
        <li>Advanced charting tools</li>
        <li>Drag-and-drop order editing</li>
        <li>50+ technical indicators</li>
        <li>Market comparison functionality</li>
        <li>Customisable and saved layouts</li>
        <li>Integrated market analysis and economic calendar</li>
        <li>Full account management access</li>
      </ul>
    `,
  },
  {
    question: "Can I manage my funds on Web Trader?",
    answer: `
      <p>
        Yes. You can deposit funds or submit withdrawal requests directly via MyAccount, accessible within the Web Trader platform.
      </p>
    `,
  },
  {
    question: "How do I add a market to my Watchlist?",
    answer: `
      <p>
        You can add a market by typing its name into the search field at the top of a watchlist and selecting it.
      </p>
      <br />
      <p>
        Alternatively, from the browse or search menu, click the <strong>“+”</strong> icon and choose the watchlist where you’d like the market added.
      </p>
    `,
  },
  {
    question: "How do I change my layout?",
    answer: `
      <p>
        Web Trader layouts are fully customisable. You can resize and reposition windows, create multiple layouts within a workspace,
        and switch easily between different workspaces.
      </p>
    `,
  },
  {
    question: "How do I compare multiple markets on the same chart?",
    answer: `
      <p>
        Select the <strong>Compare</strong> option at the top of the chart, then enter the market symbol you wish to compare.
        You can overlay multiple markets on the same chart or display comparative data below the chart.
      </p>
    `,
  },
  {
    question: "How do I add a Stop or Limit order to an open position?",
    answer: `
      <p>
        Go to the <strong>Positions</strong> tab and click within the stop or limit field of the relevant position.
      </p>
      <br />
      <p class="text-[11px] md:text-xs text-slate-400">
        Please note that contingent orders help manage risk but do not guarantee loss limitation under all market conditions.
      </p>
    `,
  },
  {
    question: "How do I log out of Web Trader?",
    answer: `
      <p>
        Click on the <strong>Account</strong> icon and select <strong>Log Out</strong>.
      </p>
    `,
  },
];


export const metadata = {
  title: "Stonefort Web  Trader | Stonefort Platforms",
  description:
    "Trade global markets with Stonefort Web Trader on Stonefort. Advanced tools, EAs, and multi-asset trading across desktop, web, and mobile.",
};

export default function StonefortTraderMobile() {
  return (
    <>
      <MetaTraderWebHero />
      <TradingPlatformTabs />
      <MaximiseWebTradingExperience />
      <WhyTradeWebTrader />
      <TradeWithSupportGuidance />
      <PlatformTutorialVideos />
      <StartedCFDTrading />
      <Faqs
          badgeLabel="Web Trader"
          title="Web Trader Frequently Asked Questions "
          subtitle=""
          items={marketFaqs}
          initiallyOpenIndex={null}
        />
        <GetStartedCta />

    </>
  );
}
