import Link from "next/link";
import Image from "next/image";
import styles from "./StarterHero.module.css";

export default function StarterHero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Left content */}
          <div className={styles.content}>
            <span className={`badge ${styles.eyebrow}`}>Starter Account</span>

            <h1 className={`title ${styles.title}`}>
              Start Trading with Confidence
            </h1>

            <p className={`description ${styles.text}`}>
              The Stonefort Starter Account is designed for traders who want a
              simple and accessible way to enter the markets. With a low minimum
              deposit, competitive spreads, zero commission, and secure MT5
              access, it offers a practical starting point for your trading
              journey.
            </p>

            <div className={styles.actions}>
              <Link href="/register" className={`button ${styles.primaryButton}`}>
                Open a Starter Account
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className={styles.visual}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/Trade-CFDs-img.webp"
                alt="Stonefort Starter Account"
                fill
                priority
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}