"use client";

import styles from "./MarketsCatalogHero.module.css";

type MarketItem = { symbol: string };

const ROWS: MarketItem[][] = [
  [
    { symbol: "EURUSD" },
    { symbol: "GBPUSD" },
    { symbol: "USDJPY" },
    { symbol: "USDCHF" },
    { symbol: "USDCAD" },
  ],
  [
    { symbol: "AUDUSD" },
    { symbol: "NZDUSD" },
    { symbol: "EURGBP" },
    { symbol: "EURJPY" },
    { symbol: "GBPJPY" },
  ],
  [
    { symbol: "AUDJPY" },
    { symbol: "CADJPY" },
    { symbol: "CHFJPY" },
    { symbol: "EURAUD" },
    { symbol: "EURNZD" },
  ],
  [
    { symbol: "GBPAUD" },
    { symbol: "GBPCAD" },
    { symbol: "GBPNZD" },
    { symbol: "AUDCAD" },
    { symbol: "AUDNZD" },
  ],
  [
    { symbol: "USDTRY" },
    { symbol: "USDZAR" },
    { symbol: "USDMXN" },
    { symbol: "USDSEK" },
    { symbol: "USDNOK" },
  ],
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
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>
            Trade with <span className={styles.accent}>Clarity</span> and{" "}
            <span className={styles.accent}>Control</span>
          </h2>

          <p className={`text ${styles.subtitle}`}>
            At Stonefort, transparency is built into every trade. Our pricing
            model is designed to offer consistently competitive spreads across
            major currency pairs, giving you clearer market access and a smoother
            trading experience. With Stonefort, you stay focused on your
            strategy, not hidden costs.
          </p>
        </header>

        <div className={styles.stage}>
          <div className={styles.glow} aria-hidden="true" />

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

function IconTile({ symbol }: IconTileProps) {
  return (
    <div className={styles.tileWrap}>
      <div className={styles.tile}>
        <div className={`${styles.tileInner} ${styles[`brand-${symbol.toLowerCase()}`]}`}>
          <span className={styles.symbol}>{symbol}</span>
        </div>
      </div>
    </div>
  );
}
