import MetalsHero from "@/components/metals/MetalsHero";
import MarketsLiveOverview from "@/components/market/MarketsLiveOverview";  
import WhyTradeCFDsMetals from "@/components/metals/WhyTradeCFDsMetals";
import MetalsFlipCards from "@/components/metals/MetalsFlipCards";
import MetalsCards from "@/components/metals/MetalsCards";
import HowMetalsWorks from "@/components/metals/HowMetalsWorks";
import WhyTradeMetals from "@/components/metals/WhyTradeMetals"
import MetalsGrid from "@/components/metals/MetalsGrid"
import Faqs, { type FAQItem } from "@/components/Faqs";


import GetStartedMetals from "@/components/metals/GetStartedMetals";


 const marketFaqs: FAQItem[] = [
  {
    question: "What Are Commodities?",
    answer: `
      <p>
        Commodities are raw materials that support global production, transportation and manufacturing.
        They include metals such as gold, silver, copper and nickel, energy products like oil and
        natural gas, and agricultural goods such as wheat, cotton, coffee, cocoa and livestock.
      </p>
      <br />
      <p>
        These assets form the foundation of many industries and play a significant role in shaping
        economic activity worldwide.
      </p>
    `,
  },
  {
    question: "Why Do People Trade Commodities?",
    answer: `
      <p>
        Commodity trading originally developed as a way for producers and consumers to manage price
        risk on the goods they depended on. Over time, the market has expanded to include individual
        and institutional traders who take positions based on expectations of future price movements.
      </p>
      <br />
      <p>
        Traders may buy or sell commodities depending on whether they anticipate prices to rise or fall,
        using these markets to diversify their portfolios or respond to global economic events.
      </p>
    `,
  },
  {
    question: "What Affects Commodity Prices?",
    answer: `
      <p>
        Commodity prices are influenced by a wide range of factors because of their close connection
        to global economic and geopolitical conditions. Key influences include:
      </p>
      <br />
      <ul class="list-disc pl-5 space-y-1">
        <li>
          <strong>Supply and demand changes:</strong> Poor harvests, supply shortages or production cuts
          can reduce availability and push prices higher.
        </li>
        <li>
          <strong>Geopolitical developments:</strong> Conflicts or trade disruptions can affect
          supply chains, especially for energy and metals.
        </li>
        <li>
          <strong>Industry demand:</strong> Growing demand in sectors like technology, construction or
          manufacturing can increase the need for certain raw materials.
        </li>
        <li>
          <strong>Economic uncertainty:</strong> During periods of market stress, investors often turn
          to assets such as gold, which is traditionally viewed as a store of value.
        </li>
      </ul>
    `,
  },
  {
    question: "Commodity Trading Hours",
    answer: `
      <p>Below are the typical trading hours for commodity CFDs (server time):</p>

      <!-- METALS -->
      <h4 class="mt-4 mb-2 font-semibold text-slate-100">Metals</h4>
      <table class="faq-table">

        <thead>
          <tr class="border-b border-slate-700">
            <th class="py-1 pr-2 text-left">Symbol</th>
            <th class="py-1 px-2 text-left">Monday</th>
            <th class="py-1 px-2 text-left">Tuesday–Thursday</th>
            <th class="py-1 px-2 text-left">Friday</th>
            <th class="py-1 px-2 text-left">Saturday</th>
            <th class="py-1 px-2 text-left">Sunday</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Metals</td>
            <td class="py-1 px-2">01:01 - 23:59</td>
            <td class="py-1 px-2">01:01 - 23:59</td>
            <td class="py-1 px-2">01:01 - 23:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">XAGSGD</td>
            <td class="py-1 px-2">01:01 - 18:59</td>
            <td class="py-1 px-2">01:01 - 18:59</td>
            <td class="py-1 px-2">01:00 - 18:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">XAUCNH</td>
            <td class="py-1 px-2">01:01 - 18:59</td>
            <td class="py-1 px-2">01:01 - 18:59</td>
            <td class="py-1 px-2">01:00 - 18:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">XAUSGD</td>
            <td class="py-1 px-2">01:01 - 18:59</td>
            <td class="py-1 px-2">01:01 - 18:59</td>
            <td class="py-1 px-2">01:00 - 18:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr>
            <td class="py-1 pr-2">XAUTHB</td>
            <td class="py-1 px-2">01:01 - 18:59</td>
            <td class="py-1 px-2">01:01 - 18:59</td>
            <td class="py-1 px-2">01:00 - 18:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
        </tbody>
      </table>

      <!-- ENERGIES -->
      <h4 class="mt-4 mb-2 font-semibold text-slate-100">Energies </h4>
      <table class="faq-table">
        <thead>
          <tr class="border-b border-slate-700">
            <th class="py-1 pr-2 text-left">Symbol</th>
            <th class="py-1 px-2 text-left">Monday</th>
            <th class="py-1 px-2 text-left">Tuesday–Thursday</th>
            <th class="py-1 px-2 text-left">Friday</th>
            <th class="py-1 px-2 text-left">Saturday</th>
            <th class="py-1 px-2 text-left">Sunday</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Energies</td>
            <td class="py-1 px-2">01:00 - 23:59</td>
            <td class="py-1 px-2">01:00 - 23:59</td>
            <td class="py-1 px-2">01:00 - 23:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr>
            <td class="py-1 pr-2">Spot Brent</td>
            <td class="py-1 px-2">01:00 - 23:59</td>
            <td class="py-1 px-2">03:00 - 23:59</td>
            <td class="py-1 px-2">03:00 - 23:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
        </tbody>
      </table>

      <!-- SOFT COMMODITIES -->
      <h4 class="mt-4 mb-2 font-semibold text-slate-100">SOFT COMMODITIES</h4>
      <table class="faq-table">
        <thead>
          <tr class="border-b border-slate-700">
            <th class="py-1 pr-2 text-left">Symbol / Security</th>
            <th class="py-1 px-2 text-left">Monday</th>
            <th class="py-1 px-2 text-left">Tuesday–Thursday</th>
            <th class="py-1 px-2 text-left">Friday</th>
            <th class="py-1 px-2 text-left">Saturday</th>
            <th class="py-1 px-2 text-left">Sunday</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Cattle</td>
            <td class="py-1 px-2">16:30 - 21:04</td>
            <td class="py-1 px-2">16:30 - 21:04</td>
            <td class="py-1 px-2">16:30 - 21:00</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Cocoa</td>
            <td class="py-1 px-2">11:45 - 20:29</td>
            <td class="py-1 px-2">11:45 - 20:29</td>
            <td class="py-1 px-2">11:45 - 20:25</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Coffee</td>
            <td class="py-1 px-2">11:15 - 20:29</td>
            <td class="py-1 px-2">11:15 - 20:29</td>
            <td class="py-1 px-2">11:15 - 20:25</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Cotton</td>
            <td class="py-1 px-2">04:00 - 21:19</td>
            <td class="py-1 px-2">04:00 - 21:19</td>
            <td class="py-1 px-2">04:00 - 21:15</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">LeanHogs</td>
            <td class="py-1 px-2">16:30 - 21:04</td>
            <td class="py-1 px-2">16:30 - 21:04</td>
            <td class="py-1 px-2">16:30 - 21:00</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">LDSugar</td>
            <td class="py-1 px-2">10:45 - 19:54</td>
            <td class="py-1 px-2">10:45 - 19:54</td>
            <td class="py-1 px-2">10:45 - 19:50</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Sugar</td>
            <td class="py-1 px-2">10:30 - 19:59</td>
            <td class="py-1 px-2">10:30 - 19:59</td>
            <td class="py-1 px-2">10:30 - 19:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Corn</td>
            <td class="py-1 px-2">03:00 - 15:45, 16:30 - 21:19</td>
            <td class="py-1 px-2">03:00 - 15:45, 16:30 - 21:19</td>
            <td class="py-1 px-2">03:00 - 15:45, 16:30 - 21:15</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Soybeans</td>
            <td class="py-1 px-2">03:00 - 15:45, 16:30 - 21:19</td>
            <td class="py-1 px-2">03:00 - 15:45, 16:30 - 21:19</td>
            <td class="py-1 px-2">03:00 - 15:45, 16:30 - 21:15</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr>
            <td class="py-1 pr-2">Wheat</td>
            <td class="py-1 px-2">03:00 - 15:45, 16:30 - 21:19</td>
            <td class="py-1 px-2">03:00 - 15:45, 16:30 - 21:19</td>
            <td class="py-1 px-2">03:00 - 15:45, 16:30 - 21:15</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
        </tbody>
      </table>

      <!-- HARD COMMODITIES -->
    <h4 class="mt-4 mb-2 font-semibold text-slate-100">Metals</h4>
      <table class="faq-table">
        <thead>
          <tr class="border-b border-slate-700">
            <th class="py-1 pr-2 text-left">Symbol / Security</th>
            <th class="py-1 px-2 text-left">Monday</th>
            <th class="py-1 px-2 text-left">Tuesday–Thursday</th>
            <th class="py-1 px-2 text-left">Friday</th>
            <th class="py-1 px-2 text-left">Saturday</th>
            <th class="py-1 px-2 text-left">Sunday</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Copper</td>
            <td class="py-1 px-2">01:01 - 23:59</td>
            <td class="py-1 px-2">01:01 - 23:59</td>
            <td class="py-1 px-2">01:01 - 23:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Aluminium</td>
            <td class="py-1 px-2">03:01 - 20:59</td>
            <td class="py-1 px-2">03:01 - 20:59</td>
            <td class="py-1 px-2">03:01 - 20:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Nickel</td>
            <td class="py-1 px-2">03:01 - 20:59</td>
            <td class="py-1 px-2">03:01 - 20:59</td>
            <td class="py-1 px-2">03:01 - 20:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr class="border-b border-slate-800">
            <td class="py-1 pr-2">Lead</td>
            <td class="py-1 px-2">03:01 - 20:59</td>
            <td class="py-1 px-2">03:01 - 20:59</td>
            <td class="py-1 px-2">03:01 - 20:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
          </tr>
          <tr>
            <td class="py-1 pr-2">Zinc</td>
            <td class="py-1 px-2">03:01 - 20:59</td>
            <td class="py-1 px-2">03:01 - 20:59</td>
            <td class="py-1 px-2">03:01 - 20:55</td>
            <td class="py-1 px-2">Closed</td>
            <td class="py-1 px-2">Closed</td>
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
    question: "What Is a Forward Contract?",
    answer: `
      <p>
        A forward contract is a privately negotiated agreement between two parties to buy or sell an
        asset at a specific price on a future date. Because forwards are traded over the counter
        rather than on an exchange, they can be tailored to suit the needs of the participants.
      </p>
      <br />
      <p>
        This includes flexibility in asset type, contract size, settlement terms and expiry dates.
        Unlike standardised futures contracts, forwards do not trade on a centralised exchange,
        allowing for greater customisation but also introducing counterparty risk, since settlement
        depends on the parties involved.
      </p>
    `,
  },
  {
    question: "What’s the Difference Between Forwards and Futures?",
    answer: `
      <h4 class="font-semibold mb-2">Forwards</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Traded over the counter (OTC) directly between two parties.</li>
        <li>Fully customisable, with terms such as quantity, price and settlement date agreed privately.</li>
        <li>Not standardised and not cleared through an exchange.</li>
      </ul>

      <h4 class="font-semibold mb-2">Futures</h4>
      <ul class="list-disc pl-5 space-y-1">
        <li>Traded on organised exchanges like CME or Eurex.</li>
        <li>Standardised contract terms defined by the exchange.</li>
        <li>Supported by clearing houses, which help reduce counterparty risk.</li>
      </ul>
    `,
  },
];


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
        <HowMetalsWorks />
        <WhyTradeMetals />
        <MetalsGrid />
        <Faqs
            badgeLabel="Range of Markets FAQs"
            title="Commodity CFDs FAQs – Understand the Markets Better"
            subtitle=""
            items={marketFaqs}
            initiallyOpenIndex={null}
            />
            <GetStartedMetals />
        </>
    )
}