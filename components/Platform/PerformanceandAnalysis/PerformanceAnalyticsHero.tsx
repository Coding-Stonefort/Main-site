"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./PerformanceAnalyticsHero.module.css";

type TabId =
  | "performance-analytics"
  | "trading-strategy"
  | "disciplinepro"
  | "performance"
  | "discipline-analytics";

const TABS: { id: TabId; label: string }[] = [
  { id: "performance-analytics", label: "Performance Analytics" },
  { id: "trading-strategy", label: "Trading Strategy" },
  { id: "disciplinepro", label: "DisciplinePro" },
  { id: "performance", label: "Performance" },
  { id: "discipline-analytics", label: "Discipline Analytics" },
];

export default function PerformanceAnalyticsHero() {
  const [active, setActive] = useState<TabId>("performance-analytics");

  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Mockup of Performance and Analysis
          </h1>
          <p className={`text ${styles.lead}`}>
            Gain deeper insight into your trading behaviour and psychology—so your
            mindset supports your strategy, not undermines it.
          </p>

          <div className={styles.miniGrid}>
            <div className={styles.miniItem}>
              <span className={styles.miniDot} />
              <div className={styles.miniTitle}>Set your trading plan</div>
            </div>

            <div className={styles.miniItem}>
              <span className={styles.miniDot} />
              <div className={styles.miniTitle}>Track discipline and consistency</div>
            </div>

            <div className={styles.miniItem}>
              <span className={styles.miniDot} />
              <div className={styles.miniTitle}>Analyse trading patterns</div>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/register" className={`button ${styles.primary}`}>
              Open an Account
            </Link>
            <Link href="/trade" className={`button ${styles.secondary}`}>
              Trade Now
            </Link>
          </div>
        </div>

        {/* RIGHT: Mockup */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.mockup}>
            <div className={styles.mockupBg} />

            {/* Chart placeholder */}
            <div className={styles.chartArea}>
              <div className={styles.grid} />
              <div className={styles.fakeChart} />
              <div className={styles.sparkRow}>
                <span className={styles.spark} />
                <span className={styles.spark} />
                <span className={styles.spark} />
              </div>
            </div>

            {/* Bottom tabs */}
            <div className={styles.tabBar} role="tablist" aria-label="Performance tabs">
              {TABS.map((t) => {
                const isActive = t.id === active;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                    onClick={() => setActive(t.id)}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
