"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./TradableMarkets.module.css";

type MarketId =
  | "forex"
  | "commodities"
  | "indices"
  | "stocks"
  | "etfs"
  | "crypto"
  | "trending";

type MarketCard = {
  id: Exclude<MarketId, "trending">;
  title: string;
  description: string;
  href: string;
  icon: string;
};

type PairItem = {
  symbol: string;
  name: string;
};

const MARKET_CARDS: MarketCard[] = [
  {
    id: "forex",
    title: "Forex",
    href: "/markets/forex-cfd",
    icon: "/images/trading.png",
    description:
      "Choose from 90+ currency pairs across majors, minors, and exotics – all available to trade around the clock.",
  },
  {
    id: "indices",
    title: "Indices",
    href: "/markets/indices-cfd",
    icon: "/images/Indices.png",
    description:
      "Trade 20+ major stock indices – including US30, UK100, and GER30 – with 24-hour pricing from Monday to Friday.",
  },
  {
    id: "stocks",
    title: "Stocks",
    href: "/markets/stocks-cfd",
    icon: "/images/stock.png",
    description:
      "Trade the global equity market with 1,100+ underlying shares, including 24-hour availability on a wide range of leading US companies.",
  },
  {
    id: "commodities",
    title: "Commodities",
    href: "/markets/commodities-cfd",
    icon: "/images/commodities.png",
    description:
      "Explore the potential of energies, metals, and more – with 40+ markets including Crude Oil, Gold, and Natural Gas.",
  },
  {
    id: "etfs",
    title: "ETFs",
    href: "/markets/etfs-cfd",
    icon: "/images/ETFs.png",
    description:
      "Take a position on a range of themes including indices, sectors, and geographies by trading ETFs via CFDs.",
  },
  {
    id: "crypto",
    title: "Cryptocurrencies",
    href: "/markets/crypto-cfd",
    icon: "/images/bitcoin-wallet.png",
    description:
      "Trade Bitcoin, Ethereum, and other major cryptocurrencies via CFDs – with leverage of up to 1:10.",
  },
];

const MARKET_PAIRS: Record<MarketId, PairItem[]> = {
  trending: [
    { symbol: "EURUSD", name: "Euro / US Dollar" },
    { symbol: "XAUUSD", name: "Gold / US Dollar" },
    { symbol: "US30", name: "Dow Jones 30" },
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "BTCUSD", name: "Bitcoin / US Dollar" },
  ],
  forex: [
    { symbol: "EURUSD", name: "Euro / US Dollar" },
    { symbol: "GBPUSD", name: "British Pound / US Dollar" },
    { symbol: "USDJPY", name: "US Dollar / Japanese Yen" },
    { symbol: "AUDUSD", name: "Australian Dollar / US Dollar" },
    { symbol: "USDCAD", name: "US Dollar / Canadian Dollar" },
  ],
  indices: [
    { symbol: "US30", name: "Dow Jones 30" },
    { symbol: "US500", name: "S&P 500" },
    { symbol: "NAS100", name: "Nasdaq 100" },
    { symbol: "GER40", name: "Germany 40" },
    { symbol: "UK100", name: "UK 100" },
  ],
  stocks: [
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "MSFT", name: "Microsoft Corp." },
    { symbol: "TSLA", name: "Tesla Inc." },
    { symbol: "NFLX", name: "Netflix Inc." },
    { symbol: "NVDA", name: "NVIDIA Corp." },
  ],
  commodities: [
    { symbol: "XAUUSD", name: "Gold / US Dollar" },
    { symbol: "XAGUSD", name: "Silver / US Dollar" },
    { symbol: "UKOIL", name: "Brent Crude Oil" },
    { symbol: "USOIL", name: "WTI Crude Oil" },
    { symbol: "NGAS", name: "Natural Gas" },
  ],
  etfs: [
    { symbol: "SPY", name: "SPDR S&P 500 ETF" },
    { symbol: "QQQ", name: "Invesco QQQ Trust" },
    { symbol: "IWM", name: "Russell 2000 ETF" },
    { symbol: "GLD", name: "SPDR Gold Shares" },
    { symbol: "XLK", name: "Technology Select Sector SPDR" },
  ],
  crypto: [
    { symbol: "BTCUSD", name: "Bitcoin / US Dollar" },
    { symbol: "ETHUSD", name: "Ethereum / US Dollar" },
    { symbol: "LTCUSD", name: "Litecoin / US Dollar" },
    { symbol: "XRPUSD", name: "Ripple / US Dollar" },
    { symbol: "ADAUSD", name: "Cardano / US Dollar" },
  ],
};

export default function TradableMarkets() {
  const [activeTab] = useState<MarketId>("trending");
  const _activePairs = MARKET_PAIRS[activeTab]; // kept for future UI expansion

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Title */}
        <div className={styles.headingWrap}>
          <p className={`badge ${styles.badge}`}>Markets</p>

          <h2 className={`title ${styles.title}`}>
            Which financial markets can you trade with Stonefort?
          </h2>

          <p className={`text ${styles.subtitle}`}>
            From major forex pairs to global equities like Netflix, Stonefort
            gives you access to a wide range of CFD markets - all backed by
            competitive pricing, advanced trading technology, and fast, reliable
            execution.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {MARKET_CARDS.map((card) => (
            <Link key={card.id} href={card.href} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <Image src={card.icon} alt={card.title} width={48} height={48} />
                </div>

                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </div>

              <div className={styles.arrowBtn} aria-hidden="true">
                <span className={styles.arrow} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
