import Image from "next/image";
import styles from "./ExponentialGrowthSection.module.css";

export default function ExponentialGrowthSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT: content */}
        <div className={styles.left}>
          <h2 className="title">Trusted Growth Across Global Markets</h2>
          <p className={`text ${styles.copy}`}>
            With a strong and steadily growing presence in global markets,
            Stonefort has earned the trust of traders worldwide through
            consistent performance and reliable execution. Trading volumes
            across MetaTrader platforms have grown progressively over time,
            reflecting long-term client confidence and sustained market
            participation.
          </p>
        </div>

        {/* RIGHT: visuals */}
        <div className={styles.right} aria-label="Exponential growth visuals">
          <div className={styles.stack}>
            {/* Main chart */}
            <div className={styles.mainCard}>
              <Image
                src="/images/grothchart.webp"
                alt="Trading volume growth chart"
                fill
                className={styles.img}
                sizes="(max-width: 900px) 92vw, 560px"
                priority
              />
            </div>

            {/* Two supporting images */}
            <div className={styles.grid2}>
              <div className={styles.smallCard}>
                <Image
                  src="/images/MetaTrader-style chart.webp"
                  alt="MetaTrader-style growth chart"
                  fill
                  className={styles.img}
                  sizes="(max-width: 900px) 46vw, 260px"
                />
              </div>

              <div className={styles.smallCard}>
                <Image
                  src="/images/gtpgroth.webp"
                  alt="Global growth map visualization"
                  fill
                  className={styles.img}
                  sizes="(max-width: 900px) 46vw, 260px"
                />
              </div>
            </div>
          </div>

          {/* subtle brand glow */}
          <div className={styles.glow} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
