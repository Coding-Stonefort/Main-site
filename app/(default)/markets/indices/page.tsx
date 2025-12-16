import IndicesHero from "@/components/Indices/IndicesHero";
import MarketsLiveOverview from "@/components/market/MarketsLiveOverview";
import WhyTradeIndices from "@/components/Indices/WhyTradeIndices";
import IndicesHowTradingWorks from "@/components/Indices/IndicesHowTradingWorks";
import IndicesStonefort from "@/components/Indices/IndicesStonefort"
import RelatedPosts from "@/components/ChangelogRelatedPosts";
import Faqs, { FAQItem } from "@/components/Faqs";

const indicesFaqs: FAQItem[] = [
  {
    question: "What are the benefits of trading CFDs on indices?",
    answer:
      "Trading CFDs on indices allows you to gain exposure to an entire market or economic sector through a single instrument. Instead of trading individual stocks, you can trade the overall performance of major indices such as the S&P 500, NASDAQ, or FTSE, benefiting from broader market trends. Index CFDs also require less capital compared to instruments such as ETFs or futures, as leverage enables traders to control larger positions with a smaller initial investment. In addition, index CFDs closely track the spot price of the underlying index and are not affected by expiration dates or time decay, allowing traders to focus purely on price movement and market direction.",
  },
  {
    question: "What factors influence the price of indices?",
    answer:
      "Index prices are primarily influenced by the performance of the individual companies that make up the index. Strong or weak earnings, sector growth, and changes in business outlook can directly impact index movements. Broader macroeconomic factors such as interest rate decisions, inflation data, employment figures, and economic growth indicators also play a significant role. Geopolitical developments, government policies, regulations, and fiscal stimulus measures can further drive volatility and market direction.",
  },
  {
    question: "Are Stonefort index CFDs based on spot or futures prices?",
    answer:
      "Stonefort’s index CFDs are based on spot prices, reflecting the current market value of the underlying index. Spot pricing provides real-time market tracking and transparency, allowing traders to trade index price movements without the complexities associated with futures contracts, such as expiry dates or rollover costs.",
  },
];


export default function Indices() {
  return (
    <>
      <IndicesHero />
        <section id="indices-pairs">
            <MarketsLiveOverview />
        </section>
        <WhyTradeIndices />
        <IndicesHowTradingWorks />
        <IndicesStonefort />
        <RelatedPosts />
          <Faqs
          badgeLabel="Range of Markets FAQs"
          title="Indices FAQs Understand the Markets Better "
          subtitle=""             
          items={indicesFaqs}      
          initiallyOpenIndex={null} 
        />        

    </>
  );
}
