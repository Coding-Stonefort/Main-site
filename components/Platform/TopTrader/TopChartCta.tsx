import Link from "next/link";
import styles from "./TopChartCta.module.css";

const REASONS = [
  "Regulated and Licensed",
  "Trusted Trading Environment",
  "Dedicated Client Support",
  "Professional-Grade Trading Experience",
] as const;

export default function TopChartCta() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.layout}>
          {/* LEFT: CTA */}
          <div className={styles.ctaCard}>
            <div className={styles.ctaBg} aria-hidden="true" />

            <div className={styles.ctaContent}>
              <span className={`badge ${styles.badge}`}>Ready to compete?</span>

              <h2 className={`heading ${styles.title}`}>
                Think You Can <span className={styles.accent}>Top the Chart?</span>
              </h2>

              <p className={`text ${styles.subtitle}`}>
                Trade on the Stonefort App and compete for the{" "}
                <span className={styles.strong}>Top Trader of the Month</span> title.
              </p>

              <div className={styles.actions}>
                <Link href="/register" className={`button ${styles.primaryBtn}`}>
                  Open an Account
                </Link>

                <Link href="/platforms/stonefort-app" className={`button ${styles.ghostBtn}`}>
                  Trade via App
                </Link>
              </div>

              <div className={styles.micro}>
                <span className={styles.dot} aria-hidden="true" />
                App Exclusive • Performance-Based • Skill-Driven
              </div>
            </div>
          </div>

          {/* RIGHT: Reasons */}
          <div className={styles.reasons}>
            <div className={styles.reasonsHead}>
              <h3 className={styles.reasonsTitle}>Why Trade with Stonefort</h3>
              <p className={`text ${styles.reasonsSub}`}>
                Built for traders who value reliability, speed, and support.
              </p>
            </div>

            <div className={styles.reasonsGrid}>
              {REASONS.map((label) => (
                <div key={label} className={styles.reasonCard}>
                  <div className={styles.reasonIcon} aria-hidden="true">
                    <span className={styles.tick} />
                  </div>

                  <div className={styles.reasonText}>{label}</div>

                  <span className={styles.corner} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
