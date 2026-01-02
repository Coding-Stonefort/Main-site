import Link from "next/link";
import styles from "./WhyTradeStonefortAndFinalCta.module.css";

const FEATURES = [
  "Regulated and Licensed",
  "Proven Industry Expertise",
  "Dedicated Client Support",
  "Best-in-Class Trading Experience",
] as const;

export default function WhyTradeStonefortAndFinalCta() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* WHY TRADE */}
        <div className={styles.rail}>
          <div className={styles.railBg} aria-hidden="true" />
          {/*  Background image watermark */}
          <div className={styles.railImage} aria-hidden="true" />

          <div className={styles.left}>
            <span className={styles.kicker}>Trusted • Secure • Performance-driven</span>

            <h2 className={`heading ${styles.title}`}>
              Why Trade with Stonefort
              <span className={styles.subhead}>Built for Traders Who Think Bigger</span>
            </h2>

            <p className={`text ${styles.desc}`}>
              A professional environment designed to support serious traders with stability,
              expertise, and a premium trading experience.
            </p>

            <div className={styles.signal} aria-hidden="true">
              <span className={styles.pulse} />
              Trusted • Secure • Performance-driven
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.listHead}>
              <span className={styles.listTitle}>What you get</span>
              <span className={styles.listHint}>Reliable foundation for growth</span>
            </div>

            <ul className={styles.list}>
              {FEATURES.map((f) => (
                <li key={f} className={styles.item}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span className={styles.itemText}>{f}</span>
                  <span className={styles.scan} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className={styles.final}>
          <div className={styles.finalBg} aria-hidden="true" />

          <div className={styles.finalText}>
            <span className={styles.finalKicker}>100% Deposit Bonus</span>

            <h3 className={styles.finalTitle}>Trade Limitless with Stonefort</h3>

            <p className={`text ${styles.finalDesc}`}>
              Unlock extra trading power and take advantage of our{" "}
              <strong>100% Deposit Bonus</strong> on both <strong>FTD</strong> and{" "}
              <strong>Redeposits</strong>.
            </p>
          </div>

          <div className={styles.finalActions}>
            <Link href="/register" className={`button ${styles.cta}`}>
              Open an Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
