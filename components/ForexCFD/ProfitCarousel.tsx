"use client";

import { useState, useEffect } from "react";
import styles from "./ProfitCarousel.module.css";

type Slide = {
  id: string;
  title: string;
  tabLabel: string;
  stepNumber: number;
  lines: string[];
};

const slides: Slide[] = [
  {
    id: "calc",
    stepNumber: 1,
    tabLabel: "How Profit is Calculated",
    title: "How Profit is Calculated",
    lines: [
      "Trade Size: €100,000 (one standard lot)",
      "Opening Price: EUR/USD = 1.12000 → €100,000 × 1.12000 = USD $112,000",
      "Closing Price: EUR/USD = 1.11500 → €100,000 × 1.11500 = USD $111,500",
      "Gross Profit on the Trade: $112,000 − $111,500 = USD $500",
    ],
  },
  {
    id: "open",
    stepNumber: 2,
    tabLabel: "Opening the Position",
    title: "Opening the Position",
    lines: [
      "You short (sell) 1 standard lot of EUR/USD at 1.12000, giving you a position of €100,000.",
      "With Stonefort’s 1:500 leverage, your required margin is only €200.",
      "Trade value at opening:",
      "€100,000 × 1.12000 = USD $112,000",
    ],
  },
  {
    id: "close",
    stepNumber: 3,
    tabLabel: "Closing the Position",
    title: "Closing the Position",
    lines: [
      "One week later, EUR/USD drops to 1.11500.",
      "You close the short position, capturing profit from the decline.",
      "Trade value at closing:",
      "€100,000 × 1.11500 = USD $111,500",
      "Gross profit = USD $500",
    ],
  },
];

export default function ProfitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  //  Auto-advance with pause on hover
  useEffect(() => {
    if (isHovered) return; // don't schedule next slide while hovered

    const timer = setTimeout(() => {
      setActiveIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex, isHovered]);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const activeSlide = slides[activeIndex];

  return (
    <section
      className={styles.section}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>How a Forex <span>Trade Works</span></h2>

        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={
                index === activeIndex
                  ? `${styles.tab} ${styles.tabActive}`
                  : styles.tab
              }
            >
              <span className={styles.tabStep}>Step {slide.stepNumber}</span>
              <span className={styles.tabLabel}>{slide.tabLabel}</span>
            </button>
          ))}
        </div>

        {/* Card */}
        <div className={styles.card}>
          <div className={styles.cardHeaderRow}>
            <div className={styles.stepCircle}>
              <span>{activeSlide.stepNumber}</span>
            </div>
            <div>
              <h3 className={styles.cardTitle}>{activeSlide.title}</h3>
              <p className={styles.cardMeta}>
                Related tab: <span>{activeSlide.tabLabel}</span>
              </p>
            </div>
          </div>

          <ul className={styles.list}>
            {activeSlide.lines.map((line, i) => (
              <li key={i} className={styles.listItem}>
                {line}
              </li>
            ))}
          </ul>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button
            type="button"
            onClick={handlePrev}
            className={styles.navButton}
          >
            ← Previous
          </button>

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={
                  index === activeIndex
                    ? `${styles.dot} ${styles.dotActive}`
                    : styles.dot
                }
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className={styles.navButton}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
