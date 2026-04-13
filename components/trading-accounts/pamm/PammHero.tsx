import Image from "next/image";
import styles from "./PammHero.module.css";

export default function PammHero() {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/images/PAMMHeroBg.webp"
        alt="Stonefort PAMM background"
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.overlay} />
      <div className={styles.gridOverlay} />
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={`badge ${styles.badgeCustom}`}>Stonefort PAMM</div>

          <h1 className={`heading ${styles.heroTitle}`}>
            Stonefort <span className={styles.highlight}>PAMM</span>
          </h1>

          <p className={`text ${styles.heroSubtitle}`}>
            Become a Fund Manager with Stonefort.
          </p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.cardGlow} />

          <h2 className={`heading ${styles.infoTitle}`}>
            Experience Professional Portfolio Growth
            
            with Stonefort <span className={styles.highlight}>PAMM</span>
          </h2>

          <p className={`text ${styles.infoText}`}>
            Let skilled fund managers trade on your behalf through Stonefort’s
            PAMM (Percentage Allocation Management Module). Enjoy transparent
            profit sharing, risk diversification, and full control over your
            investments.
          </p>
        </div>
      </div>
    </section>
  );
}