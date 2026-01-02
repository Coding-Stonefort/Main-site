"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./MT5Hero.module.css";

export default function MT5Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={`title ${styles.title}`}>
            MetaTrader&nbsp;5 <br /> Trading Platform
          </h1>

          <p className={`text ${styles.subtitle}`}>
            Trade global markets with MetaTrader 5 on Stonefort. Access advanced
            charting tools, automated trading with Expert Advisors, and fast,
            reliable execution across forex, indices, commodities, and CFDs
            all from one powerful multi-asset platform.
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
          <Image
            src="/images/mt5Hero.webp"
            alt="MetaTrader 5 trading platform"
            width={900}
            height={700}
            priority
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
