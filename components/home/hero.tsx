import Image from "next/image";
import styles from "./Hero.module.css";

import HeroBg from "@/public/images/herobg.webp";
import TradingElement from "@/public/images/trading-element.webp";

// Flags
import Flaguae from "@/public/images/flags/uae.png";
import FlagMauritius from "@/public/images/flags/mauritius.png";
import FlagStLucia from "@/public/images/flags/st-lucia.png";
import FlagStVincent from "@/public/images/flags/st-vincent-and-the-grenadines.png";

export default function Hero() {
  return (
    // use global .section + module hero layout
    <section className={`section ${styles.hero}`}>
      {/* Background */}
      <div className={styles.bg} aria-hidden="true">
        <Image
          src={HeroBg}
          alt="Hero Background"
          fill
          priority
          placeholder="blur"
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} aria-hidden="true" />
      </div>

      {/* Decorative right element */}
      <div className={styles.tradingElementWrap} aria-hidden="true">
        <Image
          src={TradingElement}
          alt=""
          width={400}
          height={400}
          className={styles.tradingElement}
        />
      </div>

      {/* Content */}
      {/* use global .container so your system width applies */}
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          {/* mini badge link */}
          <div className={styles.badgeRow} data-aos="fade-down">
            {/* use global .badge for typography + tokens */}
            <a className={`badge ${styles.badgeLink}`} href="#0">
              Powering Your Trading Journey
              <span className={styles.badgeArrow}>-&gt;</span>
            </a>
          </div>

          {/* Title (global typography) */}
          <h1 className={`heading ${styles.title}`} data-aos="fade-down">
            Trade Limitless <br />
            With Stonefort Securities
          </h1>

          {/* Description (global typography) */}
          <p className={`text ${styles.desc}`} data-aos="fade-down" data-aos-delay="200">
            Unlock global market potential with our secure platform, expert support, and
            innovative trading tools; your gateway to smarter, more confident investing.
          </p>

          {/* CTAs (global button already used) */}
          <div className={styles.ctaRow} data-aos="fade-down" data-aos-delay="400">
            <a className={`button ${styles.ctaBtn}`} href="#0">
              Open An Account 
            </a>
            <a className={`button ${styles.ctaBtn}`} href="#0">
              Login
            </a>
          </div>
        </div>

        {/* Regulation boxes */}
        <div className={styles.regRow} data-aos="fade-up" data-aos-delay="500">
          <RegBox label="SCA" flag={Flaguae} />
          <RegBox label="FSC" flag={FlagMauritius} />
          <RegBox label="St. Lucia" flag={FlagStLucia} />
          <RegBox label="St. Vincent" flag={FlagStVincent} />
        </div>
      </div>
    </section>
  );
}

function RegBox({ label, flag }: { label: string; flag: any }) {
  return (
    // use global .glass (uses tokens + works in dark) + module for layout
    <div className={`glass ${styles.regBox}`}>
      <Image src={flag} alt="" width={18} height={18} className={styles.regFlag} />
      <span className={styles.regLabel}>{label}</span>

      <svg
        className={styles.regChevron}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707A1 1 0 1 1 8.707 5.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" />
      </svg>

      <span className={styles.regSheen} aria-hidden="true" />
    </div>
  );
}
