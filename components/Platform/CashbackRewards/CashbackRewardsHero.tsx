import Link from "next/link";
import Image from "next/image";
import styles from "./CashbackRewardsHero.module.css";

export default function CashbackRewardsHero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.bg} aria-hidden="true" />

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h1 className={`heading ${styles.title}`}>
            Unlock Extra Trading Value with <br /> Stonefort Cashback
          </h1>

          <p className={`text ${styles.subtitle}`}>
            Receive cashback rewards of up to{" "}
            <span className={styles.accent}>USD 700</span>.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/register" className="button">
              Join Now
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.imageWrap}>
            <Image
              src="/images/notuse.webp"
              alt="Stonefort Cashback Rewards"
              fill
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
