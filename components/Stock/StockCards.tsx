"use client";

import { useEffect, useState } from "react";
import styles from "./StockCards.module.css";

type Quote = {
  symbol: string;
  bid: number; // offer
  ask: number; // demand
};

const STOCKS = [
  { symbol: "NVDA", leverage: "Until 1:20" },
  { symbol: "TSLA", leverage: "Until 1:20" },
  { symbol: "META", leverage: "Until 1:20" },
  { symbol: "AAPL", leverage: "Until 1:20" },
  { symbol: "AMD", leverage: "Until 1:20" },
];

export default function StockCards() {
  const [quotes, setQuotes] = useState<Record<string, Quote>>({});

  useEffect(() => {
    async function loadQuotes() {
      try {
        const res = await fetch("/api/stocks-quotes", { cache: "no-store" });
        const data: Quote[] = await res.json();

        const map: Record<string, Quote> = {};
        data.forEach((q) => {
          map[q.symbol] = q;
        });
        setQuotes(map);
      } catch (err) {
        console.error("Stocks pricing error:", err);
      }
    }

    loadQuotes();
    const id = setInterval(loadQuotes, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 className={`title ${styles.heading}`}>
            Popular <span className={styles.accent}>Stocks</span>
          </h2>
          <p className={`text ${styles.desc}`}>
            Monitor real-time pricing for leading US equities and trade stock
            CFDs with clear, transparent quotes.
          </p>
        </header>

        <div className={styles.row}>
          {STOCKS.map((stock) => {
            const q = quotes[stock.symbol];
            const offer = q?.bid ?? 0;
            const demand = q?.ask ?? 0;
            const difference = offer && demand ? Math.abs(demand - offer) : 0;

            return (
              <article className={styles.card} key={stock.symbol}>
                <h3 className={styles.symbol}>{stock.symbol}</h3>

                <div className={styles.grid}>
                  <div className={styles.item}>
                    <span className={styles.label}>the offer</span>
                    <span className={`${styles.value} ${styles.green}`}>
                      {offer ? offer.toFixed(2) : "--"}
                    </span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.label}>demand</span>
                    <span className={`${styles.value} ${styles.green}`}>
                      {demand ? demand.toFixed(2) : "--"}
                    </span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.label}>the difference</span>
                    <span className={`${styles.value} ${styles.strong}`}>
                      {difference ? difference.toFixed(2) : "--"}
                    </span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.label}>leverage</span>
                    <span className={`${styles.value} ${styles.strong}`}>
                      {stock.leverage}
                    </span>
                  </div>
                </div>

                <div className={styles.actions}>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.buy}`}
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.sell}`}
                  >
                    Sell
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.ctaWrap}>
          <a href="/dividends" className={`button ${styles.ctaButton}`}>
            Access Dividend Insights
          </a>
        </div>
      </div>
    </section>
  );
}
