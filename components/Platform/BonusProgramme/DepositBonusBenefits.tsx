import styles from "./DepositBonusBenefits.module.css";

type Benefit = {
  title: string;
  desc: string;
  tag: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "Increase Trading Power",
    desc: "Enhance your trading capacity with additional bonus credit designed to support active strategies.",
    tag: "Extra Credit",
  },
  {
    title: "Opportunity for Diversification",
    desc: "Use the bonus credit to explore multiple instruments and diversify your trading approach.",
    tag: "More Instruments",
  },
  {
    title: "Up to USD 10,000 Credit per Account",
    desc: "Bonus credit is calculated on fresh deposits, available on both first-time deposits and redeposits.",
    tag: "Higher Limits",
  },
];

export default function DepositBonusBenefits() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT FEATURE */}
        <div className={styles.feature}>
          <div className={styles.featureBg} aria-hidden="true" />

          <div className={styles.featureContent}>
            <span className={`badge ${styles.badge}`}>Trade More with Deposit Bonus</span>

            <h2 className={`heading ${styles.title}`}>
              Power Your Trades <span className={styles.accent}>with Extra Credit</span>
            </h2>

            <p className={`text ${styles.subtitle}`}>
              Built to help active traders scale opportunities while maintaining disciplined execution.
            </p>

            <div className={styles.rule}>
              <span className={styles.ruleDot} aria-hidden="true" />
              Bonus is applicable on <strong>FTD</strong> and <strong>Rede posit</strong>.
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Max Credit</div>
                <div className={styles.statValue}>USD 10,000</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Eligible</div>
                <div className={styles.statValue}>FTD + Redeposit</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BENEFITS */}
        <div className={styles.grid}>
          {BENEFITS.map((b, i) => (
            <article key={b.title} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.index} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={styles.tag}>{b.tag}</div>
              </div>

              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={`text ${styles.cardDesc}`}>{b.desc}</p>

              <div className={styles.arrowBtn} aria-hidden="true">
                {/* <span className={styles.arrow} /> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
