import Image from "next/image";
import styles from "./mission-quote-section.module.css";

export default function MissionQuoteSection() {
  return (
    <section className={styles.section}>
      {/* Desktop stripe */}
      <div className={styles.rail} aria-hidden="true" />

      {/* Desktop logo cap */}
      <div className={styles.logoCap} aria-hidden="true">
        <Image
          src="/images/stoneforthalf.webp"
          alt=""
          width={700}
          height={700}
          className={styles.logoImg}
          priority={false}
        />
      </div>

      <div className={`container ${styles.content}`}>
        {/* ✅ DESKTOP QUOTE (shows on desktop only) */}
        <div className={styles.desktopQuote}>
          <div className={styles.quoteWrap}>
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>

            <p className={styles.quoteText}>
              At Stonefort, our mission is to simplify every step, allowing you
              to prioritise what matters the most – <em>your trading journey</em>.
            </p>
          </div>
        </div>

        {/* ✅ TABLET/MOBILE 2-COLUMN QUOTE (shows on tablet/mobile only) */}
        <div className={styles.twoCol}>
          <div className={styles.logoCol} aria-hidden="true">
            <Image
              src="/images/stoneforthalf.webp"
              alt=""
              width={700}
              height={700}
              className={styles.mobileLogoImg}
              priority={false}
            />
          </div>

          <div className={styles.textCol}>
            <div className={styles.quoteWrapMobile}>
              <span className={styles.quoteMarkMobile} aria-hidden="true">
                “
              </span>

              <p className={styles.quoteTextMobile}>
                At Stonefort, our mission is to simplify every step, allowing you
                to prioritise what matters the most – <em>your trading journey</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
