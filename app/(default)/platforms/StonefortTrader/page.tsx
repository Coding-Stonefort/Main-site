import StonefortTraderHero from "@/components/Platform/StonefortTrader/StonefortTraderHero";
import WhyChooseTradingApp from "@/components/Platform/StonefortTrader/WhyChooseTradingApp";
import WaysToTrade from "@/components/Platform/StonefortTrader/WaysToTrade";
import TrustSection from "@/components/Platform/StonefortTrader/TrustSection";
import DownloadAppCta from "@/components/Platform/StonefortTrader/DownloadAppCta";
import AppSetupSteps from "@/components/Platform/StonefortTrader/AppSetupSteps";
import PromotionsActivities from "@/components/Platform/StonefortTrader/PromotionsActivities";
import GetStartedCta from "@/components/GetStartedCta";



export const metadata = {
  title: "Stonefort Trader| Stonefort Platforms",
  description:
    "Trade global markets with MetaTrader 5 on Stonefort. Advanced tools, EAs, and multi-asset trading across desktop, web, and mobile.",
};

export default function StonefortTrader() {
  return (
    <>
    <StonefortTraderHero />
    <WhyChooseTradingApp />
    <WaysToTrade />
    <TrustSection />
    <DownloadAppCta />
    <AppSetupSteps />
    <PromotionsActivities />

    <GetStartedCta />

    </>
  );
}
