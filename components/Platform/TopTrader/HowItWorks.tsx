import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    title: "Trade via Stonefort App",
    description:
      "Execute your trades using the Stonefort mobile application during the contest period.",
  },
  {
    title: "Focus on Performance, Not Volume",
    description:
      "Rankings are based on highest ROI, encouraging disciplined and strategic trading.",
  },
  {
    title: "Top Traders Get Rewarded",
    description:
      "The highest-performing traders of the month receive exclusive rewards and recognition.",
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* Header */}
        <div className={styles.header}>
          <span className={`badge ${styles.badge}`}>Next Section</span>

          <h2 className={`heading ${styles.title}`}>
            How It Works <br />
            <span className={styles.subTitle}>How to Become Stonefort’s Top Trader</span>
          </h2>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {STEPS.map((step, idx) => (
            <article key={step.title} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.stepIndex} aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={`text ${styles.cardText}`}>{step.description}</p>

              {/* subtle corner glow */}
              <div className={styles.cardGlow} aria-hidden="true" />
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className={styles.noteWrap}>
          <p className={`text ${styles.note}`}>
            Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
}
