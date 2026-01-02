import Link from "next/link";
import styles from "./HowToGetCreditBonus.module.css";

const STEPS = [
  {
    step: "01",
    title: "Open a Live Account",
    desc: "Get started within minutes and trade with leverage of up to 1:1000.",
  },
  {
    step: "02",
    title: "Fund Your Account",
    desc: "Deposit securely using multiple payment methods with zero deposit fees.",
  },
  {
    step: "03",
    title: "Trade and Unlock the Bonus Advantage",
    desc: "Trade according to the required volume to benefit from the bonus credit and enhanced margin flexibility.",
  },
];

export default function HowToGetCreditBonus() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Heading */}
        <div className={styles.headingWrap}>
          <span className={`badge ${styles.badge}`}>Credit Bonus</span>

          <h2 className={`heading ${styles.title}`}>
            How to Get Your Credit Bonus
          </h2>

          <p className={`text ${styles.subtitle}`}>
            Simple Steps. <span className={styles.accent}>Instant Advantage.</span>
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {STEPS.map((item, index) => (
            <div key={item.step} className={styles.stepCard}>
              {/* connector line */}
              {index !== STEPS.length - 1 && (
                <span className={styles.connector} aria-hidden="true" />
              )}

              <div className={styles.stepTop}>
                <span className={styles.stepIndex}>{item.step}</span>
              </div>

              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={`text ${styles.stepDesc}`}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <Link href="/register" className={`button ${styles.cta}`}>
            Open an Account
          </Link>
        </div>
      </div>
    </section>
  );
}
