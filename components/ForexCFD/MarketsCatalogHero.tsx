"use client";

import styles from "./MarketsCatalogHero.module.css";

type MarketItem = {
  symbol: string;
};

// 6 rows x 5 icons (you can change symbols as you like)
const ROWS: MarketItem[][] = [
  // Row 0: far back
  [
    { symbol: "SPX" },
    { symbol: "NDX" },
    { symbol: "DJI" },
    { symbol: "DAX" },
    { symbol: "FTSE" },
  ],
  // Row 1
  [
    { symbol: "XAU" },
    { symbol: "XAG" },
    { symbol: "USOIL" },
    { symbol: "UKOIL" },
    { symbol: "NGAS" },
  ],
  // Row 2
  [
    { symbol: "EURUSD" },
    { symbol: "GBPUSD" },
    { symbol: "USDJPY" },
    { symbol: "USDCAD" },
    { symbol: "AUDUSD" },
  ],
  // Row 3
  [
    { symbol: "BTC" },
    { symbol: "ETH" },
    { symbol: "SOL" },
    { symbol: "XRP" },
    { symbol: "LTC" },
  ],
  // Row 4
  [
    { symbol: "GOOGL" },
    { symbol: "NFLX" },
    { symbol: "ADBE" },
    { symbol: "INTC" },
    { symbol: "CSCO" },
  ],
  // Row 5: closest/front row
  [
    { symbol: "AAPL" },
    { symbol: "TSLA" },
    { symbol: "NVDA" },
    { symbol: "AMZN" },
    { symbol: "MSFT" },
  ],
];

export default function MarketsCatalogHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Trade with Clarity and Control </h2>
          <p className={styles.subtitle}>
            At Stonefort, transparency is built into every trade. Our pricing model is designed to offer consistently competitive spreads across major currency pairs, giving you clearer market access and a smoother trading experience. With Stonefort, you stay focused on your strategy, not hidden costs.
          </p>
        </header>

        <div className={styles.stage}>
          <div className={styles.glow} />

          <div className={styles.rows}>
            {ROWS.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`${styles.row} ${styles[`row${rowIndex}`]}`}
              >
                {row.map((item, colIndex) => (
                  <IconTile
                    key={`${item.symbol}-${colIndex}`}
                    symbol={item.symbol}
                    index={colIndex}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type IconTileProps = {
  symbol: string;
  index: number;
};

function IconTile({ symbol, index }: IconTileProps) {
  const variant =
    index % 3 === 0 ? "variantOne" : index % 3 === 1 ? "variantTwo" : "variantThree";

  return (
    <div className={styles.tileWrap}>
      <div className={`${styles.tile} ${styles[variant]}`}>
    <div className={`${styles.tileInner} ${styles[`brand-${symbol.toLowerCase()}`]}`}>
    <span className={styles.symbol}>{symbol}</span>
    </div>

      </div>
    </div>
  );
}
