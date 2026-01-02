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
            Trading Made <br /> Simple
          </h1>

          <p className={`text ${styles.subtitle}`}>
Stonefort Web Trader offers an intuitive, all-in-one trading experience for traders at every level. Access real-time market data, advanced charting tools, and secure trade execution from anywhere, at any time. With a user-friendly interface and reliable support, managing your trades across global markets is simple and efficient. 
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
            src="/images/Terminalmt501.webp"
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
