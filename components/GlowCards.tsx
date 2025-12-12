// components/GlowCards.tsx
"use client";

import Image from "next/image";
import styles from "./GlowCards.module.css";

export type GlowCardItem = {
  id?: string;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type GlowCardsProps = {
  cards: GlowCardItem[];
  /** Optional custom class to adjust spacing/margins from page */
  className?: string;
};

export default function GlowCards({ cards, className }: GlowCardsProps) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <div key={card.id ?? index} className={styles.box}>
            <span></span>

            <div className={styles.content}>
              {/* Optional image/icon */}
              {card.imageSrc && (
                <div className={styles.imageWrap}>
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt || card.title}
                    width={64}
                    height={64}
                    className={styles.image}
                  />
                </div>
              )}

              <h2>{card.title}</h2>
              <p>{card.description}</p>

              {card.href && (
                <a href={card.href}>
                  {card.ctaLabel || "Read More"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
