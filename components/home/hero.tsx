import Image from "next/image";
import styles from "./Hero.module.css";

// REMOVE old bg image import
// import HeroBg from "@/public/images/herobg.webp";

import TradingElement from "@/public/images/trading-element.webp";

// Flags
import Flaguae from "@/public/images/flags/uae.png";
import FlagMauritius from "@/public/images/flags/mauritius.png";
import FlagStLucia from "@/public/images/flags/st-lucia.png";
import FlagStVincent from "@/public/images/flags/st-vincent-and-the-grenadines.png";

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      {/* Background (VIDEO) */}
      <div className={styles.bg} aria-hidden="true">
        <video
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {/* Put your webm here */}
          <source src="/videos/herobg.webm" type="video/webm" />
        </video>

        {/* Overlay stays on top for readability */}
        {/* <div className={styles.bgOverlay} aria-hidden="true" /> */}
      </div>

      {/* Decorative right element */}
      {/* <div className={styles.tradingElementWrap} aria-hidden="true">
        <Image
          src={TradingElement}
          alt=""
          width={400}
          height={400}
          className={styles.tradingElement}
        />
      </div> */}

      {/* Content */}
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.badgeRow} data-aos="fade-down">
            <a className={`badge ${styles.badgeLink}`} href="#">
              Powering Your Trading Journey
             
            </a>
          </div>

          <h1 className={`heading ${styles.title}`} data-aos="fade-down">
            Trade Limitless <br />
            With Stonefort Securities
          </h1>

          <p className={`text ${styles.desc}`} data-aos="fade-down" data-aos-delay="200">
            Unlock global market potential with our secure platform, expert support, and
            innovative trading tools; your gateway to smarter, more confident investing.
          </p>

          <div className={styles.ctaRow} data-aos="fade-down" data-aos-delay="400">
            <a className={`button ${styles.ctaBtn}`} href="#0">
              Open An Account
            </a>
            <a className={`button ${styles.ctaBtn}`} href="#0">
              Login
            </a>
          </div>
        </div>

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
