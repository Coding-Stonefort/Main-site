import styles from "./WaysToTrade.module.css";

type TradeCard = {
  title: string;
  description: string[];
};

const cards: TradeCard[] = [
  {
    title: "CFD Standard Account",
    description: [
      "Gain exposure to global markets with a simple, all-inclusive pricing model.",
      "Spreads include trading costs, with no separate commission, making it ideal for traders who prefer straightforward pricing. Overnight funding applies where relevant.",
    ],
  },
  {
    title: "CFD Razor Account",
    description: [
      "Designed for active and professional traders seeking raw market pricing.",
      "Trade with tight spreads starting from 0.0 pips on FX, combined with transparent, fixed commissions per lot, delivering greater cost control and execution efficiency.",
    ],
  },
];

export default function WaysToTrade() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>Ways to Trade with <span className={styles.accent}>Stonefort</span></h2>
          <p className={`text ${styles.subtitle}`}>
            Choose the account style that matches your pricing preference and trading pace.
          </p>
        </header>

        <div className={styles.grid}>
          {cards.map((c) => (
            <article key={c.title} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <span className={styles.pill} aria-hidden="true" />
              </div>

              <div className={styles.cardBody}>
                {c.description.map((p, idx) => (
                  <p key={idx} className={`text ${styles.cardText}`}>
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
