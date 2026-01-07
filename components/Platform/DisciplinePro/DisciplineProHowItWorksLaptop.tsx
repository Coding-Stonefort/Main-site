import Image from "next/image";
import styles from "./DisciplineProHowItWorksLaptop.module.css";

export default function DisciplineProHowItWorksLaptop() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* ===== Heading + Body Text ===== */}
        <div className={styles.headingWrap}>
          <h2 className={`title ${styles.heading}`}>How DisciplinePro Works</h2>

          <p className={`description ${styles.paragraph}`}>
            DisciplinePro monitors every trade against your defined trading plan.
            Each closed position is evaluated based on discipline and rule adherence,
            regardless of whether the trade ends in profit or loss, helping you focus
            on decision quality, not just outcomes.
          </p>
        </div>

        {/* ===== Laptop mockup ===== */}
        <div className={styles.tabWrap}>
          <div className={styles.laptopShell}>
            <div className={styles.laptopScreen}>
              <Image
                src="/images/disciplinepro-panel.png"
                alt="DisciplinePro Dashboard"
                fill
                priority={false}
                className={styles.screenImage}
                sizes="(max-width: 560px) 88vw, (max-width: 1024px) 70vw, 650px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
