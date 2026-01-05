"use client";

import styles from "./TradingBehaviourSection.module.css";

type Step = {
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    title: "Build Your Trading Foundation",
    description:
      "Start with a clear, structured framework that defines how you trade and what success looks like.",
  },
  {
    title: "Control Discipline as You Trade",
    description:
      "Monitor discipline in real time with intuitive visual cues that help you stay focused and in control.",
  },
  {
    title: "Turn Experience into Insight",
    description:
      "Review past trading behaviour to understand the cost of mistakes and accelerate improvement.",
  },
  {
    title: "Trade with Emotional Awareness",
    description:
      "Recognise how emotions, market speed, volatility, and timing affect your results and act on your strengths.",
  },
];

export default function TradingBehaviourSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} aria-hidden="true" />

      <div className="container">
        {/* TOP: text left + image right */}
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <span className={styles.kicker}>Next Section</span>

            <h2 className={`heading ${styles.title}`}>
              Understand Your <br /> Trading Behaviour
            </h2>

            <p className={`text ${styles.desc}`}>
              In trading, self-awareness is a real edge. With Performance
              Analytics, you can better understand your trading behaviour and
              psychology through a structured approach designed to strengthen
              consistency and decision-making.
            </p>

            <p className={`text ${styles.desc}`}>
              Our framework follows four simple steps to help you improve:
            </p>
          </div>

          <div className={styles.topRight} aria-hidden="true">
            <img
              src="/images/fast-track-forex.webp"
              alt=""
              className={styles.heroVisual}
            />
          </div>
        </div>

        {/* BOTTOM: 2x2 cards */}
        <div className={styles.grid}>
          {STEPS.map((step, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.step}>{i + 1}</div>

              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
