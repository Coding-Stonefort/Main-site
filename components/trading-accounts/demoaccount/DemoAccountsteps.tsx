"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import asImg from "@/public/images/registerrightimg.webp";
import styles from "./DemoAccountsteps.module.css";

/* ---------------- ROLLING NUMBER (unchanged) ---------------- */
const RollingNumber = ({
  initial,
  minStep = 20,
  maxStep = 30,
  activeMs = 2600,
  pauseMs = 1500,
}: {
  initial: number;
  minStep?: number;
  maxStep?: number;
  activeMs?: number;
  pauseMs?: number;
}) => {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const randStep = () =>
      Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;

    const startPhase = () => {
      intervalId = setInterval(() => {
        setValue((prev) => prev + randStep());
      }, 180);

      timeoutId = setTimeout(() => {
        if (intervalId) clearInterval(intervalId);

        timeoutId = setTimeout(() => {
          startPhase();
        }, pauseMs);
      }, activeMs);
    };

    startPhase();

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeMs, pauseMs, maxStep, minStep]);

  return <span>{value.toLocaleString()}</span>;
};

/* ---------------- MAIN SECTION ---------------- */
export default function HowToRegister() {
  const steps = [
    {
      id: 1,
      title: "Registration",
      text: "Create your account in just a few clicks to begin your demo trading journey.",
    },
    {
      id: 2,
      title: "Login",
      text: "Sign in securely to access your personal client area and trading tools.",
    },
    {
      id: 3,
      title: "Dashboard",
      text: "Open your dashboard to manage your account and explore the available options.",
    },
    {
      id: 4,
      title: "Create Demo Account",
      text: "Set up your demo account instantly and start practicing in a risk-free environment.",
    },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.content}>
          <h2 className={`title ${styles.title}`}>Start with a demo account</h2>

          <p className={`text ${styles.lead}`}>
            Get familiar with the platform and explore the trading experience
            step by step. Open your demo account in minutes and practice in a
            simulated environment before going live.
          </p>

          <div className={styles.steps}>
            {steps.map((s) => (
              <div className={styles.step} key={s.id}>
                <div className={styles.stepNumber}>{s.id}</div>

                <div className={styles.stepBody}>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepText}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/register" className={`button ${styles.cta}`}>
            Open Demo Account
          </a>
        </div>

        {/* RIGHT */}
        <div className={styles.imageWrapper}>
          <Image
            src={asImg}
            alt="Stonefort demo account steps"
            className={styles.image}
            fill
            priority
          />

          {/* ===== STEP 1 – REGISTRATION ===== */}
          <div className={`${styles.statCard} ${styles.card1}`}>
            <div className={styles.stepCardHeader}>Step 1</div>
            <svg
              className={styles.stepIconSvg}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="4" y="3" width="16" height="18" rx="3" ry="3" />
              <path d="M8 7h8" />
              <path d="M8 11h8" />
              <path d="M8 15h5" />
            </svg>
            <div className={styles.stepCardTitle}>Registration</div>
          </div>

          {/* ===== STEP 2 – LOGIN ===== */}
          <div className={`${styles.statCard} ${styles.card2}`}>
            <div className={styles.stepCardHeader}>Step 2</div>
            <svg
              className={styles.stepIconSvg}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="4" y="5" width="10" height="14" rx="2" ry="2" />
              <path d="M14 12h6" />
              <path d="M17 9l3 3-3 3" />
            </svg>
            <div className={styles.stepCardTitle}>Login</div>
          </div>

          {/* ===== STEP 3 – DASHBOARD ===== */}
          <div className={`${styles.statCard} ${styles.card3}`}>
            <div className={styles.stepCardHeader}>Step 3</div>
            <svg
              className={styles.stepIconSvg}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="8" height="8" rx="2" />
              <rect x="13" y="3" width="8" height="5" rx="2" />
              <rect x="13" y="10" width="8" height="11" rx="2" />
              <rect x="3" y="13" width="8" height="8" rx="2" />
            </svg>
            <div className={styles.stepCardTitle}>Dashboard</div>
          </div>

          {/* ===== STEP 4 – CREATE DEMO ACCOUNT ===== */}
          <div className={`${styles.statCard} ${styles.card4}`}>
            <div className={styles.stepCardHeader}>Step 4</div>
            <svg
              className={styles.stepIconSvg}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="3" ry="3" />
              <path d="M12 9v6" />
              <path d="M9 12h6" />
            </svg>
            <div className={styles.stepCardTitle}>Create Demo</div>
          </div>
        </div>
      </div>
    </section>
  );
}