"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./StoneforTraderHero.module.css";

export default function StonefortTraderHero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={`title ${styles.title}`}>
            <span className={styles.hLine}>Trade Smarter. Trade Limitless.</span>

          </h1>



          <p className={`text ${styles.subtitle}`}>
            <strong>With the Stonefort Trading App</strong>
            <br />
            <br />
            Step into a seamless trading experience designed for modern forex
            traders. The Stonefort Trading App provides instant access to global
            markets, advanced trading tools, and full account control from a
            single intuitive platform.
            <br />
            <br />
            Monitor markets, manage positions, and stay connected to
            opportunities in real time wherever you trade. Available on
            Android and iOS, built for speed, precision, and reliability.
          </p>

          <div className={styles.ctaRow}>
            <Link
              href="https://play.google.com"
              target="_blank"
              className={`button ${styles.primary}`}
            >
              Google Play Store
            </Link>

            <Link
              href="https://www.apple.com/app-store/"
              target="_blank"
              className={`button ${styles.secondary}`}
            >
              App Store
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <Image
            src="/images/asasa.webp" 
            alt="Stonefort Trading App"
            width={900}
            height={700}
            priority
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
