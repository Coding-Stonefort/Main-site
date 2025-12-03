// components/Faqs.tsx
"use client";

import { useState } from "react";
import "./Faqs.css"; 

export type FAQItem = {
  question: string;
  answer: string;
};

type FaqsProps = {
  /** Small label above title (e.g. "FAQ") */
  badgeLabel?: string;
  /** Main heading */
  title?: string;
  /** Subtitle text under heading */
  subtitle?: string;
  /** FAQ items for this specific page */
  items?: FAQItem[];
  /** Which FAQ is open by default (0-based index, or null for all closed) */
  initiallyOpenIndex?: number | null;
};

/** Default global FAQs (used if no items prop is passed) */
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
      "Click on “Open an Account”, complete a quick registration form, upload your KYC documents, and once verified you can fund and start trading.",
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

  const [openIndex, setOpenIndex] = useState<number | null>(
    initiallyOpenIndex
  );

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
        {/* Heading */}
        <div className="faq-header">
          <span className="faq-badge">{badgeLabel}</span>
          <h2 className="faq-title">{title}</h2>
          {subtitle && <p className="faq-subtitle">{subtitle}</p>}
        </div>

        {/* List */}
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`faq-item${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-row"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
