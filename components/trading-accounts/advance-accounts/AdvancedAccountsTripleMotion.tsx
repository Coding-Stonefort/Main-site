"use client";

import styles from "./AdvancedAccountsTripleMotion.module.css";

const accounts = [
  {
    id: "elite",
    label: "Elite Account",
    // heading: "Built for Precision and Performance",
    position: "left",
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
    id: "advanced",
    label: "Advanced Account",
    // heading: "Built for Traders Ready to Go Further",
    position: "center",
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
    id: "starter",
    label: "Starter Account",
    // heading: "Everything You Need to Get Started",
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
              <p className={styles.appKicker}>{account.label}</p>
              {/* <h3 className={styles.appHeading}>{account.heading}</h3> */}
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
                  account.id === "advanced" && index === 2 ? styles.activeRow : ""
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
    <section className={`section ${styles.section}`}>
      <div className={styles.bgArc} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.sideDotsLeft} aria-hidden="true" />
      <div className={styles.sideDotsRight} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className="badge">Account Types</span>
          <h2 className={`title ${styles.title}`}>
            Choose the Setup That Matches Your Trading Style
          </h2>
          <p className={`description ${styles.description}`}>
            Explore Starter, Advanced, and Elite account structures in one clean
            mobile-driven view. Each setup is designed for a different stage of
            the trading journey, with the Advanced Account positioned as the
            balanced option in front.
          </p>
        </div>

        <div className={styles.stage}>
          {accounts.map((account) => (
            <Phone key={account.id} account={account} />
          ))}
        </div>
      </div>
    </section>
  );
}