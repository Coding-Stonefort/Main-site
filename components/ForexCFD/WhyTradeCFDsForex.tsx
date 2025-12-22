"use client";

import Image from "next/image";
import styles from "./WhyTradeCFDsForex.module.css";

export default function WhyTradeCFDsForex() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.content}>
          <p className={styles.kicker}>Trade CFDs on global currencies</p>

          <h1 className={`title ${styles.title}`}>
            Why Trade <span className={styles.accent}>CFDs on Forex?</span>
          </h1>

          <p className={`text ${styles.text}`}>
            The forex market is the world’s largest and most liquid, with
            average daily turnover reaching approximately US $9.6 trillion. By
            trading CFDs on forex, you can capitalise on price movements in
            global currencies around the clock, five days a week.
          </p>
        </div>

        {/* Right */}
        <div className={styles.media}>
          <div className={styles.circle}>
            <Image
              src="/images/Trade-CFDs-img.webp"
              alt="Why trade CFDs on Forex"
              fill
              priority
              className={styles.heroImage}
              sizes="(max-width: 768px) 260px, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
