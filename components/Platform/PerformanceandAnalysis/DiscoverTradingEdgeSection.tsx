"use client";

import { useMemo, useState } from "react";
import styles from "./DiscoverTradingEdgeSection.module.css";

type Edge = {
  id: "strategy" | "timing" | "psychology";
  kicker: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  youtubeId: string; // <- per card video
};

const EDGES: Edge[] = [
  {
    id: "strategy",
    kicker: "Strategy Edge",
    title: "See what truly works",
    desc: "Evaluate your P&L, overall performance, win ratio, and key trading metrics to identify what works best for you.",
    youtubeId: "39aNnXPaDR4", // replace if needed
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
    id: "timing",
    kicker: "Timing Edge",
    title: "Find your best sessions",
    desc: "Break down your results by time of day and trading sessions to uncover when you perform at your best.",
    youtubeId: "39aNnXPaDR4", // replace if needed
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
    id: "psychology",
    kicker: "Psychology Edge",
    title: "Trade with awareness",
    desc: "Explore how emotions and behavioural patterns influence your trading decisions and outcomes.",
    youtubeId: "39aNnXPaDR4", // replace if needed
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

function ytThumb(id: string) {
  // Best quality commonly available; YouTube will fallback if not available
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function ytEmbed(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
}

export default function DiscoverTradingEdgeSection() {
  // keep track of which cards have activated video
  const [active, setActive] = useState<Record<string, boolean>>({});

  const items = useMemo(() => EDGES, []);

  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.kicker}>Next Section</span>

          <div className={styles.headRow}>
            <div>
              <h2 className={`heading ${styles.title}`}>Discover Your Trading Edge</h2>

              <p className={`text ${styles.desc}`}>
                Understand where your strengths truly lie by analysing performance,
                timing, and trading psychology through short, step-by-step videos.
              </p>
            </div>

            <div className={styles.chips}>
              <span className={styles.chip}>Short videos</span>
              <span className={styles.chip}>Step-by-step</span>
              <span className={styles.chip}>Real insights</span>
            </div>
          </div>
        </div>

        {/* Cards with videos */}
        <div className={styles.grid}>
          {items.map((item) => {
            const isActive = !!active[item.id];
            return (
              <article key={item.id} className={styles.card}>
                {/* Video area */}
                <div className={styles.videoFrame}>
                  {!isActive ? (
                    <button
                      type="button"
                      className={styles.posterBtn}
                      onClick={() => setActive((s) => ({ ...s, [item.id]: true }))}
                      aria-label={`Play ${item.kicker} video`}
                    >
                      <img
                        src={ytThumb(item.youtubeId)}
                        alt=""
                        className={styles.posterImg}
                        loading="lazy"
                      />
                      <span className={styles.posterOverlay} aria-hidden="true" />
                      <span className={styles.play} aria-hidden="true">
                        ▶
                      </span>
                      <span className={styles.videoTag}>{item.kicker}</span>
                    </button>
                  ) : (
                    <iframe
                      className={styles.iframe}
                      src={ytEmbed(item.youtubeId)}
                      title={`${item.kicker} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}

                  <div className={styles.shine} aria-hidden="true" />
                </div>

                {/* Content */}
                <div className={styles.cardBody}>
                  <div className={styles.iconWrap}>{item.icon}</div>

                  <div className={styles.cardHead}>
                    <span className={styles.cardKicker}>{item.kicker}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>

                  <p className={styles.cardText}>{item.desc}</p>
                </div>

                <div className={styles.cardGlow} aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
