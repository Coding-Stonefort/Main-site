"use client";

import Image from "next/image";
import styles from "./CryptoGrid.module.css";

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
    <section className={`section ${styles.section}`}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>
            What Cryptocurrency CFDs Can You  Trade with{" "}
            <span className={styles.brand}>Stonefort?</span>
          </h2>

          <p className={`description ${styles.subtitle}`}>
            Explore major digital assets, popular altcoins, crypto indices and
            weekend trading opportunities — all through a single trading account.
          </p>
        </header>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <div className={styles.bg} aria-hidden="true">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={styles.img}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <h3 className={styles.cardTitle}>{card.title}</h3>

              <div className={styles.overlay}>
                <div className={styles.body}>
                  <p className={styles.text}>{card.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
