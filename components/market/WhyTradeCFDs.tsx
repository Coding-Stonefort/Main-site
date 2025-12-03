"use client";
import styles from "./WhyTradeCFDs.module.css";

export default function WhyTradeCFDs() {
  const cards = [
    {
      id: 1,
      lead: "Trade with leverage",
      text: "to keep entry costs low while increasing the potential for profit, understanding that losses can also be magnified.",
    },
    {
      id: 2,
      lead: "Go long or short",
      text: "to take advantage of both rising and falling market conditions.",
    },
    {
      id: 3,
      lead: "Access thousands of markets",
      text: "through a single trading account.",
    },
    {
      id: 4,
      lead: "Trade beyond standard market hours",
      text: "with select instruments available around the clock.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <h2 className={styles.title}>Why trade global markets using CFDs?</h2>
          <p className={styles.subtitle}>
            CFDs are derivative instruments that mirror the price movement of
            underlying markets such as forex, indices, shares and commodities.
            They allow traders to access global opportunities efficiently
            without owning the actual asset.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <p className={styles.cardText}>
                <span className={styles.cardLead}>{card.lead}</span> {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
