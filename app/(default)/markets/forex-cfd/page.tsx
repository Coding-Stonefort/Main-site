import ForexHero from "@/components/ForexCFD/ForexHero";
import TradingViewMarketOverview from "@/components/ForexCFD/TradingViewMarketOverview";
import ForexCards from "@/components/ForexCFD/ForexCards";
import RelatedPosts from "@/components/ChangelogRelatedPosts";
import FAQs from "@/components/ForexCFD/FAQ";


export default function ForexCfdPage() {
  return (
    <>
        <ForexHero />
        <ForexCards />
        <TradingViewMarketOverview />
              <RelatedPosts
        title="Learn more about Forex & CFDs"
        limit={3}
         tag="forex" 
      />
      <FAQs />


    </>
  );
}
