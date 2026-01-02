"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import asImg from "@/public/images/howforexwork.webp";
import styles from "./MT5TradingOptions.module.css";

/* ---------------- ROLLING NUMBER ---------------- */
function RollingNumber({
  initial,
  minStep = 20,
  maxStep = 30,
  activeMs = 2600,
  pauseMs = 1500,
}: {
  initial: number;
  minStep?: number;
  maxStep?: number;
  activeMs?: number;
  pauseMs?: number;
}) {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

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
  }, [activeMs, pauseMs, minStep, maxStep]);

  return <span>{value.toLocaleString()}</span>;
}

/* ---------------- MAIN SECTION ---------------- */
export default function MT5TradingOptions() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.content}>
                        <span className={`badge ${styles.accountBadge}`}>CFD Standard Account</span>
          <h2 className={`title ${styles.title}`}>
            <span className={styles.line1}>
              <span className={styles.accent}>MT5</span> Trading Options
            </span>
            <span className={styles.line2}>
              with {" "}<span className={styles.accent}>Stonefort</span>
            </span>
          </h2>

          <div className={styles.options}>


            <p className={`text ${styles.text}`}>
              Trade CFDs with market exposure similar to owning the underlying asset,
              while committing only a fraction of the total position value.
            </p>

            <p className={`text ${styles.text}`}>
              All trading costs are built into the spread, with no commission charged,
              making this account ideal for traders who prefer simple and transparent
              pricing. Overnight funding applies where applicable.
            </p>

            <p className={`text ${styles.text}`}>
              Designed for active and professional traders seeking raw market pricing.
              Trade with tight spreads starting from{" "}
              <span className={styles.highlight}>0.0 pips</span> on FX, combined with
              fixed, transparent commissions per lot, offering greater cost efficiency
              and execution control under fast-moving market conditions.
            </p>
          </div>
        </div>

        {/* RIGHT (NO BG PANEL) */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageStage}>
            <Image
              src={asImg}
              alt="MT5 trading platform"
              className={styles.image}
              fill
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>

          {/* Card 1 */}
          <div className={`${styles.statCard} ${styles.card1}`}>
            <div className={styles.statTopRow}>
              <span className={styles.statLabel}>Pricing Models</span>
            </div>
            <div className={styles.statMain}>
              <span className={styles.statNumber}>
                <RollingNumber initial={2} minStep={1} maxStep={1} />
              </span>
              <span className={styles.smallNote}>Options</span>
            </div>
            <div className={styles.statBottomRow}>
              <span className={styles.positive}>Standard</span>
              <span className={styles.neutral}>Raw + Commission</span>
              <span className={styles.statTag}>MT5</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${styles.statCard} ${styles.card2}`}>
            <div className={styles.statTopRow}>
              <span className={styles.statLabel}>FX Spreads</span>
            </div>
            <div className={styles.statMain}>
              <span className={styles.statNumber}>
                <RollingNumber initial={0} minStep={1} maxStep={1} />
              </span>
              <span className={styles.smallNote}>From</span>
            </div>
            <div className={styles.statBottomRow}>
              <span className={styles.positive}>0.0 pips</span>
              <span className={styles.neutral}>Raw Account</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`${styles.statCard} ${styles.card3}`}>
            <div className={styles.statTopRow}>
              <span className={styles.statLabel}>Execution</span>
            </div>
            <div className={styles.statMain}>
              <span className={styles.statNumber}>
                <RollingNumber initial={99} minStep={1} maxStep={1} />
              </span>
              <span className={styles.smallNote}>%</span>
            </div>
            <div className={styles.statBottomRow}>
              <span className={styles.positive}>Fast markets</span>
              <span className={styles.neutral}>More control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
