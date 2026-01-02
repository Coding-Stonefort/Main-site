"use client";

import Link from "next/link";
import styles from "./MT5TradeSmarter.module.css";

export default function MT5TradeSmarter() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <h2 className={`title ${styles.heading}`}>
          Trade Smarter with Stonefort MetaTrader&nbsp;5
        </h2>

        <p className={`text ${styles.text}`}>
          Stonefort brings you MetaTrader 5, a globally trusted trading platform
          built for today’s modern traders. Equipped with advanced charting
          capabilities and efficient order management tools, MT5 helps you
          monitor, analyse, and manage your trades with precision and confidence.
        </p>

        <p className={`text ${styles.text}`}>
          Whether you trade on a Standard or Raw Spread account, you can expect a
          smooth and consistent trading experience designed to adapt to your
          trading style and objectives.
        </p>

        <p className={`text ${styles.textStrong}`}>
          Trade smarter and take control of the markets with Stonefort’s
          MetaTrader&nbsp;5.
        </p>

        <div className={styles.cta}>
          <Link href="/trade" className="button">
            Trade Now
          </Link>
        </div>
      </div>
    </section>
  );
}
