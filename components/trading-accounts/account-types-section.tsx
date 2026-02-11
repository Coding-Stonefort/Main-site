import styles from "./account-types-section.module.css";

type Plan = {
  name: string;
  featured?: boolean;
  items: { label: string; value: string }[];
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    items: [
      { label: "Minimum Deposit", value: "$50" },
      { label: "Spreads (Pips)", value: "From 1.3" },
      { label: "Leverage", value: "1:500" },
      { label: "Commission", value: "0" },
      { label: "Stop-Out", value: "20%" },
      { label: "Margin Call", value: "50%" },
    ],
  },
  {
    name: "Advanced",
    featured: true,
    items: [
      { label: "Minimum Deposit", value: "$3,000" },
      { label: "Spreads (Pips)", value: "From 1.0" },
      { label: "Leverage", value: "1:500" },
      { label: "Commission", value: "0" },
      { label: "Stop-Out", value: "20%" },
      { label: "Margin Call", value: "50%" },
    ],
  },
  {
    name: "Elite",
    items: [
      { label: "Minimum Deposit", value: "$10,000" },
      { label: "Spreads (Pips)", value: "From 0.1" },
      { label: "Leverage", value: "1:200" },
      { label: "Commission", value: "$8" },
      { label: "Stop-Out", value: "50%" },
      { label: "Margin Call", value: "70%" },
    ],
  },
];

export default function AccountTypesSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.wrap}`}>
        <div className={styles.header}>
         
          <h2 className="title">Account Types</h2>
          <p className={`description ${styles.lead}`}>
            Our range of Stonefort account types allows every trader to find the right
            fit for their strategy. Compare minimum deposits, spreads, leverage, and
            commissions below to select the best forex trading account for your goals.
          </p>
        </div>

        <div className={styles.grid} role="list" aria-label="Account types comparison">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
              role="listitem"
            >
              <div className={styles.cardHead}>
                <h3 className={`heading ${styles.planTitle}`}>{plan.name}</h3>
                {plan.featured ? <span className={styles.pill}>Most Popular</span> : null}
              </div>

              <div className={styles.metrics}>
                {plan.items.map((it) => (
                  <div key={it.label} className={styles.row}>
                    <span className={styles.k}>{it.label}</span>
                    <span className={styles.v}>{it.value}</span>
                  </div>
                ))}
              </div>

              <div className={styles.cta}>
                <a className={`button ${styles.button}`} href="/signup">
                  Open {plan.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* small note row (optional premium touch) */}
        <p className={`text ${styles.note}`}>
          Leverage and trading conditions may vary by region and regulatory requirements.
        </p>
      </div>
    </section>
  );
}
