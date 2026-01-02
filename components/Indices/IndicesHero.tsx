import Link from "next/link";
import styles from "./IndicesHero.module.css";

export default function IndicesHero() {
  return (
    <section className={`section ${styles.hero}`}>
      

      <div className={`container ${styles.inner}`}>
        <div className={styles.bg} aria-hidden="true" />
        <div className={styles.left}>
          <h1 className={`heading ${styles.onImage}`}>
            Indices Trading with <br /> Stonefort
          </h1>

          <p className={`text ${styles.onImageMuted}`}>
            Trade major global indices and gain exposure to the world’s leading
            economies through a single position. With Stonefort’s margin trading
            environment, you can speculate on index price movements without owning
            underlying assets, benefiting from deep liquidity, tight spreads, and a
            regulated trading framework.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/register" className="button">
              Open an Account
            </Link>

            <Link href="/demo" className={`button ${styles.secondary}`}>
              Trade Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
