"use client";

import styles from "./CryptoCatalog.module.css";

type MarketItem = {
  symbol: string;
};

// ---- CRYPTO ROWS (4 rows × 5 coins = 20) ----
const ROWS: MarketItem[][] = [
  // Row 0 – Most Famous / Top Market Cap


  // Row 1 – Large Caps


  // Row 2 – Strong Altcoins
  [
    { symbol: "TON" },
    { symbol: "LINK" },
    { symbol: "MATIC" },
    { symbol: "LTC" },
    { symbol: "SHIB" },
  ],

  // Row 3 – Lower Caps but Still Popular
  [
    { symbol: "XLM" },
    { symbol: "UNI" },
    { symbol: "BCH" },
    { symbol: "APT" },
    { symbol: "ATOM" },
  ],
    [
    { symbol: "ADA" },
    { symbol: "DOGE" },
    { symbol: "AVAX" },
    { symbol: "DOT" },
    { symbol: "TRX" },
  ],
    [
    { symbol: "BTC" },
    { symbol: "ETH" },
    { symbol: "BNB" },
    { symbol: "SOL" },
    { symbol: "XRP" },
  ],
];

export default function MarketsCatalogHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            How Cryptocurrency Trading Works with {" "}
            <span>Stonefort </span>
          </h2>

          <p className={styles.subtitle}>
            Cryptocurrency trading allows you to speculate on the price movements of digital assets such as Bitcoin and Ethereum without needing to own or store the underlying coins. With Stonefort, you can trade these markets on margin, giving you the flexibility to open positions using a portion of the full value while applying appropriate risk management. 
          </p>
          <p className={styles.subtitle}>
            Digital assets are known for their rapid price fluctuations, which create both opportunities and risks. Through platforms like MetaTrader 5 (MT5) and Stonefort Trader, you can analyse market conditions, apply trading strategies and manage positions within a familiar and intuitive environment. 
          </p>
          <p className={styles.subtitle}>
            Stonefort operates under recognised regulatory frameworks, providing a structured and secure setting for traders engaging in crypto CFD markets. As cryptocurrency markets can be highly volatile, it is important to approach trading responsibly and with careful consideration of your risk exposure. 
          </p>
        </header>

        {/* Background Rows */}
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
