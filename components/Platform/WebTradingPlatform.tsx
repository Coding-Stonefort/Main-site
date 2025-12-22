"use client";

import Image from "next/image";
import styles from "./WebTradingPlatform.module.css";

const features = [
  {
    title: "Advanced Charting & Analysis",
    text:
      "Analyse market movements with powerful, customisable charts, multiple timeframes, and a wide range of technical indicators and drawing tools — all available directly within the platform.",
  },
  {
    title: "Smart Trade Management",
    text:
      "View key trade details such as pip value, margin requirements, and position exposure at a glance. Place and manage orders efficiently using price-based, pip-based, or P&L-based controls.",
  },
  {
    title: "Market Insights & Trading Intelligence",
    text:
      "Stay informed with integrated market insights, pattern recognition tools, and sentiment indicators designed to help identify potential trading opportunities and market trends.",
  },
];

export default function WebTradingPlatform() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">

        {/* ===== TOP CENTERED HEADER ===== */}
        <header className={styles.topHeader}>
          <h2 className={styles.heading}>
            Everything You Need to{" "}
            <span className={styles.brand}>Trade with Confidence</span>
          </h2>

          <p className={styles.lead}>
            Trade directly from interactive charts and manage positions using advanced risk
            management tools on Stonefort’s fully equipped web trading platform. Designed for
            flexibility and performance, it is accessible from all modern browsers – with no
            downloads or plugins required.
          </p>
        </header>



        {/* ===== FEATURES + IMAGE ===== */}
        <div className={styles.contentGrid}>

            {/* Right: Image */}
          <div className={styles.imageWrap}>
            <div className={styles.imageCard}>
              <Image
                src="/images/stonefort01.webp"
                alt="Web trading platform"
                width={720}
                height={490}
                priority
              />
            </div>
          </div>
          
          {/* Left: Features */}
          <div className={styles.features}>
            {features.map((item) => (
              <div key={item.title} className={styles.feature}>
                <span className={styles.dot} aria-hidden />
                <div>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          
        </div>

      </div>
    </section>
  );
}
