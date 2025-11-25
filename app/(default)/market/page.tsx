import MarketHero from "@/components/market/MarketHero";
import MarketsTabs from "@/components/market/MarketsTabs";
import TradableMarkets from "@/components/market/TradableMarkets";

export const metadata = {
  title: "Market - Stonefort",
  description: "page description",
};

export default function Market() {
  return (
    <>
      <MarketHero
        titleLine1="Trade where the "
        titleLine2="world moves."
        subtitle="Enter the core of global markets with Stonefort where every major asset class meets precision and opportunity. 
With 1,400+ CFDs across forex, indices, commodities, and equities, your next trade is always within reach. "
        imageSrc="/images/mkt-bg.png"
        imageAlt="Range of trading markets including stocks, crypto and indices"
      />
      <TradableMarkets />
      <MarketsTabs />

    </>
  );
}
