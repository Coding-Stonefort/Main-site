"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import asImg from "@/public/images/whymetals.webp";
import styles from "./HowMetalsWorks.module.css";

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

export default function HowMetalsWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            How <span>Precious Metals</span> Trading Works with{" "}
            <span>Stonefort</span>
          </h2>

          <p className={styles.text}>
            Precious metals trading allows you to speculate on the price movements of assets such as gold, silver, and platinum without needing to hold the physical commodity. These instruments are often viewed as defensive or diversification assets, especially during periods of market uncertainty. 
          </p>
          <p className={styles.text}>
            Through Stonefort, traders can access these markets using leverage, which enables control of a larger position size relative to the capital placed as margin. While leverage offers flexibility, it also increases both potential gains and potential losses, so it should be used with appropriate risk management. 
          </p>

        </div>

{/* RIGHT SIDE : IMAGE + TWO GLASS CARDS */}
<div className={styles.imageWrapper}>
  <Image
    src={asImg}
    alt="Forex platform"
    className={styles.image}
    fill
    priority
  />

  {/* GOLD CARD */}
  <div className={`${styles.statCard} ${styles.card1}`}>
    <h4 className={styles.metalTitle}>Gold (XAUUSD)</h4>
    <p className={styles.metalText}>
      Leverage of up to <strong>1:1000</strong>, depending on your account’s leverage settings.
    </p>
  </div>

  {/* SILVER & PLATINUM CARD */}
  <div className={`${styles.statCard} ${styles.card2}`}>
    <h4 className={styles.metalTitle}>Silver (XAGUSD) & Platinum (XPTUSD)</h4>
    <p className={styles.metalText}>
      Leverage of up to <strong>1:200</strong>, typically set at one-fifth of your account’s leverage.
    </p>
  </div>
</div>

          

      
      </div>
    </section>
  );
}
