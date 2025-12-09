"use client";

import Image from "next/image";
import Logo from "@/public/images/logo.webp";
import TradingScreen from "@/public/images/CRM.webp";
import styles from "./GetStartedCta.module.css";

export default function GetStartedCta() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          
          {/* LEFT TEXT */}
          <div className={styles.left}>
            <Image src={Logo} alt="Stonefort" className={styles.logo} />

            <h2 className={styles.title}>Get Started</h2>
            <p className={styles.subtitle}>
              Create your account and access the global markets in under 3 minutes.
            </p>

            <button className={styles.ctaBtn}>Trade Now</button>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <Image
              src={TradingScreen}
              alt="Stonefort Platform"
              className={styles.screenImg}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
