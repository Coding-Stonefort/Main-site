import styles from "./GlowRibbon.module.css";

export default function GlowRibbon() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.bgGlow} />
      <div className={styles.haze} />

      <span className={`${styles.ribbon} ${styles.ribbon1}`} />
      <span className={`${styles.ribbon} ${styles.ribbon2}`} />
      <span className={`${styles.ribbon} ${styles.ribbon3}`} />
      <span className={`${styles.ribbon} ${styles.ribbon4}`} />

      <span className={`${styles.sparkles} ${styles.sparkles1}`} />
      <span className={`${styles.sparkles} ${styles.sparkles2}`} />
    </div>
  );
}