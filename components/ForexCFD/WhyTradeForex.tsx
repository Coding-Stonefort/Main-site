"use client";

import Image from "next/image";
import styles from "./WhyTradeForex.module.css";

type ForexReason = {
  id: number;
  title: string;
  text: string;
  icon: string;     // <-- added icon
};

const REASONS: ForexReason[] = [
  {
    id: 1,
    icon: "/images/forexpair.png",
    title: "50+ FX Pairs at Your Fingertips",
    text: "Access a broad selection of Major, Minor, and Exotic currency pairs on Stonefort’s advanced trading platforms MT5 and Stonefort Trader, built to support traders of every style.",
  },
  {
    id: 2,
    icon: "/images/forexSpread.png",
    title: "Spreads Starting from 0.4 Pips",
    text: "Our proprietary Stonefort Engine aggregates pricing from multiple sources to deliver consistently competitive spreads, helping you trade with greater efficiency.",
  },
  {
    id: 3,
    icon: "/images/liquidity.png",
    title: "5+ Tier-1 Liquidity Providers",
    text: "Benefit from deep liquidity and seamless execution through a robust network of leading liquidity providers designed to support fast, reliable order processing.",
  },
  {
    id: 4,
    icon: "/images/latency.png",
    title: "Ultra-Low Latency with LD5 Infrastructure",
    text: "Experience responsive trading powered by our LD5 server setup, engineered to minimize latency and support high-speed execution across global markets.",
  },
  {
    id: 5,
    icon: "/images/forexLeverage.png",
    title: "Flexible Leverage Up to 1:1000",
    text: "Enhance your trading capacity with adjustable leverage options of up to 1:1000, allowing you to manage larger positions with controlled capital exposure.",
  },
  {
    id: 6,
    icon: "/images/forexStrategies.png",
    title: "All Strategies Welcome",
    text: "Whether you trade intraday, swing, algorithmically, or through manual copy strategies, Stonefort provides an environment designed to support diverse, responsible trading approaches.",
  },
  {
    id: 7,
    icon: "/images/forexEcecutin.png",
    title: "Execution Without Requotes",
    text: "Our deep liquidity access and advanced execution technology are structured to reduce interruptions, helping ensure your orders are processed without requotes during normal market conditions.",
  },
  {
    id: 8,
    icon: "/images/forexLegal.png",
    title: "Regulated & Trusted",
    text: "Stonefort operates under established regulatory frameworks, including SCA and FSC jurisdictions, offering a secure and transparent trading environment for all clients.",
  },
];

export default function WhyTradeForex() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.badge}>OUR FOREX EDGE</span>

          <div className={styles.headingRow}>
            <h2 className={styles.title}>Why Trade Forex with Stonefort?</h2>
            <span className={styles.headingLine} />
          </div>

          <p className={styles.subtitle}>
            Access institutional-grade trading conditions, advanced technology,
            and a regulated environment designed to support your forex strategies.
          </p>
        </header>

        {/* 8 cards */}
        <div className={styles.grid}>
          {REASONS.map((item) => (
            <article key={item.id} className={styles.card}>
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className={styles.iconImage}
              />

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
