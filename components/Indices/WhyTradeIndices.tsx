"use client";

import styles from "./WhyTradeIndices.module.css";

type IndexCard = {
  id: string;
  symbol: string;
  name: string;
  offer: number;
  demand: number;
  diff: number;
  leverage: string;
  flagClass: string;
  symbolColorClass: string;
};

const INDICES: IndexCard[] = [
  {
    id: "us500",
    symbol: "US500",
    name: "S&P 500",
    offer: 6896.9,
    demand: 6897.2,
    diff: 0.3,
    leverage: "Up to 1:500",
    flagClass: styles.flagUS,
    symbolColorClass: styles.symRed,
  },
  {
    id: "us30",
    symbol: "US30",
    name: "Dow Jones 30",
    offer: 48829,
    demand: 48830,
    diff: 0.1,
    leverage: "Up to 1:500",
    flagClass: styles.flagUS,
    symbolColorClass: styles.symGreen,
  },
  {
    id: "ger40",
    symbol: "GER40",
    name: "DAX",
    offer: 24406.65,
    demand: 24407.15,
    diff: 5.0,
    leverage: "Up to 1:500",
    flagClass: styles.flagDE,
    symbolColorClass: styles.symGreen,
  },
  {
    id: "uk100",
    symbol: "UK100",
    name: "FTSE 100",
    offer: 9740,
    demand: 9740,
    diff: 0.0,
    leverage: "Up to 1:500",
    flagClass: styles.flagUK,
    symbolColorClass: styles.symGreen,
  },
  {
    id: "jpn225",
    symbol: "JPN225",
    name: "Nikkei",
    offer: 50593,
    demand: 50598,
    diff: 0.5,
    leverage: "Up to 1:500",
    flagClass: styles.flagJP,
    symbolColorClass: styles.symGreen,
  },
];

export default function WhyTradeIndices() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* ===== Header (global typography) ===== */}
        <div className={styles.header}>
          <p className={`badge ${styles.badge}`}>Indices</p>

          <h2 className={`title ${styles.title}`}>Why Trade CFDs on Indices?</h2>

          <p className={`text ${styles.text}`}>
            Indices trading allows you to speculate on the price movement of a
            group of stocks that represent a specific market or sector. Instead
            of trading individual shares, indices provide broader market
            exposure, making them suitable for traders looking to diversify,
            hedge risk, or trade overall market sentiment.
          </p>

          <p className={`text ${styles.text}`}>
            With index CFDs, traders can take advantage of both rising and
            falling markets while using leverage to optimize capital efficiency.
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div className={styles.grid} role="list">
          {INDICES.map((item) => (
            <article key={item.id} className={styles.card} role="listitem">
              <div className={styles.top}>
                <span className={`${styles.flag} ${item.flagClass}`} aria-hidden="true" />
                <div className={styles.topText}>
                  <div className={`${styles.symbol} ${item.symbolColorClass}`}>
                    {item.symbol}
                  </div>
                  <div className={styles.name}>{item.name}</div>
                </div>
              </div>

              <div className={styles.rows}>
                <div className={styles.row}>
                  <span className={styles.label}>the offer</span>
                  <span className={styles.valueOffer}>{formatNum(item.offer)}</span>
                </div>

                <div className={styles.row}>
                  <span className={styles.label}>demand</span>
                  <span className={styles.valueDemand}>{formatNum(item.demand)}</span>
                </div>

                <div className={styles.row}>
                  <span className={styles.label}>The difference</span>
                  <span className={styles.valueNeutral}>{item.diff}</span>
                </div>

                <div className={styles.row}>
                  <span className={styles.label}>leverage</span>
                  <span className={styles.valueNeutral}>{item.leverage}</span>
                </div>
              </div>

              <div className={styles.actions}>
                <button type="button" className={styles.buyBtn}>
                  buying
                </button>
                <button type="button" className={styles.sellBtn}>
                  sale
                </button>
              </div>
            </article>
          ))}
        </div>
        {/* ===== CTA ===== */}
        <div className={styles.ctaWrap}>
            <a href="/indices-performance" className="button">
                Learn More
            </a>
        </div>
      </div>
    </section>
  );
}

function formatNum(n: number) {
  // keep a clean look like your screenshot
  const hasDecimals = Math.abs(n % 1) > 0;
  return hasDecimals ? n.toFixed(2) : n.toString();
}
