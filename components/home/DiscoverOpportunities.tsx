"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./DiscoverOpportunities.module.css";
import PartnerImage from "@/public/images/partmerus.webp";

type CardProps = {
  title: string;
  text: string;
  index: number;
  onEnter: () => void;
  onLeave: () => void;
};

const DiscoverCard = ({ title, text, index, onEnter, onLeave }: CardProps) => {
  return (
    <motion.article
      className={styles.card}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{text}</p>
    </motion.article>
  );
};

export default function DiscoverOpportunities() {
  const [lineActive, setLineActive] = useState(false);

  const cards = [
    {
      title: "Daily Payouts",
      text: "Receive your IB commissions every day with the flexibility to withdraw instantly, fast, transparent, and hassle-free.",
    },
    {
      title: "Competitive Commissions",
      text: "Earn more with attractive, performance-driven commission structures designed to maximize your revenue potential.",
    },
    {
      title: "Dedicated IB Portal",
      text: "Monitor your earnings, performance, and referrals effortlessly through our intuitive IB portal, built for transparency and control.",
    },
    {
      title: "Leverage Expertise",
      text: "Grow your earnings by managing investor portfolios and sharing in the profits generated through your successful trading strategies.",
    },
  ];

  return (
    <section
      className={`section ${styles.section} ${lineActive ? styles.lineActive : ""}`}
    >
      {/* Background image */}
      <div className={styles.bgImage} aria-hidden="true">
        <Image
          src={PartnerImage}
          fill
          alt=""
          className={styles.bgImageObject}
          priority
          sizes="100vw"
        />

        {/* Neon “current” that runs on the wave line */}
<svg
  className={styles.neonSvg}
  viewBox="0 0 1280 745"
  preserveAspectRatio="xMidYMid slice"
>
  <path className={styles.neonTrack} d="PASTE_PATH_HERE" />
  <path className={styles.neonCurrent} d="PASTE_PATH_HERE" />
</svg>

      </div>

      <div className={styles.aurora} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {cards.map((card, idx) => (
            <DiscoverCard
              key={idx}
              index={idx}
              title={card.title}
              text={card.text}
              onEnter={() => setLineActive(true)}
              onLeave={() => setLineActive(false)}
            />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <a href="/register" className={`button ${styles.ctaButton}`}>
            Trade Now
          </a>
        </div>
      </div>
    </section>
  );
}
