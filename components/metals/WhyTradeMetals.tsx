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
    title: "Tight Spreads",
    text: "Trade spot gold CFDs from 0.05 points and natural gas CFDs from 0.3 points, with pricing designed to support efficient execution and no additional commission charges. ",
  },
  {
    id: 2,
    icon: "/images/forexpair.png",
    title: "5+ Tier-1 Liquidity Providers",
    text: "Benefit from deep liquidity and seamless execution through a robust network of leading liquidity providers designed to support fast, reliable order processing.",
  },
  {
    id: 3,
    icon: "/images/forexLegal.png",
    title: "Tried and Trusted Service",
    text: "Trusted by a global community of traders and recognised for delivering a reliable, client-focused trading experience. ",
  },
  {
    id: 4,
    icon: "/images/forexLeverage.png",
    title: "Flexible Leverage Up to 1:1000 ",
    text: "Enhance your trading capacity with adjustable leverage options of up to 1:1000, allowing you to manage larger positions with controlled capital exposure. ",
  },
  {
    id: 5,
    icon: "/images/forexStrategies.png",
    title: "Platforms and Tools ",
    text: "Access a wide range of industry-leading platforms including Autochartist, MT5, and Stonefort’s own advanced trading solutions; Stonefort Trader. ",
  },
  {
    id: 6,
    icon: "/images/metalsTrusted.png",
    title: "Regulated & Trusted ",
    text: "Stonefort operates under established regulatory frameworks, including SCA and FSC jurisdictions, offering a secure and transparent trading environment for all clients. ",
  },

];

export default function WhyTradeMetals() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
      <header className={styles.header}>
        {/* LEFT: text */}
        <div className={styles.headerContent}>
          <span className={styles.badge}>OUR FOREX EDGE</span>

          <div className={styles.headingRow}>
            <h2 className={styles.title}>Why Trade Forex with <span>Stonefort?</span></h2>
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
            src="/images/lock.webp"      // put your shield+coins image here
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
