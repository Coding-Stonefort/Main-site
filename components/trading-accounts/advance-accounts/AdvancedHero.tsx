import Link from "next/link";
import Image from "next/image";
import styles from "./AdvancedHero.module.css";

export default function AdvancedHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={`badge ${styles.eyebrow}`}>Advanced Account</div>

            <h1 className={`title ${styles.title}`}>
              More Flexibility for
              <span className={styles.highlight}> Growing Traders</span>
            </h1>

            <p className={`description ${styles.description}`}>
              The Stonefort Advanced Account is designed for traders who are
              ready to take the next step. With tighter spreads, higher trading
              capacity, zero commission, and secure MT5 access, it offers a more
              refined trading experience for those seeking greater flexibility
              and stronger trading conditions.
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
                src="/images/homeBGa.webp"
                alt="Stonefort Advanced Account"
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