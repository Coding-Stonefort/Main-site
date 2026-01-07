import Link from "next/link";
import styles from "./DisciplineProHero.module.css";
import Image from "next/image";

export default function DisciplineProHero() {
  return (
    <section className={`section ${styles.hero}`}>
      {/* ambient background */}
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.glowA} />
        <span className={styles.glowB} />
        <span className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            DisciplinePro • PlayMaker Insights
          </div>

            <h1 className={`heading ${styles.title}`}>
            <span className={styles.line}>
                Trade with <span className={styles.accent}>Discipline.</span>
            </span>
            <span className={styles.line}>
                Perform with <span className={styles.accent}>Confidence.</span>
            </span>
            </h1>

          <p className={`text ${styles.lead}`}>
            In forex trading, no two sessions are ever the same. Volatility, news,
            and emotions can challenge even experienced traders. PlayMaker is
            designed to keep your decision-making structured, focused, and aligned
            with your trading objectives regardless of market conditions.
          </p>

          <p className={`text ${styles.lead2}`}>
            By delivering real-time insights into your trading behavior, PlayMaker
            helps you identify discipline gaps, manage risk with clarity, and avoid
            impulsive decisions that often lead to unnecessary losses. It acts as a
            silent trading companion, reinforcing consistency while you stay in
            control of execution.
          </p>

          <ul className={styles.bullets}>
            <li>
              <span className={styles.tick} aria-hidden="true">✓</span>
              Stay in control of your decisions
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true">✓</span>
              Apply disciplined risk management
            </li>
            <li>
              <span className={styles.tick} aria-hidden="true">✓</span>
              Monitor and strengthen trading consistency
            </li>
          </ul>

          <div className={styles.ctaRow}>
            <Link href="/register" className={`button ${styles.primary}`}>
              Get Started
            </Link>

            <Link href="/platform-tutorial" className={`button ${styles.secondary}`}>
              View Demo
            </Link>
          </div>

          <div className={styles.micro}>
            <span className={styles.microPill}>Real-time Behavior Insights</span>
            <span className={styles.microPill}>Risk Clarity</span>
            <span className={styles.microPill}>Consistency Tracking</span>
          </div>
        </div>

       {/* Right*/}
       <div className={styles.right} aria-hidden="true">
            <div className={styles.imageWrap}>
                <Image 
                    src="/images/Disciplinehero.jpg"
                    alt="Trader analysing disciplined trading performance and risk management"
                    fill
                    priority
                    className={styles.heroImage}
                />

                <div className={styles.imageOverlay}/>
                <div className={styles.imageGlow}/>
            </div>
       </div>
      </div>
    </section>
  );
}
