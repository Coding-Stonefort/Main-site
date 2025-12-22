"use client";

import Image from "next/image";
import styles from "./ProfitCards.module.css";

type Slide = {
  id: string;
  title: string;
  tabLabel: string;
  stepNumber: number;
  lines: string[];
  cta?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const slides: Slide[] = [
  {
    id: "calc",
    stepNumber: 1,
    title: "How Profit is Calculated",
    tabLabel: "How Profit is Calculated",
    cta: "Learn More",
    image: {
      src: "/images/2-1-1.webp",
      alt: "Trading app pricing",
      width: 520,
      height: 420,
      
    },
    lines: [
      "Trade Size: €100,000 (one standard lot)",
      "Opening Price: EUR/USD = 1.12000 → €100,000 × 1.12000 = USD $112,000",
      "Closing Price: EUR/USD = 1.11500 → €100,000 × 1.11500 = USD $111,500",
      "Gross Profit on the Trade: $112,000 − $111,500 = USD $500",
    ],
  },
  {
    id: "open",
    stepNumber: 2,
    title: "Opening the Position",
    tabLabel: "Opening the Position",
    cta: "Learn More",
    image: {
      src: "/images/sfx-mobile.webp",
      alt: "Fast execution",
      width: 360,
      height: 260,
    },
    lines: [
      "You short (sell) 1 standard lot of EUR/USD at 1.12000.",
      "With Stonefort’s 1:500 leverage, your required margin is only €200.",
      "Trade value at opening:",
      "€100,000 × 1.12000 = USD $112,000",
    ],
  },
  {
    id: "close",
    stepNumber: 3,
    title: "Closing the Position",
    tabLabel: "Closing the Position",
    cta: "Learn More",
    image: {
      src: "/images/closing-trade.webp",
      alt: "Institutional liquidity",
      width: 560,
      height: 260,
    },
    lines: [
      "One week later, EUR/USD drops to 1.11500.",
      "You close the short position, capturing profit.",
      "Trade value at closing:",
      "€100,000 × 1.11500 = USD $111,500",
      "Gross profit = USD $500",
    ],
  },
];

export default function ProfitCards() {
  const top = slides[0];
  const bottomLeft = slides[1];
  const bottomRight = slides[2];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 className={`title ${styles.heading}`}>
            How a Forex <span className={styles.accent}>Trade Works</span>
          </h2>
        </header>

        <div className={styles.grid}>
          {/* ===== TOP WIDE CARD (NORMAL IMAGE) ===== */}
          <article className={`${styles.card} ${styles.cardWide}`}>
            <div className={`${styles.cardBody} ${styles.cardBodyWide}`}>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{top.title}</h3>

                <ul className={styles.list}>
                  {top.lines.map((line, i) => (
                    <li key={i} className={styles.item}>{line}</li>
                  ))}
                </ul>

                <button className={`button ${styles.cta}`}>
                  {top.cta}
                </button>
              </div>

              {top.image && (
                <div className={styles.media}>
                  <Image {...top.image} className={styles.mediaImg} priority />
                </div>
              )}
            </div>

            <div className={styles.stepPill}>Step {top.stepNumber}</div>
            <div className={styles.watermark} />
          </article>

          {/* ===== BOTTOM LEFT (BG IMAGE) ===== */}
          <article className={styles.card}>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{bottomLeft.title}</h3>

              <ul className={styles.list}>
                {bottomLeft.lines.map((line, i) => (
                  <li key={i} className={styles.item}>{line}</li>
                ))}
              </ul>

              <button className={`button ${styles.cta}`}>
                {bottomLeft.cta}
              </button>
            </div>

            {bottomLeft.image && (
              <Image
                {...bottomLeft.image}
                className={styles.bgImage}
                aria-hidden
              />
            )}

            <div className={styles.stepPill}>Step {bottomLeft.stepNumber}</div>
            <div className={styles.watermark} />
          </article>

          {/* ===== BOTTOM RIGHT (BG IMAGE) ===== */}
          <article className={styles.card}>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{bottomRight.title}</h3>

              <ul className={styles.list}>
                {bottomRight.lines.map((line, i) => (
                  <li key={i} className={styles.item}>{line}</li>
                ))}
              </ul>

              <button className={`button ${styles.cta}`}>
                {bottomRight.cta}
              </button>
            </div>

            {bottomRight.image && (
              <Image
                {...bottomRight.image}
                className={styles.bgsImage}
                aria-hidden
              />
            )}

            <div className={styles.stepPill}>Step {bottomRight.stepNumber}</div>
            <div className={styles.watermark} />
          </article>
        </div>
      </div>
    </section>
  );
}