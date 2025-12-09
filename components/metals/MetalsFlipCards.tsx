"use client";
import styles from "../ForexCFD/FlipCards.module.css";
import Image from "next/image";

export default function MetalsFlipCards() {
  const cards = [
    {
      id: 1,
      title: "Ultra-tight Spread",
      text: "Ultra-tight spreads and efficient execution designed to support smoother trading.",
      icon: "/images/forexSpread.webp",
    },
    {
      id: 2,
      title: "Up to 1:1000 Leverage",
      text: "Flexible leverage options up to 1:1000, allowing you to manage positions with greater adaptability. ",
      icon: "/images/metalflipleverage.webp",
    },
    {
      id: 3,
      title: "MetaTrader 5",
      text: "Access to advanced platforms, including MetaTrader 5 and the Stonefort Trader App, for a seamless and intuitive trading experience. ",
      icon: "/images/forexMt5.webp",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.headingWrap}>
        <h2 className={styles.heading}>Trading with <span>Stonefort</span> gives you:</h2>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            {/* Default visible content */}
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

            {/* Text revealed on hover */}
            <div className={styles.reveal}>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
