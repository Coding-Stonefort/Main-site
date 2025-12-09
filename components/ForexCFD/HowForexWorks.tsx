"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import asImg from "@/public/images/howforexwork.webp";
import styles from "./HowForexWorks.module.css";

/* ---------------- ROLLING NUMBER (20–30 steps) ---------------- */

const RollingNumber = ({
  initial,
  minStep = 20, // small increments
  maxStep = 30,
  activeMs = 2600,
  pauseMs = 1500,
}: {
  initial: number;
  minStep?: number;
  maxStep?: number;
  activeMs?: number;
  pauseMs?: number;
}) => {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const randStep = () =>
      Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;

    const startPhase = () => {
      intervalId = setInterval(() => {
        setValue((prev) => prev + randStep());
      }, 180);

      timeoutId = setTimeout(() => {
        if (intervalId) clearInterval(intervalId);

        timeoutId = setTimeout(() => {
          startPhase();
        }, pauseMs);
      }, activeMs);
    };

    startPhase();

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return <span>{value.toLocaleString()}</span>;
};

/* ---------------- MAIN SECTION ---------------- */

export default function HowForexWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span>How</span> Forex Trading <span>Works</span> with{" "}
            <span>Stonefort</span>
          </h2>

          <p className={styles.text}>
            Forex trading involves exchanging one currency for another, allowing
            you to speculate on market movements.
          </p>
          <p className={styles.text}>
            You can start small and scale as you grow using leverage.
          </p>
          <p className={styles.text}>
            At Stonefort, leverage goes up to{" "}
            <span className={styles.highlight}>1:500</span>, giving you greater
            market exposure.
          </p>
        </div>

        {/* RIGHT SIDE : IMAGE + THREE GLASS CARDS */}
        <div className={styles.imageWrapper}>
          <Image
            src={asImg}
            alt="Forex platform"
            className={styles.image}
            fill
            priority
          />

          {/* ===== ASSETS CARD ===== */}
          <div className={`${styles.statCard} ${styles.card1}`}>
            <div className={styles.statTopRow}>
              <span className={styles.statLabel}>Assets</span>
            </div>
            <div className={styles.statMain}>
              <span className={styles.currencySign}>$</span>
              <span className={styles.statNumber}>
                <RollingNumber initial={59106} />
              </span>
            </div>
            <div className={styles.statBottomRow}>
              <span className={styles.positive}>↑ 3.249%</span>
              <span className={styles.positive}>$1,023.99</span>
              <span className={styles.statTag}>Today</span>
            </div>
          </div>

          {/* ===== USERS BOX ===== */}
          <div className={`${styles.statCard} ${styles.card2}`}>
            <div className={styles.statTopRow}>
              <span className={styles.statLabel}>Active Users</span>
            </div>
            <div className={styles.statMain}>
              <span className={styles.statNumber}>
                <RollingNumber initial={14500} />
              </span>
              <span className={styles.smallNote}>+ Joined</span>
            </div>
            <div className={styles.statBottomRow}>
              <span className={styles.positive}>Global Traders</span>
            </div>
          </div>

          {/* ===== PROFIT BOX ===== */}
          <div className={`${styles.statCard} ${styles.card3}`}>
            <div className={styles.statTopRow}>
              <span className={styles.statLabel}>Profit</span>
            </div>
            <div className={styles.statMain}>
              <span className={styles.currencySign}>$</span>
              <span className={styles.statNumber}>
                <RollingNumber initial={2518} />
              </span>
            </div>
            <div className={styles.statBottomRow}>
              <span className={styles.positive}>↑ 2.81%</span>
              <span className={styles.neutral}>Today</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
