// components/AwardCertificate.tsx
import styles from "./AwardCertificate.module.css";

export default function AwardCertificate() {
  return (
    <section className={`${styles.section} section`}>
      <div className={`container ${styles.container}`}>
        {/* ===================== HEADING + DESCRIPTION ===================== */}
        <div className={styles.headingWrap}>
          <h2 className={`title ${styles.headingTitle}`}>
            Choose a Broker Trusted by Traders Worldwide
          </h2>

          <p className={`description ${styles.headingDescription}`}>
            Stonefort is recognised for delivering a secure, transparent and
            client-focused trading experience in the global margin FX and CFD
            markets. Operating under the regulatory oversight of SCA and FSC,
            we are committed to maintaining high standards of integrity,
            platform reliability and customer support.
          </p>
        </div>

        {/* ===================== TWO CARDS GRID ===================== */}
        <div className={styles.grid}>
          {/* ===================== CARD 1 ===================== */}
          <article className={styles.card}>
            <div className={styles.trophyWrap}>
              <img
                src="/images/awards.webp"
                alt="Trophy"
                className={styles.trophyImg}
              />
            </div>

            <span className={styles.ribbon}>
              <strong>Winner</strong> · 2025–2026
            </span>

            <div className={styles.paper}>
              <div className={styles.paperInner}>
                <h3 className={styles.cardTitle}>
                  Best Emerging Broker 2025–2026
                </h3>

                <p className={styles.cardHighlights}>
                  <span className={styles.cardHighlightStrong}>
                    Recognised for growth & innovation
                  </span>
                  <span className={styles.cardHighlightDot}>•</span>
                  <span className={styles.cardHighlightSoft}>
                    Client-focused trading experience
                  </span>
                </p>

                <p className={styles.cardBody}>
                  Stonefort has been recognised for its growth, innovation and
                  client-focused approach, earning the Best Emerging Broker
                  award for 2025–2026.
                </p>
              </div>
            </div>

            <span className={styles.waxSeal}>
              <svg viewBox="0 0 64 64" width="64" height="64">
                <defs>
                  <radialGradient id="wax1" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="#f3f7f1" />
                    <stop offset="100%" stopColor="#4d6e55" />
                  </radialGradient>
                </defs>
                <circle cx="32" cy="32" r="28" fill="url(#wax1)" />
                <path
                  d="M22 33l6 6 14-14"
                  fill="none"
                  stroke="#4d6e55"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </article>

          {/* ===================== CARD 2 ===================== */}
          <article className={styles.card}>
            <div className={styles.trophyWrap}>
              <img
                src="/images/Top-100-award-scaled.webp"
                alt="Trophy"
                className={styles.trophyImg}
              />
            </div>

            <span className={styles.ribbon}>
              <strong>Top 100</strong> · GCC 2025–2026
            </span>

            <div className={styles.paper}>
              <div className={styles.paperInner}>
                <h3 className={styles.cardTitle}>
                  Top 100 Broker in the GCC 2025–2026
                </h3>

                <p className={styles.cardHighlights}>
                  <span className={styles.cardHighlightStrong}>
                    Strong presence across the GCC
                  </span>
                  <span className={styles.cardHighlightDot}>•</span>
                  <span className={styles.cardHighlightSoft}>
                    Trusted by traders in the Middle East
                  </span>
                </p>

                <p className={styles.cardBody}>
                  We are proud to be acknowledged as one of the Top 100 Brokers
                  in the GCC for 2025–2026, reflecting our regional strength and
                  commitment to delivering a trusted trading experience.
                </p>
              </div>
            </div>

            <span className={styles.waxSeal}>
              <svg viewBox="0 0 64 64" width="64" height="64">
                <defs>
                  <radialGradient id="wax2" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="#f3f7f1" />
                    <stop offset="100%" stopColor="#4d6e55" />
                  </radialGradient>
                </defs>
                <circle cx="32" cy="32" r="28" fill="url(#wax2)" />
                <path
                  d="M22 33l6 6 14-14"
                  fill="none"
                  stroke="#4d6e55"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}
