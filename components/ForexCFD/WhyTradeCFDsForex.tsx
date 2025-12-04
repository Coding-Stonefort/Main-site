// components/why-trade-cfds/WhyTradeCFDsForex.tsx
"use client";

import Image from "next/image";
import styles from "./WhyTradeCFDsForex.module.css";

export default function WhyTradeCFDsForex() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* === Left content === */}
        <div className={styles.content}>
          <p className={styles.kicker}>Trade CFDs on global currencies</p>

          <h1 className={styles.title}>
            Why Trade <span>CFDs on Forex?</span>
          </h1>

          <p className={styles.text}>
            The forex market is the world’s largest and most liquid, with
            average daily turnover reaching approximately US $9.6 trillion. By
            trading CFDs on forex, you can capitalise on price movements in
            global currencies around the clock, five days a week.
          </p>
        </div>

        {/* === Right image === */}
        <div className={styles.media}>
          <div className={styles.circle}>
            <Image
              src="/images/Trade-CFDs-img.webp"
              alt="Why trade CFDs on Forex"
              fill
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
