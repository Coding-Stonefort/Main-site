"use client";

import Link from "next/link";
import styles from "./TradableMarkets.module.css";

type MarketId =
  | "forex"
  | "commodities"
  | "indices"
  | "stocks"
  | "etfs"
  | "crypto";

type MarketCard = {
  id: MarketId;
  title: string;
  description: string;
  href: string;
};

const MARKET_CARDS: MarketCard[] = [
  {
    id: "forex",
    title: "Forex",
    href: "/markets/forex-cfd",
    description:
      "Choose from 90+ currency pairs across majors, minors, and exotics – all available to trade around the clock.",
  },
  {
    id: "indices",
    title: "Indices",
    href: "/markets/indices-cfd",
    description:
      "Trade 20+ major stock indices – including US30, UK100, and GER30 – with 24-hour pricing from Monday to Friday.",
  },
  {
    id: "stocks",
    title: "Stocks",
    href: "/markets/stocks-cfd",
    description:
      "Trade the global equity market with 1,100+ underlying shares, including 24-hour availability on a wide range of leading US companies.",
  },
  {
    id: "commodities",
    title: "Commodities",
    href: "/markets/commodities-cfd",
    description:
      "Explore the potential of energies, metals, and more – with 40+ markets including Crude Oil, Gold, and Natural Gas.",
  },
  {
    id: "etfs",
    title: "ETFs",
    href: "/markets/etfs-cfd",
    description:
      "Take a position on a range of themes including indices, sectors, and geographies by trading ETFs via CFDs.",
  },
  {
    id: "crypto",
    title: "Cryptocurrencies",
    href: "/markets/crypto-cfd",
    description:
      "Trade Bitcoin, Ethereum, and other major cryptocurrencies via CFDs – with leverage of up to 1:10.",
  },
];

export default function TradableMarkets() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.headingWrap}>
          <p className={styles.badge}>Markets</p>

          <h2 className={styles.title}>
            Which financial markets can you trade with Stonefort?
          </h2>

          <p className={styles.subtitle}>
            From major forex pairs to global equities like Netflix, Stonefort gives you access to a wide range of CFD markets - all backed by competitive pricing, advanced trading technology, and fast, reliable execution.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {MARKET_CARDS.map((card) => (
            <Link key={card.id} href={card.href} className={styles.card}>
              <div>
                <div className={styles.iconBox}>
                  <span className={styles.iconLine}></span>
                </div>

                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>

              <div className={styles.arrowBtn}>
                <span className={styles.arrow}></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
