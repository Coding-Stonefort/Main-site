"use client";

import Image from "next/image";
import styles from "./IndicesStonefort.module.css";

type IndexReason = {
  id: number;
  title: string;
  text: string;
  icon: string;
};

const REASONS: IndexReason[] = [
  {
    id: 1,
    icon: "/images/statistics.png",
    title: "Wide Range of Index CFDs",
    text: "Access over 20 global index CFDs covering major markets across the US, Europe, and Asia — all from a single trading account.",
  },
  {
    id: 2,
    icon: "/images/forexLeverage.png",
    title: "Flexible Leverage",
    text: "Trade index CFDs with flexible leverage options, allowing you to increase market exposure while optimizing capital efficiency.",
  },
  {
    id: 3,
    icon: "/images/real-time.png",
    title: "Zero Commission",
    text: "Trade indices with zero commission, keeping your trading costs transparent and focused purely on spreads.",
  },
  {
    id: 4,
    icon: "/images/Diversify.png",
    title: "Competitive Spreads",
    text: "Benefit from tight and stable spreads designed to support both short-term and strategic index trading.",
  },
  {
    id: 5,
    icon: "/images/speed.webp",
    title: "Deep Liquidity",
    text: "Enjoy reliable execution backed by deep liquidity, helping ensure smooth order fills even during volatile market conditions.",
  },
  {
    id: 6,
    icon: "/images/funds.webp",
    title: "Secure & Regulated Environment",
    text: "Trade with confidence in a secure, well-regulated environment built to promote transparency, stability, and trader protection.",
  },
];

export default function WhyTradeIndices() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* ===== HEADER ===== */}
        <header className={styles.header}>
          {/* LEFT */}
          <div className={styles.headerContent}>
            <span className={`badge ${styles.badge}`}>
              OUR INDICES EDGE
            </span>

            <div className={styles.headingRow}>
              <h2 className={`heading ${styles.title}`}>
                Why Trade Indices with{" "}
                <span className={styles.accent}>Stonefort?</span>
              </h2>
              <span className={styles.headingLine} aria-hidden="true" />
            </div>

            <p className={`description ${styles.subtitle}`}>
              Trade global stock indices with transparent pricing, competitive
              spreads, and reliable execution designed to support confident
              index CFD trading in all market conditions.
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.headerImageWrap}>
            <Image
              src="/images/indiceschoice.webp"
              alt="Index CFDs with Stonefort"
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

        {/* ===== CTA BANNER ===== */}
        <div style={{ marginTop: "56px", textAlign: "center" }}>
          <a href="/register" className="button">
            Trade Now
          </a>
        </div>
      </div>
    </section>
  );
}
