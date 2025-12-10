"use client";
import styles from "./CryptoFlipCards.module.css"; 
import Image from "next/image";

export default function CryptoFlipCards() {
  const cards = [
    {
      id: 1,
      title: "Security and Convenience ",
      text: "Cryptocurrency CFDs allow you to speculate on price movements without owning or storing the digital asset itself. This means there is no need to manage wallets, safeguard private keys or handle on-chain transfers, making the process more straightforward for traders seeking market exposure. ",
      icon: "/images/forexSpread.webp",
    },
    {
      id: 2,
      title: "Flexible Margin Trading ",
      text: "Crypto CFDs can be traded on margin, enabling you to open positions using only a portion of the total value. While this provides flexibility, it also increases both potential gains and potential losses, so careful risk management remains essential. ",
      icon: "/images/metalflipleverage.webp",
    },
    {
      id: 3,
      title: "Access to Broader Global Markets ",
      text: "A CFD trading account offers more than just access to crypto markets. With Stonefort, you can also trade across a wide range of asset classes, including forex, indices, commodities and shares, allowing you to diversify your trading approach from a single platform. ",
      icon: "/images/forexMt5.webp",
    },
  ];

  return (
    <section className={styles.cryptoWrapper}>
      <div className={styles.cryptoHeadingWrap}>
        <h2 className={styles.cryptoHeading}>
          Trading Crypto with <span>Stonefort</span> gives you:
        </h2>
      </div>

      <div className={styles.cryptoGrid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.cryptoCard}>
            {/* Visible front side */}
            <div className={styles.cryptoFront}>
              <Image
                src={card.icon}
                alt={card.title}
                width={220}
                height={220}
                className={styles.cryptoIcon}
              />
              <h3 className={styles.cryptoTitle}>{card.title}</h3>
            </div>

            {/* Reveal text on hover */}
            <div className={styles.cryptoReveal}>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
