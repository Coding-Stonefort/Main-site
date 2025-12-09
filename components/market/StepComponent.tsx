"use client";

import Image from "next/image";
import styles from "./StepComponent.module.css";
import tabletImg from "@/public/images/registerrightimg.webp";

export default function StepComponent() {
  const steps = [
    {
      id: 1,
      title: "Register",
      text: "Sign up with your email and instantly access a free demo account.",
    },
    {
      id: 2,
      title: "Answer",
      text: "Complete a quick suitability check so we can ensure our products are right for you.",
    },
    {
      id: 3,
      title: "Verify",
      text: "Secure your account with a simple verification process. Your safety always comes first.",
    },
    {
      id: 4,
      title: "Fund",
      text: "All set. Add funds and start trading global markets with confidence.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h2 className={styles.heading}>Ready to trade smarter?</h2>

          <p className={styles.subtext}>
            Move to Stonefort and become part of a global community of active traders.
            Apply in minutes with a fast, streamlined onboarding experience.
          </p>

          <div className={styles.steps}>
            {steps.map((s) => (
              <div className={styles.step} key={s.id}>
                <div className={styles.number}>{s.id}</div>
                <div>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepText}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/register" className={styles.button}>
            Open Your Account Now!
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <Image src={tabletImg} alt="Stonefort Trading" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
