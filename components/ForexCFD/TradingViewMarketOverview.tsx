// components/market/MarketsLiveOverview.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./TradingViewMarketOverview.module.css";

type MarketTabId = "forex" | "metals" | "crypto" | "indices";

type MarketTab = {
  id: MarketTabId;
  label: string;
  href: string;  // CFD page
  tvTitle: string;
  symbols: { s: string; d: string }[];
};

const MARKET_TABS: MarketTab[] = [
  {
    id: "forex",
    label: "Forex CFD",
    href: "/markets/forex-cfd",
    tvTitle: "Forex Majors",
    symbols: [
      { s: "FX:EURUSD", d: "EUR / USD" },
      { s: "FX:GBPUSD", d: "GBP / USD" },
      { s: "FX:USDJPY", d: "USD / JPY" },
      { s: "FX:USDCHF", d: "USD / CHF" },
    ],
  },
  {
    id: "metals",
    label: "Metal CFD",
    href: "/markets/metal-cfd",
    tvTitle: "Metals",
    symbols: [
      { s: "OANDA:XAUUSD", d: "Gold / USD" },
      { s: "OANDA:XAGUSD", d: "Silver / USD" },
    ],
  },
  {
    id: "crypto",
    label: "Crypto CFD",
    href: "/markets/crypto-cfd",
    tvTitle: "Crypto",
    symbols: [
      { s: "CRYPTO:BTCUSD", d: "Bitcoin / USD" },
      { s: "CRYPTO:ETHUSD", d: "Ethereum / USD" },
    ],
  },
  {
    id: "indices",
    label: "Indices CFD",
    href: "/markets/indices-cfd",
    tvTitle: "Indices",
    symbols: [
      { s: "DJ:DJI", d: "Dow Jones" },
      { s: "SP:SPX", d: "S&P 500" },
    ],
  },
];

export default function MarketsLiveOverview() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeTab, setActiveTab] = useState<MarketTabId>("forex");
  const currentTab = MARKET_TABS.find((t) => t.id === activeTab)!;

  // ⬇️ Click handler: update tab + navigate
  function handleTabClick(id: MarketTabId) {
    setActiveTab(id);

    const tab = MARKET_TABS.find((t) => t.id === id);
    if (tab) {
      router.push(tab.href); // go to related CFD page
    }
  }

  // ⬇️ Load TradingView widget whenever currentTab changes
  useEffect(() => {
    if (!containerRef.current) return;

    // clear old widget
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";

    const config = {
      colorTheme: "light",
      dateRange: "1D",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      width: "100%",
      height: "420",
      plotLineColorGrowing: "#4d6e55",
      plotLineColorFalling: "#d9534f",
      gridLineColor: "rgba(240, 243, 250, 0.8)",
      scaleFontColor: "#6b7683",
      belowLineFillColorGrowing: "rgba(77, 110, 85, 0.12)",
      belowLineFillColorFalling: "rgba(217, 83, 79, 0.12)",
      symbolActiveColor: "rgba(77, 110, 85, 0.15)",
      tabs: [
        {
          title: currentTab.tvTitle,
          symbols: currentTab.symbols,
          originalTitle: currentTab.tvTitle,
        },
      ],
    };

    script.innerHTML = JSON.stringify(config);
    containerRef.current.appendChild(script);

    // cleanup on unmount or before next run
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [currentTab]); // 🧠 rerun whenever currentTab changes

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Our Markets at a Glance</h2>

        {/* Tabs */}
        <div className={styles.tabsRow}>
          {MARKET_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabClick(tab.id)}
              className={
                tab.id === activeTab
                  ? `${styles.tab} ${styles.tabActive}`
                  : styles.tab
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TradingView container */}
        <div className={styles.widgetCard}>
          <div
            className={styles.tradingViewContainer}
            ref={containerRef}
          />
        </div>
      </div>
    </section>
  );
}
