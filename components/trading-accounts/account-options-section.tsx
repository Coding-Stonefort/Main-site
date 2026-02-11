import styles from "./account-options-section.module.css";

type Step = {
  title: string;
  description: string;
  icon: "application" | "fund" | "trade";
};

const STEPS: Step[] = [
  {
    icon: "application",
    title: "Complete the Application",
    description: "It only takes a few minutes.",
  },
  {
    icon: "fund",
    title: "Fund your account",
    description: "Transfer funds using a variety of funding methods.",
  },
  {
    icon: "trade",
    title: "Start Trading",
    description: "Take your investments to the next level.",
  },
];

function Icon({ name }: { name: Step["icon"] }) {
  if (name === "application") {
    return (
      <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
        <path
          d="M7 3h7l4 4v14H7V3zm7 1.5V8h3.5L14 4.5zM9 11h6v2H9v-2zm0 4h6v2H9v-2z"
          fill="currentColor"
        />
        <path
          d="M5 7H4v14a1 1 0 0 0 1 1h11v-1H5V7z"
          fill="currentColor"
          opacity="0.35"
        />
      </svg>
    );
  }

  if (name === "fund") {
    return (
      <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
        <path
          d="M12 3a1 1 0 0 1 1 1v1.06c1.72.22 3 1.18 3 2.44h-2c0-.62-.9-1.1-2-1.1s-2 .48-2 1.1c0 .7.93 1 2.35 1.33C14.46 9.3 17 9.86 17 12c0 1.5-1.45 2.44-4 2.73V16a1 1 0 1 1-2 0v-1.24C8.36 14.47 7 13.43 7 12h2c0 .8 1 1.35 3 1.35s3-.55 3-1.35c0-.76-1.14-1.06-2.9-1.48C9.9 10.1 8 9.56 8 7.5c0-1.26 1.28-2.22 3-2.44V4a1 1 0 0 1 1-1z"
          fill="currentColor"
        />
        <path
          d="M4 17h16v3H4v-3z"
          fill="currentColor"
          opacity="0.28"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={styles.iconSvg} aria-hidden="true">
      <path
        d="M4 19h16v2H4v-2z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M7 17V9h2v8H7zm4 0V5h2v12h-2zm4 0v-7h2v7h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AccountOptionsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.wrap}`}>
        {/* TOP COPY (CENTERED) */}
        <div className={styles.header}>
          <h2 className={`title ${styles.heading}`}>
            Explore Our Forex Trading
            <br />
            Account Options
          </h2>

          <p className={`description ${styles.lead}`}>
            Explore the best <strong>forex trading account</strong> options available
            with Stonefort Securities. Choose from{" "}
            <span className={styles.accent}>Starter</span>,{" "}
            <span className={styles.accent}>Advance</span>, or{" "}
            <span className={styles.accent}>Elite</span> online trading accounts
            designed for traders worldwide seeking{" "}
            <strong>low spreads, fast execution, and secure MT5 trading</strong>.
            Whether you’re new to trading or an experienced investor, our{" "}
            <strong>Stonefort trading accounts</strong> offer flexibility and
            transparency at every level.
          </p>
        </div>

        {/* BOXES */}
        <div className={styles.cards}>
          {STEPS.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.icon}>
                <Icon name={s.icon} />
              </div>

              <h3 className={`heading ${styles.cardTitle}`}>{s.title}</h3>
              <p className={`text ${styles.cardDesc}`}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
