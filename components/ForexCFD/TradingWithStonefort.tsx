import Image from "next/image";
import styles from "./TradingWithStonefort.module.css";

/* DEFAULT images */
const LeftImage = "/images/Spreads.png";
const CenterImage = "/images/Leverage.png";
const RightImage = "/images/Meta Traders.png";

/* HOVER images */
const LeftHover = "/images/Textleverage.png";
const CenterHover = "/images/TextSpreads.png";
const RightHover = "/images/TextMetatrader.png";

export default function TradingWithStonefort() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>
            Trading with <span className={styles.brand}>Stonefort</span> gives you
          </h2>
        </header>

        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.side}>
            <div className={styles.phoneWrap}>
              <Image
                src={LeftImage}
                alt="Ultra tight spreads"
                width={420}
                height={860}
                className={styles.phoneBase}
              />
              <Image
                src={LeftHover}
                alt="Leverage details"
                width={420}
                height={860}
                className={styles.phoneHover}
              />
            </div>
          </div>

          {/* CENTER */}
          <div className={styles.center}>
            <div className={`${styles.phoneWrap} ${styles.phoneCenter}`}>
              <Image
                src={CenterImage}
                alt="Up to 1:500 leverage"
                width={520}
                height={960}
                className={styles.phoneBase}
                priority
              />
              <Image
                src={CenterHover}
                alt="Spreads details"
                width={520}
                height={960}
                className={styles.phoneHover}
                priority
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.side}>
            <div className={styles.phoneWrap}>
              <Image
                src={RightImage}
                alt="Meta traders"
                width={420}
                height={860}
                className={styles.phoneBase}
              />
              <Image
                src={RightHover}
                alt="MetaTrader details"
                width={420}
                height={860}
                className={styles.phoneHover}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
