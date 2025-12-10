"use client";

import { useEffect, useState } from "react";
import "../ForexCFD/ForexCards.css"; // same layout/styles

type Quote = {
  symbol: string;
  bid: number;
  ask: number;
};

const CRYPTOS = [
  { name: "BTCUSD", symbol: "BTCUSD", color: "#001B5C", leverage: "Up to 1:200" },
  { name: "ETHUSD", symbol: "ETHUSD", color: "#001B5C", leverage: "Up to 1:200" },
  { name: "BNBUSD", symbol: "BNBUSD", color: "#001B5C", leverage: "Up to 1:200" },
  { name: "DOGEUSD", symbol: "DOGEUSD", color: "#001B5C", leverage: "Up to 1:20" },
  { name: "DOTUSD", symbol: "DOTUSD", color: "#001B5C", leverage: "Up to 1:20" },
];

export default function CryptoCards() {
  const [quotes, setQuotes] = useState<Record<string, Quote>>({});

  useEffect(() => {
    async function loadQuotes() {
      try {
        // 👇 change this to whatever API route you use for crypto prices
        const res = await fetch("/api/crypto-quotes", { cache: "no-store" });
        const data: Quote[] = await res.json();

        const map: Record<string, Quote> = {};
        data.forEach((q) => {
          map[q.symbol] = q;
        });
        setQuotes(map);
      } catch (err) {
        console.error("Crypto pricing error:", err);
      }
    }

    loadQuotes();
    const id = setInterval(loadQuotes, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="fc-section">
      {/* <div className="fc-header">
        <h2 className="fc-heading">
          Trade <span>Cryptocurrencies</span>
        </h2>
        <p className="fc-desc">
          Access leading crypto pairs like BTCUSD, ETHUSD, and more with tight
          spreads, leveraged trading, and ultra-fast execution.
        </p>
      </div> */}

      <div className="fc-row">
        {CRYPTOS.map((crypto) => {
          const q = quotes[crypto.symbol];
          const bid = q?.bid ?? 0;
          const ask = q?.ask ?? 0;
          const spread = ask && bid ? ask - bid : 0;

          return (
            <div className="fc-card" key={crypto.symbol}>
              {/* TOP SYMBOL TITLE (BTCUSD, ETC.) */}
              <h3
                className="fc-symbol"
                style={{ color: crypto.color, fontWeight: 700 }}
              >
                {crypto.name}
              </h3>

              {/* Instrument Code under title (same as symbol in this case) */}
              <p className="fc-code">{crypto.symbol}</p>

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
                <span className="fc-dark">{crypto.leverage}</span>
              </div>

              <div className="fc-buttons">
                <button className="fc-btn fc-buy">Buy</button>
                <button className="fc-btn fc-sell">Sell</button>
              </div>
            </div>
          );
        })}
                {/* === DISCLAIMER BELOW ALL CARDS === */}
  <p className="fc-disclaimer">
    * Terms and conditions apply. The stated fixed leverage is applicable when equity
    requirements are met. For more information, please refer to the Product Schedule page.
  </p>
      </div>

    </section>
  );
}
