import PlatformHero from "@/components/Platform/PlatformHero";
import PlatformsHeroTabs from "@/components/Platform/PlatformsHeroTabs";
import TradeWithoutCompromise from "@/components/Platform/TradeWithoutCompromise";
import TradingPlatformCards from "@/components/Platform/TradingPlatformCards";
import WebTradingPlatform from "@/components/Platform/WebTradingPlatform";
import StonefortLensBanner from "@/components/Platform/StonefortLensBanner";
import AdvancedCharting from "@/components/Platform/AdvancedCharting";
import ExecutionBanner from "@/components/Platform/ExecutionBanner";
import PlatformIntro from "@/components/Platform/PlatformIntro";
import MT5Advanced from "@/components/Platform/MT5Advanced/MT5Advanced";
import Faqs, { type FAQItem } from "@/components/Faqs";
import GetStartedMetals from "@/components/metals/GetStartedMetals";



const platformFaqs: FAQItem[] = [
  {
    question: "How do I log in to my Stonefort trading account",
    answer: `
      <p>
        You can log in to your Stonefort trading account directly through the Stonefort Client Portal or by accessing your chosen trading platform, including MetaTrader 5, the Web Trading Platform, or the Stonefort Trader mobile app. Step-by-step login guidance is available within the client portal. 
      </p>
    `,
  },
  {
    question: "What are Expert Advisors",
    answer: `
      <p>
        Expert Advisors, commonly referred to as EAs, are automated trading programs designed to execute strategies based on predefined rules. On MetaTrader 5, EAs can be used to automate trade execution, risk management, and strategy testing. 
      </p>
      <br />
      <p>
       EAs operate locally on your device and require an active connection to the trading server to function. Traders may run multiple Expert Advisors simultaneously, provided each EA is applied to a separate chart. For advanced users, hosted environments may be used to keep strategies running continuously. 
      </p>
    `,
  },
  {
    question: "What features does the Stonefort web trading platform offer ",
    answer: `
      <p>
        Stonefort’s web trading platform is designed to deliver a complete trading experience directly from your browser, with no downloads required. Key features include:
      </p>
      <br />
      <p>
      Advanced and interactive charting tools 
Drag and drop order placement and modification 
50+ technical indicators and drawing tools 
Market comparison tools 
Automatically saved and fully customisable layouts 
Integrated market analysis and economic calendar 
Exclusive performance analytics to track trading activity 
      </p>
    `,
  },
];

export const metadata = {
  title: "Trading Platforms | Stonefort",
  description:
    "Trade on Stonefort’s advanced platforms including Web Trader, Stonefort Trader App, and MetaTrader 5.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <PlatformsHeroTabs />
      <TradeWithoutCompromise />
      <WebTradingPlatform  />
      <TradingPlatformCards />
      <StonefortLensBanner />
      <AdvancedCharting />
      <PlatformIntro />
      <ExecutionBanner />
      <MT5Advanced />
              <Faqs 
                  badgeLabel="Range of Markets FAQs"
                  title="Crypto FAQs Understand the Markets Better "
                  subtitle=""             
                  items={platformFaqs}      
                  initiallyOpenIndex={null}
              />
      <GetStartedMetals />
    </>
  );
}
