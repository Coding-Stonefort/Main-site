"use client";

import Image from "next/image";
import styles from "./WhyTradeStocks.module.css";

type StockReason = {
  id: number;
  title: string;
  text: string;
  icon: string;
};

const REASONS: StockReason[] = [
  {
    id: 1,
    icon: "/images/statistics.png",
    title: "Diversification",
    text: "Stock CFDs provide access to a wide range of global companies and sectors, helping traders diversify their portfolios across international markets.",
  },
  {
    id: 2,
    icon: "/images/real-time.png",
    title: "Transparent, Real-Time Pricing",
    text: "Trade CFD stocks with zero commission, allowing you to focus on price movement without additional trading costs.",
  },
  {
    id: 3,
    icon: "/images/forexLeverage.png",
    title: "Leverage",
    text: "Increase your market exposure with flexible leverage options, enabling you to control larger positions with lower initial capital. ",
  },
  {
    id: 4,
    icon: "/images/speed.webp",
    title: "Immediate Execution",
    text: "Benefit from fast and reliable execution, helping you enter and exit trades efficiently in dynamic market conditions.",
  },
  {
    id: 5,
    icon: "/images/tradingtools.webp",
    title: "Education-Driven Onboarding",
    text: "Designed for both beginner and experienced traders, with educational support to help navigate the complexities of stock CFD trading.",
  },
  {
    id: 6,
    icon: "/images/forexpair.png",
    title: "MT5 and Stonefort Trader",
    text: "Trade stock CFDs on trusted, industry-leading platforms that offer advanced charting, analysis tools, and seamless execution.",
  },
  {
    id: 7,
    icon: "/images/Diversify.png",
    title: "Competitive Pricing",
    text: "Access some of the most competitive pricing available, with transparent costs and tight spreads.",
  },
  {
    id: 8,
    icon: "/images/funds.webp",
    title: "Regulatory Oversight",
    text: "Trade with confidence in a secure and regulated trading environment designed to protect traders and promote fair market practices.",
  },
];

export default function WhyTradeStocks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* ===== HEADER ===== */}
        <header className={styles.header}>
          {/* LEFT */}
          <div className={styles.headerContent}>
            <span className={`badge ${styles.badge}`}>
            OUR STOCKS EDGE
            </span>

            <div className={styles.headingRow}>
              <h2 className={`heading ${styles.title}`}>
                Why Trade Stocks with <span className={styles.accent}>Stonefort?</span>
              </h2>
              <span className={styles.headingLine} aria-hidden="true" />
            </div>

            <p className={`description ${styles.subtitle}`}>
              Access global equity markets with transparent pricing, flexible leverage and built-in
              risk tools designed to support confident stock CFD trading.
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.headerImageWrap}>
            <Image
              src="/images/stockcards.webp"
              alt="Stock CFDs with Stonefort"
              width={520}
              height={380}
              className={styles.headerImage}
              priority
            />
          </div>
        </header>

        {/* ===== 8 CARDS ===== */}
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
      </div>
    </section>
  );
}
