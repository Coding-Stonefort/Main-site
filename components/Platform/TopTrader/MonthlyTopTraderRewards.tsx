import styles from "./MonthlyTopTraderRewards.module.css";

type Tier = {
  rank: "1st" | "2nd" | "3rd";
  title: string;
  subtitle: string;
  reward: string;
  bgImage: string;
};

const TIERS: Tier[] = [
  {
    rank: "1st",
    title: "Top Trader of the Month",
    subtitle: "Highest ROI across all eligible traders",
    reward: "$500 + official recognition in the Website",
    bgImage: "/images/1st.webp",
  },
  {
    rank: "2nd",
    title: "Strong Performer",
    subtitle: "Second-highest ROI for the month",
    reward: "$300 + official recognition in the Website",
    bgImage: "/images/2nd.webp",
  },
  {
    rank: "3rd",
    title: "Rising Trader",
    subtitle: "Third-highest ROI",
    reward: "$100 + official recognition in the Website",
    bgImage: "/images/3rd.webp",
  },
];

function medal(rank: Tier["rank"]) {
  if (rank === "1st") return "🥇";
  if (rank === "2nd") return "🥈";
  return "🥉";
}

export default function MonthlyTopTraderRewards() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Heading */}
        <div className={styles.headingWrap}>
          <span className={`badge ${styles.badge}`}>Monthly Top Trader Rewards</span>
          <h2 className={`heading ${styles.title}`}>
            Top ROI. <span className={styles.accent}>Real Recognition.</span>
          </h2>
          <p className={`text ${styles.subtitle}`}>
            Compete by performance and earn rewards plus official website recognition.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {TIERS.map((t) => (
            <article
              key={t.rank}
              className={styles.card}
              style={{ "--bg-image": `url(${t.bgImage})` } as React.CSSProperties}
            >
              {/* background image layer */}
              <div className={styles.cardBg} aria-hidden="true" />

              {/* content */}
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <div className={styles.rankRow}>
                    <span className={styles.medal}>{medal(t.rank)}</span>
                    <span className={styles.rankText}>{t.rank} Rank</span>
                  </div>

                  <div className={styles.rewardPill}>
                    {t.reward.split(" + ")[0]}
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{t.title}</h3>
                <p className={`text ${styles.cardDesc}`}>{t.subtitle}</p>

                <div className={styles.meta}>
                  <span className={styles.metaLabel}>Reward</span>
                  <span className={styles.metaValue}>{t.reward}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className={`text ${styles.note}`}>
          ROI calculations are based on net performance during the contest period.
        </p>
      </div>
    </section>
  );
}
