"use client";

import Image from "next/image";
import styles from "./PlatformHero.module.css";

export default function PlatformHero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        {/* Text */}
        <div className={styles.content}>
          <h1 className="heading">
            Trading Platforms with <span className={styles.brand}>Stonefort</span>
          </h1>

          <p className="description">
            Trade from our intuitive web terminal and responsive Stonefort Trader
            app to the globally trusted MetaTrader 5 platform, choose from a suite
            of trading solutions designed to elevate your trading experience
            across global markets.
          </p>
        </div>

        {/* Image */}
        <div className={styles.imageWrap}>
          <Image
            src="/images/platform-hero.webp"
            alt="Stonefort Trading Platforms"
            width={980}
            height={620}
            priority
            className={styles.image}
          />
        </div>

        {/* META BAR */}
        <div className={styles.metaBar}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Pip</span>
            <span className={styles.metaValue}>From 0.0</span>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Leverage</span>
            <span className={styles.metaValue}>Up to 1:500</span>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Instruments</span>
            <span className={styles.metaValue}>500+</span>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Execution</span>
            <span className={styles.metaValue}>&lt; 50ms</span>
          </div>

          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Support</span>
            <span className={styles.metaValue}>24/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
