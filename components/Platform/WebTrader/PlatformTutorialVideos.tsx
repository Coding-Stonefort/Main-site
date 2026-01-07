import styles from "./PlatformTutorialVideos.module.css";

type VideoItem = {
  title: string;
  desc: string;
  // Use ONE of these:
  embedUrl?: string; // YouTube/Vimeo embed URL
  mp4Url?: string;   // Local/remote mp4
  duration?: string; // optional badge text e.g. "02:14"
};

const VIDEOS: VideoItem[] = [
  {
    title: "Getting Started",
    desc: "Platform overview, panels, and essential settings to begin confidently.",
    embedUrl: "https://www.youtube.com/embed/FdobhDSyZMI",
    duration: "0.53",
  },
  {
    title: "Placing Your First Trade",
    desc: "Order types, sizing, and quick ways to place precise entries & exits.",
    embedUrl: "https://www.youtube.com/embed/UXG3c1TWEWQ",
    duration: "03:06",
  },
  {
    title: "Charts & Indicators",
    desc: "Timeframes, indicators, and layouts to analyze faster and trade smarter.",
    embedUrl: "https://www.youtube.com/embed/FdobhDSyZMI",
    duration: "0.53",
  },
];

export default function PlatformTutorialVideos() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <span className={styles.kicker}>Platform Tutorials</span>
          <h2 className={`heading ${styles.title}`}>Learn Faster with Short Video Guides</h2>
          <p className={`text ${styles.subtitle}`}>
            Three quick walkthroughs designed to help you navigate the platform, place orders, and read the markets with confidence.
          </p>
        </header>

        <div className={styles.grid}>
          {VIDEOS.map((v) => (
            <article key={v.title} className={styles.card}>
              <div className={styles.media}>
                {/* background grid + glow */}
                <div className={styles.mediaBg} aria-hidden="true" />
                <div className={styles.mediaGlow} aria-hidden="true" />

                {/* Video */}
                {v.embedUrl ? (
                  <iframe
                    className={styles.iframe}
                    src={v.embedUrl}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : v.mp4Url ? (
                  <video className={styles.video} controls preload="metadata">
                    <source src={v.mp4Url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className={styles.placeholder}>Add embedUrl or mp4Url</div>
                )}

                {/* Overlay UI */}
                <div className={styles.badges} aria-hidden="true">
                  <div className={styles.playBadge}>
                    <span className={styles.playIcon} />
                    Watch
                  </div>
                  {v.duration ? <div className={styles.timeBadge}>{v.duration}</div> : null}
                </div>
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardDesc}>{v.desc}</p>
              </div>

              <div className={styles.edge} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
