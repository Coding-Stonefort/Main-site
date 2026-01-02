import TopTraders from "@/components/Platform/TopTrader/TopTraderHero"
import HowItWorks from "@/components/Platform/TopTrader/HowItWorks";
import MonthlyTopTraderRewards from "@/components/Platform/TopTrader/MonthlyTopTraderRewards";
import WhyChallengeDifferent from "@/components/Platform/TopTrader/WhyChallengeDifferent";
import TopChartCta from "@/components/Platform/TopTrader/TopChartCta";
import GetStartedMetals from "@/components/metals/GetStartedMetals";

export default function TopTrader()  {
  return (
    <>
    <TopTraders />
    <HowItWorks />
    <MonthlyTopTraderRewards />
    <WhyChallengeDifferent />
    <TopChartCta />
    <GetStartedMetals />
    </>
  );
}
