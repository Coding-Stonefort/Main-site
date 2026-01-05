"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Performanceimprovement.module.css";

export default function Performanceimprovement() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.kicker}>Next Section</span>

          <h2 className={styles.heading}>
            Explore your potential for improvement with Performance Analytics
          </h2>

          <p className={`text ${styles.subtitle}`}>
            Emotions and behavioural biases play a powerful role in trading, often
            impacting performance more than traders realise.
          </p>

          <p className={`text ${styles.subtitle2}`}>
            With realistic goal setting, live discipline tracking, and deep
            psychological insights, Performance Analytics acts as your digital
            trading mentor, equipping you with the tools to trade with greater
            discipline, clarity, and skill.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/register" className={`button ${styles.primary}`}>
              Open an Account
            </Link>

            <Link href="/trade" className={`button ${styles.secondary}`}>
              Trade Now
            </Link>
          </div>
        </div>

        {/* RIGHT MOCKUP */}
        <div className={styles.right}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/CFDTradingimg.webp"
              alt="Performance Analytics mockup"
              width={900}
              height={760}
              className={styles.heroImage}
              priority
            />
            <span className={styles.fadeOverlay} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
