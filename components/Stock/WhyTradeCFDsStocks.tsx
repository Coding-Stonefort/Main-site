"use client";

import Image from "next/image";
import styles from "./WhyTradeCFDsStocks.module.css";

export default function WhyTradeCFDsStocks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* === Left content === */}
        <div className={styles.content}>
          <p className={`badge ${styles.kicker}`}>Trade CFDs on global shares</p>

          <h2 className={`heading ${styles.heading}`}>
            Why Trade <span className={styles.accent}>CFDs on Stocks?</span>
          </h2>

          <p className="text">
            Stock CFDs let you speculate on the price movement of leading companies without owning
            the underlying shares. You can go long or short, react quickly to earnings and global
            news, and access a wide range of markets through one trading account — with leverage
            and efficient execution.
          </p>
        </div>

        {/* === Right image === */}
        <div className={styles.media}>
          <div className={styles.circle}>
            <Image
              src="/images/whystock.webp"
              alt="Why trade CFDs on Stocks"
              fill
              priority
              className={styles.image}
              sizes="(min-width: 1024px) 520px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
