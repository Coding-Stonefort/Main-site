"use client";

import styles from "./StockFlipCards.module.css";
import Image from "next/image";

export default function StockFlipCards() {
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
      icon:  "/images/forexMt5.webp",
    },
  ];

  return (
    <section className={styles.wrapper}>
  <div className="container">
    <div className={styles.headingWrap}>
      <h2 className={styles.heading}>
        Trading with <span>Stonefort</span> gives you:
      </h2>
    </div>

    <div className={styles.grid}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.front}>
            <Image
              src={card.icon}
              alt={card.title}
              width={220}
              height={220}
              className={styles.icon}
            />
            <h3 className={styles.title}>{card.title}</h3>
          </div>

          <div className={styles.reveal}>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
