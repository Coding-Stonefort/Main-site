"use client";

import { useEffect, useRef } from "react";
import "./TradingViewMarketOverview.css";

export default function TradingViewMarketOverview() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear on hot reload
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";

    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "1D",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      width: "100%",
      height: "500",
      plotLineColorGrowing: "#4d6e55",
      plotLineColorFalling: "#d9534f",
      gridLineColor: "rgba(240, 243, 250, 0.8)",
      scaleFontColor: "#6b7683",
      belowLineFillColorGrowing: "rgba(77, 110, 85, 0.12)",
      belowLineFillColorFalling: "rgba(217, 83, 79, 0.12)",
      symbolActiveColor: "rgba(77, 110, 85, 0.15)",
      tabs: [
        {
          title: "Majors",
          symbols: [
            { s: "FX:EURUSD", d: "EUR / USD" },
            { s: "FX:GBPUSD", d: "GBP / USD" },
            { s: "FX:USDJPY", d: "USD / JPY" },
            { s: "FX:USDCHF", d: "USD / CHF" },
            { s: "FX:AUDUSD", d: "AUD / USD" },
            { s: "FX:USDCAD", d: "USD / CAD" },
          ],
          originalTitle: "Majors",
        },
        {
          title: "Metals",
          symbols: [
            { s: "OANDA:XAUUSD", d: "Gold / USD" },
            { s: "OANDA:XAGUSD", d: "Silver / USD" },
          ],
          originalTitle: "Metals",
        },
        {
          title: "Crypto",
          symbols: [
            { s: "CRYPTO:BTCUSD", d: "Bitcoin / USD" },
            { s: "CRYPTO:ETHUSD", d: "Ethereum / USD" },
          ],
          originalTitle: "Crypto",
        },
      ],
    });

    containerRef.current.appendChild(script);

    return () => {
      // Clean up widget on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className="tv-mo-section">
      <div className="tv-mo-wrapper">
        <h2 className="tv-mo-title">Forex & CFD Market Overview</h2>
        <p className="tv-mo-subtitle">
          Monitor real-time pricing on major currency pairs, metals, and
          crypto—all in one place.
        </p>

        <div
          className="tradingview-widget-container"
          ref={containerRef}
        >
          {/* TradingView injects widget here */}
        </div>
      </div>
    </section>
  );
}
