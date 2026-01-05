import Link from "next/link";
import TradingLine from "@/components/TradingLine";
import styles from "./MaximiseWebTradingExperience.module.css";

export default function MaximiseWebTradingExperience() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          <div className={styles.bg} aria-hidden="true" />

          <div className={styles.content}>
            <span className={styles.kicker}>Next Section</span>

            <h2 className={`heading ${styles.title}`}>
              Maximise Your Web Trading Experience
            </h2>

            <p className={`text ${styles.desc}`}>
              Learn how to use our web trading platform efficiently through step-by-step video guides.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/platform-tutorial" className={`button ${styles.cta}`}>
                Platform Tutorial
              </Link>
            </div>
          </div>

          {/*  DECOR ZONE (right side visuals) */}
          <div className={styles.decor} aria-hidden="true">
            <div className={styles.orb} />
            <div className={styles.ring} />
            <div className={styles.grid} />

            {/*  Trading line lives HERE */}
            <TradingLine className={styles.tradingLineDecor} />
          </div>
        </div>
      </div>
    </section>
  );
}
