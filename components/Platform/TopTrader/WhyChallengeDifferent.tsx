import styles from "./WhyChallengeDifferent.module.css";

type Item = {
  title: string;
  desc: string;
  icon: "roi" | "shield" | "app" | "rank";
};

const ITEMS: Item[] = [
  {
    icon: "roi",
    title: "ROI-Focused Competition",
    desc: "Rewards skill, strategy, and risk control.",
  },
  {
    icon: "shield",
    title: "No Overtrading Pressure",
    desc: "Performance matters more than volume.",
  },
  {
    icon: "app",
    title: "App-Exclusive Experience",
    desc: "Built to engage active mobile traders.",
  },
  {
    icon: "rank",
    title: "Transparent Ranking Logic",
    desc: "Clear, fair, and performance-based.",
  },
];

function Icon({ name }: { name: Item["icon"] }) {
  // Simple inline SVGs (no inline CSS, no Tailwind)
  if (name === "roi") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.svg}>
        <path
          d="M4 18V6m0 12h16M7 14l3-3 3 2 4-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 8h3v3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.svg}>
        <path
          d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "app") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.svg}>
        <path
          d="M9 3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 7h4M10 11h8M10 15h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.svg}>
      <path
        d="M7 7h10M7 12h10M7 17h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyChallengeDifferent() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Header */}
        <div className={styles.headingWrap}>
          <span className={`badge ${styles.badge}`}>Challenge</span>

          <h2 className={`heading ${styles.title}`}>
            Why This Challenge Is Different <br />
            <span className={styles.kicker}>Designed for Serious Traders</span>
          </h2>

          <p className={`text ${styles.subtitle}`}>
            A competition built around discipline and real performance — not unnecessary volume.
          </p>
        </div>

        {/* Layout */}
        <div className={styles.layout}>
          {/* Left highlight card */}
          <div className={styles.feature}>
            <div className={styles.featureBg} aria-hidden="true" />
            <div className={styles.featureContent}>
              <div className={styles.featureBadge}>Performance-first</div>
              <h3 className={styles.featureTitle}>Trade smarter. Rank higher.</h3>
              <p className={`text ${styles.featureText}`}>
                Your ROI drives your position — encouraging strategic entries, risk control, and
                consistency across the contest period.
              </p>

              <div className={styles.featureStats}>
                <div className={styles.stat}>
                  <div className={styles.statLabel}>Metric</div>
                  <div className={styles.statValue}>ROI</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statLabel}>Focus</div>
                  <div className={styles.statValue}>Discipline</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statLabel}>Experience</div>
                  <div className={styles.statValue}>Mobile</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right cards grid */}
          <div className={styles.grid}>
            {ITEMS.map((it) => (
              <article key={it.title} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon name={it.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{it.title}</h3>
                </div>

                <p className={`text ${styles.cardDesc}`}>{it.desc}</p>

                <div className={styles.arrowBtn} aria-hidden="true">
                  <span className={styles.arrow} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
