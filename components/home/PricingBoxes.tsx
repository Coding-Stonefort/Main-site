"use client";

import React, { MouseEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PricingBoxes.module.css";

// Badges
import BronzeBadge from "@/public/images/Starter.webp";
import SilverBadge from "@/public/images/Advance.webp";
import GoldBadge from "@/public/images/Elite.webp";

// 3 plates (separate PNGs)
import ElitePlate from "@/public/images/Elite.webp";
import AdvancedPlate from "@/public/images/Advance.webp";
import StarterPlate from "@/public/images/Starter.webp";

type RowProps = { left: string; right: string };
type TierId = "starter" | "advanced" | "elite";

type CardDef = {
  title: string;
  subtitle: string;
  badge: any;
  rows: [string, string][];
  tier: TierId;
};

const PLATE_IMAGES: Record<TierId, any> = {
  elite: ElitePlate,
  advanced: AdvancedPlate,
  starter: StarterPlate,
};

// order of plates for each active card
function getOrder(active: TierId): TierId[] {
  if (active === "elite") return ["elite", "advanced", "starter"];
  if (active === "advanced") return ["advanced", "elite", "starter"];
  return ["starter", "advanced", "elite"];
}

const Row = ({ left, right }: RowProps) => (
  <div className={styles.row}>
    <span className={styles.rowLeft}>{left}</span>
    <span className={styles.rowRight}>{right}</span>
  </div>
);

function HoverGlowCard({
  children,
  className = "",
  featured = false,
  badgeSrc,
  title,
  onHover,
}: React.PropsWithChildren<{
  className?: string;
  featured?: boolean;
  badgeSrc?: any;
  title?: string;
  onHover?: () => void;
}>) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    const rx = ((y - r.height / 2) / r.height) * -6;
    const ry = ((x - r.width / 2) / r.width) * 6;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseEnter={() => onHover && onHover()}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={[
        styles.card,
        featured ? styles.featured : "",
        className,
      ].join(" ")}
      style={{
        transform:
          "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
      }}
    >
      {/* live spotlight */}
      <span className={styles.spotlight} />

      {/* conic border glow on hover */}
      <span className={styles.conicGlow} />

      {/* subtle pulse ring for featured */}
      {featured && <span className={styles.pulseRing} />}

      {/* sweep shimmer */}
      <motion.span
        className={styles.shimmer}
        initial={{ x: "-60%" }}
        animate={{ x: "200%" }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "linear" }}
      />

      <div className={styles.cardInner}>
        <div className={styles.topStrip} />

        {badgeSrc && (
          <motion.div
            className={styles.badgeFloat}
            initial={{ y: 0 }}
            whileHover={{ y: -6, rotate: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
          >
            <Image
              src={badgeSrc}
              alt={`${title} badge`}
              width={72}
              height={72}
              className={styles.badgeImg}
              priority={title === "Advanced"}
            />
          </motion.div>
        )}

        {children}
      </div>
    </motion.div>
  );
}

function Plate({
  id,
  img,
  slot,
}: {
  id: TierId;
  img: any;
  slot: number;
}) {
  const slotStyles = [
    { translate: "-110px", rotate: "-5deg", scale: "1.05", z: 30 },
    { translate: "0px", rotate: "-8deg", scale: "0.97", z: 20 },
    { translate: "110px", rotate: "-12deg", scale: "0.92", z: 10 },
  ][slot];

  return (
    <div
      className={styles.plate}
      style={{
        zIndex: slotStyles.z,
        transform: `translateY(${slotStyles.translate}) rotate(${slotStyles.rotate}) scale(${slotStyles.scale})`,
      }}
    >
      <Image
        src={img}
        alt={`${id} plate`}
        fill
        className={styles.plateImg}
        sizes="(min-width: 1024px) 420px, 260px"
      />
    </div>
  );
}

export default function PricingBoxes() {
  const [activeTier, setActiveTier] = useState<TierId>("advanced");

  const cards: CardDef[] = [
    {
      title: "Starter",
      subtitle: "Accounts",
      badge: BronzeBadge,
      tier: "starter",
      rows: [
        ["Starts at", "$50"],
        ["Leverage", "1:500"],
        ["Spreads (Pips)", "1.3"],
        ["Commission", "0"],
        ["Stop-out", "20%"],
        ["Margin Call", "50%"],
      ],
    },
    {
      title: "Advanced",
      subtitle: "Accounts",
      badge: SilverBadge,
      tier: "advanced",
      rows: [
        ["Starts at", "$3000"],
        ["Leverage", "1:500"],
        ["Spreads (Pips)", "1.0"],
        ["Commission", "0"],
        ["Stop-out", "20%"],
        ["Margin Call", "50%"],
      ],
    },
    {
      title: "Elite",
      subtitle: "Accounts",
      badge: GoldBadge,
      tier: "elite",
      rows: [
        ["Starts at", "$10,000"],
        ["Leverage", "1:200"],
        ["Spreads (Pips)", "0.01"],
        ["Commission", "$8"],
        ["Stop-out", "50%"],
        ["Margin Call", "70%"],
      ],
    },
  ];

  const ordered = getOrder(activeTier);

  return (
    <section className={styles.section}>
      {/* Plates */}
      <div className={styles.platesWrap} aria-hidden="true">
        <div className={styles.platesBox}>
          {ordered.map((id, index) => (
            <Plate key={id} id={id} img={PLATE_IMAGES[id]} slot={index} />
          ))}
        </div>
      </div>

      {/* Aurora */}
      <div className={styles.auroraTop} aria-hidden="true" />
      <div className={styles.auroraBottom} aria-hidden="true" />

      {/* Content */}
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.header}>
          <h2 className={styles.h2}>Find Your Perfect Trading Account</h2>
          <p className={styles.sub}>
            Find the ideal Stonefort Securities account tailored to your trading
            style, built for flexibility, transparency, and performance.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((c, i) => {
            const featured = i === 1;
            return (
              <HoverGlowCard
                key={c.title}
                featured={featured}
                badgeSrc={c.badge}
                title={c.title}
                onHover={() => setActiveTier(c.tier)}
              >
                <div className={styles.cardHead}>
                  <div>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardSubtitle}>{c.subtitle}</p>
                  </div>
                </div>

                <div className={styles.rows}>
                  {c.rows.map(([l, r], idx) => (
                    <Row key={idx} left={l} right={r} />
                  ))}
                </div>

                <div className={styles.bottomLine} />
              </HoverGlowCard>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
