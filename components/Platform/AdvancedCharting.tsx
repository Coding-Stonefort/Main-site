"use client";

import Image from "next/image";
import styles from "./AdvancedCharting.module.css";

type ChartingItem = {
  id: number;
  title: string;
  text: string;
  icon: string;
};

const OPTIONS: ChartingItem[] = [
  {
    id: 1,
    icon: "/images/spread.webp",
    title: "Trade Directly from Charts",
    text: "Open, modify, and manage trades directly from the chart. Create new orders or adjust existing positions using simple click and drag controls for greater precision.",
  },
  {
    id: 2,
    icon: "/images/benchmarking.png",
    title: "80+ Technical Indicators",
    text: "Apply a wide range of customizable technical indicators to support different trading strategies. Save your preferred setups as templates for consistent analysis.",
  },
  {
    id: 3,
    icon: "/images/timer.png",
    title: "Multiple Timeframes",
    text: "Analyse price movements across flexible time intervals ranging from short term market action to long term trends.",
  },
  {
    id: 4,
    icon: "/images/data-analysis.png",
    title: "Multiple Chart Types",
    text: "Choose from various chart styles and control how market data is displayed to suit your analysis preferences.",
  },
  {
    id: 5,
    icon: "/images/drawing-tool.png",
    title: "50+ Drawing Tools",
    text: "Plan your trades using advanced drawing tools for trend lines, support and resistance levels, patterns, and price projections.",
  },
  {
    id: 6,
    icon: "/images/customisation.png",
    title: "Fully Customisable Workspace",
    text: "Personalise your trading environment including indicators, layouts, and drawing tools, and save everything as reusable templates.",
  },
];

export default function AdvancedCharting() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Header */}
        <header className={styles.header}>
          {/* LEFT */}
          <div className={styles.headerContent}>
            <span className={`badge ${styles.badge}`}>ADVANCED TOOLS</span>

            <div className={styles.headingRow}>
              <h2 className={`title ${styles.title}`}>
                Advanced Charting <span className={styles.accent}>and Trade Execution</span>
              </h2>
              <span className={styles.headingLine} aria-hidden="true" />
            </div>

            <p className={`text ${styles.subtitle}`}>
              Trade smarter with chart-first execution, powerful analysis tools, and a workspace
              you can fully tailor to your strategy.
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.headerImageWrap}>
            <Image
              src="/images/platform-right-img.webp"
              alt="Advanced charting interface"
              width={520}
              height={400}
              className={styles.headerImage}
              priority
            />
          </div>
        </header>

        {/* 6 options */}
        <div className={styles.grid}>
          {OPTIONS.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardIcon}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className={styles.iconImage}
                />
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>

        {/* CTA area */}
        <div className={styles.ctaWrap}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaTextBlock}>
              <p className={styles.ctaKicker}>CTA</p>
              <h3 className={styles.ctaTitle}>Discover more trading tool</h3>
              <p className={styles.ctaText}>
                Explore platform features designed to help you analyse markets and execute with confidence.
              </p>
            </div>

            <a href="/platforms" className={`button ${styles.ctaButton}`}>
              Discover More
            </a>
          </div>

          <div className={styles.ctaCardAlt}>
            <div className={styles.ctaTextBlock}>
              <p className={styles.ctaKicker}>GET STARTED</p>
              <h3 className={styles.ctaTitle}>Start Your Trading Journey with Stonefort</h3>
              <p className={styles.ctaText}>
                Open an account in minutes and access advanced tools across web and mobile platforms.
              </p>
            </div>

            <a href="/open-account" className={`button ${styles.ctaButtonAlt}`}>
              Open an Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
