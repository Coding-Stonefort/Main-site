import styles from "./PammFeatures.module.css";

const features = [
  {
    title: "Showcase Your\nTrading Performance",
    text: "Promote your strategy by sharing real-time trading results to attract investors and grow your client base.",
  },
  {
    title: "Quick &\nSeamless Setup",
    text: "No additional plugins required. Stonefort handles your PAMM setup efficiently for a hassle-free launch.",
  },
  {
    title: "Flexible Fee\nPayouts",
    text: "Receive your performance fees on a weekly or monthly basis, based on your preferred schedule.",
  },
  {
    title: "Customised Investor\nOfferings",
    text: "Tailor different fee structures and trading conditions for clients within the same PAMM account.",
  },
  {
    title: "Turn Skill into\nProfit",
    text: "Leverage your trading expertise to generate income as your strategies deliver results.",
  },
  {
    title: "Unified\nControl",
    text: "Effortlessly oversee multiple trading accounts through a single, centralized hub, built for seamless forex operations and smarter decision-making.",
  },
  {
    title: "MT5\nCompatibility",
    text: "Stonefort PAMM is fully available on the MT5 platform, offering reliability and advanced trading capabilities.",
  },
];

export default function PammFeatures() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topContent}>
          <div className={`badge ${styles.badgeCustom}`}>
            Stonefort PAMM dashboard
          </div>

          <h2 className={`heading ${styles.title}`}>What is Stonefort PAMM?</h2>

          <p className={`text ${styles.description}`}>
            Stonefort PAMM allows investors to allocate funds to skilled traders,
            who manage trading from a central account. Instead of trading
            themselves, investors select from proven trader profiles. Returns are
            shared proportionally, while traders earn a management fee. It’s a
            transparent, hands-free investment solution built on performance and
            trust.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <span className={styles.iconNumber}>
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>

              <h3 className={styles.cardTitle}>
                {item.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i !== item.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>

              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}