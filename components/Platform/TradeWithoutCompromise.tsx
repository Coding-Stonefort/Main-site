import Image from "next/image";
import styles from "./TradeWithoutCompromise.module.css";

type Feature = {
  title: string;
  text: string;
  iconSrc: string;
  iconAlt: string;
};

const FEATURES: Feature[] = [
  {
    title: "Mobile & Multi-Platform Trading",
    text:
      "Buy and sell seamlessly across Stonefort Trader Mobile, Web Terminal, and MetaTrader 5. Enjoy quick trade execution, flexible order management, and a smooth trading experience designed to adapt to your trading style.",
    iconSrc: "/images/Diversify.png",
    iconAlt: "Multi-platform trading",
  },
  {
    title: "Advanced Charting & Trading Tools",
    text:
      "Access over 50+ professional trading tools on the Stonefort Trader mobile app, while MetaTrader 5 desktop comes equipped with powerful built-in indicators, Expert Advisors (EAs), and advanced analytical capabilities for deeper market analysis.",
    iconSrc: "/images/tradingtools.webp",
    iconAlt: "Trading tools",
  },
  {
    title: "Autochartist-Powered Market Insights",
    text:
      "Identify trading opportunities with integrated Autochartist tools, providing pattern recognition, key price levels, and market setups to support informed decision-making.",
    iconSrc: "/images/stockmt5.png",
    iconAlt: "Market insights",
  },
  {
    title: "Market News & Sentiment Analysis",
    text:
      "Stay informed with in-platform market updates, economic events, and news sentiment indicators that help you gauge overall market direction and trader positioning.",
    iconSrc: "/images/real-time.png",
    iconAlt: "Real-time market news",
  },
  {
    title: "Personalised Trading Experience",
    text:
      "Customise your layouts, build multiple watchlists, set price alerts, and switch between light and dark themes — creating a trading environment that feels intuitive and comfortable across all platforms.",
    iconSrc: "/images/support.webp",
    iconAlt: "Personalized experience",
  },
];

export default function TradeWithoutCompromise() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        {/* Header */}
        <header className={styles.header}>
          <h2 className={styles.title}>Trade Without Compromise</h2>
          <p className={styles.subTitle}>
            Our app and platforms give you every possible edge.
          </p>
        </header>

        {/* Main grid */}
        <div className={styles.grid}>
          {/* Left features */}
          <div className={styles.left}>
            <div className={styles.features}>
              {FEATURES.map((f) => (
                <div className={styles.feature} key={f.title}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Image
                      src={f.iconSrc}
                      alt={f.iconAlt}
                      width={28}
                      height={28}
                      className={styles.iconImg}
                    />
                  </span>

                  <div className={styles.featureBody}>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureText}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <a className={styles.cta} href="#">
                Choose your trading platform
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className={styles.right}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/crmm.webp"
                alt="Stonefort platforms on mobile and desktop"
                width={720}
                height={520}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
