"use client";

import Image from "next/image";
import styles from "./MT5Advanced.module.css";

type Feature = {
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    title: "Expert Advisors",
    text:
      "Automate your trading strategies on MT5 using advanced algorithms, with built-in tools to test and refine your approach before going live.",
  },
  {
    title: "Trade Anytime, Anywhere",
    text:
      "Use MT5 across desktop, web, and mobile on iOS and Android for a seamless trading experience.",
  },
  {
    title: "Trade Beyond Forex with MT5",
    text:
      "Access an expanded range of CFD shares and global instruments designed to support diversified trading strategies.",
  },
];

export default function MT5Advanced() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <h2 className={`heading ${styles.heading}`}>
              Advanced Trading with <span className={styles.brand}>MetaTrader 5</span>
            </h2>

            <p className={`description ${styles.lead}`}>
              Advanced tools, integrated insights, and exclusive EAs and indicators designed to elevate
              your trading experience.
            </p>

            <div className={styles.features}>
              {FEATURES.map((f) => (
                <div key={f.title} className={styles.feature}>
                  <div className={styles.bullet} aria-hidden="true" />
                  <div className={styles.featureBody}>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureText}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <a className={`button ${styles.cta}`} href="/platforms/metatrader-5">
                Explore MetaTrader 5
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right} aria-label="MetaTrader 5 platform mockup">
            <div className={styles.mockupCard}>
              <Image
                src="/images/Terminalmt5.webp"
                alt="MetaTrader 5 platform mockup"
                width={980}
                height={760}
                className={styles.mockup}
                priority
              />
            </div>

            {/* subtle glow */}
            <div className={styles.glow} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
