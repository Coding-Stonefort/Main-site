"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./WhyTradeWebTrader.module.css";

type FeatureCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const WEB_TRADER_FEATURES: FeatureCard[] = [
  {
    id: "alerts",
    title: "Real-Time Trade Alerts",
    description:
      "Receive instant notifications on price movements and key market changes to stay ahead of opportunities.",
    icon: "/images/real-time.png",
  },
  {
    id: "ui",
    title: "Intuitive, User-Friendly Interface",
    description:
      "Trade with ease using a clean, responsive layout designed for fast navigation and efficient execution.",
    icon: "/images/stockmt5.png",
  },
  {
    id: "charts",
    title: "Advanced Charting Tools",
    description:
      "Perform in-depth market analysis with comprehensive charts, indicators, and drawing features.",
    icon: "/images/tradingtools.webp",
  },
  {
    id: "security",
    title: "Secure Trading Environment",
    description:
      "Execute trades confidently with robust security measures and encrypted data protection.",
    icon: "/images/seamless-access.png",
  },
  {
    id: "browser",
    title: "No Installation Required",
    description:
      "Access global markets directly from your browser without downloads or complex setup.",
    icon: "/images/installation.png",
  },
  {
    id: "devices",
    title: "Seamless Cross-Device Access",
    description:
      "Trade and monitor your account smoothly across desktop and mobile devices with consistent performance.",
    icon: "/images/multi-account.png",
  },
];

export default function TradableMarkets() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Heading */}
        <div className={styles.headingWrap}>
          <p className={`badge ${styles.badge}`}>Web Trader</p>

          <h2 className={`title ${styles.title}`}>
            Why Trade on Stonefort Web Trader?
          </h2>

          <p className={`text ${styles.subtitle}`}>
            Trade directly from your browser with powerful tools, real-time
            insights, and a secure, intuitive environment designed for modern
            traders.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {WEB_TRADER_FEATURES.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                  />
                </div>

                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>

              <div className={styles.arrowBtn} aria-hidden="true">
                <span className={styles.arrow} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
