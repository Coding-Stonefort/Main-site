"use client";

import Image from "next/image";
import "../metals/MetalsGrid.css"; // using same CSS layout

const cards = [
  {
    id: "major-cryptocurrencies",
    title: "Major Cryptocurrencies",
    description:
      "Trade leading digital assets such as Bitcoin and Ethereum, available in multiple quote currencies including USD and other supported pairs.",
    image: "/images/cryptocurrencies.webp",
  },
  {
    id: "altcoins",
    title: "A Broad Selection of Popular Altcoins",
    description:
      "Access a diverse range of widely traded cryptocurrencies including Litecoin, Ripple, Polkadot, Dogecoin and more allowing traders to explore multiple segments of the crypto ecosystem.",
    image: "/images/AltCoins.webp",
  },
  {
    id: "crypto-indices",
    title: "Crypto Indices",
    description:
      "Stonefort offers selected crypto indices that track the performance of groups of cryptocurrencies, providing a broader market perspective through a single instrument.",
    image: "/images/cryptoindices.webp",
  },
  {
    id: "weekend-trading",
    title: "Weekend Trading",
    description:
      "Most cryptocurrency CFDs remain available around the clock, including weekends offering continuous access to global digital asset price movements.",
    image: "/images/weekendTrade.webp",
  },
];

export default function CryptoGrid() {
  return (
    <section className="markets-section">
      <div className="markets-header">
        <h2 className="markets-title">
          What Cryptocurrency CFDs Can You <br /> Trade with{" "}
          <span>Stonefort?</span>
        </h2>

        <p className="markets-subtitle">
          Explore major digital assets, popular altcoins, crypto indices and
          weekend trading opportunities — all through a single trading account.
        </p>
      </div>

      <div className="markets-inner">
        {cards.map((card) => (
          <article key={card.id} className="market-card">
            <div className="market-card-bg">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="market-card-img"
              />
            </div>

            <h3 className="market-card-title">{card.title}</h3>

            <div className="market-card-overlay">
              <div className="market-card-body">
                <p className="market-card-text">{card.description}</p>
              </div>
            </div>
          </article>
        ))}
        
      </div>

    </section>
  );
}
