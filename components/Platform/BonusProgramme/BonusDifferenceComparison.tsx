import styles from "./BonusDifferenceComparison.module.css";

type Row = {
  label: string;
  value: string;
  highlight?: boolean;
};

const WITHOUT: Row[] = [
  { label: "Net Deposit", value: "$1,000" },
  { label: "Available Margin", value: "$1,000", highlight: true },
  { label: "Trade Volume", value: "4.0 Lots (EURUSD)" },
  { label: "Market Move", value: "200 pips" },
  { label: "Profit", value: "$800", highlight: true },
];

const WITH: Row[] = [
  { label: "Net Deposit", value: "$1,000" },
  { label: "Bonus Credit", value: "$1,000", highlight: true },
  { label: "Total Margin", value: "$2,000", highlight: true },
  { label: "Trade Volume", value: "6.5 Lots (EURUSD)" },
  { label: "Market Move", value: "200 pips" },
  { label: "Profit", value: "$1,300", highlight: true },
];

function IconLock() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 11V8a5 5 0 0 1 10 0v3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 11h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 10l-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 15l-1 4 4-1 7-7a4 4 0 0 0-6-6l-7 7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 6c1.5.2 3.3 1 4 2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Panel({
  variant,
  title,
  subtitle,
  rows,
  meterLabel,
  meterValue,
  meterSub,
}: {
  variant: "without" | "with";
  title: string;
  subtitle: string;
  rows: Row[];
  meterLabel: string;
  meterValue: string;
  meterSub: string;
}) {
  const isWith = variant === "with";

  return (
    <article className={`${styles.panel} ${isWith ? styles.with : styles.without}`}>
      <div className={styles.panelBg} aria-hidden="true" />

      <div className={styles.panelHead}>
        <div className={styles.headLeft}>
          <div className={styles.headIcon} aria-hidden="true">
            {isWith ? <IconRocket /> : <IconLock />}
          </div>
          <div>
            <div className={styles.panelKicker}>{isWith ? "With 100% Deposit Bonus" : "Without Bonus"}</div>
            <h3 className={styles.panelTitle}>{title}</h3>
            <p className={`text ${styles.panelSub}`}>{subtitle}</p>
          </div>
        </div>

        <div className={styles.meter}>
          <div className={styles.meterTop}>
            <span className={styles.meterLabel}>{meterLabel}</span>
            <span className={styles.meterValue}>{meterValue}</span>
          </div>
          <div className={styles.meterBar} aria-hidden="true">
            <span className={styles.meterFill} />
            <span className={styles.meterGlow} />
          </div>
          <div className={styles.meterHint}>{meterSub}</div>
        </div>
      </div>

      <div className={styles.table}>
        {rows.map((r) => (
          <div key={r.label} className={`${styles.row} ${r.highlight ? styles.rowHi : ""}`}>
            <div className={styles.cellLabel}>{r.label}</div>
            <div className={styles.cellValue}>{r.value}</div>
          </div>
        ))}
      </div>

      <div className={styles.panelFoot}>
        <span className={styles.pulseDot} aria-hidden="true" />
        Market move example: 200 pips (illustration)
      </div>
    </article>
  );
}

export default function BonusDifferenceComparison() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.headingWrap}>
          <span className={`badge ${styles.badge}`}>Next Section</span>
          <h2 className={`heading ${styles.title}`}>What’s the Difference?</h2>
          <p className={`text ${styles.subtitle}`}>
            See How a <span className={styles.accent}>100% Deposit Bonus</span> Changes Your Trading Power
          </p>
        </div>

        <div className={styles.grid}>
          <Panel
            variant="without"
            title="Limited Margin, Limited Exposure"
            subtitle="Restriction-oriented setup (lower trading capacity)."
            rows={WITHOUT}
            meterLabel="Trading Power"
            meterValue="Standard"
            meterSub="Tighter margin limits overall"
          />

          <Panel
            variant="with"
            title="More Margin, More Flexibility"
            subtitle="Freedom-oriented setup (higher trading capacity)."
            rows={WITH}
            meterLabel="Trading Power"
            meterValue="Boosted"
            meterSub="Expanded margin for more flexibility"
          />
        </div>

        <div className={styles.note}>
          <span className={styles.noteDot} aria-hidden="true" />
          Bonus credit increases trading capacity and margin flexibility. Profits generated from trading are withdrawable
          subject to bonus terms.
        </div>
      </div>
    </section>
  );
}
