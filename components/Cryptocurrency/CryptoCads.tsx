"use client";

import { useEffect, useState } from "react";
import styles from "./CryptoCards.module.css"; // ✅ CSS module import

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
    <section className={`${styles.section} section`}>
      {/* <div className={styles.header}>
        <h2 className={`title ${styles.heading}`}>
          Trade <span className={styles.accent}>Cryptocurrencies</span>
        </h2>
        <p className={`description ${styles.desc}`}>
          Access leading crypto pairs like BTCUSD, ETHUSD, and more with tight
          spreads, leveraged trading, and ultra-fast execution.
        </p>
      </div> */}

      <div className={styles.row}>
        {CRYPTOS.map((crypto) => {
          const q = quotes[crypto.symbol];
          const bid = q?.bid ?? 0;
          const ask = q?.ask ?? 0;
          const spread = ask && bid ? ask - bid : 0;

          return (
            <div className={styles.card} key={crypto.symbol}>
              {/* TOP SYMBOL TITLE (BTCUSD, ETC.) */}
              <h3 className={styles.symbol}>{crypto.name}</h3>

              {/* Instrument Code under title (same as symbol in this case) */}
              <p className={styles.code}>{crypto.symbol}</p>

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
                <span className={styles.valueStrong}>{crypto.leverage}</span>
              </div>

              <div className={styles.buttons}>
                <button className={`${styles.btn} ${styles.buy}`}>Buy</button>
                <button className={`${styles.btn} ${styles.sell}`}>Sell</button>
              </div>
            </div>
          );
        })}

        {/* === DISCLAIMER BELOW ALL CARDS === */}
        <p className={styles.disclaimer}>
          * Terms and conditions apply. The stated fixed leverage is applicable
          when equity requirements are met. For more information, please refer
          to the Product Schedule page.
        </p>
      </div>
    </section>
  );
}
