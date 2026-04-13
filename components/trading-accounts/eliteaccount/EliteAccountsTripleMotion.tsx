"use client";

import styles from "./EliteAccountsTripleMotion.module.css";

const accounts = [
  {
    id: "advanced",
    label: "Advanced Account",
    position: "left",
    stats: [
      ["Minimum Deposit", "$3,000"],
      ["Spreads", "From 1.0 pips"],
      ["Leverage", "Up to 1:500"],
      ["Commission", "0"],
      ["Platform", "MT5"],
      ["Stop-Out", "20%"],
      ["Margin Call", "50%"],
    ],
  },
  {
    id: "elite",
    label: "Elite Account",
    position: "center",
    stats: [
      ["Minimum Deposit", "$10,000"],
      ["Spreads", "From 0.1 pips"],
      ["Leverage", "Up to 1:200"],
      ["Commission", "$8"],
      ["Platform", "MT5"],
      ["Stop-Out", "50%"],
      ["Margin Call", "70%"],
    ],
  },
  {
    id: "starter",
    label: "Starter Account",
    position: "right",
    stats: [
      ["Minimum Deposit", "$50"],
      ["Spreads", "From 1.3 pips"],
      ["Leverage", "Up to 1:500"],
      ["Commission", "0"],
      ["Platform", "MT5"],
      ["Stop-Out", "20%"],
      ["Margin Call", "50%"],
    ],
  },
];

function Phone({ account }: { account: (typeof accounts)[number] }) {
  return (
    <div className={`${styles.phoneCard} ${styles[account.position]}`}>
      <div className={styles.phoneShell}>
        <div className={styles.notch} />
        <div className={styles.phoneScreen}>
          <div className={styles.appTop}>
            <div>
              <p className={styles.appKicker}>Stonefort Account</p>
              <h3 className={styles.appHeading}>{account.label}</h3>
            </div>
            <div className={styles.appBadge}>MT5</div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.heroGlow} />
            <strong className={styles.heroTitle}>{account.label}</strong>
          </div>

          <div className={styles.statsList}>
            {account.stats.map(([label, value], index) => (
              <div
                key={label}
                className={`${styles.statRow} ${
                  account.id === "elite" && index === 0 ? styles.activeRow : ""
                } ${styles[`row${index + 1}`]}`}
              >
                <span className={styles.statLabel}>{label}</span>
                <strong className={styles.statValue}>{value}</strong>
              </div>
            ))}
          </div>

          <div className={styles.bottomMiniNav}>
            <span className={styles.navDot} />
            <span className={`${styles.navDot} ${styles.navDotActive}`} />
            <span className={styles.navDot} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdvancedAccountsTripleMotion() {
  return (
    <section className={`section ${styles.section} ${styles.heroSection}`}>
      <div className={styles.bgArc} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.sideDotsLeft} aria-hidden="true" />
      <div className={styles.sideDotsRight} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        <div className={styles.heroWrap}>
          <div className={styles.content}>
            <span className="badge">Elite Account</span>

            <h1 className={`heading ${styles.title}`}>
              Premium Conditions for{" "}
              <span className={styles.highlight}>Experienced Traders</span>
            </h1>

            <p className={`description ${styles.description}`}>
              The Elite Account is designed for traders who want tighter spreads,
              stronger trading conditions, and a more premium setup. Explore all
              three account structures in one hero view, with Elite positioned
              at the front as the flagship option.
            </p>

            <div className={styles.heroActions}>
              <a href="/register" className="button">
                Open an Account
              </a>
            </div>
          </div>

          <div className={styles.stage}>
            {accounts.map((account) => (
              <Phone key={account.id} account={account} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}