import CashbackRewardsHero from "@/components/Platform/CashbackRewards/CashbackRewardsHero";

import HowToEarnCashback from "@/components/Platform/CashbackRewards/HowToEarnCashback";
import TradeMoreCashbackRewards from "@/components/Platform/CashbackRewards/TradeMoreCashbackRewards";
import MoreReasonsSection from "@/components/Platform/CashbackRewards/MoreReasonsSection";
import GetStartedCta from "@/components/GetStartedCta";


export default function CashbackPage()  {
  return (
    <>
    <CashbackRewardsHero />
    <HowToEarnCashback />
    <TradeMoreCashbackRewards />
    <MoreReasonsSection />
    <GetStartedCta />

    </>
  );
}
