import styles from "./MT5AccountSteps.module.css";

type Step = {
  num: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Apply",
    desc: "Select the MT5 account type that suits your trading style.",
  },
  {
    num: "02",
    title: "Set Up",
    desc: "Complete the online registration in just a few minutes.",
  },
  {
    num: "03",
    title: "Verify",
    desc: "Confirm your identity to activate full trading access.",
  },
  {
    num: "04",
    title: "Fund",
    desc: "Deposit funds securely using available payment options.",
  },
  {
    num: "05",
    title: "Download",
    desc: "Download the MetaTrader 5 platform on your preferred device.",
  },
  {
    num: "06",
    title: "Trade",
    desc: "Start trading global markets with powerful tools and real-time execution.",
  },
];

export default function MT5AccountSteps() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 className={`heading ${styles.title}`}>Create Your MT5 Account</h2>
          <p className={`text ${styles.subtitle}`}>
            Get started on MetaTrader 5 with a seamless setup, secure onboarding,
            and flexible funding options designed to support a smooth and
            confident trading experience.
          </p>

          <div className={styles.kickerWrap}>
            <span className={styles.kicker}>Get Started in Six Simple Steps</span>
          </div>
        </header>

        <div className={styles.grid} role="list">
          {STEPS.map((s) => (
            <article key={s.num} className={styles.card} role="listitem">
              <div className={styles.topRow}>
                <span className={styles.num} aria-hidden="true">
                  {s.num}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
