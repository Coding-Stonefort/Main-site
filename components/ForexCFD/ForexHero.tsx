"use client";

import Link from "next/link";
import styles from "./ForexHero.module.css";

export default function ForexHero() {
  return (
    <section className={`section ${styles.hero}`}>
      {/* Right background image */}
      <div className={styles.bg} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={`title ${styles.title}`}>
            Forex Trading with <br /> Stonefort
          </h1>

          <p className={`text ${styles.subtitle}`}>
            Trade FX CFDs on 90+ currency pairs with spreads starting from 0.4
            pips. Elevate your trading with our advanced, high-performance
            platforms and experience the world’s largest financial market with
            competitive pricing and fast execution on 60+ major, minor, and
            exotic pairs.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/register" className={`button ${styles.primary}`}>
              Open an Account
            </Link>

            <Link href="/demo" className={`button ${styles.secondary}`}>
              Trade Now
            </Link>
          </div>
        </div>

        {/* RIGHT spacer for layout symmetry */}
        <div className={styles.right} />
      </div>
    </section>
  );
}
