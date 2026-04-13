import Link from "next/link";
import Image from "next/image";
import styles from "./EliteAccountHero.module.css";

export default function EliteHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={`badge ${styles.eyebrow}`}>Elite Account</div>

            <h1 className={`title ${styles.title}`}>
              Premium Conditions for
              <span className={styles.highlight}> Experienced Traders</span>
            </h1>

            <p className={`description ${styles.description}`}>
              The Stonefort Elite Account is built for experienced traders who
              require premium trading conditions and greater precision. With
              ultra-tight spreads, higher deposit capacity, professional-grade
              execution, and secure MT5 access, it delivers a more exclusive
              trading environment for those seeking top-tier performance.
            </p>

            <div className={styles.actions}>
              <Link href="/register" className="button">
                Open An Account
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.visualWrap}>
              <div className={styles.glow} aria-hidden="true" />

              <Image
                src="/images/advanceaccountbanner.webp"
                alt="Stonefort Elite Account"
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