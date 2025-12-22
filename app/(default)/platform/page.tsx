import PlatformHero from "@/components/Platform/PlatformHero";
import PlatformsHeroTabs from "@/components/Platform/PlatformsHeroTabs";
import TradeWithoutCompromise from "@/components/Platform/TradeWithoutCompromise";
import TradingPlatformCards from "@/components/Platform/TradingPlatformCards";
import WebTradingPlatform from "@/components/Platform/WebTradingPlatform";
import StonefortLensBanner from "@/components/Platform/StonefortLensBanner";
import AdvancedCharting from "@/components/Platform/AdvancedCharting";
import ExecutionBanner from "@/components/Platform/ExecutionBanner";

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
      <TradingPlatformCards />
      <WebTradingPlatform  />
      <StonefortLensBanner />
      <AdvancedCharting />
      <ExecutionBanner />
    </>
  );
}
