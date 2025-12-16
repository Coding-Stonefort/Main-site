"use client";

import React, { MouseEvent } from "react";
import Image from "next/image";
import styles from "./StepCards.module.css";

import BgMask from "@/public/images/bg-mask.png";

type CardItem = {
  step: string;
  title: string;
  text: string;
};

function HoverGlowCard({ step, title, text }: CardItem) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  return (
    <article onMouseMove={onMove} className={styles.card}>
      {/* Background mask image */}
      <Image src={BgMask} alt="" className={styles.bgMask} priority={false} />

      {/* Hover glow overlay (pure CSS, driven by --mx/--my) */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.cardContent}>
        <div className={styles.stepBubble}>{step}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={`text ${styles.cardText}`}>{text}</p>
      </div>
    </article>
  );
}

export default function StepCards() {
  const cards: CardItem[] = [
    {
      step: "1",
      title: "Register",
      text: "Select your preferred account type and complete our quick, secure online application to start trading.",
    },
    {
      step: "2",
      title: "Verify",
      text: "Verify quickly with our streamlined digital onboarding.",
    },
    {
      step: "3",
      title: "Funds",
      text: "Fund your trading account easily with a wide range of secure payment options.",
    },
    {
      step: "4",
      title: "Trade",
      text: "Start trading instantly and access over hundreds of instruments.",
    },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* Heading */}
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>Open your account effortlessly</h2>
          <p className={`text ${styles.subtitle}`}>In four simple steps</p>
        </header>

        {/* Cards */}
        <div className={styles.grid}>
          {cards.map((card) => (
            <HoverGlowCard key={card.step} {...card} />
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="#" className="button">
            Open an Account
          </a>
        </div>
      </div>
    </section>
  );
}
