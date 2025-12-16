// components/Faqs.tsx
"use client";

import { useState } from "react";
import styles from "./Faqs.module.css";

export type FAQItem = {
  question: string;
  answer: string;
};

type FaqsProps = {
  badgeLabel?: string;
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
  initiallyOpenIndex?: number | null;
};

const DEFAULT_ITEMS: FAQItem[] = [
  {
    question: "What is Stonefort Securities?",
    answer:
      "Stonefort Securities is a multi-asset broker providing access to global markets with institutional-grade liquidity, tight spreads, and advanced trading platforms.",
  },
  {
    question: "Which platforms can I trade on?",
    answer:
      "You can trade on MetaTrader 5 and our secure Client Portal, offering flexible deposits, withdrawals, and complete account management.",
  },
  {
    question: "What is the minimum deposit?",
    answer:
      "The minimum deposit starts from $50, depending on your selected account type and funding method.",
  },
  {
    question: "Is my money safe with Stonefort?",
    answer:
      "Client funds are held in segregated accounts with top-tier banking partners and protected by robust risk management policies.",
  },
  {
    question: "How do I open a live trading account?",
    answer:
      'Click on “Open an Account”, complete a quick registration form, upload your KYC documents, and once verified you can fund and start trading.',
  },
];

export default function Faqs({
  badgeLabel = "FAQ",
  title = "Frequently Asked Questions",
  subtitle = "Get quick answers to the most common questions about trading with Stonefort Securities.",
  items,
  initiallyOpenIndex = 0,
}: FaqsProps) {
  const faqItems = items && items.length > 0 ? items : DEFAULT_ITEMS;

  const [openIndex, setOpenIndex] = useState<number | null>(initiallyOpenIndex);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* Heading */}
        <div className={styles.header}>
          <span className="badge">{badgeLabel}</span>
          <h2 className={`title ${styles.title}`}>{title}</h2>
          {subtitle && (
            <p className={`description ${styles.subtitle}`}>{subtitle}</p>
          )}
        </div>

        {/* List */}
        <div className={styles.list}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={styles.questionRow}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    className={styles.answer}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
