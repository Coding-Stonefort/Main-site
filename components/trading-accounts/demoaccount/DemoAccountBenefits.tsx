import Image from "next/image";
import styles from "./DemoAccountBenefits.module.css";

const benefits = [
  {
    title: "Virtual practice funds",
    text: "Trade using virtual funds in a simulated live market environment without risking real capital.",
    icon: "/images/liquidity.png",
  },
  {
    title: "Test trading strategies",
    text: "Try different trading strategies in real market conditions and see how they perform before going live.",
    icon: "/images/benchmarking.png",
  },
  {
    title: "Explore the MT5 platform",
    text: "Get familiar with Stonefort’s trading platform, charts, indicators, and essential tools.",
    icon: "/images/stockmt5.png",
  },
  {
    title: "Access live market pricing",
    text: "View real-time prices across forex, indices, commodities, and other popular markets.",
    icon: "/images/real-time.png",
  },
  {
    title: "Build confidence",
    text: "Develop your trading skills, improve decision-making, and gain confidence step by step.",
    icon: "/images/Indices.png",
  },
  {
    title: "Learn at your own pace",
    text: "Use the demo account as a practical way to understand market movements and platform features before moving to a live account.",
    icon: "/images/drawing-tool.png",
  },
];

export default function DemoAccountBenefits() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={`badge ${styles.badge}`}>Demo Account Benefits</span>

          <h2 className={`title ${styles.title}`}>
            Why use a <span className={styles.highlight}>Stonefort Demo Account?</span>
          </h2>

          <p className={`description ${styles.description}`}>
            Whether you are new to trading or want to test your approach before
            entering the live market, a Stonefort Demo Account gives you the
            freedom to explore trading in a risk-free environment.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.cardGlow} aria-hidden="true" />

              <div className={styles.cardTop}>
                <div className={styles.iconBadge}>
                  <Image
                    src={item.icon}
                    alt=""
                    width={34}
                    height={34}
                    className={styles.cardIcon}
                  />
                </div>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}