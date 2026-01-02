"use client";

import Image from "next/image";
import styles from "./WhyChooseStonefort.module.css";

const cards = [
  {
    id: "competitive-spreads",
    title: "Competitive Spreads",
    description:
      "Trade forex and gold with tight pricing designed to support active and cost-efficient trading strategies, across major and minor instruments.",
    image: "/images/mt5-spreads.webp",
  },
  {
    id: "fast-execution",
    title: "Fast and Reliable Execution",
    description:
      "Benefit from low-latency execution, strong fill quality, and a non-dealing desk trading environment built for speed and consistency.",
    image: "/images/mt5-execution.webp",
  },
  {
    id: "client-support",
    title: "Dedicated Client Support",
    description:
      "Access professional support during global trading hours, with extended availability to assist you across key market sessions.",
    image: "/images/mt5-support.webp",
  },
  {
    id: "global-brokerage",
    title: "Globally Trusted Brokerage",
    description:
      "Stonefort serves traders across multiple regions worldwide, delivering a regulated, secure, and professionally managed trading environment backed by robust infrastructure.",
    image: "/images/mt5-global.webp",
  },
];

export default function WhyMT5Stonefort() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        {/* ===== HEADER ===== */}
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>
            Why Choose <span className={styles.brand}>MT5</span> with{" "}
            <span className={styles.brand}>Stonefort?</span>
          </h2>

          <p className={`description ${styles.subtitle}`}>
            Trade with confidence on MetaTrader 5, supported by competitive
            pricing, fast execution, professional support, and a globally
            trusted brokerage infrastructure.
          </p>
        </header>

        {/* ===== GRID ===== */}
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <div className={styles.bg}>
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
