"use client";

import styles from "./MarketsCatalogHero.module.css";

type MarketItem = {
  symbol: string;
};

// 6 rows x 5 FX pairs (all currency-related)
const ROWS: MarketItem[][] = [
  // Row 0: far back – Majors
  [
    { symbol: "EURUSD" },
    { symbol: "GBPUSD" },
    { symbol: "USDJPY" },
    { symbol: "USDCHF" },
    { symbol: "USDCAD" },
  ],
  // Row 1: Majors / popular minors
  [
    { symbol: "AUDUSD" },
    { symbol: "NZDUSD" },
    { symbol: "EURGBP" },
    { symbol: "EURJPY" },
    { symbol: "GBPJPY" },
  ],
  // Row 2: Crosses
  [
    { symbol: "AUDJPY" },
    { symbol: "CADJPY" },
    { symbol: "CHFJPY" },
    { symbol: "EURAUD" },
    { symbol: "EURNZD" },
  ],
  // Row 3: More crosses
  [
    { symbol: "GBPAUD" },
    { symbol: "GBPCAD" },
    { symbol: "GBPNZD" },
    { symbol: "AUDCAD" },
    { symbol: "AUDNZD" },
  ],
  // Row 4: Exotics vs USD
  [
    { symbol: "USDTRY" },
    { symbol: "USDZAR" },
    { symbol: "USDMXN" },
    { symbol: "USDSEK" },
    { symbol: "USDNOK" },
  ],
  // Row 5: Exotics vs EUR
  [
    { symbol: "EURTRY" },
    { symbol: "EURZAR" },
    { symbol: "EURPLN" },
    { symbol: "EURSEK" },
    { symbol: "EURNOK" },
  ],
];

export default function MarketsCatalogHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Trade with <span>Clarity</span> and <span>Control</span> </h2>
          <p className={styles.subtitle}>
            At Stonefort, transparency is built into every trade. Our pricing
            model is designed to offer consistently competitive spreads across
            major currency pairs, giving you clearer market access and a smoother
            trading experience. With Stonefort, you stay focused on your
            strategy, not hidden costs.
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
    index % 3 === 0
      ? "variantOne"
      : index % 3 === 1
      ? "variantTwo"
      : "variantThree";

  return (
    <div className={styles.tileWrap}>
      <div className={`${styles.tile} ${styles[variant]}`}>
        <div
          className={`${styles.tileInner} ${
            styles[`brand-${symbol.toLowerCase()}`]
          }`}
        >
          <span className={styles.symbol}>{symbol}</span>
        </div>
      </div>
    </div>
  );
}
