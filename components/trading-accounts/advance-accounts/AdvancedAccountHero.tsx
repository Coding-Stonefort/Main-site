import Image from "next/image";
import styles from "./AdvancedAccountHero.module.css";

export default function AdvancedAccountHero() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bgWrap} aria-hidden="true">
        <Image
          src="/images/advanceaccounfbg.webp"
          alt=""
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
        <div className={styles.bgBlend} />
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.panel}>
          <div className={styles.glassHighlight} />

          <div className={styles.content}>
            <div className={styles.copy}>
              <div className={`badge ${styles.badgeCustom}`}>Advanced Account</div>

              <h2 className={`heading ${styles.headingCustom}`}>
                A Balanced Account for <span className={styles.highlight}> Serious Trading</span>
              </h2>

              <p className={`text ${styles.textCustom}`}>
                The Advanced Account offers tighter spreads than entry-level
                options, with zero commission and flexible leverage - ideal for
                growing traders needing active, straightforward trading
                conditions.
              </p>

              <div className={styles.actions}>
                <a href="#" className={`button ${styles.primaryBtn}`}>
                  Open Account
                </a>
                <a href="#" className={styles.secondaryBtn}>
                  Try Free Demo
                </a>
              </div>
            </div>

            <div className={styles.visual}>
              <div className={styles.mockupWrap}>
                <div className={styles.backPhone}>
                  <Image
                    src="/images/advancemobilem.webp"
                    alt="Trading app mockup"
                    width={700}
                    height={900}
                    priority
                  />
                </div>

                <div className={styles.frontPhone}>
                  <Image
                    src="/images/advancemobilem.webp"
                    alt="Trading app mockup"
                    width={700}
                    height={900}
                    priority
                  />
                </div>

                <div className={styles.phoneGlow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}