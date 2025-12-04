"use client";

import { useEffect, useState } from "react";
import "./ForexCards.css";

type Quote = {
  symbol: string;
  bid: number;
  ask: number;
};

const PAIRS = [
  { symbol: "EURUSD", leverage: "Up to 1:500" },
  { symbol: "USDJPY", leverage: "Up to 1:500" },
  { symbol: "GBPUSD", leverage: "Up to 1:500" },
  { symbol: "AUDUSD", leverage: "Up to 1:500" },
  { symbol: "USDCAD", leverage: "Up to 1:500" },
];

export default function ForexCards() {
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
        <h2 className="fc-heading">Major Currency Pairs</h2>
        <p className="fc-desc">
          Trade the world’s most actively traded currency pairs with spreads
          designed to support efficient execution. All majors are quoted against
          the US Dollar, offering clear pricing and stable market depth.
          Stonefort’s competitive spread environment helps you navigate these
          highly liquid markets with confidence and precision.
        </p>
      </div>

      <div className="fc-row">
        {PAIRS.map((pair) => {
          const q = quotes[pair.symbol];
          const bid = q?.bid ?? 0;
          const ask = q?.ask ?? 0;
          const spread = ask && bid ? ask - bid : 0;

          return (
            <div className="fc-card" key={pair.symbol}>
              <h3 className="fc-symbol">{pair.symbol}</h3>

              <div className="fc-line">
                <span>Bid</span>
                <span className="fc-green">
                  {bid ? bid.toFixed(5) : "--"}
                </span>
              </div>

              <div className="fc-line">
                <span>Ask</span>
                <span className="fc-green">
                  {ask ? ask.toFixed(5) : "--"}
                </span>
              </div>

              <div className="fc-line">
                <span>Spread</span>
                <span className="fc-dark">
                  {spread ? spread.toFixed(5) : "--"}
                </span>
              </div>

              <div className="fc-line">
                <span>Leverage</span>
                <span className="fc-dark">{pair.leverage}</span>
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
