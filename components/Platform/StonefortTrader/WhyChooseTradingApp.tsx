"use client";

import Image from "next/image";
import styles from "@/components/ForexCFD/WhyTradeForex.module.css";

/* ----------------------------------
   Types
---------------------------------- */
type AppReason = {
  id: number;
  title: string;
  text: string;
  icon: string;
};

/* ----------------------------------
   Content (12 Cards)
---------------------------------- */
const REASONS: AppReason[] = [
  {
    id: 1,
    icon: "/images/customisation.png",
    title: "Powerful Trading Widgets and Tools",
    text: "Access a wide range of market views, calculators, and trading utilities designed to support confident and informed forex trading.",
  },
  {
    id: 2,
    icon: "/images/benchmarking.png",
    title: "Advanced Trading Capabilities",
    text: "Trade with professional-grade analytical tools, indicators, and execution features built for serious and active traders.",
  },
  {
    id: 3,
    icon: "/images/Indices.png",
    title: "Comprehensive Technical Indicators",
    text: "Analyze markets using an extensive set of technical indicators to identify trends, momentum, and potential opportunities.",
  },
  {
    id: 4,
    icon: "/images/forexStrategies.png",
    title: "Near Real-Time Account Insights",
    text: "Track trading activity and account performance with frequent updates during active market sessions.",
  },
  {
    id: 5,
    icon: "/images/data-analysis.png",
    title: "Professional Charting and Analysis Tools",
    text: "Use advanced charting and drawing features to perform detailed technical analysis across multiple instruments.",
  },
  {
    id: 6,
    icon: "/images/multi-account.png",
    title: "Multi-Account and Portfolio Visibility",
    text: "View multiple trading accounts and monitor overall portfolio performance from a single, consolidated interface.",
  },
  {
    id: 7,
    icon: "/images/seamless-access.png",
    title: "Seamless Access Across Devices",
    text: "Trade and analyze markets smoothly across mobile, web, and desktop platforms with a consistent experience.",
  },
  {
    id: 8,
    icon: "/images/globaltrusted.png",
    title: "Globally Trusted Platform",
    text: "Used by traders worldwide, reflecting reliability, scalability, and international reach.",
  },
  {
    id: 9,
    icon: "/images/forexStrategies.png",
    title: "Rich Market Data Views",
    text: "Gain insights through market strength indicators, sentiment views, heat maps, and range analysis to stay aligned with market movements.",
  },
  {
    id: 10,
    icon: "/images/forexSpread.png",
    title: "Ultra-Tight Spreads",
    text: "Trade with competitive pricing starting from 0.0 pips on major FX pairs and low spreads on gold, supporting active and high-frequency strategies.",
  },
  {
    id: 11,
    icon: "/images/fast.png",
    title: "Fast and Reliable Execution",
    text: "Experience high-speed trade execution with low-latency infrastructure, strong fill rates, and no dealing desk intervention.",
  },
  {
    id: 12,
    icon: "/images/real-time.png",
    title: "Flexible Trading Hours",
    text: "Trade forex 24 hours a day from Monday to Friday, with extended trading availability on select instruments over the weekend.",
  },
];

/* ----------------------------------
   Component
---------------------------------- */
export default function WhyChooseTradingApp() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <span className={`badge ${styles.badge}`}>
              STONEFORT TRADING APP
            </span>

            <div className={styles.headingRow}>
              <h2 className={`title ${styles.title}`}>
                Why Choose the{" "}
                <span className={styles.accent}>Stonefort Trading App?</span>
              </h2>
              <span className={styles.headingLine} aria-hidden="true" />
            </div>

            <p className={`text ${styles.subtitle}`}>
              A powerful trading app built for performance, precision, and
              professional-grade market access wherever you trade.
            </p>
          </div>

          <div className={styles.headerImageWrap}>
            <Image
              src="/images/mt5ChooseMockup.webp"
              alt="Stonefort Trading App"
              width={520}
              height={400}
              className={styles.headerImage}
              priority
            />
          </div>
        </header>

        {/* Grid (12 cards) */}
        <div className={styles.grid}>
          {REASONS.map((item) => (
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
      </div>
    </section>
  );
}
