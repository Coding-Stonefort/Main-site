import Image from "next/image";
import styles from "../advance-accounts/AdvancedAccountHero.module.css";

export default function EliteAccountHero() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bgWrap} aria-hidden="true">
        <Image
          src="/images/maximiseTrading.webp"
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
              <div className={`badge ${styles.badgeCustom}`}>Elite Account</div>

              <h2 className={`heading ${styles.headingCustom}`}>
                Premium Conditions for{" "}
                <span className={styles.highlight}>Experienced Traders</span>
              </h2>

              <p className={`text ${styles.textCustom}`}>
                The Elite Account is designed for experienced traders who want
                tighter spreads, premium trading conditions, and a more refined
                trading environment. With professional-grade execution, secure
                MT5 access, and stronger account parameters, it delivers a more
                exclusive trading experience.
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
                    src="/images/howforexwork1a.webp"
                    alt="Elite trading app mockup"
                    width={700}
                    height={900}
                    priority
                  />
                </div>

                <div className={styles.frontPhone}>
                  <Image
                    src="/images/sfx-mobile.webp"
                    alt="Elite trading app mockup"
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