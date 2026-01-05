import Image from "next/image";
import styles from "./TradeWithSupportGuidance.module.css";
import type { ReactNode } from "react";
 
type IconKey = "signal" | "manager" | "analysis";

type Feature = {
  icon: IconKey;
  title: string;
  desc: string;
};

const FEATURES: Feature[] = [
  {
    icon: "signal",
    title: "FX Trade Signals",
    desc: "Enhance your trading decisions with timely trade signals supported by professional analysis tools.",
  },
  {
    icon: "manager",
    title: "Dedicated Relationship Manager",
    desc: "Work with trained relationship managers who guide, educate, and support you throughout your trading journey.",
  },
  {
    icon: "analysis",
    title: "Market Analysis",
    desc: "Stay ahead of market movements with real-time insights and research-driven analysis from our market experts.",
  },
];

const ICONS = {
  signal: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 19h16M6 16v-3m4 3V9m4 7V6m4 10v-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  manager: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M16 11a4 4 0 10-8 0 4 4 0 008 0z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 20a8 8 0 0116 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  analysis: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 19h16M6 17l4-6 3 3 5-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6h2v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
} satisfies Record<IconKey, ReactNode>;

function Icon({ name }: { name: IconKey }) {
  return ICONS[name];
}

export default function TradeWithSupportGuidance() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          {/* Left: Heading */}
          <div className={styles.left}>
            <span className={styles.kicker}>Next Section</span>

            <h2 className={`heading ${styles.title}`}>Trade with Support &amp; Guidance</h2>

            <p className={`text ${styles.subtitle}`}>
              Improve consistency with expert-backed signals, guidance, and real-time market intelligence built for active traders.
            </p>
          </div>

          {/* Right: Image panel */}
          <div className={styles.right}>
            <div className={styles.imageCard} aria-hidden="true">
              {/* Put your image here: /public/images/support-guidance.webp */}
              <Image
                src="/images/tradingview.webp"
                alt=""
                fill
                className={styles.image}
                priority
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageBadge}>
                <span className={styles.dot} />
                Live Insights
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>
                <Icon name={f.icon} />
              </div>

              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>

              <div className={styles.cardLine} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
