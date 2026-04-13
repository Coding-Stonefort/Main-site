"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./AdvancedAccountMotionHero.module.css";

import MetaTraderIcon from "@/public/images/Metatrader-Platform.webp";
import MarketsIcon from "@/public/images/MetaTrader-Platforms.webp";
import PortalIcon from "@/public/images/clientportalaboutus.webp";
import SupportIcon from "@/public/images/image (3)-Photoroom.webp";

type WidgetItem = {
  id: string;
  title: string;
  value: string;
  image: StaticImageData;
  flightClass: string;
};

const widgetItems: WidgetItem[] = [
  {
    id: "mt5",
    title: "MT5 Platform",
    value: "Fast execution",
    image: MetaTraderIcon,
    flightClass: "flight1",
  },
  {
    id: "markets",
    title: "Markets Access",
    value: "Multi-asset",
    image: MarketsIcon,
    flightClass: "flight2",
  },
  {
    id: "portal",
    title: "Client Portal",
    value: "Secure dashboard",
    image: PortalIcon,
    flightClass: "flight3",
  },
  {
    id: "support",
    title: "24/7 Support",
    value: "Always available",
    image: SupportIcon,
    flightClass: "flight4",
  },
];

export default function AdvancedAccountMotionHero() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.particles} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className="badge">Advanced Account</span>

          <h2 className={`title ${styles.title}`}>
            A Balanced Account for Serious Trading
          </h2>

          <p className={`description ${styles.description}`}>
            The Advanced Account is suited for traders who want more competitive
            spreads than entry-level options while still benefiting from zero
            commission and flexible leverage. It is a strong choice for those
            with growing market experience who need an account that supports
            more active trading with straightforward conditions.
          </p>

          <a href="/contact" className={`button ${styles.cta}`}>
            Explore Advanced Account
          </a>
        </div>

        <div className={styles.stage}>
          <div className={styles.orbitScene}>
            <div className={styles.phoneWrap}>
              <div className={styles.phoneShadow} />

              <div className={styles.phone}>
                <div className={styles.notch} />

                <div className={styles.phoneInner}>
                  <div className={styles.phoneTop}>
                    <div>
                      <p className={styles.phoneEyebrow}>Stonefort</p>
                      <h3 className={styles.phoneTitle}>Advanced Account</h3>
                    </div>

                    <div className={styles.livePill}>
                      <span className={styles.liveDot} />
                      Live
                    </div>
                  </div>

                  {/* <div className={styles.heroCard}>
                    <div className={styles.heroCardGlow} />
                    <span className={styles.heroMini}>Smart trading setup</span>
                    <strong className={styles.heroMain}>
                      Serious trading conditions
                    </strong>
                    <p className={styles.heroText}>
                      Better spreads, 0 commission, flexible leverage, and MT5
                      access in one strong account structure.
                    </p>
                  </div> */}

                  <div className={styles.homeScreen}>
                    <div className={styles.homeHeader}>
                      <div>
                        <p className={styles.homeLabel}>Dashboard</p>
                        <strong className={styles.homeHeading}>
                          Trading widgets
                        </strong>
                      </div>

                      <div className={styles.signalPill}>+18.4%</div>
                    </div>

                    <div className={styles.widgetGrid}>
                      {widgetItems.map((item, index) => (
                        <div
                          key={item.id}
                          className={`${styles.widgetCard} ${styles[`widgetCard${index + 1}`]}`}
                        >
                          <div className={styles.widgetThumb} />
                          <div className={styles.widgetBody}>
                            <span className={styles.widgetTitle}>{item.title}</span>
                            <strong className={styles.widgetValue}>{item.value}</strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.phoneBottom}>
                    <div className={styles.metric}>
                      <span>Spreads</span>
                      <strong>From 1.0 pips</strong>
                    </div>
                    <div className={styles.metric}>
                      <span>Platform</span>
                      <strong>MT5</strong>
                    </div>
                    <div className={styles.metric}>
                      <span>Margin Call</span>
                      <strong>50%</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ONLY ONE SET OF ICONS */}
            {widgetItems.map((item) => (
              <div
                key={item.id}
                className={`${styles.iconFlight} ${styles[item.flightClass]}`}
                aria-hidden="true"
              >
                <Image
                  src={item.image}
                  alt=""
                  className={styles.iconFlightImage}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}