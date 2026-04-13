import Link from "next/link";
import Image from "next/image";
import styles from "./DemoaccountHero.module.css";

export default function DemoaccountHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={`badge ${styles.eyebrow}`}>Demo Account</div>

            <h1 className={`title ${styles.title}`}>
              Practice Trading with
              <span className={styles.highlight}> Confidence</span>
            </h1>

            <p className={`description ${styles.description}`}>
              The Stonefort Demo Account is designed for traders who want to
              explore the platform, test strategies, and build confidence before
              moving to live markets. It gives you a risk-free way to experience
              MT5, understand market conditions, and practice trading in a
              secure simulated environment.
            </p>

            <div className={styles.actions}>
              <Link href="/register" className="button">
                Open Demo Account
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.visualWrap}>
              <div className={styles.glow} aria-hidden="true" />

              <Image
                src="/images/payment-bg.webp"
                alt="Stonefort Demo Account"
                width={720}
                height={620}
                priority
                className={styles.visual}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}