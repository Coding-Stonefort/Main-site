// components/FAQ.tsx
"use client";

import { useState } from "react";
import "./FAQs.css";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
        {/* Heading */}
        <div className="faq-header">
          <span className="faq-badge">FAQ</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Get quick answers to the most common questions about trading with
            Stonefort Securities.
          </p>
        </div>

        {/* List */}
        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
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
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
