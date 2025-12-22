"use client";

import { useEffect, useState } from "react";
import styles from "./ForexCards.module.css";

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
    const id = window.setInterval(loadQuotes, 10000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 className={`title ${styles.heading}`}>
            Major Currency <span className={styles.accent}>Pairs</span>
          </h2>

          <p className={`text ${styles.desc}`}>
            Trade the world’s most actively traded currency pairs with spreads
            designed to support efficient execution. All majors are quoted against
            the US Dollar, offering clear pricing and stable market depth.
            Stonefort’s competitive spread environment helps you navigate these
            highly liquid markets with confidence and precision.
          </p>
        </header>

        <div className={styles.row}>
          {PAIRS.map((pair) => {
            const q = quotes[pair.symbol];
            const bid = q?.bid ?? 0;
            const ask = q?.ask ?? 0;
            const spread = ask && bid ? ask - bid : 0;

            return (
              <div className={styles.card} key={pair.symbol}>
                <h3 className={styles.symbol}>{pair.symbol}</h3>

                <div className={styles.line}>
                  <span className={styles.label}>Bid</span>
                  <span className={styles.valueGreen}>
                    {bid ? bid.toFixed(5) : "--"}
                  </span>
                </div>

                <div className={styles.line}>
                  <span className={styles.label}>Ask</span>
                  <span className={styles.valueGreen}>
                    {ask ? ask.toFixed(5) : "--"}
                  </span>
                </div>

                <div className={styles.line}>
                  <span className={styles.label}>Spread</span>
                  <span className={styles.valueStrong}>
                    {spread ? spread.toFixed(5) : "--"}
                  </span>
                </div>

                <div className={styles.line}>
                  <span className={styles.label}>Leverage</span>
                  <span className={styles.valueStrong}>{pair.leverage}</span>
                </div>

                <div className={styles.buttons}>
                  <button type="button" className={`${styles.btn} ${styles.buy}`}>
                    Buy
                  </button>
                  <button type="button" className={`${styles.btn} ${styles.sell}`}>
                    Sell
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
