"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./DiscoverOpportunities.module.css";
import PartnerImage from "@/public/images/partmerus.webp";

type CardProps = {
  title: string;
  text: string;
  index: number;
};

/* ---------- Single Card (client-only) ---------- */
const DiscoverCard = ({ title, text, index }: CardProps) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{text}</p>
    </motion.div>
  );
};


/* ---------- SECTION WRAPPER ---------- */
const StepCards = () => {
  const cards: { title: string; text: string }[] = [
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
    <section className={styles.section}>
      {/* Background image */}
      <div className={styles.bgImage}>
        <Image
          src={PartnerImage}
          fill
          alt=""
          className={styles.bgImageObject}
          priority
          sizes="100vw"
        />
      </div>

      {/* Aurora */}
      <div className={styles.aurora} />

      <div className={styles.inner}>
        <div className={styles.grid}>
          {cards.map((card, idx) => (
            <DiscoverCard
              key={idx}
              index={idx}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <a href="/register" className={styles.ctaButton}>
            Trade Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default StepCards;
