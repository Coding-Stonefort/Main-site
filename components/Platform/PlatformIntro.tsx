"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PlatformIntro.module.css";

type PlatformIntroProps = {
  /** Optional right-side image (you can remove the visual by passing hideVisual) */
  imageSrc?: string;
  imageAlt?: string;
  ctaHref?: string;
  hideVisual?: boolean;
};

export default function PlatformIntro({
  imageSrc = "/images/platformIntoImg.webp", // change to your platform mockup if needed
  imageAlt = "Stonefort trading platforms",
  ctaHref = "/platforms",
  hideVisual = false,
}: PlatformIntroProps) {
  return (
    <section className={`${styles.section} section`}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <div className={styles.grid}>
          {/* Left content */}
          <div className={styles.content}>
            <p className={styles.kicker}>Designed for the Way You Trade</p>

            <h2 className={`${styles.heading} heading`}>
              Designed for the Way You Trade
            </h2>

            <p className={`${styles.desc} text`}>
              Whether you are just getting started or already an experienced
              trader, Stonefort offers the right platform to match your trading
              style and objectives. Our suite of trading platforms is built to
              deliver reliable performance, responsive execution, and the
              flexibility you need to stay in control of your trading
              experience.
            </p>

            <div className={styles.actions}>
              <Link href={ctaHref} className={`button ${styles.cta}`}>
                Get Hands-On with Our Trading Platforms
              </Link>
            </div>
          </div>

          {/* Right visual (optional) */}
          {!hideVisual && (
            <div className={styles.visual} aria-hidden="true">
              <div className={styles.glow} />
              <div className={styles.imageWrap}>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={900}
                  height={700}
                  className={styles.image}
                  priority
                />
                <div className={styles.baseGlow} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
