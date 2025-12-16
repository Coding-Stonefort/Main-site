"use client";

import Link from "next/link";
import styles from "./StockHero.module.css";

export default function StocksHero() {
  return (
    <section className={styles.hero}>
      {/* Optional: background image on right (same behavior as Forex)
          If you don’t want an image, remove this div + CSS .bg */}
      <div className={styles.bg} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className="heading">
            Stock Trading with <br /> Stonefort
          </h1>

          <p className="text">
            Trade leading global stocks via CFDs on the MT5 platform with Stonefort’s advanced trading tools, competitive spreads, and real-time market insights. 
          </p>

          {/* metas below paragraph */}
          <ul className={styles.metaRow}>
            <li>
              <span className={styles.metaIcon} aria-hidden="true">✓</span>
              No Ownership Hassle
            </li>
            <li>
              <span className={styles.metaIcon} aria-hidden="true">✓</span>
              Low Spreads on US Stocks
            </li>
            <li>
              <span className={styles.metaIcon} aria-hidden="true">✓</span>
              Zero Commission
            </li>
          </ul>

          <div className={styles.ctaRow}>
            <Link href="/register" className="button">
              Open an Account
            </Link>
            <Link href="/stocks" className="button">
              Trade Now
            </Link>
          </div>
        </div>

        {/* RIGHT (keeps Forex spacing) */}
        <div className={styles.right} />
      </div>
    </section>
  );
}
