import Link from "next/link";
import styles from "./TradeMoreCashbackRewards.module.css";

const rewards = [
  {
    amount: "$80",
    deposit: "500",
    lots: "10",
    net: "$500",
  },
  {
    amount: "$120",
    deposit: "1,500",
    lots: "20",
    net: "$1,500",
  },
  {
    amount: "$500",
    deposit: "6,000",
    lots: "120",
    net: "$6,000",
  },
];

export default function TradeMoreCashbackRewards() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* HEADER */}
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>
            Trade More and Unlock Higher Cashback Rewards
          </h2>
          <p className={`text ${styles.subtitle}`}>
            Increase your trading activity and qualify for higher cashback rewards based on your deposits and traded volume.
          </p>
        </header>

        {/* REWARD BOXES */}
        <div className={styles.grid}>
          {rewards.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.amount}>
                {item.amount}
                <span>Cashback Reward</span>
              </div>

              <div className={styles.divider} />

              <h4 className={styles.reqTitle}>Requirements</h4>

              <ul className={styles.list}>
                <li>
                  <span>Minimum new deposit</span>
                  <strong>{item.deposit}</strong>
                </li>
                <li>
                  <span>Trade volume</span>
                  <strong>{item.lots} standard lots</strong>
                </li>
                <li>
                  <span>Net deposit</span>
                  <strong>{item.net}</strong>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <Link href="/register" className="button">
            Open an Account
          </Link>
        </div>
      </div>
    </section>
  );
}
