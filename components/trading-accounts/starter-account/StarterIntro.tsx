import styles from "./StarterIntro.module.css";

export default function StarterIntro() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          <div className={styles.inner}>
            <div className={styles.copy}>
              <span className={`badge ${styles.badge}`}>Why Choose Starter</span>

              <h2 className={`title ${styles.title}`}>
                A Smart First Step into Trading
              </h2>

              <p className={`description ${styles.text}`}>
                The Starter Account is suited for traders who want to begin with
                a lower deposit while still benefiting from fast execution,
                secure platform access, and flexible trading conditions. It is a
                strong option for new traders and for anyone looking for a
                straightforward account structure without added complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}