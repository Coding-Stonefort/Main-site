"use client";

import styles from "./MarketsIconShelf.module.css";

const FRONT_ROW = [
  { symbol: "AAPL", label: "Apple" },
  { symbol: "TSLA", label: "Tesla" },
  { symbol: "NVDA", label: "Nvidia" },
  { symbol: "AMZN", label: "Amazon" },
  { symbol: "MSFT", label: "Microsoft" },
  { symbol: "META", label: "Meta" },
  { symbol: "SPX", label: "S&P 500" },
  { symbol: "XAU", label: "Gold" },
];

export default function MarketsIconShelf() {
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

          <div className={styles.row}>
            {FRONT_ROW.map((item, idx) => (
              <IconTile
                key={item.symbol}
                symbol={item.symbol}
                index={idx}
              />
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
        <div className={styles.tileInner}>
          <span className={styles.symbol}>{symbol}</span>
        </div>
      </div>
    </div>
  );
}
