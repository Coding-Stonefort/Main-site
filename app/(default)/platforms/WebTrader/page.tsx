import MetaTraderWebHero from  "@/components/Platform/WebTrader/MetaTraderWebHero";
import TradingPlatformTabs from "@/components/Platform/WebTrader/TradingPlatformTabs";
import WhyTradeWebTrader from "@/components/Platform/WebTrader/WhyTradeWebTrader";
import MaximiseWebTradingExperience from "@/components/Platform/WebTrader/MaximiseWebTradingExperience";
import TradeWithSupportGuidance from "@/components/Platform/WebTrader/TradeWithSupportGuidance";
import StartedCFDTrading from "@/components/Platform/WebTrader/StartedCFDTrading"
import Faqs, { type FAQItem } from "@/components/Faqs";
import GetStartedCta from "@/components/GetStartedCta";

const webtrader: FAQItem[] = [
  {
    question: "How current is the information on Web Trader?",
    answer:
      "Web Trader uses real-time pricing data, allowing you to trade on live market prices across all available instruments. Live pricing is also available on demo accounts to provide a close approximation of real trading conditions.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "Web Trader is compatible with all modern browsers, including Google Chrome, Microsoft Edge, and Mozilla Firefox. For optimal performance and security, we recommend using the latest browser version.",
  },
  {
    question: "What can I trade on Web Trader?",
    answer:
      "You can trade a wide range of instruments on Web Trader, including 80+ FX pairs, as well as gold and silver.<br /><br />To explore all available markets, log in to the platform and select the <strong>“Range of Markets”</strong> tab. You can browse by asset class or view trending and popular instruments from the side menu.",
  },
  {
    question: "Is Web Trader secure?",
    answer:
      "Yes. We use secure data transmission protocols across all platforms to ensure a safe and protected trading environment.",
  },
  {
    question: "What features does Web Trader offer?",
    answer:
      "Web Trader includes a comprehensive set of professional tools, such as:<br /><br />• Advanced charting tools<br />• Drag-and-drop order editing<br />• 50+ technical indicators<br />• Market comparison functionality<br />• Customisable and saved layouts<br />• Integrated market analysis and economic calendar<br />• Full account management access",
  },
  {
    question: "Can I manage my funds on Web Trader?",
    answer:
      "Yes. You can deposit funds or submit withdrawal requests directly via MyAccount, accessible within the Web Trader platform.",
  },
  {
    question: "How do I add a market to my Watchlist?",
    answer:
      "You can add a market by typing its name into the search field at the top of a watchlist and selecting it.<br /><br />Alternatively, from the browse or search menu, click the <strong>“+”</strong> icon and choose the watchlist where you’d like the market added.",
  },
  {
    question: "How do I change my layout?",
    answer:
      "Web Trader layouts are fully customisable. You can resize and reposition windows, create multiple layouts within a workspace, and switch easily between different workspaces.",
  },
  {
    question: "How do I compare multiple markets on the same chart?",
    answer:
      "Select the <strong>Compare</strong> option at the top of the chart, then enter the market symbol you wish to compare. You can overlay multiple markets on the same chart or display comparative data below the chart.",
  },
  {
    question: "How do I add a Stop or Limit order to an open position?",
    answer:
      "Go to the <strong>Positions</strong> tab and click within the stop or limit field of the relevant position.<br /><br />Please note that contingent orders help manage risk but do not guarantee loss limitation under all market conditions.",
  },
  {
    question: "How do I log out of Web Trader?",
    answer:
      "Click on the Account icon and select <strong>Log Out</strong>.",
  },
];

export const metadata = {
  title: "Stonefort Web Trader|Web Trader",
  description:
    "Trade global markets with MetaTrader 5 on Stonefort. Advanced tools, EAs, and multi-asset trading across desktop, web, and mobile.",
};

export default function WebTrader() {
  return (
    <>

    <MetaTraderWebHero />
    <TradingPlatformTabs />
    <WhyTradeWebTrader />
    <MaximiseWebTradingExperience />
    <TradeWithSupportGuidance />
    <StartedCFDTrading />
    <Faqs
  badgeLabel="Web Trader FAQs"
  title="Web Trader – Frequently Asked Questions"
  subtitle=""
  items={webtrader}
  initiallyOpenIndex={null}
/>
    <GetStartedCta />

    </>
  );
}
