// components/crypto/ManagingCryptoRisk.tsx
import styles from "./ManagingCryptoRisk.module.css";

export default function ManagingCryptoRisk() {
  return (
    <section className={styles.section} aria-labelledby="crypto-risk-heading">
      <div className={styles.inner}>
        {/* Text block */}
        <div className={styles.content}>
          <h2 id="crypto-risk-heading" className={styles.heading}>
            Managing Crypto Trading <span>Risk</span>
          </h2>

          <p className={styles.paragraph}>
            Cryptocurrency CFDs are typically more volatile than traditional
            currency markets and can experience sharp, sudden price movements
            driven by rapidly changing sentiment. Due to this heightened
            volatility, leverage available on crypto CFDs is generally lower
            than that offered on other asset classes. However, it remains
            possible to incur substantial losses within a short period if the
            market moves against your position.
          </p>

          <p className={styles.paragraph}>
            During fast-moving or uncertain market conditions, underlying
            spreads may also widen, which can increase trading costs or affect
            execution.
          </p>

          <p className={styles.paragraph}>
            It is important to fully understand how CFDs and cryptocurrency
            markets operate before trading. Consider using available
            risk-management tools to help manage exposure, while keeping in mind
            that these tools are not guaranteed and may execute at a different
            level if the market moves quickly or gaps.
          </p>
        </div>

        {/* Risk tools */}
        <div className={styles.toolsBlock}>
          <div className={styles.toolsHeader}>
            <h3 className={styles.toolsHeading}>Risk-Management Tools</h3>
            <p className={styles.toolsSubtext}>
              Use these tools to help manage exposure when trading cryptocurrency CFDs.
            </p>
          </div>

          <div className={styles.toolsGrid}>
            <article className={styles.toolCard}>
              <h4 className={styles.toolTitle}>Stop-loss orders</h4>
              <p className={styles.toolText}>
                Set a price level at which your position will be closed if the
                market moves against you.
              </p>
            </article>

            <article className={styles.toolCard}>
              <h4 className={styles.toolTitle}>Take-profit orders</h4>
              <p className={styles.toolText}>
                Set a target level to automatically close your position when the
                market moves in your favour.
              </p>
            </article>

            <article className={styles.toolCard}>
              <h4 className={styles.toolTitle}>Trailing stops</h4>
              <p className={styles.toolText}>
                Allow your stop-loss to adjust automatically as the market moves
                positively.
              </p>
            </article>

            <article className={styles.toolCard}>
              <h4 className={styles.toolTitle}>Alerts</h4>
              <p className={styles.toolText}>
                Receive notifications when market conditions change or key price
                levels are reached.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
