import Link from "next/link";
import styles from "./BonusProgrammeHero.module.css";

export default function BonusProgrammeHero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.bg} aria-hidden="true" />

        {/* LEFT */}
        <div className={styles.left}>


          <h1 className={`heading ${styles.title}`}>
            Trade Extra with Deposit Bonus <br />
            <span className={styles.accent}>Trade Limitless</span>
          </h1>

          <p className={`text ${styles.subtitle}`}>
            Boost your trading potential with a{" "}
            <span className={styles.highlight}>100% Deposit Bonus</span> and unlock
            greater market opportunities with enhanced trading credit.
          </p>

          <p className={`text ${styles.terms}`}>Terms &amp; Conditions apply</p>

          <div className={styles.ctaRow}>
            <Link href="/register" className="button">
              Join Now
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.mock}>
            <div className={styles.mockGlow} />

            <div className={styles.mockTop}>
              <div className={styles.pill}>100% Bonus</div>
              <div className={styles.pillAlt}>Deposit Credit</div>
            </div>

            <div className={styles.metricRow}>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>Bonus Rate</div>
                <div className={styles.metricValue}>100%</div>
              </div>

              <div className={styles.metric}>
                <div className={styles.metricLabel}>Status</div>
                <div className={styles.metricValueSmall}>Active Offer</div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.lines}>
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.line} />
            </div>

            <div className={styles.chips}>
              <span className={styles.chip}>Enhanced Margin</span>
              <span className={styles.chip}>More Flexibility</span>
              <span className={styles.chip}>Bigger Exposure</span>
            </div>

            <div className={styles.ribbon}>
              <span className={styles.dot} />
              Bonus credit applied after deposit
            </div>

            <div className={styles.orb} />
          </div>
        </div>
      </div>
    </section>
  );
}
