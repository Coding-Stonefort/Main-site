"use client";

import { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductsShowcase.module.css";

import BgWaves from "@/public/images/white-futuristic-building-line-texture-texture-3d-rendering.jpg";
import CryptoPhone from "@/public/images/_image (1).webp";
import ForexArrows from "@/public/images/forex.png";
import CommoditiesCorn from "@/public/images/_image (2).webp";
import MetalsBars from "@/public/images/_image (3).webp";
import ETFsPie from "@/public/images/_image (4).webp";
import StocksLogos from "@/public/images/_image (5).webp";

import DiscoverBG from "@/public/images/dicoverbg.webp";

import IconForex from "@/public/images/forex.webp";
import IconCrypto from "@/public/images/_image (1).webp";
import IconCommodities from "@/public/images/_image (2).webp";
import IconETFs from "@/public/images/_image (4).webp";
import IconMetals from "@/public/images/_image (3).webp";
import IconStocks from "@/public/images/_image (5).webp";

type Tab = {
  key: string;
  title: string;
  img: StaticImageData;
  icon: StaticImageData;
  blurb: string;
};

const TABS: Tab[] = [
  {
    key: "forex",
    title: "Forex",
    img: ForexArrows,
    icon: IconForex,
    blurb:
      "Forex is not a traditional exchange but a global over-the-counter (OTC) market with no central location. It operates virtually, enabling traders worldwide to buy and sell currencies anytime through a decentralized network of banks and brokers.",
  },
  {
    key: "crypto",
    title: "Cryptocurrencies",
    img: CryptoPhone,
    icon: IconCrypto,
    blurb:
      "Stonefort Securities lets you trade CFDs on Bitcoin, Ethereum, and other top cryptocurrencies with speed, precision, and reliability.",
  },
  {
    key: "commodities",
    title: "Commodities",
    img: CommoditiesCorn,
    icon: IconCommodities,
    blurb:
      "Trading commodities including energy, metals, and agricultural products connects investors worldwide and offers opportunities to diversify and profit from global market movement.",
  },
  {
    key: "etfs",
    title: "ETFs",
    img: ETFsPie,
    icon: IconETFs,
    blurb:
      "An ETF (Exchange-Traded Fund) is a pooled investment that trades like a stock, tracking assets such as commodities or indices. It offers diversification, low costs, and flexible trading during market hours.",
  },
  {
    key: "metals",
    title: "Metals",
    img: MetalsBars,
    icon: IconMetals,
    blurb:
      "Trade CFDs on gold, silver, platinum, and palladium with Stonefort Securities using live charts and advanced tools giving you flexibility to seize every market opportunity.",
  },
  {
    key: "stocks",
    title: "Stocks",
    img: StocksLogos,
    icon: IconStocks,
    blurb:
      "Trade CFDs on leading global stocks such as Amazon, Apple, Microsoft, and more, without owning the shares. Speculate on price movements with leverage and take advantage of advanced trading tools to maximize your market potential.",
  },
];

export default function ProductsShowcase() {
  const [idx, setIdx] = useState(0);
  const active = TABS[idx];

  const go = (dir: 1 | -1) => setIdx((i) => (i + dir + TABS.length) % TABS.length);

  const variants = useMemo(
    () => ({
      in: { opacity: 0, x: 80, filter: "blur(6px)" } as any,
      center: { opacity: 1, x: 0, filter: "blur(0px)" } as any,
      out: { opacity: 0, x: -80, filter: "blur(6px)" } as any,
    }),
    []
  );

  return (
    <section className={`section ${styles.section}`}>
      {/* Background waves */}
      <div className={styles.bgWaves} aria-hidden="true">
        <Image
          src={BgWaves}
          alt=""
          fill
          sizes="100vw"
          className={styles.bgWavesImg}
          priority
        />
      </div>

      {/* Left decorative curved bg (tablet/desktop only) */}
      <div className={styles.discoverWrap} aria-hidden="true">
        <div className={styles.discoverInner}>
          <Image src={DiscoverBG} alt="" fill className={styles.discoverImg} sizes="320px" />
        </div>
      </div>

      <div className={`container ${styles.container}`}>
        {/* Heading */}
        <header className={styles.header}>
          <h2 className={`heading ${styles.heading}`}>
            Our <span className={styles.headingAccent}>Products</span>
          </h2>

          <p className={`text ${styles.lead}`}>
            Experience next-generation trading with <strong>Stonefort Securities</strong>, advanced
            platforms built for stability, precision, and speed. Enjoy ultra-tight spreads and deep
            liquidity from top-tier banks and prime brokers for a competitive edge in every trade.
          </p>
        </header>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Products tabs">
          {TABS.map((t, i) => {
            const isActive = i === idx;

            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setIdx(i)}
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                role="tab"
                aria-selected={isActive}
              >
                <Image src={t.icon} alt={t.title} width={22} height={22} className={styles.tabIcon} />
                <span className={styles.tabText}>{t.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.grid}>
            {/* Image */}
            <div className={styles.mediaCol}>
              <div className={styles.mediaFrame}>
                <div className={styles.radial} aria-hidden="true" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.key + "-img"}
                    className={styles.mediaMotion}
                    initial={{ opacity: 0, x: 80, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -80, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Image
                      src={active.img}
                      alt={active.title}
                      fill
                      className={styles.mediaImg}
                      sizes="(min-width:1536px) 620px, (min-width:1280px) 560px, (min-width:1024px) 520px, 70vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Text */}
            <div className={styles.textCol}>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={active.key + "-title"}
                  className={styles.title}
                  initial="in"
                  animate="center"
                  exit="out"
                  variants={variants}
                  transition={{ duration: 0.45 }}
                >
                  {active.title}
                </motion.h3>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={active.key + "-text"}
                  className={styles.blurb}
                  initial="in"
                  animate="center"
                  exit="out"
                  variants={variants}
                  transition={{ duration: 0.45, delay: 0.05 }}
                >
                  {active.blurb}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Arrows */}
          <button type="button" aria-label="Previous" onClick={() => go(-1)} className={styles.prev}>
            ‹
          </button>

          <button type="button" aria-label="Next" onClick={() => go(1)} className={styles.next}>
            ›
          </button>
        </div>

        {/* CTA */}
        <div className={styles.ctaRow}>
          <a href="/register" className={`button ${styles.ctaBtn}`}>
            Open an Account <span className={styles.ctaArrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
