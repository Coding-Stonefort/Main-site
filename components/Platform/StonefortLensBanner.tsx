"use client";

import styles from "./StonefortLensBanner.module.css";

export default function StonefortLensBanner() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.banner}>
          <h2 className={`heading ${styles.title}`}>
            See the Markets Through the <span>Stonefort Lens</span>
          </h2>

          <p className={`description ${styles.text}`}>
            Experience a more complete and intuitive way to trade with Stonefort’s
            advanced trading platforms. Access powerful charting, smart trade
            management, and integrated market insights designed to help you analyse
            opportunities and manage trades with greater clarity.
          </p>

          <p className={`description ${styles.textSecondary}`}>
            Leverage dynamic charts, advanced tools, and community-inspired market
            intelligence to refine your strategy and trade with confidence across
            global markets.
          </p>
        </div>
      </div>
    </section>
  );
}
