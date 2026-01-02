// components/market/StockHero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./StockHero.module.css";

export default function StocksHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT (TEXT) */}
        <div className={styles.left}>
          <h1 className="heading">
            Stock Trading with <br />
            <span className={styles.accent}>Stonefort</span>
          </h1>

          <p className="text">
            Trade leading global stocks via CFDs on the MT5 platform with
            Stonefort’s advanced trading tools, competitive spreads, and
            real-time market insights.
          </p>

          <ul className={styles.metaRow}>
            <li>
              <span className={styles.metaIcon} aria-hidden="true">
                ✓
              </span>
              No Ownership Hassle
            </li>
            <li>
              <span className={styles.metaIcon} aria-hidden="true">
                ✓
              </span>
              Low Spreads on US Stocks
            </li>
            <li>
              <span className={styles.metaIcon} aria-hidden="true">
                ✓
              </span>
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

        {/* RIGHT (IMAGE) */}
        <div className={styles.right} aria-hidden="true">
          <Image
            src="/images/stockHero.webp"
            alt="Stock Hero"
            fill
            priority
            className={styles.image}
            sizes="(min-width: 1024px) 520px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
