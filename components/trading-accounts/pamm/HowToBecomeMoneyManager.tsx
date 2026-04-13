import styles from "./HowToBecomeMoneyManager.module.css";

const steps = [
  {
    number: "01",
    icon: "register",
    title: "Complete Your Application",
    text: "Submit your details and partnership preferences to start your journey as a Stonefort Partner.",
  },
  {
    number: "02",
    icon: "refer",
    title: "Connect with Our Premium Support Team",
    text: "Our dedicated partner onboarding team will assist you in setting up your account quickly and seamlessly.",
  },
  {
    number: "03",
    icon: "earn",
    title: "Let Clients Benefit from Your Expertise",
    text: "Enable clients to connect their accounts and start earning from your trading knowledge and professional strategies.",
  },
];

function StepIcon({ type }: { type: string }) {
  if (type === "register") {
    return (
      <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.2 0-7 2.1-7 5v1h14v-1c0-2.9-2.8-5-7-5Z" />
      </svg>
    );
  }

  if (type === "refer") {
    return (
      <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
        <path d="M7 7h10M7 12h10M7 17h6M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
      <path d="M12 3v18M6 9l6-6 6 6M6 15l6 6 6-6" />
    </svg>
  );
}

export default function HowToBecomeMoneyManager() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topContent}>
          <div className={`badge ${styles.badgeCustom}`}>Stonefort PAMM onboarding</div>

          <h2 className={`heading ${styles.title}`}>
            How to become a money manager
           
            <span className={styles.highlight}> in 3 easy steps</span>
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <article key={step.number} className={styles.card}>
              <div className={styles.cardGlow} />
              <div className={styles.cardTopLine} />

              <div className={styles.cardHeader}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.iconWrap}>
                  <StepIcon type={step.icon} />
                </div>
              </div>

              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.text}</p>

              {index < steps.length - 1 && <div className={styles.flowArrow} aria-hidden="true" />}
            </article>
          ))}
        </div>

        <div className={styles.ctaPanel}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Become a Money Manager</h3>
            <p className={styles.ctaText}>Log in to PAMM Portal</p>
          </div>

          <a href="#" className={`button ${styles.ctaButton}`}>
            Access Portal
          </a>
        </div>
      </div>
    </section>
  );
}