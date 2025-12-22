"use client";

import Image from "next/image";
import styles from "./WhyTradeCFDsMetals.module.css";

export default function WhyTradeCFDsMetals() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.content}>
          <p className={styles.kicker}>Trade CFDs on global metals</p>

          <h1 className={`title ${styles.title}`}>
            Why Trade <span className={styles.accent}>CFDs on Metals?</span>
          </h1>

          <p className={`text ${styles.text}`}>
            Commodity CFDs offer an accessible way to participate in global commodity markets without owning or taking delivery of the underlying asset. As cash-settled instruments, they allow you to speculate on price movements based on market conditions.
          </p>
          <p className={`text ${styles.text}`}>
            CFDs are traded on margin, meaning you only need to commit a portion of the total position value. This provides flexibility but also increases both potential gains and potential losses—so careful risk management is essential. With the ability to trade long or short, you can take advantage of both rising and falling markets.
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
