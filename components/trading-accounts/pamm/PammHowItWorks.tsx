import styles from "./PammHowItWorks.module.css";

const investors = [
  { name: "Investor A", amount: "$25,000" },
  { name: "Investor B", amount: "$50,000" },
  { name: "Investor C", amount: "$25,000" },
];

const payouts = [
  { label: "Investor A", value: "+$2,250" },
  { label: "Investor B", value: "+$5,000" },
  { label: "Investor C", value: "+$2,250" },
  { label: "Performance Fee", value: "-$2,500", negative: true },
];

export default function PammHowItWorks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.topContent}>
          <div className={`badge ${styles.badgeCustom}`}>Stonefort PAMM flow</div>
          <h2 className={`heading ${styles.title}`}>
            How <span className={styles.highlight}>PAMM</span> Accounts Work
          </h2>
          <p className={`text ${styles.description}`}>
            Investors pool capital into one managed strategy. The PAMM manager
            trades centrally, profits are generated, and returns are distributed
            proportionally after performance fees.
          </p>
        </div>

        <div className={styles.flowLayout}>
          <div className={styles.column}>
            <div className={styles.columnLabel}>Investor Pool</div>

            <div className={styles.stack}>
              {investors.map((item, index) => (
                <article key={index} className={styles.investorCard}>
                  <span className={styles.cardIndex}>
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className={styles.cardMeta}>
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    <p className={styles.cardValue}>{item.amount}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.centerZone}>
            <div className={styles.connectorLine} aria-hidden="true">
              <span className={styles.pulseDot} />
              <span className={styles.pulseDot} />
              <span className={styles.pulseDot} />
            </div>

            <div className={styles.hubCard}>
              <div className={styles.hubGlow} />
              <div className={styles.hubIcon}>
                <div className={styles.hubBars}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.hubText}>
                <span className={styles.hubEyebrow}>Central Managed Account</span>
                <h3 className={styles.hubTitle}>Trading Capital</h3>
                <strong className={styles.hubValue}>$100,000</strong>
              </div>
            </div>

            <div className={styles.profitBadge}>
              <span className={styles.profitTag}>Generated Profit</span>
              <strong className={styles.profitValue}>$12,500</strong>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnLabel}>Profit Distribution</div>

            <div className={styles.payoutPanel}>
              {payouts.map((item, index) => (
                <div key={index} className={styles.payoutRow}>
                  <div className={styles.payoutLeft}>
                    <span className={styles.payoutDot} />
                    <span className={styles.payoutLabel}>{item.label}</span>
                  </div>
                  <strong
                    className={`${styles.payoutValue} ${
                      item.negative ? styles.negative : styles.positive
                    }`}
                  >
                    {item.value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}