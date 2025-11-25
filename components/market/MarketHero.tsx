// components/market/MarketHero.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./MarketHero.module.css";

type MarketHeroProps = {
  kicker?: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  buttonLabel?: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
};

export default function MarketHero({
  kicker = "Trade with Stonefort",
  titleLine1,
  titleLine2,
  subtitle,
  buttonLabel = "Open an Account",
  buttonHref = "/contact",
  imageSrc,
  imageAlt,
}: MarketHeroProps) {
  return (
    <section className={styles.hero}>
      {/* RIGHT SIDE FULL-WIDTH IMAGE */}
      <div className={styles.media}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.heroImage}
          priority
        />
      </div>

      {/* LEFT CONTENT IN 1240 CONTAINER */}
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.kicker}>{kicker}</p>

          <h1 className={styles.heading}>
            <span>{titleLine1}</span>
            <span>{titleLine2}</span>
          </h1>

          <p className={styles.subtitle}>{subtitle}</p>

          <Link href={buttonHref} className={styles.ctaButton}>
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
