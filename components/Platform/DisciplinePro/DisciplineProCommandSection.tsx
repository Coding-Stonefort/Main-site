"use client";

import Image from "next/image";
import styles from "./DisciplineProCommandSection.module.css";

type Item = {
  title: string;
  desc: string;
  iconSrc: string;
};

const ITEMS: Item[] = [
  {
    title: "Individual Risk",
    desc: "Monitor each open position and its distance from your defined targets and limits in a single, clear view.",
    iconSrc: "/images/individualTrader.png",
  },
  {
    title: "Daily Risk Limits",
    desc: "Track your daily risk exposure to stay resilient and navigate challenging trading sessions with confidence.",
    iconSrc: "/images/risktrader.png",
  },
  {
    title: "Open Trade Control",
    desc: "Set limits on the number of simultaneous positions to reduce overtrading and maintain execution discipline.",
    iconSrc: "/images/stockmt5.png",
  },
  {
    title: "Trading Streak Awareness",
    desc: "Identify harmful losing streaks early and know when to pause, reset, and protect your capital.",
    iconSrc: "/images/forexStrategies.png",
  },
];

export default function DisciplineProCommandSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT: 4 Cards */}
        <div className={styles.left}>
          <div className={styles.cards}>
            {ITEMS.map((item) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <Image
                      src={item.iconSrc}
                      alt={item.title}
                      width={26}
                      height={26}
                      className={styles.iconImage}
                      priority={false}
                    />
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>

                <p className={`text ${styles.cardDesc}`}>{item.desc}</p>

                {/* animation layers */}
                <div className={styles.cardSheen} aria-hidden="true" />
                <div className={styles.cardGlow} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className={styles.right}>
          <span className={styles.kicker}>DisciplinePro Gives You Command</span>

          <h2 className={`heading ${styles.title}`}>
            DisciplinePro Gives You Command
          </h2>

          <p className={`text ${styles.desc}`}>
            DisciplinePro helps you stay in control by reducing emotional trading
            and reinforcing disciplined decision-making in fast-moving forex markets.
          </p>

            <div className={styles.note}>
            Built for consistency • Designed for clarity • Focused on risk control
            </div>
        </div>
      </div>
    </section>
  );
}
