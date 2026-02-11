import Image from "next/image";
import styles from "./trading-account-hero.module.css";

export default function TradingAccountHero() {
  return (
    <section className={`section ${styles.heroSection}`}>
      <div className={`container ${styles.heroGrid}`}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className="badge">Trading Accounts</span>

          <h1 className="title">Stonefort Accounts</h1>

          <p className="description">
            Trade smarter with flexible account options for every level – Starter,
            Advanced, and Elite. Experience fast execution, secure MT5, and trusted
            global access.
          </p>

          <a href="/signup" className="button">
            Open an Account
          </a>
        </div>

        {/* RIGHT FLOATING IMAGE */}
        <div className={styles.visual}>
          <Image
            src="/images/account-types-hero.webp"
            alt="Stonefort account types mockups: Starter, Advanced, Elite"
            width={980}
            height={980}
            priority
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
