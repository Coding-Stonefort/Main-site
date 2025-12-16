import Link from "next/link";
import styles from "./StocksCtaBanner.module.css";

export default function StocksCtaBanner() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          {/* soft glow layer */}
          <span className={styles.glow} aria-hidden="true" />

          <div className={styles.content}>
            <h2 className={`title ${styles.title}`}>Ready to Trade Stocks?</h2>

            <p className={`description ${styles.description}`}>
              Start your trading journey with Stonefort today.
              <br />
              Open your account with a minimum deposit of just <strong>$50</strong>.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/register" className={`button ${styles.button}`}>
              Trade Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
