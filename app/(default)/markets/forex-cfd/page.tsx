import ForexHero from "@/components/ForexCFD/ForexHero";
import ForexCards from "@/components/ForexCFD/ForexCards";
import MarketsLiveOverview from "@/components/market/MarketsLiveOverview";
import WhyTradeCFDsForex from "@/components/ForexCFD/WhyTradeCFDsForex";
import FlipCards from "@/components/ForexCFD/FlipCards";
import WhyTradeForex from "@/components/ForexCFD/WhyTradeForex";
import MarketsCatalogHero from "@/components/ForexCFD/MarketsCatalogHero";
import HowForexWorks from "@/components/ForexCFD/HowForexWorks";
import ProfitCarousel from "@/components/ForexCFD/ProfitCarousel";
import RelatedPosts from "@/components/ChangelogRelatedPosts";
import Faqs, { FAQItem } from "@/components/Faqs";
import GetStartedCta from "@/components/GetStartedCta";

const marketFaqs: FAQItem[] = [
  {
    question: "What is Forex?",
    answer:
      "Forex, also known as foreign exchange or FX, refers to the global marketplace where currencies are traded. It is a decentralized market that operates 24 hours a day, five days a week, and is considered the largest and most liquid financial market in the world. <br />Forex trading involves exchanging one currency for another with the intention of benefiting from fluctuations in their exchange rates. ",
  },
  {
    question: "How do I trade Forex?",
    answer:
      "Forex trading is the process of speculating on the movement of currency prices. When you trade forex, you are essentially predicting whether one currency will strengthen or weaken against another.<br/ > <br /> <strong>Example:</strong> <br />If you believe the Euro will increase in value relative to the US Dollar, you buy the currency pair EUR USD. If you expect the Euro to weaken, you sell EUR USD instead. Your profit or loss depends on how the market moves after you enter the trade.  ",
  },
  {
    question: "What are some Forex trading examples?",
    answer:
      "Understanding real market scenarios makes forex easier to grasp. Here are simple illustrations: <br /><br /><strong>Example 1: Buying (Going Long)</strong><br />You expect GBP to strengthen against USD.<br />Price moves from 1.2500 to 1.2550 after your buy order.<br />That 50-pip rise becomes your profit depending on your lot size.<br /><br /><strong>Example 2: Selling (Going Short)</strong><br />You expect USD to weaken against JPY.<br />You sell USD/JPY at 150.00 and close at 149.60.<br />The 40-pip drop benefits your short position. These examples show how traders take advantage of price movements in either direction. ",
  },
  {
    question: "What is margin in Forex?",
    answer:
      "Margin in forex is the amount of money a trader must set aside in their trading account to open and maintain a leveraged position. Think of it as a security deposit held by the broker while your trade is active. It does not represent the cost of the trade itself, but rather the portion of your capital required to support the position.<br /><br />Margin allows you to control a much larger position size than the amount you physically deposit, making it a key component of leveraged trading. While this increases your profit potential, it also increases your exposure to losses and must be managed with caution.",
  },
  {
    question: "Why should I trade Forex with Stonefort?",
    answer:
      "Stonefort provides tight spreads, fast execution, and access to over 50 major, minor, and exotic currency pairs. With strong liquidity, advanced trading platforms, flexible leverage options, and a secure, regulated environment, traders enjoy a smooth, efficient, and reliable trading experience. ",
  },
];


export default function ForexCfdPage() {
  return (
    <>
        <ForexHero />
        <section id="forex-pairs">
          <MarketsLiveOverview />
        </section>
        <WhyTradeCFDsForex />
        <FlipCards />
        <ForexCards />
        <WhyTradeForex />
        <MarketsCatalogHero />
        <HowForexWorks />
        <ProfitCarousel />
        <RelatedPosts
        title="Learn more about Forex & CFDs"
        limit={3}
         tag="forex" 
      />

        <Faqs
            badgeLabel="Range of Markets FAQs"
            title="Forex FAQs – Understand the Markets Better "
            subtitle=""             
            items={marketFaqs}      
            initiallyOpenIndex={null} 
          />
          <GetStartedCta />


    </>
  );
}
