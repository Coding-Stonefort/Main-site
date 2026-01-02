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
      "Buy and sell seamlessly across Stonefort Trader Mobile, Web Terminal, and MetaTrader 5. Enjoy quick trade execution and flexible order management.",
    iconSrc: "/images/real-time.png",
    iconAlt: "Multi-platform trading",
  },
  {
    title: "Advanced Charting & Trading Tools",
    text:
      "Access 50+ professional trading tools including indicators, Expert Advisors, and advanced analytics.",
    iconSrc: "/images/drawing-tool.png",
    iconAlt: "Charting tools",
  },
  {
    title: "Autochartist-Powered Market Insights",
    text:
      "Identify trading opportunities with pattern recognition, key price levels, and market setups.",
    iconSrc: "/images/data-analysis.png",
    iconAlt: "Market insights",
  },
  {
    title: "Market News & Sentiment Analysis",
    text:
      "Stay informed with real-time market updates, economic events, and sentiment indicators.",
    iconSrc: "/images/statistics.png",
    iconAlt: "Market news",
  },
  {
    title: "Personalised Trading Experience",
    text:
      "Customise layouts, build watchlists, set alerts, and switch between light and dark themes.",
    iconSrc: "/images/customisation.png",
    iconAlt: "Customisation",
  },
];

export default function TradeWithoutCompromise() {
  return (
    <section className="section">
      <div className="container">
        {/* TOP HEADER */}
        <header className={styles.topHeader}>
          <h2 className="heading">Trade Without Compromise</h2>
          <p className="text">
            Our app and platforms give you every possible edge.
          </p>
        </header>

        {/* CONTENT GRID */}
        <div className={styles.inner}>
          {/* LEFT */}
          <div className={styles.content}>


            <div className={styles.steps}>
              {FEATURES.map((f, index) => (
                <div className={styles.step} key={index}>
                  <div className={styles.stepIcon} aria-hidden="true">
                    <Image
                      src={f.iconSrc}
                      alt={f.iconAlt}
                      width={20}
                      height={20}
                    />
                  </div>

                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{f.title}</h3>
                    <p className={styles.stepText}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* OPTIONAL CTA: use global .button if you want */}
            {/* <a className={`button ${styles.cta}`} href="/platform">
              Explore Platforms <span aria-hidden="true">→</span>
            </a> */}
          </div>

          {/* RIGHT */}
          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/crmm.webp"
                alt="Stonefort trading platform"
                width={760}
                height={560}
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
