"use client";

import styles from "./DiscoverTradingEdgeSection.module.css";

type Edge = {
  title: string;
  kicker: string;
  desc: string;
  icon: React.ReactNode;
};

const EDGES: Edge[] = [
  {
    kicker: "Strategy Edge",
    title: "See what truly works",
    desc: "Evaluate your P&L, overall performance, win ratio, and key trading metrics to identify what works best for you.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 19V5m0 14h16M7 15l3-4 3 3 5-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    kicker: "Timing Edge",
    title: "Find your best sessions",
    desc: "Break down results by time of day and trading sessions to uncover when you perform at your best.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 8v5l3 2M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    kicker: "Psychology Edge",
    title: "Trade with awareness",
    desc: "Explore how emotions and behavioural patterns influence your trading decisions and outcomes.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 21s-7-4.6-9.5-9A6 6 0 0 1 12 4a6 6 0 0 1 9.5 8c-2.5 4.4-9.5 9-9.5 9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function DiscoverTradingEdgeSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} aria-hidden="true" />

      <div className="container">
        {/* Top row: Text + Video */}
        <div className={styles.top}>
          <div className={styles.left}>
            <span className={styles.kicker}>Next Section</span>

            <h2 className={`heading ${styles.title}`}>Discover Your Trading Edge</h2>

            <p className={`text ${styles.desc}`}>
              Understand where your strengths truly lie by analysing performance,
              timing, and trading psychology through short, step-by-step videos.
            </p>

            {/* Small chips to make it “eye-catchy” */}
            <div className={styles.chips}>
              <span className={styles.chip}>Short videos</span>
              <span className={styles.chip}>Step-by-step</span>
              <span className={styles.chip}>Real insights</span>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.videoCard}>
              <div className={styles.videoTop}>
                <span className={styles.pill}>Video Guides</span>
                <span className={styles.pillMuted}>Performance Analytics</span>
              </div>

              <div className={styles.videoFrame}>
                <iframe
                  className={styles.iframe}
                  src="https://www.youtube.com/embed/39aNnXPaDR4?rel=0&modestbranding=1"
                  title="Discover your trading edge"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className={styles.shine} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: 3 cards */}
        <div className={styles.grid}>
          {EDGES.map((item) => (
            <article key={item.kicker} className={styles.card}>
              <div className={styles.iconWrap}>{item.icon}</div>

              <div className={styles.cardHead}>
                <span className={styles.cardKicker}>{item.kicker}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>

              <p className={styles.cardText}>{item.desc}</p>

              <div className={styles.cardGlow} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
