"use client";

import Image from "next/image";
import styles from "../ForexCFD/WhyTradeCFDsForex.module.css"; // using same CSS

export default function WhyTradeCFDsMetals() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* === Left content === */}
        <div className={styles.content}>
          <p className={styles.kicker}>Trade CFDs on global metals</p>

          <h1 className={styles.title}>
            Why Trade <span>CFDs on Metals?</span>
          </h1>

          <p className={styles.text}>
            Commodity CFDs offer an accessible way to participate in global
            commodity markets without owning or taking delivery of the underlying
            asset. As cash-settled instruments, they allow you to speculate on
            price movements based on market conditions.  
            <br /><br />
            CFDs are traded on margin, meaning you only need to commit a portion
            of the total position value. This provides flexibility but also
            increases both potential gains and potential losses—so careful risk
            management is essential. With the ability to trade long or short,
            you can take advantage of both rising and falling markets.
          </p>
        </div>

        {/* === Right image === */}
        <div className={styles.media}>
          <div className={styles.circle}>
            <Image
              src="/images/registerImg.webp" 
              alt="Why trade CFDs on Metals"
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
