import MarketHero from "@/components/market/MarketHero";
import Cryptocurrency from "@/components/Cryptocurrency/cryptocurrency";
import MarketsLiveOverview from "@/components/market/MarketsLiveOverview";
import CryptoFlipCards from "@/components/Cryptocurrency/CryptoFlipCards";
import CryptoCards from "@/components/Cryptocurrency/CryptoCads";
import CryptoCatalog from "@/components/Cryptocurrency/CryptoCatalog"
import WhyTradeCrypto from "@/components/Cryptocurrency/WhyTradeCrypto";
import CryptoGrid from "@/components/Cryptocurrency/CryptoGrid";
import TrustedBrokerSection from "@/components/TrustedBrokerSection";
import RelatedPosts from "@/components/ChangelogRelatedPosts";
import ManagingCryptoRisk from "@/components/Cryptocurrency/ManagingRisk";
import Faqs, { type FAQItem } from "@/components/Faqs";
import GetStartedMetals from "@/components/metals/GetStartedMetals";



const marketFaqs: FAQItem[] = [
  {
    question: "What Is Cryptocurrency CFD Trading?",
    answer: `
      <p>
        Cryptocurrency CFD trading enables you to speculate on the price movements of digital
        assets such as Bitcoin or Ethereum without owning the underlying coins. You trade based
        on market direction, taking either long (buy) or short (sell) positions depending on your outlook.
      </p>
    `,
  },
  {
    question: "How Does CFD Trading Differ From Buying Cryptocurrency Directly?",
    answer: `
      <p>
        When you purchase cryptocurrency outright, you own the asset and must store it in a digital wallet,
        which requires safeguarding private keys and managing transfers.
      </p>
      <br />
      <p>
        With CFDs, no ownership is involved. Instead, you enter a contract to exchange the difference in
        price between when a position is opened and closed.
      </p>
      <br />
      <p>
        CFDs are typically traded on margin, allowing you to open positions using a portion of the total
        value. Margin trading increases both potential gains and potential losses. CFDs also allow you to
        take short positions if you anticipate a decline in the asset’s price.
      </p>
    `,
  },
  {
    question: "Do I Need a Crypto Wallet to Trade CFDs?",
    answer: `
      <p>
        No. Because CFD trading does not involve buying the underlying cryptocurrency, there is no requirement
        for a digital wallet.
      </p>
    `,
  },
  {
    question: "What Are Stonefort’s Cryptocurrency CFD Trading Hours?",
    answer: `
      <p>
        Crypto CFD markets operate continuously, with sessions beginning at 00:05 platform time rather than 00:01.
      </p>

      <h4 class="mt-4 mb-2 font-semibold text-slate-100">
        Cryptocurrency CFD Trading Hours (Platform Time)
      </h4>

      <table class="faq-table">
        <thead>
          <tr class="border-b border-slate-700">
            <th class="py-1 pr-2 text-left">Symbol / Security</th>
            <th class="py-1 px-2 text-left">Monday–Thursday</th>
            <th class="py-1 px-2 text-left">Friday</th>
            <th class="py-1 px-2 text-left">Saturday</th>
            <th class="py-1 px-2 text-left">Sunday</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">ADAUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">AAVUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">ARBUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">ATMUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">AVAXUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">BCHUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">BNBUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">BNKUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">BTCAUD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 11:00, 13:00 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">BTCEUR</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 11:00, 13:00 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">BTCGBP</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 11:00, 13:00 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">BTCUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">COMPUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Crypto10</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Crypto20</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Crypto30</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">DOGEUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">DOTUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">EOSUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">ETCUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">ETHAUD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 11:00, 13:00 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">ETHEUR</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 11:00, 13:00 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">ETHGBP</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 11:00, 13:00 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">ETHUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">FLOUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 11:00, 13:00 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">GLMRUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">JUPUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">KSMUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">LINKUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">LTCUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">MANUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">MATICUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">NERUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">ONDUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">PEPUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">SANUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">SHBUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">SOLUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">TRXUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">UNIUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">WIFUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">XLMUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">XRPUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
          <tr>
            <td class="py-1 pr-2">XTZUSD</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:55</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
            <td class="py-1 px-2">00:01 - 23:59</td>
          </tr>
        </tbody>
      </table>

      <p class="mt-4 text-[11px] md:text-xs text-slate-400">
        Trading hours may change during public holidays or due to market conditions. Please refer
        to your trading platform for the most up-to-date schedule.
      </p>
    `,
  },
  {
    question: "What Influences Cryptocurrency Prices?",
    answer: `
      <p>
        Cryptocurrency prices can be affected by multiple factors, including:
      </p>
      <br />
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>Supply dynamics:</strong> Assets like Bitcoin have fixed maximum supply limits.</li>
        <li><strong>Issuance or mining rates:</strong> Events such as halvings can influence market expectations.</li>
        <li><strong>Market sentiment:</strong> News, industry developments, social media activity and broader public interest can drive volatility.</li>
        <li><strong>Regulatory changes:</strong> Adjustments in government policy or taxation frameworks may impact demand.</li>
        <li><strong>Economic conditions:</strong> Inflation, interest rates and fiat currency strength can influence crypto flows.</li>
        <li><strong>Technological developments:</strong> Advancements or setbacks in blockchain applications may affect appeal.</li>
        <li><strong>Institutional adoption:</strong> Involvement from banks, funds or corporations can shift market liquidity.</li>
        <li><strong>Exchange liquidity:</strong> Lower-liquidity venues can experience sharper price fluctuations.</li>
      </ul>
    `,
  },
  {
    question: "Is Cryptocurrency CFD Trading Regulated?",
    answer: `
      <p>
        Cryptocurrency CFD trading offered by Stonefort falls under our SCA and FSC regulatory frameworks.
      </p>
      <br />
      <p>
        However, it is important to note that the underlying cryptocurrency markets themselves remain largely
        unregulated, and trading these instruments involves significant risk. Traders should ensure they fully
        understand how CFDs work and consider appropriate risk-management practices.
      </p>
    `,
  },
];


const cryptoCards = [
  {
    title: "Top Crypto Pairs",
    description: "Trade BTC, ETH, LTC and more with institutional-grade pricing.",
    imageSrc: "/icons/btc.png"
  },
  {
    title: "24/7 Trading",
    description: "Crypto markets never sleep — trade anytime.",
    imageSrc: "/icons/clock.png"
  },
  {
    title: "Deep Liquidity",
    description: "Fast order execution with minimal slippage.",
    imageSrc: "/icons/liquidity.png"
  },
];


export default function crypto() {
    return (
        <>
        <Cryptocurrency />
        <section id="crypto-pairs">
            <MarketsLiveOverview />
        </section>
        <CryptoFlipCards />
        <CryptoCards />
        <CryptoCatalog />
        <WhyTradeCrypto />
        <CryptoGrid />
        <TrustedBrokerSection />
        <ManagingCryptoRisk />

        <RelatedPosts />
        <Faqs 
            badgeLabel="Range of Markets FAQs"
            title="Crypto FAQs Understand the Markets Better "
            subtitle=""             
            items={marketFaqs}      
            initiallyOpenIndex={null}
        />
        
        <GetStartedMetals />
        </>
    )
}