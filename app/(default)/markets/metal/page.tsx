import MetalsHero from "@/components/metals/MetalsHero";
import MarketsLiveOverview from "@/components/market/MarketsLiveOverview";  
import WhyTradeCFDsMetals from "@/components/metals/WhyTradeCFDsMetals";
import MetalsFlipCards from "@/components/metals/MetalsFlipCards";
import MetalsCards from "@/components/metals/MetalsCards";


export default function metal() {
    return(
        <>
        <MetalsHero />
        <section id="metals-pairs">
            <MarketsLiveOverview />
        </section>
        <WhyTradeCFDsMetals />
        <MetalsFlipCards />
        <MetalsCards />
        </>
    )
}