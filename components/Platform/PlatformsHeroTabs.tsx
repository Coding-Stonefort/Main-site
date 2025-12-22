"use client";

import { useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./PlatformsHeroTabs.module.css";

import WebTerminalImg from "@/public/images/sfx-web02.webp";
import MobileTraderImg from "@/public/images/sfsTraderMobile.webp";
import Mt5Img from "@/public/images/Terminalmt501.webp";
import Mt5WebImg from "@/public/images/Terminalmt5.webp";

type TabKey = "mobile" | "web" | "mt5" | "mt5web";

type TabItem = {
  key: TabKey;
  label: string;
  title: string;
  headline: string;
  copy: string;
  image: StaticImageData;
  imageAlt: string;
  cta?: { label: string; href: string };
};

export default function PlatformsHeroTabs() {
  const tabs: TabItem[] = useMemo(
    () => [
      {
        key: "mt5",
        label: "MT5 Desktop",
        title: "MT5 Desktop",
        headline: "MT5 Desktop",
        copy:
          "Trade on the go with powerful tools, real-time prices, and clear order execution designed for speed and reliability.",
        image: Mt5Img,
        imageAlt: "MetaTrader 5 terminal on laptop",
        cta: { label: "Open MT5", href: "#" },
      },
      {
        key: "mobile",
        label: "Mobile",
        title: "Stonefort Trader Mobile",
        headline: "Stonefort Trader Mobile",
        copy:
          "Trade on the go with our responsive Stonefort Trader app, built for speed, simplicity, and control across global markets.",
        image: MobileTraderImg,
        imageAlt: "Stonefort Trader Mobile app screens",
        cta: { label: "Open Mobile", href: "#" },
      },
      {
        key: "web",
        label: "SFX Web",
        title: "Stonefort Trader Web",
        headline: "Stonefort Trader Web",
        copy:
          "Trade from our intuitive web terminal with a powerful dashboard, fast execution, and a clean interface built for modern traders.",
        image: WebTerminalImg,
        imageAlt: "Stonefort Trader Web terminal on laptop",
        cta: { label: "Open Web", href: "#" },
      },
      {
        key: "mt5web",
        label: "MetaTrader Web",
        title: "MetaTrader Web",
        headline: "MetaTrader Web",
        copy:
          "Trade directly from your browser with MetaTrader Web—no installation required, with the essentials for fast decision-making.",
        image: Mt5WebImg,
        imageAlt: "MetaTrader Web in dark trading UI",
        cta: { label: "Open MT Web", href: "#" },
      },
    ],
    []
  );

  const [active, setActive] = useState<TabKey>("mt5");
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <header className={styles.header}>
        <h2 className={styles.topHeading}>
            Your Platform. <span>Your Trading Style.</span>
        </h2>
        </header>

        <div className={styles.shell}>
          {/* TOP TABS */}
          <div className={styles.tabsTop} role="tablist" aria-label="Platforms">
            {tabs.map((t) => {
              const isActive = t.key === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                  onClick={() => setActive(t.key)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${t.key}`}
                >
                  <span className={styles.tabText}>{t.label}</span>
                  <span className={styles.tabIcon} aria-hidden="true">
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* CONTENT CARD */}
          <div
            id={`panel-${activeTab.key}`}
            role="tabpanel"
            className={styles.card}
          >
            <div className={styles.cardInner}>
              <div className={styles.copy}>
                <h2 className={styles.headline}>{activeTab.headline}</h2>
                <p className={styles.desc}>{activeTab.copy}</p>
              </div>

              <div className={styles.media}>
                <div className={styles.imageFrame}>
                  <Image
                    src={activeTab.image}
                    alt={activeTab.imageAlt}
                    className={styles.image}
                    priority
                  />
                </div>

                {activeTab.cta && (
                  <a className={styles.cta} href={activeTab.cta.href}>
                    {activeTab.cta.label} <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
