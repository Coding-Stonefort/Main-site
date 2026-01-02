import BonusProgrammeHero from "@/components/Platform/BonusProgramme/BonusProgrammeHero";
import DepositBonusBenefits from "@/components/Platform/BonusProgramme/DepositBonusBenefits";
import HowToGetCreditBonus from "@/components/Platform/BonusProgramme/HowToGetCreditBonus";
import BonusDifferenceComparison from "@/components/Platform/BonusProgramme/BonusDifferenceComparison";
import WhyTradeStonefortAndFinalCta from "@/components/Platform/BonusProgramme/WhyTradeStonefortAndFinalCta";
import GetStartedCta from "@/components/GetStartedCta";

export default function CashbackPage()  {
  return (
    <>
    <BonusProgrammeHero />
    <DepositBonusBenefits />
    <HowToGetCreditBonus />
    <BonusDifferenceComparison />
    <WhyTradeStonefortAndFinalCta />
    <GetStartedCta />
    </>
  );
}
