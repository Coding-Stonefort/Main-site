"use client";

import Image from "next/image";
import styles from "./StockFlipCards.module.css";

const cards = [
  {
    id: 1,
    title: "Deep Liquidity Access",
    text: "Trade major global equities with strong liquidity and competitive pricing during market hours.",
    icon: "/images/forexSpread.webp",
  },
  {
    id: 2,
    title: "Real-Time Pricing",
    text: "Stay in control with fast-moving quotes and transparent execution for stock CFDs.",
    icon: "/images/forexleverage.webp",
  },
  {
    id: 3,
    title: "Risk Tools Built-In",
    text: "Use stop-loss, take-profit and alerts to manage exposure when markets move quickly.",
    icon: "/images/forexMt5.webp",
  },
];

export default function StockFlipCards() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.headingWrap}>
          <h2 className={`title ${styles.heading}`}>
            Trading with <span className={styles.accent}>Stonefort</span> gives
            you:
          </h2>
        </header>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
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
