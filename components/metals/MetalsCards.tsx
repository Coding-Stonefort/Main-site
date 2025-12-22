"use client";

import { useEffect, useState } from "react";
import styles from "./MetalsCards.module.css";

type Quote = {
  symbol: string;
  bid: number;
  ask: number;
};

type Metal = {
  name: string;
  symbol: string;
  leverage: string;
  tone: "gold" | "silver" | "platinum";
};

const METALS: Metal[] = [
  { name: "GOLD", symbol: "XAUUSD", tone: "gold", leverage: "Up to 1:1000" },
  { name: "SILVER", symbol: "XAGUSD", tone: "silver", leverage: "Up to 1:1000" },
  { name: "PLATINUM", symbol: "XPTUSD", tone: "platinum", leverage: "Up to 1:1000" },
];

export default function MetalsCards() {
  const [quotes, setQuotes] = useState<Record<string, Quote>>({});

  useEffect(() => {
    let alive = true;

    async function loadQuotes() {
      try {
        const res = await fetch("/api/forex-quotes", { cache: "no-store" });
        const data: Quote[] = await res.json();

        if (!alive) return;

        const map: Record<string, Quote> = {};
        for (const q of data) map[q.symbol] = q;
        setQuotes(map);
      } catch (err) {
        // keep UI stable; optionally add a toast later
        console.error("Pricing error:", err);
      }
    }

    loadQuotes();
    const id = window.setInterval(loadQuotes, 10000);

    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  return (
    <section className={`${styles.section} section`} aria-label="Precious Metals">
      <div className="container">
        <header className={styles.header}>
          <h2 className={`title ${styles.heading}`}>
            Precious <span className={styles.accent}>Metals</span>
          </h2>

          <p className={`description ${styles.desc}`}>
            Trade Gold, Silver, and Platinum with institutional-grade spreads,
            deep liquidity, and ultra-fast execution. Ideal for diversification
            and safe-haven market strategies.
          </p>
        </header>

        <div className={styles.row}>
          {METALS.map((metal) => {
            const q = quotes[metal.symbol];
            const bid = q?.bid ?? 0;
            const ask = q?.ask ?? 0;
            const spread = ask && bid ? ask - bid : 0;

            return (
              <article className={styles.card} key={metal.symbol}>
                <h3 className={`${styles.symbol} ${styles[metal.tone]}`}>
                  {metal.name}
                </h3>

                <p className={styles.code}>{metal.symbol}</p>

                <div className={styles.line}>
                  <span className={styles.label}>Bid</span>
                  <span className={styles.valueGreen}>
                    {bid ? bid.toFixed(2) : "--"}
                  </span>
                </div>

                <div className={styles.line}>
                  <span className={styles.label}>Ask</span>
                  <span className={styles.valueGreen}>
                    {ask ? ask.toFixed(2) : "--"}
                  </span>
                </div>

                <div className={styles.line}>
                  <span className={styles.label}>Spread</span>
                  <span className={styles.valueStrong}>
                    {spread ? spread.toFixed(2) : "--"}
                  </span>
                </div>

                <div className={styles.line}>
                  <span className={styles.label}>Leverage</span>
                  <span className={styles.valueStrong}>{metal.leverage}</span>
                </div>

                <div className={styles.buttons}>
                  <button className={`${styles.btn} ${styles.buy}`} type="button">
                    Buy
                  </button>
                  <button className={`${styles.btn} ${styles.sell}`} type="button">
                    Sell
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
