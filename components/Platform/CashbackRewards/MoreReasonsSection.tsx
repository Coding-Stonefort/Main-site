import styles from "./MoreReasonsSection.module.css";

const reasons = [
  {
    title: "Regulated and Licensed",
    desc: "Operate with confidence under strong compliance standards and clear governance.",
    icon: "shield",
  },
  {
    title: "Proven Industry Expertise",
    desc: "Built by professionals with deep market knowledge and robust execution practices.",
    icon: "spark",
  },
  {
    title: "Dedicated Customer Support",
    desc: "Responsive assistance to help you onboard smoothly and stay supported.",
    icon: "support",
  },
  {
    title: "Best-in-Class Trading Experience",
    desc: "Modern tools, reliable performance, and a streamlined trading environment.",
    icon: "star",
  },
] as const;

function Icon({ name }: { name: (typeof reasons)[number]["icon"] }) {
  return (
    <span className={styles.iconWrap} aria-hidden="true">
      {name === "shield" && (
        <svg viewBox="0 0 24 24" className={styles.icon} fill="none">
          <path
            d="M12 2.8 19 6v6.3c0 5-3.2 9.2-7 10.9-3.8-1.7-7-5.9-7-10.9V6l7-3.2Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9.2 12.1l1.9 1.9 3.9-4.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {name === "spark" && (
        <svg viewBox="0 0 24 24" className={styles.icon} fill="none">
          <path
            d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M19 14l.7 2.6L22 17l-2.3.4L19 20l-.7-2.6L16 17l2.3-.4L19 14Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {name === "support" && (
        <svg viewBox="0 0 24 24" className={styles.icon} fill="none">
          <path
            d="M6 12a6 6 0 1 1 12 0v5a2 2 0 0 1-2 2h-2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 13H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v-7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M18 13h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v-7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {name === "star" && (
        <svg viewBox="0 0 24 24" className={styles.icon} fill="none">
          <path
            d="M12 2.7l2.9 6 6.6.9-4.8 4.6 1.2 6.6L12 17.9 6.1 20.8l1.2-6.6-4.8-4.6 6.6-.9 2.9-6Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

export default function MoreReasonsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.kicker}>Trust • Service • Performance</div>
          <h2 className={`title ${styles.title}`}>More Reasons to Trade with Stonefort</h2>
          <p className={`text ${styles.subtitle}`}>
            A trading experience built around transparency, reliability, and client-first support.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((r) => (
            <article key={r.title} className={styles.card}>
              <div className={styles.cardTop}>
                <Icon name={r.icon} />
                <h3 className={styles.cardTitle}>{r.title}</h3>
              </div>
              <p className={styles.cardDesc}>{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
