"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./MetaTraderWebHero.module.css";

export default function MT5Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={`title ${styles.title}`}>
            Getting Started with<br /> CFD Trading
          </h1>

          <p className={`text ${styles.subtitle}`}>
            Join Stonefort and explore the dynamic world of CFD trading with a trusted and reliable brokerage. Trade with competitive pricing, robust technology, and dedicated support designed to enhance your trading journey. Access educational resources, timely market insights, and professional customer assistance to support you at every stage of your trading experience. 
          </p>

          <div className={styles.ctaRow}>
            <Link href="/register" className={`button ${styles.primary}`}>
              Open an Account
            </Link>

            <Link href="/demo" className={`button ${styles.secondary}`}>
              Try Demo
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
<div className={styles.imageWrap}>
  <Image
    src="/images/CFDTradingimg.webp"
    alt="Trading illustration"
    width={800}
    height={800}
  />
  <span className={styles.fadeOverlay} />
</div>
        </div>
      </div>
    </section>
  );
}
