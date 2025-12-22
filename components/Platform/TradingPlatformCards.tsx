"use client";

import Image from "next/image";
import styles from "./TradingPlatformCards.module.css";

const cards = [
  {
    title: "Fast & Reliable Execution",
    text:
      "Trade on a robust, automated infrastructure designed for speed, stability, and consistent performance across global markets.",
    image: "/images/forexEcecutin.png",
  },
  {
    title: "Transparent Pricing",
    text:
      "View bid and ask prices clearly before placing a trade, helping you understand market conditions and trading costs with confidence.",
    image: "/images/liquidity.png",
  },
  {
    title: "Advanced Charting & Analysis",
    text:
      "Analyse price movements using a wide range of technical indicators, drawing tools, and timeframes available across our trading platforms.",
    image: "/images/forexStrategies.png",
  },
  {
    title: "Market Insights & Trading Signals",
    text:
      "Identify market trends using integrated analytical tools, pattern recognition, and sentiment indicators to support informed decision-making.",
    image: "/images/tradingtools.webp",
  },
  {
    title: "Trusted Market News & Updates",
    text:
      "Stay informed with real-time market updates and professional insights directly within the trading environment.",
    image: "/images/metalsTrusted.png",
  },
  {
    title: "Trade Anytime, Anywhere",
    text:
      "Access global markets on the go with the Stonefort Trader mobile app – open, manage, and monitor trades wherever you are.",
    image: "/images/latency.png",
  },
  {
    title: "Built for Trader Confidence",
    text:
      "Every platform feature is designed with transparency, control, and performance in mind to help traders operate with confidence.",
    image: "/images/forexpair.png",
  },
];

export default function TradingPlatformCards() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Header */}
        <header className={styles.header}>
          <h2 className="title">
            Trading Platforms That{" "}
            <span className={styles.brand}>Inspire Confidence</span>
          </h2>
        </header>

        {/* Cards */}
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              {/* Image */}
              <div className={styles.iconWrap}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={56}
                  height={56}
                  priority={index < 4}
                />
              </div>

              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
