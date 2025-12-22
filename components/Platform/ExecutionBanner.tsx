"use client";

import styles from "./ExecutionBanner.module.css";

export default function ExecutionBanner() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.banner} role="region" aria-label="Execution highlights">
          {/* Part 1 (main copy) */}
          <div className={styles.main}>
            <h3 className={`title ${styles.title}`}>
              Execution Designed to Support Better Trading Outcomes
            </h3>

            <p className={`text ${styles.text}`}>
              When market prices move in your favour during order processing, our
              execution model is designed to reflect the most favourable available
              price, helping you trade with greater efficiency.
            </p>
          </div>

          {/* Part 2 */}
          <div className={styles.card}>
            <div className={styles.value}>Up to 100%</div>
            <p className={styles.desc}>
              of supported trades are executed in under one second, delivering a
              smooth and responsive trading experience.
            </p>
            <p className={styles.note}>(Exclude MetaTrader)</p>
          </div>

          {/* Part 3 */}
          <div className={styles.card}>
            <div className={styles.value}>Under 30 ms</div>
            <p className={styles.desc}>
              Our trading infrastructure delivers an average execution speed under
              30 ms, supporting efficient trade placement across global markets.
            </p>
          </div>

          {/* Part 4 */}
          <div className={styles.card}>
            <div className={styles.value}>1.0 pip</div>
            <p className={styles.desc}>
              Trade major currency pairs such as EUR/USD with spreads starting from
              1.0 pip, depending on account type and market conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
