"use client";

import { useEffect, useState } from "react";
import "../ForexCFD/ForexCards.css"; // Using same CSS for layout

type Quote = {
  symbol: string;
  bid: number;
  ask: number;
};

const METALS = [
  { name: "GOLD", symbol: "XAUUSD", color: "#D33A2C", leverage: "Up to 1:1000" },
  { name: "SILVER", symbol: "XAGUSD", color: "#00A67E", leverage: "Up to 1:1000" },
  { name: "PLATINUM", symbol: "XPTUSD", color: "#D33A2C", leverage: "Up to 1:1000" },
];

export default function MetalsCards() {
  const [quotes, setQuotes] = useState<Record<string, Quote>>({});

  useEffect(() => {
    async function loadQuotes() {
      try {
        const res = await fetch("/api/forex-quotes", { cache: "no-store" });
        const data: Quote[] = await res.json();

        const map: Record<string, Quote> = {};
        data.forEach((q) => {
          map[q.symbol] = q;
        });
        setQuotes(map);
      } catch (err) {
        console.error("Pricing error:", err);
      }
    }

    loadQuotes();
    const id = setInterval(loadQuotes, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="fc-section">

      <div className="fc-header">
        <h2 className="fc-heading">Precious <span>Metals</span></h2>
        <p className="fc-desc">
          Trade Gold, Silver, and Platinum with institutional-grade spreads,
          deep liquidity, and ultra-fast execution. Ideal for diversification
          and safe-haven market strategies.
        </p>
      </div>

      <div className="fc-row">
        {METALS.map((metal) => {
          const q = quotes[metal.symbol];
          const bid = q?.bid ?? 0;
          const ask = q?.ask ?? 0;
          const spread = ask && bid ? ask - bid : 0;

          return (
            <div className="fc-card" key={metal.symbol}>
              {/* TOP METAL TITLE */}
              <h3
                className="fc-symbol"
                style={{ color: metal.color, fontWeight: 700 }}
              >
                {metal.name}
              </h3>

              {/* Instrument Code */}
              <p className="fc-code">{metal.symbol}</p>

              <div className="fc-line">
                <span>Bid</span>
                <span className="fc-green">
                  {bid ? bid.toFixed(2) : "--"}
                </span>
              </div>

              <div className="fc-line">
                <span>Ask</span>
                <span className="fc-green">
                  {ask ? ask.toFixed(2) : "--"}
                </span>
              </div>

              <div className="fc-line">
                <span>Spread</span>
                <span className="fc-dark">
                  {spread ? spread.toFixed(2) : "--"}
                </span>
              </div>

              <div className="fc-line">
                <span>Leverage</span>
                <span className="fc-dark">{metal.leverage}</span>
              </div>

              <div className="fc-buttons">
                <button className="fc-btn fc-buy">Buy</button>
                <button className="fc-btn fc-sell">Sell</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
