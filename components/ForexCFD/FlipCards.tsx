"use client";
import styles from "./FlipCards.module.css";
import Image from "next/image";

export default function FlipCards() {
  const cards = [
    {
      id: 1,
      title: "Ultra-tight Spreads",
      text: "Ultra-tight spreads and lightning-fast execution for precision trading.",
      icon: "/images/forexSpread.webp",
    },
    {
      id: 2,
      title: "Up to 1:500 Leverage",
      text: "Leverage of up to 1:500, giving you enhanced flexibility and efficient capital usage.",
      icon: "/images/forexleverage.webp",
    },
    {
      id: 3,
      title: "MetaTrader 5",
      text: "Access powerful trading platforms, including MetaTrader 5, built for speed and advanced market analysis.",
      icon: "/images/forexMt5.webp",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.headingWrap}>
        <h2 className={styles.heading}>Trading with Stonefort gives you:</h2>
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
