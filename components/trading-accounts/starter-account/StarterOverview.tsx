import Image from "next/image";
import styles from "./StarterOverview.module.css";

const stats = [
  { label: "Minimum Deposit", value: "$50" },
  { label: "Spreads", value: "From 1.3 pips" },
  { label: "Leverage", value: "Up to 1:500" },
  { label: "Commission", value: "0" },
  { label: "Platform", value: "MT5" },
  { label: "Stop-Out", value: "20%" },
  { label: "Margin Call", value: "50%" },
];

export default function StarterShowcase() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.layout}>
          <div className={styles.leftColumn}>
            <div className={styles.content}>
              <span className={`badge ${styles.badge}`}>
                Account Overview / Key Features
              </span>

              <h2 className={`title ${styles.title}`}>
                Everything You Need to Get Started
              </h2>

              <p className={`description ${styles.text}`}>
                Built for flexibility and ease of entry, the Starter Account
                gives traders access to global markets through a professional
                trading environment. It is ideal for those looking for
                transparent trading conditions and a lower starting commitment.
              </p>
            </div>

            <div className={styles.laptopCard}>
              <div className={styles.laptopGlow} />
      
              <span>
                <Image
                    src="/images/1687.webp"
                    alt="mockup image"
                    fill
                    priority
                />
              </span>
            </div>
          </div>

<div className={styles.rightColumn}>
  <div className={styles.mobileStage}>
    <div className={styles.phone}>
      <div className={styles.phoneTop}>
        <span className={styles.camera} />
      </div>

      <div className={styles.screen}>
        <div className={styles.screenHeader}>
          <span className={styles.screenBadge}>Starter Account</span>
          <h3 className={styles.screenTitle}>Trading Conditions</h3>
        </div>

        <div className={styles.screenList}>
          {stats.map((item) => (
            <div key={item.label} className={styles.screenRow}>
              <span className={styles.screenLabel}>{item.label}</span>
              <span className={styles.screenValue}>{item.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.screenFooter}>
          <span className={styles.footerDot} />
          <span className={styles.footerText}>Secure MT5 Access</span>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}