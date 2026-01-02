"use client";

import { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./PlatformsHeroTabs.module.css";

import WebTerminalImg from "@/public/images/sfx-web02.webp";
import MobileTraderImg from "@/public/images/sfsTraderMobile.webp";
import Mt5Img from "@/public/images/Terminalmt501.webp";
import Mt5WebImg from "@/public/images/Terminalmt5.webp";

//  default/overview image for the parent /platforms page
import PlatformsDefaultImg from "@/public/images/1687.webp";

type TabKey = "mobile" | "web" | "mt5" | "mt5web";

type TabItem = {
  key: TabKey;
  label: string;

  // RIGHT card image per tab
  image: StaticImageData;
  imageAlt: string;
  href: string;

  // LEFT content (changes per page)
  leftKicker: string;
  leftHeading: string;
  leftLead: string;
  leftCtaText: string;
  leftCtaHref: string;
};

function keyFromPathname(pathname: string): TabKey | null {
  if (pathname.startsWith("/platforms/metatrader5")) return "mt5";
  if (pathname.startsWith("/platforms/metatraderweb")) return "mt5web";
  if (pathname.startsWith("/platforms/stoneforttradermobile")) return "mobile";
  if (pathname.startsWith("/platforms/stoneforttraderweb")) return "web";
  return null; // /platforms
}

export default function PlatformsHeroTabs() {
  const pathname = usePathname();

  //  IMPORTANT: parent page is /platforms (not /platform)
  const onPlatformsIndex = pathname === "/platform";

  //  default active tab on /platforms
  const DEFAULT_TAB: TabKey = "mt5";

  const tabs: TabItem[] = useMemo(
    () => [
      {
        key: "mt5",
        label: "MetaTrader 5",
        image: Mt5Img,
        imageAlt: "MetaTrader 5 terminal on laptop",
        href: "/platforms/metatrader5",

        leftKicker: "MetaTrader 5",
        leftHeading: "Trade with MT5. Built for serious execution.",
        leftLead:
          "Trade with the globally trusted MT5 terminal featuring advanced charting, Expert Advisors, and fast order execution for serious traders.",
        leftCtaText: "Explore MT5",
        leftCtaHref: "/platforms/metatrader5",
      },
      {
        key: "mt5web",
        label: "MetaTrader Web",
        image: Mt5WebImg,
        imageAlt: "MetaTrader Web in trading UI",
        href: "/platforms/metatraderweb",

        leftKicker: "MetaTrader Web",
        leftHeading: "Trade in your browser. No installation.",
        leftLead:
          "Access MetaTrader directly from your browser—no installation required. Stay flexible with essential tools for fast decision-making.",
        leftCtaText: "Explore MetaTrader Web",
        leftCtaHref: "/platforms/metatraderweb",
      },
      {
        key: "mobile",
        label: "Stonefort Trader Mobile",
        image: MobileTraderImg,
        imageAlt: "Stonefort Trader Mobile app screens",
        href: "/platforms/stoneforttradermobile",

        leftKicker: "Stonefort Trader Mobile",
        leftHeading: "Trade anywhere. Stay in control.",
        leftLead:
          "Trade on the go with a responsive mobile experience built for speed, simplicity, and full control across global markets.",
        leftCtaText: "Explore Mobile",
        leftCtaHref: "/platforms/stoneforttradermobile",
      },
      {
        key: "web",
        label: "Stonefort Trader Web",
        image: WebTerminalImg,
        imageAlt: "Stonefort Trader Web terminal on laptop",
        href: "/platforms/stoneforttraderweb",

        leftKicker: "Stonefort Trader Web",
        leftHeading: "Modern web terminal. Everyday performance.",
        leftLead:
          "Trade from our modern web terminal with a clean dashboard, powerful tools, and smooth execution—built for everyday trading.",
        leftCtaText: "Explore Web Terminal",
        leftCtaHref: "/platforms/stoneforttraderweb",
      },
    ],
    []
  );

  // Active from route (subpages). Null means we are on /platforms
  const routeKey = keyFromPathname(pathname);

  //  hover preview only on /platforms, start with DEFAULT_TAB so a tab is selected by default
  const [hoverKey, setHoverKey] = useState<TabKey>(DEFAULT_TAB);

  // Keep hoverKey synced when navigating to subpages
  useEffect(() => {
    if (routeKey) setHoverKey(routeKey);
  }, [routeKey]);

  //  activeKey: routeKey on subpages, hoverKey on /platforms, else DEFAULT_TAB
  const activeKey: TabKey =
    routeKey ?? (onPlatformsIndex ? hoverKey : DEFAULT_TAB);

  const activeTab = tabs.find((t) => t.key === activeKey) ?? tabs[0];

  // Default LEFT content for /platforms
  const leftKicker = onPlatformsIndex ? "Platform" : activeTab.leftKicker;
  const leftHeading = onPlatformsIndex
    ? "Your Platform. Your Trading Style."
    : activeTab.leftHeading;
  const leftLead = onPlatformsIndex
    ? "Trade seamlessly on Stonefort’s advanced trading solutions from web and mobile to the globally trusted MetaTrader suite."
    : activeTab.leftLead;
  const leftCtaHref = onPlatformsIndex ? "/platforms" : activeTab.leftCtaHref;
  const leftCtaText = onPlatformsIndex ? "Learn More" : activeTab.leftCtaText;

  // Default IMAGE for /platforms (different from tabs)
  const displayImage = onPlatformsIndex ? PlatformsDefaultImg : activeTab.image;
  const displayAlt = onPlatformsIndex
    ? "Stonefort trading platforms overview"
    : activeTab.imageAlt;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.heroCard}>
          {/* LEFT */}
          <div className={styles.left}>
            <p className={styles.kicker}>{leftKicker}</p>

            <h2 className={`title ${styles.topHeading}`}>{leftHeading}</h2>

            <p className={`text ${styles.lead}`}>{leftLead}</p>

            <Link className={`button ${styles.learnMore}`} href={leftCtaHref}>
              {leftCtaText} <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.tabsHeader}>TRADING PLATFORM</div>

            <div className={styles.tabsTop} role="tablist" aria-label="Platforms">
              {tabs.map((t) => {
                const isActive = !onPlatformsIndex && t.key === routeKey;


                return (
                  <Link
                    key={t.key}
                    href={t.href}
                    className={`${styles.tabBtn} ${
                      isActive ? styles.tabBtnActive : ""
                    }`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${t.key}`}
                    // Hover preview only on /platforms (index). On subpages, URL controls selection.
                    onMouseEnter={
                      onPlatformsIndex ? () => setHoverKey(t.key) : undefined
                    }
                    onFocus={
                      onPlatformsIndex ? () => setHoverKey(t.key) : undefined
                    }
                  >
                    <span className={styles.tabText}>{t.label}</span>
                    <span className={styles.tabIcon} aria-hidden="true">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* CONTENT */}
            <div id={`panel-${activeKey}`} role="tabpanel" className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.media}>
                  <div className={styles.imageFrame}>
                    <Image
                      src={displayImage}
                      alt={displayAlt}
                      className={styles.image}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
}
