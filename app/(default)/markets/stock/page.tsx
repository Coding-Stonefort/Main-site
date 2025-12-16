import MarketsLiveOverview from "@/components/market/MarketsLiveOverview";
import StocksHero from "@/components/Stock/StocksHero";
import WhyTradeCFDsStocks from "@/components/Stock/WhyTradeCFDsStocks";
import StockFlipCards from "@/components/Stock/StockFlipCards";
import StockCards from "@/components/Stock/StockCards";
import StockCfdHowItWorks from "@/components/Stock/StockCfdHowItWorks";
import WhyTradeStocks from "@/components/Stock/WhyTradeStocks";
import StocksCtaBanner from "@/components/Stock/StocksCtaBanner";
import PlatformsHero from "@/components/Stock/PlatformsHero";
import Faqs, { FAQItem } from "@/components/Faqs";

const marketFaqs: FAQItem[] = [
  {
    question: "What Are Contracts for Difference (CFDs) on Stocks?",
    answer:
      "Contracts for Difference on stocks allow you to trade on the price movement of company shares without owning the underlying asset. You can speculate on rising or falling prices while benefiting from flexibility and lower initial capital requirements compared to traditional share investing.",
  },
  {
    question: "How Do I Trade Stocks with Stonefort?",
    answer:
      "You can trade stock CFDs using Stonefort’s trading platforms, including MT5 and Stonefort Trader. Simply open an account, fund it, and access a wide range of global stocks from a single platform.",
  },
  {
    question: "How Do I Start Trading CFDs on Stocks?",
    answer:
      "To begin, open a trading account with Stonefort. You may start with a demo account to understand how stock CFDs work before transitioning to live trading. Learning how to place orders, analyze charts, and apply risk management tools is essential before trading real funds.",
  },
  {
    question: "How Much Do I Need to Start Trading CFDs on Stocks?",
    answer:
      "The minimum deposit to open an account with Stonefort is just 50 dollars. This allows beginners to access global stock markets, although higher capital may be required to manage larger positions and margin requirements effectively.",
  },
  {
    question: "Are CFDs on Stocks Better Than Owning Stocks?",
    answer:
      "This depends on your trading objectives. Stock CFDs are suitable for active traders seeking flexibility, leverage, and short-term opportunities. Traditional share ownership may be preferred by long-term investors looking for ownership benefits such as dividends and voting rights.",
  },
  {
    question: "What Are the Benefits of Trading CFDs on Stocks?",
    answer:
      "Trading stock CFDs allows you to access global markets, trade with leverage, benefit from competitive pricing, and profit from both rising and falling markets without owning the underlying shares.",
  },
  {
    question: "What Is Leverage in Stock Trading?",
    answer:
      "Leverage allows you to control a larger position with a smaller amount of capital. For example, with leverage of up to 1:20, a relatively small margin can provide exposure to a much larger stock position. While leverage can increase potential returns, it also increases risk.",
  },
  {
    question: "Why Trade Stock CFDs with Stonefort?",
    answer:
      "Stonefort offers competitive pricing, efficient execution, advanced trading platforms, and access to a wide range of global stock markets within a secure and transparent trading environment.",
  },
];


export default function stock(){
    return(
        <>
            <StocksHero />
            <MarketsLiveOverview />
            <WhyTradeCFDsStocks />
            <StockFlipCards />
            <StockCards />
            <StockCfdHowItWorks />
            <WhyTradeStocks />
            <StocksCtaBanner />
            <PlatformsHero />
                    <Faqs
                        badgeLabel="Range of Markets FAQs"
                        title="Forex FAQs Understand the Markets Better "
                        subtitle=""             
                        items={marketFaqs}      
                        initiallyOpenIndex={null} 
                      />
        </>
    )
}