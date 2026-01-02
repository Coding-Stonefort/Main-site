import MetaTraderWebHero from "@/components/Platform/StonefortWebTrader/MetaTraderWebHero"
import WhyTradeWebTrader from "@/components/Platform/StonefortWebTrader/WhyTradeWebTrader"

export const metadata = {
  title: "Stonefort Web  Trader | Stonefort Platforms",
  description:
    "Trade global markets with Stonefort Web Trader on Stonefort. Advanced tools, EAs, and multi-asset trading across desktop, web, and mobile.",
};

export default function StonefortTraderMobile() {
  return (
    <>
     <MetaTraderWebHero />
     <WhyTradeWebTrader />
    </>
  );
}
