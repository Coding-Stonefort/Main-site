"use client";

import Image from "next/image";
import styles from "./CryptoFlipCards.module.css";

const cards = [
  {
    id: 1,
    title: "Security and Convenience",
    text: "Cryptocurrency CFDs allow you to speculate on price movements without owning or storing the digital asset itself. This means there is no need to manage wallets, safeguard private keys or handle on-chain transfers, making the process more straightforward for traders seeking market exposure.",
    icon: "/images/forexSpread.webp",
  },
  {
    id: 2,
    title: "Flexible Margin Trading",
    text: "Crypto CFDs can be traded on margin, enabling you to open positions using only a portion of the total value. While this provides flexibility, it also increases both potential gains and potential losses, so careful risk management remains essential.",
    icon: "/images/metalflipleverage.webp",
  },
  {
    id: 3,
    title: "Access to Broader Global Markets",
    text: "A CFD trading account offers more than just access to crypto markets. With Stonefort, you can also trade across a wide range of asset classes, including forex, indices, commodities and shares, allowing you to diversify your trading approach from a single platform.",
    icon: "/images/forexMt5.webp",
  },
];

export default function CryptoFlipCards() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 className={`title ${styles.heading}`}>
            Trading Crypto with <span className={styles.accent}>Stonefort</span>{" "}
            gives you:
          </h2>
        </header>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
              {/* FRONT */}
              <div className={styles.front} aria-hidden="true">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={220}
                  height={220}
                  className={styles.icon}
                />
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>

              {/* REVEAL */}
              <div className={styles.reveal}>
                <p className={`text ${styles.revealText}`}>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
