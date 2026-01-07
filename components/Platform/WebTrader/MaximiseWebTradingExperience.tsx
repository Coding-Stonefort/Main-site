import Link from "next/link";
import LiveChart from "@/components/LiveChart";
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

          {/* RIGHT: REAL CHART PANEL */}
          <div className={styles.chartDecor} aria-hidden="true">
            <div className={styles.chartFrame}>
              <div className={styles.chartHeader}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.chartTitle}>Live Preview</span>
              </div>

              <div className={styles.chartBody}>
                <LiveChart className={styles.liveChart} />
              </div>
            </div>

            {/* keep your soft grid fade */}
            <div className={styles.grid} />
          </div>
        </div>
      </div>
    </section>
  );
}
