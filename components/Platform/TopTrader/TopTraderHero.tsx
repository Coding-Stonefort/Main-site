import Link from "next/link";
import Image from "next/image";
import styles from "./TopTraderHero.module.css";

export default function CashbackRewardsHero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.bg} aria-hidden="true" />

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h1 className={`heading ${styles.title}`}>
            Trade Smart. Rise to the Top. Get Rewarded.<br />  Trade Limitless
          </h1>

          <p className={`text ${styles.subtitle}`}>
            The Stonefort Top Trader Program rewards exceptional trading performance directly through the Stonefort Trading App. Traders are ranked based on weekly performance metrics, giving active traders the opportunity to earn crypto rewards for consistent results.
          </p>

          {/* META FEATURES */}
            <ul className={styles.metaList}>
            <li className={styles.metaItem}>App Exclusive</li>
            <li className={styles.metaDivider}>|</li>
            <li className={styles.metaItem}>Performance-Based</li>
            <li className={styles.metaDivider}>|</li>
            <li className={styles.metaItem}>Skill-Driven</li>
            </ul>


          <div className={styles.ctaRow}>
            <Link href="/register" className="button">
              Start Trading on the App
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.imageWrap}>
            <Image
              src="/images/toptraderhero.webp"
              alt="Stonefort Cashback Rewards"
              fill
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
