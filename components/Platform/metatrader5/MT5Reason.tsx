"use client";

import Image from "next/image";
import styles from "@/components/Indices/IndicesStonefort.module.css"; // keep same layout/styles

type MT5Reason = {
  id: number;
  title: string;
  text: string;
  icon: string;
};

const REASONS: MT5Reason[] = [
  {
    id: 1,
    icon: "/images/statistics.png",
    title: "Advanced Back-Testing and Optimisation",
    text: "Test and refine trading strategies using a powerful multi-threaded strategy tester, designed to deliver faster execution and more accurate performance analysis.",
  },
  {
    id: 2,
    icon: "/images/forexLeverage.png",
    title: "Advanced Trading Language and Automation",
    text: "Build sophisticated trading strategies with an enhanced programming environment that supports event-driven logic, object-oriented design, and improved debugging capabilities.",
  },
  {
    id: 3,
    icon: "/images/real-time.png",
    title: "Enhanced Charting and Timeframes",
    text: "Analyze markets with expanded chart types, including Renko and Range charts, alongside a broad selection of timeframes, from tick data to long-term views.",
  },
  {
    id: 4,
    icon: "/images/Diversify.png",
    title: "Deeper Analytics and Market Insights",
    text: "Access an extended range of built-in indicators, advanced graphical tools, and an integrated economic calendar for more informed trading decisions.",
  },
  {
    id: 5,
    icon: "/images/speed.webp",
    title: "Wider Market Access",
    text: "Trade a diverse range of CFD instruments including forex, indices, shares, and commodities from a single integrated platform and mobile app.",
  },
  {
    id: 6,
    icon: "/images/funds.webp",
    title: "Greater Order Control and Customisation",
    text: "Use advanced order types such as stop-limit orders to manage risk more effectively in volatile markets, supported by additional indicators and graphical analysis tools.",
  },
];

export default function WhyChooseMT5() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* ===== HEADER ===== */}
        <header className={styles.header}>
          {/* LEFT */}
          <div className={styles.headerContent}>
            <span className={`badge ${styles.badge}`}>WHY CHOOSE MT5?</span>

            <div className={styles.headingRow}>
              <h2 className={`heading ${styles.title}`}>
                Why choose <span className={styles.accent}>MT5?</span>
              </h2>
              <span className={styles.headingLine} aria-hidden="true" />
            </div>

            <p className={`description ${styles.subtitle}`}>
              For the superior trading conditions, flexibility, and reliability
              Stonefort delivers to traders.
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.headerImageWrap}>
            <Image
              src="/images/whymt5img.webp"
              alt="MetaTrader 5 platform"
              width={520}
              height={380}
              className={styles.headerImage}
              priority
            />
          </div>
        </header>

        {/* ===== 6 CARDS ===== */}
        <div className={styles.grid}>
          {REASONS.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardIcon}>
                <Image
                  src={item.icon}
                  alt=""
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

        {/* ===== CTA ===== */}
        <div style={{ marginTop: "56px", textAlign: "center" }}>
          <a href="/register" className="button">
            Get MT5
          </a>
        </div>
      </div>
    </section>
  );
}
