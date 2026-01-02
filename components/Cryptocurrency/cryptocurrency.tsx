"use client";

import Link from "next/link";
import styles from "./cryptocurrency.module.css";

export default function Cryptocurrency() {
  return (
    <section className={`${styles.hero} section`}>
      {/* Background */}
      <div className={styles.bg} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <div className={styles.left}>
          <h1 className={`${styles.title} heading`}>
            Cryptocurrency Trading with <br /><span className={styles.accent}> Stonefort</span>
          </h1>

          <p className={`${styles.subtitle} text`}>
            Access some of the most widely traded cryptocurrencies through
            Stonefort’s margin trading environment. Trade price movements in
            global crypto markets without the need for a digital wallet,
            allowing you to participate with added convenience while benefiting
            from a regulated and secure trading framework.
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

        {/* keep the right column for spacing / future image layering */}
        <div className={styles.right} />
      </div>
    </section>
  );
}
