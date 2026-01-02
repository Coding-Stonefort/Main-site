"use client";

import Image from "next/image";
import styles from "./WebTradingPlatform.module.css";

type Feature = {
  title: string;
  text: string;
  iconSrc: string;
  iconAlt: string;
};

const FEATURES: Feature[] = [
  {
    title: "Advanced Charting & Analysis",
    text:
      "Analyse market movements with powerful, customisable charts, multiple timeframes, and a wide range of technical indicators and drawing tools all available directly within the platform.",
    iconSrc: "/images/drawing-tool.png",
    iconAlt: "Charting tools",
  },
  {
    title: "Smart Trade Management",
    text:
      "View key trade details such as pip value, margin requirements, and position exposure at a glance. Place and manage orders efficiently using price-based, pip-based, or P&L-based controls.",
    iconSrc: "/images/statistics.png",
    iconAlt: "Trade management",
  },
  {
    title: "Market Insights & Trading Intelligence",
    text:
      "Stay informed with integrated market insights, pattern recognition tools, and sentiment indicators designed to help identify potential trading opportunities and market trends.",
    iconSrc: "/images/data-analysis.png",
    iconAlt: "Market insights",
  },
];

export default function WebTradingPlatform() {
  return (
    <section className="section">
      <div className="container">
        {/* TOP HEADER */}
        <header className={styles.topHeader}>
          <h2 className="heading">
            Everything You Need to{" "}
            <span className={styles.brand}>Trade with Confidence</span>
          </h2>

          <p className="text">
            Trade directly from interactive charts and manage positions using
            advanced risk management tools on Stonefort’s fully equipped web
            trading platform. Designed for flexibility and performance, it is
            accessible from all modern browsers with no downloads or plugins
            required.
          </p>
        </header>

        {/* CONTENT GRID */}
        <div className={styles.inner}>
          {/* LEFT */}
          <div className={styles.content}>
            <div className={styles.features}>
              {FEATURES.map((item) => (
                <div key={item.title} className={styles.feature}>
                  <div className={styles.featureIcon} aria-hidden="true">
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={20}
                      height={20}
                    />
                  </div>

                  <div className={styles.featureBody}>
                    <h3 className={styles.featureTitle}>{item.title}</h3>
                    <p className={styles.featureText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/stonefort01.webp"
                alt="Web trading platform"
                width={760}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
