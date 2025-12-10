// components/market/MarketsLiveOverview.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./MarketsLiveOverview.module.css"; // ⬅️ module import

type MarketTabId =
  | "forex"
  | "indices"
  | "metals"
  | "stock"
  | "commodity"
  | "crypto"
  | "trending";

type MarketTab = {
  id: MarketTabId;
  label: string;
  href: string; // CFD page URL
  tvTitle: string; // title inside TradingView widget
  symbols: { s: string; d: string }[]; // TradingView instruments
};

const MARKET_TABS: MarketTab[] = [
  {
    id: "trending",
    label: "Trending",
    href: "/market#trending-pairs",
    tvTitle: "Trending Now",
    symbols: [
      { s: "OANDA:XAUUSD", d: "Gold / USD" },
      { s: "CRYPTO:BTCUSD", d: "Bitcoin / USD" },
      { s: "NASDAQ:NDX", d: "US100 Index" },
      { s: "FX:EURUSD", d: "EUR / USD" },
      { s: "FX:GBPUSD", d: "GBP / USD" },
    ],
  },
  {
    id: "forex",
    label: "Forex CFD",
    href: "/markets/forex-cfd#forex-pairs",
    tvTitle: "Forex Majors",
    symbols: [
      { s: "FX:EURUSD", d: "EUR / USD" },
      { s: "FX:GBPUSD", d: "GBP / USD" },
      { s: "FX:USDJPY", d: "USD / JPY" },
      { s: "FX:USDCHF", d: "USD / CHF" },
    ],
  },
  {
    id: "indices",
    label: "Indices CFD",
    href: "/markets/indices#indices-pairs",
    tvTitle: "Indices",
    symbols: [
      { s: "DJ:DJI", d: "Dow Jones" },
      { s: "SP:SPX", d: "S&P 500" },
    ],
  },
  {
    id: "metals",
    label: "Metal CFD",
    href: "/markets/metal#metals-pairs",
    tvTitle: "Metals",
    symbols: [
      { s: "OANDA:XAUUSD", d: "Gold / USD" },
      { s: "OANDA:XAGUSD", d: "Silver / USD" },
    ],
  },
  {
    id: "stock",
    label: "Stock CFD",
    href: "/markets/stock#stock-pairs",
    tvTitle: "Stocks",
    symbols: [
      { s: "NASDAQ:AAPL", d: "Apple" },
      { s: "NASDAQ:TSLA", d: "Tesla" },
    ],
  },
  {
    id: "commodity",
    label: "Commodity CFD",
    href: "/markets/commodities#commodity-pairs",
    tvTitle: "Commodities",
    symbols: [
      { s: "TVC:UKOIL", d: "Brent Crude Oil" },
      { s: "TVC:USOIL", d: "WTI Crude Oil" },
    ],
  },
  {
    id: "crypto",
    label: "Crypto CFD",
    href: "/markets/crypto#crypto-pairs",
    tvTitle: "Crypto",
    symbols: [
      { s: "CRYPTO:BTCUSD", d: "Bitcoin / USD" },
      { s: "CRYPTO:ETHUSD", d: "Ethereum / USD" },
    ],
  },
];

function getTabIdFromPath(pathname: string): MarketTabId {
  const basePath = pathname.split("#")[0];

  const found = MARKET_TABS.find((tab) => {
    const tabBase = tab.href.split("#")[0];
    return tabBase === basePath;
  });

  // Default to trending if nothing matches
  return found?.id ?? "trending";
}

export default function MetalsMarketsLiveOverview() {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeTab, setActiveTab] = useState<MarketTabId>("trending");

  useEffect(() => {
    if (!pathname) return;
    const newTab = getTabIdFromPath(pathname);
    setActiveTab(newTab);
  }, [pathname]);

  const currentTab = MARKET_TABS.find((tab) => tab.id === activeTab)!;

  function handleTabClick(id: MarketTabId) {
    setActiveTab(id);

    const tab = MARKET_TABS.find((t) => t.id === id);
    if (!tab) return;

    router.push(tab.href);
  }

  useEffect(() => {
    if (!containerRef.current) return;

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

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [currentTab]);

  return (
    <section className={styles["markets-section"]}>
      <div className={styles["markets-inner"]}>
        <div className={styles["markets-header"]}>
          <h2 className={styles["markets-title"]}>
            <span>Our Markets</span> at a Glance
          </h2>
          <p className={styles["markets-subtitle"]}>
            Explore live pricing across Forex, Indices, Metals, Stocks,
            Commodities and Crypto — all from one Stonefort account.
          </p>
        </div>

        {/* Tabs row */}
        <div className={styles["markets-tabs-row"]}>
          {MARKET_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabClick(tab.id)}
              className={`${styles["markets-tab"]} ${
                tab.id === activeTab ? styles["markets-tab--active"] : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TradingView widget */}
        <div className={styles["markets-widget-card"]}>
          <div
            ref={containerRef}
            className={styles["tradingview-widget-container"]}
          />
        </div>
      </div>
    </section>
  );
}
