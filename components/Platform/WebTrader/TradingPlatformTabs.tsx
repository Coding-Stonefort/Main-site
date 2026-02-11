"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TradingPlatformTabs.module.css";

type TabId = "order" | "charting" | "performance";

type TabButton = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

type TabItem = {
  id: TabId;
  label: string;
  title: string;
  description: string;
  image: string;
  buttons: TabButton[];
};

const TABS: TabItem[] = [
  {
    id: "order",
    label: "Know your order",
    title: "Know Your Order",
    description:
      "View pip value and margin requirements instantly, and place orders precisely by P&L, price, or pips.",
    image: "/images/knowyourorder.webp",
    buttons: [
      { label: "Open an Account", href: "/platforms/PerformanceandAnalysis", variant: "primary" },
      { label: "Try Demo", href: "/platforms/DisciplinePro", variant: "secondary" },
    ],
  },
  {
    id: "charting",
    label: "Advanced Charting & Market Intelligence",
    title: "Advanced Charting & Market Intelligence",
    description:
      "Trade with oneZero-backed infrastructure, combining professional charting with Autochartist-powered insights across multiple indicators, timeframes, and chart types.",
    image: "/images/tradingview.webp",
    buttons: [
      { label: "Open an Account", href: "/platforms/TradingStrategy", variant: "primary" },
      { label: "Platform Tutorial", href: "/platforms/TradingStrategy", variant: "secondary" },
    ],
  },
  {
    id: "performance",
    label: "Trading Performance Insights",
    title: "Trading Performance Insights",
    description:
      "Understand how you trade with in-depth performance insights designed to improve consistency and decision-making.",
    image: "/images/performanceanalytics.webp",
    buttons: [
      { label: "Open an Account", href: "/platforms/PerformanceandAnalysis", variant: "primary" },
      { label: "Trade Now", href: "/trade", variant: "secondary" },
    ],
  },
];

export default function TradingPlatformTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("order");

  const current = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Image */}
          <div className={styles.imageWrap}>
            <Image
              src={current.image}
              alt={current.title}
              fill
              priority
              className={styles.image}
            />
          </div>

          {/* Text */}
          <div className={styles.text}>
            <h3 className={styles.title}>{current.title}</h3>
            <p className={styles.description}>{current.description}</p>

            {/*  Buttons */}
            <div className={styles.ctaRow}>
              {current.buttons.map((btn) => (
                <Link
                  key={`${current.id}-${btn.href}-${btn.label}`}
                  href={btn.href}
                  className={`${styles.button} ${
                    btn.variant === "primary"
                      ? styles.primary
                      : styles.secondary
                  }`}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
