import Image from "next/image";
import styles from "./HowToEarnCashback.module.css";

export default function HowToEarnCashback() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.kicker}>Cashback Rewards</div>

          <h2 className={`title ${styles.title}`}>How to Earn Your Cashback</h2>

          <p className={`text ${styles.subtitle}`}>
            Follow these simple steps to start earning cashback based on your trading activity.
          </p>

          <div className={styles.steps}>
            <article className={styles.card}>
              <div className={styles.topRow}>
                <span className={styles.stepNo}>01</span>
                <span className={styles.icon} aria-hidden="true">
                  👤
                </span>
              </div>
              <h3 className={styles.cardTitle}>Open a Live Account</h3>
              <p className={styles.cardText}>
                Complete your account setup quickly and access flexible leverage options designed for active trading.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.topRow}>
                <span className={styles.stepNo}>02</span>
                <span className={styles.icon} aria-hidden="true">
                  💳
                </span>
              </div>
              <h3 className={styles.cardTitle}>Fund Your Account</h3>
              <p className={styles.cardText}>
                Deposit funds easily using multiple payment methods with no deposit fees.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.topRow}>
                <span className={styles.stepNo}>03</span>
                <span className={styles.icon} aria-hidden="true">
                  📈
                </span>
              </div>
              <h3 className={styles.cardTitle}>Trade and Earn Cashback</h3>
              <p className={styles.cardText}>
                Trade the required volume and receive cashback rewards based on your trading activity, up to the
                applicable reward limit.
              </p>
            </article>
          </div>

          <p className={styles.terms}>Terms and conditions apply.</p>
        </div>

        {/* RIGHT (IMAGE) */}
        <div className={styles.right} aria-hidden="true">

            {/* Replace this with your actual image path */}
            <Image
              src="/images/earncashback.webp"
              alt=""
              width={760}
              height={560}
              className={styles.illustration}
              priority={false}
            />
  
        </div>
      </div>
    </section>
  );
}
