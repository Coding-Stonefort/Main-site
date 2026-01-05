"use client";

import styles from "./RealTimeInsightsSection.module.css";

type Props = {
  kicker?: string;
  title?: string;
  subtitle?: string;
  videoSrc: string; // YouTube embed OR MP4 url
  mode?: "embed" | "mp4";
};

export default function RealTimeInsightsSection({
  kicker = "Next Section",
  title = "Real-Time Trading Performance Insights",
  subtitle = `Successful trading isn’t only about the markets, it’s also about understanding your own behaviour.
Go beyond a traditional trading journal by accessing Performance Analytics directly from the platform to gain real-time insights into your strengths, weaknesses, and trading habits.`,
  videoSrc,
  mode = "embed",
}: Props) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          {/* LEFT */}
          <div className={styles.left}>
            <span className={styles.kicker}>{kicker}</span>

            <h2 className={`heading ${styles.title}`}>{title}</h2>

            <p className={`text ${styles.desc}`}>
              {subtitle.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx !== subtitle.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className={styles.points}>
              <div className={styles.point}>
                <span className={styles.dot} />
                Track behaviour patterns in real time
              </div>
              <div className={styles.point}>
                <span className={styles.dot} />
                Identify strengths & recurring mistakes
              </div>
              <div className={styles.point}>
                <span className={styles.dot} />
                Improve consistency with data-backed insight
              </div>
            </div>
          </div>

          {/* RIGHT: VIDEO */}
          <div className={styles.right}>
            <div className={styles.videoCard}>
              <div className={styles.videoTop}>
                <span className={styles.pill}>Performance Analytics</span>
                <span className={styles.pillMuted}>Live Insights</span>
              </div>

              <div className={styles.videoFrame}>
                {mode === "embed" ? (
                  <iframe
                    className={styles.iframe}
                    src={videoSrc}
                    title="Performance Analytics video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    className={styles.video}
                    src={videoSrc}
                    controls
                    playsInline
                    preload="metadata"
                  />
                )}

                {/* soft overlay for premium look */}
                <div className={styles.shine} aria-hidden="true" />
              </div>

              <div className={styles.caption}>
                See how Performance Analytics highlights discipline, timing, and
                emotional impact — directly from your trading platform.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
