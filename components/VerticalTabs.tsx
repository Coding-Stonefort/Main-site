// components/VerticalTabs.tsx
"use client";

import { useId, useState, useRef, KeyboardEvent, ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./VerticalTabs.module.css";

// Your images
import Terminal from "@/public/images/Terminalmt5.webp";
import stonefort from "@/public/images/stonefort.webp";
import clientportal from "@/public/images/clientPortal.webp";
import SFXweb from "@/public/images/sfx-web.webp";
import SFXmob from "@/public/images/sfxMob.webp";

type TabItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  media?: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
};

type Props = {
  items: TabItem[];
  /** Optional: override brand accent. Defaults to CSS var(--brand) */
  accent?: string;
  className?: string;
  headingTitle?: ReactNode; // use JSX instead of dangerouslySetInnerHTML
  headingText?: string;
};

/** Helper: image fills the whole box like background-cover */
function FitImage({
  src,
  alt,
}: {
  src: StaticImageData | string;
  alt: string;
}) {
  return (
    <div className={styles.fitMedia}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.fitImg}
        sizes="(min-width: 1280px) 900px, (min-width: 768px) 700px, 100vw"
        priority={false}
      />
    </div>
  );
}

export default function VerticalTabs({
  items,
  accent = "var(--brand)",
  className = "",
  headingTitle,
  headingText,
}: Props) {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const baseId = useId();
  const tabIds = items.map((_, i) => `${baseId}-${i}`);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (!listRef.current) return;

    const buttons = Array.from(
      listRef.current.querySelectorAll<HTMLButtonElement>("[role='tab']")
    );
    if (!buttons.length) return;

    const focusAt = (i: number) => {
      const next = (i + buttons.length) % buttons.length;
      buttons[next]?.focus();
      setActive(next);
    };

    switch (e.key) {
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        focusAt(idx - 1);
        break;
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        focusAt(idx + 1);
        break;
      case "Home":
        e.preventDefault();
        focusAt(0);
        break;
      case "End":
        e.preventDefault();
        focusAt(buttons.length - 1);
        break;
    }
  };

  return (
    <section
      className={`section ${styles.section} ${className}`}
      style={{ ["--vt-accent" as any]: accent }}
    >
      <div className={`container ${styles.container}`}>
        {/* Heading */}
        {(headingTitle || headingText) && (
          <header className={styles.header}>
            {headingTitle && <h2 className={`heading ${styles.heading}`}>{headingTitle}</h2>}
            {headingText && <p className={`text ${styles.subtext}`}>{headingText}</p>}
          </header>
        )}

        {/* Main wrapper */}
        <div className={styles.shell}>
          {/* Left rail */}
          <aside className={styles.rail}>
            <span className={styles.railGlowTop} aria-hidden="true" />
            <span className={styles.railGlowBottom} aria-hidden="true" />

            <div
              ref={listRef}
              role="tablist"
              aria-orientation="vertical"
              className={styles.tabList}
            >
              {items.map((tab, i) => {
                const selected = i === active;

                return (
                  <button
                    key={tab.id}
                    id={`tab-${tabIds[i]}`}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${tabIds[i]}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={`${styles.tabBtn} ${selected ? styles.tabBtnActive : ""}`}
                  >
                    <span className={styles.tabLabel}>{tab.label}</span>

                    <span className={`${styles.tabArrow} ${selected ? styles.tabArrowActive : ""}`} aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path
                          d="M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right content */}
          <div className={styles.panelWrap}>
            <div className={styles.panelInner}>
              {items.map((tab, i) => {
                const selected = i === active;

                return (
                  <div
                    key={tab.id}
                    id={`panel-${tabIds[i]}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${tabIds[i]}`}
                    hidden={!selected}
                    className={styles.panel}
                  >
                    <div className={styles.panelText}>
                      <h3 className={styles.panelTitle}>{tab.title}</h3>
                      <p className={styles.panelDesc}>{tab.description}</p>
                    </div>

                    {tab.media ? <div className={styles.mediaCard}>{tab.media}</div> : null}

                    {tab.ctaHref && tab.ctaLabel ? (
                      <div className={styles.ctaRow}>
                        <a href={tab.ctaHref} className={`button ${styles.ctaBtn}`}>
                          {tab.ctaLabel}
                          <span className={styles.ctaIcon} aria-hidden="true">
                            →
                          </span>
                        </a>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Example usage (no HTML injection) ===== */
export function PlatformsTabs() {
  return (
    <VerticalTabs
      headingTitle={
        <>
          Secure and Reliable Trading Platforms with{" "}
          <span className={styles.headingAccent}>Stonefort Securities.</span>
        </>
      }
      headingText="Trade hundreds of CFDs on Forex, Crypto, Gold, Shares, and Indices with one Stonefort Securities account; delivering seamless execution, deep liquidity, and trusted reliability."
      items={[
        {
          id: "app",
          label: "MT5 Desktop",
          title: "MT5 Desktop",
          description:
            "Trade on the go with powerful tools, real-time prices, and clear order execution designed for speed and reliability.",
          media: <FitImage src={Terminal} alt="MT5 Desktop preview" />,
          ctaHref: "#",
          ctaLabel: "Open MT5",
        },
        {
          id: "mt4",
          label: "Mobile",
          title: "Mobile",
          description:
            "A classic platform trusted by millions. Analyze, plan, and execute with proven performance and extensive indicators.",
          media: <FitImage src={stonefort} alt="Mobile app preview" />,
          ctaHref: "#",
          ctaLabel: "Open MT5",
        },
        {
          id: "mt5",
          label: "Client Portal",
          title: "Client Portal",
          description:
            "Navigate the markets with MT5’s advanced toolset—multi-asset support, depth of market, and lightning execution.",
          media: <FitImage src={clientportal} alt="Client portal preview" />,
          ctaHref: "#",
          ctaLabel: "Client Portal",
        },
        {
          id: "SFXMobile",
          label: "SFX Trade Mobile",
          title: "SFX Trade Mobile",
          description:
            "Navigate the markets with MT5’s advanced toolset—multi-asset support, depth of market, and lightning execution.",
          media: <FitImage src={SFXmob} alt="SFX mobile preview" />,
          ctaHref: "#",
          ctaLabel: "SFX Trade Mobile",
        },
        {
          id: "SFXWeb",
          label: "SFX Web",
          title: "SFX Web",
          description:
            "Navigate the markets with MT5’s advanced toolset—multi-asset support, depth of market, and lightning execution.",
          media: <FitImage src={SFXweb} alt="SFX web preview" />,
          ctaHref: "#",
          ctaLabel: "SFX Web",
        },
      ]}
    />
  );
}
