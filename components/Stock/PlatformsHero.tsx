"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./PlatformsHero.module.css";

//  Browser-safe timer types
type Timer = ReturnType<typeof setInterval>;
type Timeout = ReturnType<typeof setTimeout>;

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
    let intervalId: Timer | null = null;
    let timeoutId: Timeout | null = null;

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

/* ---------------- DATA ---------------- */

type PlatformKey = "mt5" | "stonefort";

type Platform = {
  key: PlatformKey;
  name: string;
  summary: string;
  // you can customize the stat cards per platform later if you want
};

const PLATFORMS: Platform[] = [
  {
    key: "mt5",
    name: "MetaTrader 5 (MT5)",
    summary:
      "A powerful multi-asset trading platform designed for speed, stability, and advanced analysis. MT5 offers professional charting tools, multiple order types, and efficient execution for trading global markets.",
  },
  {
    key: "stonefort",
    name: "Stonefort Trader",
    summary:
      "Advanced tools built for active and professional traders, combining intuitive design with efficient execution and real-time market access.",
  },
];

/* ---------------- MAIN ---------------- */

export default function PlatformsShowcase() {
  const [active, setActive] = useState<PlatformKey>("mt5");

  const current = useMemo(
    () => PLATFORMS.find((p) => p.key === active) ?? PLATFORMS[0],
    [active]
  );

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* ===== TOP (FULL WIDTH) ===== */}
        <header className={styles.topHeader}>
          <h2 className={`heading ${styles.heading}`}>
            Trade Global Markets with High-Performance Trading Platforms
          </h2>

          <p className={`description ${styles.subheading}`}>
            Experience stable, secure, and efficient platforms designed to support informed
            decision-making and smooth trade execution across global markets.
          </p>
        </header>

        {/* ===== BOTTOM: LEFT (2 BOXES) + RIGHT (LAPTOP) ===== */}
        <div className={styles.grid}>
          {/* LEFT: 2 platform boxes */}
          <aside className={styles.left}>
            <div className={styles.leftCard}>
              <p className={`badge ${styles.badge}`}>Trading Platforms</p>

              <div className={styles.nav} role="tablist" aria-label="Platforms">
                {PLATFORMS.map((p) => {
                  const isActive = p.key === active;

                  return (
                    <button
                      key={p.key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                      onClick={() => setActive(p.key)}
                    >
                      <div className={styles.navTitleRow}>
                        <span className={styles.navTitle}>{p.name}</span>
                        <span className={styles.navDot} aria-hidden="true" />
                      </div>

                      <p className={styles.navText}>{p.summary}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT: laptop/mockup + glass cards */}
          <div className={styles.right}>
            <div className={styles.mediaCard}>
              <span className={styles.glow} aria-hidden="true" />

              <div className={styles.imageWrap}>
                {/*  keep your same image (rename if needed) */}
                <Image
                  src="/images/mt5desk.webp"
                  alt={`${current.name} platform preview`}
                  fill
                  priority
                  className={styles.image}
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

              {/* Optional: show selected platform name under image */}
              <div className={styles.caption}>
                <span className={styles.captionLabel}>Selected:</span>{" "}
                <strong className={styles.captionValue}>{current.name}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
