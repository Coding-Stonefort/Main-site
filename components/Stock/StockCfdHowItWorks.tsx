import styles from "./StockCfdHowItWorks.module.css";

export default function StockCfdHowItWorks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <span className="badge">Stocks</span>

          <h2 className={`heading ${styles.heading}`}>
            How Does Stock CFD Trading Work with{" "}
            <span className={styles.accent}>Stonefort</span>?
          </h2>

          <p className={`description ${styles.lead}`}>
            Stock CFDs let you speculate on share price movements without owning the underlying
            stock—giving you flexibility to trade both rising and falling markets.
          </p>
        </header>

        <div className={styles.layout}>
          {/* LEFT: Explanation */}
          <div className={styles.copy}>
            <p className={`text ${styles.p}`}>
              Stock trading through CFDs allows you to speculate on the price movement of company
              shares without owning the underlying stock. Instead of purchasing physical shares, you
              trade contracts based on whether a stock’s price is expected to rise or fall.
            </p>

            <p className={`text ${styles.p}`}>
              One key advantage of trading stock CFDs with Stonefort is access to global equity
              markets from a single platform. With a relatively small initial deposit, you can gain
              exposure to leading international stocks and take advantage of both upward and downward
              market movements.
            </p>

            <div className={styles.callout}>
              <div className={styles.calloutTop}>
                <div className={styles.dot} aria-hidden="true" />
                <p className={`text ${styles.calloutText}`}>
                  Stonefort offers leverage of up to <strong>1:20</strong> on stock CFDs, enabling
                  greater market exposure with lower capital outlay.
                </p>
              </div>
              <p className={`description ${styles.calloutNote}`}>
                Example: a <strong>$1,000</strong> margin can provide exposure equivalent to{" "}
                <strong>$20,000</strong> in stock value. Leverage can magnify returns and losses—use
                disciplined risk management.
              </p>
            </div>

            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>1</div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>Choose a stock</h3>
                  <p className={`description ${styles.stepText}`}>
                    Select a listed equity and decide whether you expect the price to rise or fall.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNum}>2</div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>Open a CFD position</h3>
                  <p className={`description ${styles.stepText}`}>
                    Your exposure is based on position size × price, not on share ownership.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNum}>3</div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>Close to realize P/L</h3>
                  <p className={`description ${styles.stepText}`}>
                    Profit or loss is the difference between opening and closing values.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Example Card */}
          <aside className={styles.card}>
            <div className={styles.cardHead}>
              <p className={styles.cardKicker}>Example of Stock CFD Trading</p>
              <h3 className={styles.cardTitle}>How is profit calculated?</h3>
            </div>

            <div className={styles.calc}>
              <div className={styles.calcRow}>
                <span className={styles.calcLabel}>Opening Price</span>
                <span className={styles.calcValue}>40 shares × $180 = $7,200</span>
              </div>

              <div className={styles.calcRow}>
                <span className={styles.calcLabel}>Closing Price</span>
                <span className={styles.calcValue}>40 shares × $195 = $7,800</span>
              </div>

              <div className={styles.divider} />

              <div className={`${styles.calcRow} ${styles.profitRow}`}>
                <span className={styles.calcLabel}>Total Profit</span>
                <span className={styles.profit}>$600</span>
              </div>
            </div>

            <div className={styles.detail}>
              <h4 className={styles.detailTitle}>The position opened</h4>
              <p className={`description ${styles.detailText}`}>
                40 CFDs were traded at an opening price of <strong>$180</strong> per share. Total
                position value:
              </p>

              <div className={styles.miniMath}>
                <span className={styles.miniLeft}>40 × $180</span>
                <span className={styles.miniRight}>= $7,200</span>
              </div>

              <p className={`description ${styles.detailText}`}>
                With a <strong>10%</strong> margin requirement, required trading capital:
              </p>

              <div className={styles.miniMath}>
                <span className={styles.miniLeft}>10% of $7,200</span>
                <span className={styles.miniRight}>= $720</span>
              </div>

              <h4 className={styles.detailTitle}>Position closure</h4>
              <p className={`description ${styles.detailText}`}>
                Two weeks later, the stock rises to <strong>$195</strong>. Total closing value:
              </p>

              <div className={styles.miniMath}>
                <span className={styles.miniLeft}>40 × $195</span>
                <span className={styles.miniRight}>= $7,800</span>
              </div>

              <p className={`description ${styles.detailText}`}>
                Profit realized from the price movement is <strong>$600</strong>.
              </p>
            </div>

            <div className={styles.cardCta}>
              <a className={`button ${styles.ctaButton}`} href="/stocks">
                Explore Stock CFDs
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
