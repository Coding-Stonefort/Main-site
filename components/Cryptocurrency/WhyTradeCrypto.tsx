"use client";

import Image from "next/image";
import styles from "../ForexCFD/WhyTradeForex.module.css";

type MetalsReason = {
  id: number;
  title: string;
  text: string;
  icon: string;     // <-- added icon
};

const REASONS: MetalsReason[] = [
  {
    id: 1,
    icon: "/images/forexSpread.png",
    title: "Round-the-Clock Market Access",
    text: "Trade major cryptocurrency CFDs at any time of the day. Our crypto markets operate continuously, allowing you to respond to price movements without weekend platform closures. ",
  },
  {
    id: 2,
    icon: "/images/forexpair.png",
    title: "Competitive Pricing",
    text: "Stonefort offers competitive spreads across popular crypto pairs, helping you trade market volatility with transparent and efficient pricing. ",
  },
  {
    id: 3,
    icon: "/images/forexLegal.png",
    title: "Platforms and Tools ",
    text: "Analyse and trade cryptocurrencies using MetaTrader 5 (MT5) or the Stonefort Trader App, designed to provide a seamless trading experience and access to powerful charting and execution tools. ",
  },
  {
    id: 4,
    icon: "/images/forexLeverage.png",
    title: "Speed and Reliability",
    text: "Our pricing and infrastructure are designed to support responsive execution, giving you access to crypto price movements within a stable and secure trading environment. ",
  },
  {
    id: 5,
    icon: "/images/forexStrategies.png",
    title: "Regulated & Trusted ",
    text: "Stonefort operates under established regulatory frameworks, including SCA and FSC jurisdictions, offering a secure and transparent trading environment for all clients. ",
  },
  {
    id: 6,
    icon: "/images/metalsTrusted.png",
    title: "Execution Without Requotes ",
    text: "Our deep liquidity access and advanced execution technology are structured to reduce interruptions, helping ensure your orders are processed without requotes during normal market conditions. ",
  },

];

export default function WhyTradeCrypto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
      <header className={styles.header}>
        {/* LEFT: text */}
        <div className={styles.headerContent}>
          <span className={styles.badge}>OUR commodities EDGE</span>

          <div className={styles.headingRow}>
            <h2 className={styles.title}>Why Trade Cryptocurrency CFDs with <span>Stonefort?</span></h2>
            <span className={styles.headingLine} />
          </div>

          <p className={styles.subtitle}>
            Access institutional-grade trading conditions, advanced technology,
            and a regulated environment designed to support your forex strategies.
          </p>
        </div>

        {/* RIGHT: image */}
        <div className={styles.headerImageWrap}>
          <Image
            src="/images/whyCrpto.webp"      // put your shield+coins image here
            alt="Secure funds with Stonefort"
            width={480}
            height={360}
            className={styles.headerImage}
            priority
          />
        </div>
      </header>


        {/* 8 cards */}
        <div className={styles.Metalsgrid}>
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
