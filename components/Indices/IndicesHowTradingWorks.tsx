import styles from "./IndicesHowTradingWorks.module.css";

export default function IndicesCfdHowItWorks() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <span className="badge">Indices</span>

          <h2 className={`heading ${styles.heading}`}>
            How Does Index Trading Work with{" "}
            <span className={styles.accent}>Stonefort</span>?
          </h2>

          {/* <p className={`description ${styles.lead}`}>
            Index trading allows you to speculate on the price movement of a group
            of stocks that make up a specific market index, such as the S&P 500,
            NASDAQ, or FTSE 100.
          </p> */}
        </header>

        <div className={styles.layout}>
          {/* LEFT: Explanation */}
          <div className={styles.copy}>
            <p className={`text ${styles.p}`}>
              Index trading allows you to speculate the price movement of a group of stocks that make up a specific market index, such as the S&P 500, NASDAQ, or FTSE 100. Instead of trading individual shares, index CFDs provide exposure to the overall performance of a country’s stock market or a specific sector. 
            </p>

            <p className={`text ${styles.p}`}>
              One of the key advantages of trading index CFDs is the ability to use leverage, which enables traders to control larger positions with a smaller initial deposit. This makes indices suitable for both diversification and strategic trading based on broader market trends. 
            </p>

            <p className={`text ${styles.p}`}>
              With Stonefort, traders can access a wide range of global indices, including major US, European, and Asian markets, allowing them to diversify their trading strategies across regions and economic cycles.
            </p>

            <div className={styles.callout}>
              <div className={styles.calloutTop}>
                <div className={styles.dot} aria-hidden="true" />
                <p className={`text ${styles.calloutText}`}>
Stonefort offers flexible leverage on index CFDs, enabling traders to enhance market exposure while maintaining capital efficiency. While leverage can increase potential returns, it also increases risk, making effective risk management and disciplined trading essential.
                </p>
              </div>

            </div>

            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>1</div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>Choose an index</h3>
                  <p className={`description ${styles.stepText}`}>
                    Select a market index and decide whether you expect it to
                    rise or fall.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNum}>2</div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>Open a CFD position</h3>
                  <p className={`description ${styles.stepText}`}>
                    Your exposure is based on contracts × index points, not on
                    owning shares.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNum}>3</div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>Close to realize P/L</h3>
                  <p className={`description ${styles.stepText}`}>
                    Profit or loss is determined by the difference between the
                    opening and closing index levels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Example Card */}
{/* RIGHT: Example Card */}
<aside className={styles.card}>
  <div className={styles.cardHead}>
    <p className={styles.cardKicker}>Indices Trading Example</p>
    <h3 className={styles.cardTitle}>How is profit calculated?</h3>
  </div>

  <div className={styles.calc}>
    <div className={styles.calcRow}>
      <span className={styles.calcLabel}>Opening Price</span>
      <span className={styles.calcValue}>6,498.0</span>
    </div>

    <div className={styles.calcRow}>
      <span className={styles.calcLabel}>Closing Price</span>
      <span className={styles.calcValue}>6,520.0</span>
    </div>

    <div className={styles.calcRow}>
      <span className={styles.calcLabel}>Price Difference</span>
      <span className={styles.calcValue}>22 points</span>
    </div>

    <div className={styles.divider} />

    <div className={`${styles.calcRow} ${styles.profitRow}`}>
      <span className={styles.calcLabel}>Gross Profit on Trade</span>
      <span className={styles.profit}>USD $44</span>
    </div>
  </div>

  <div className={styles.detail}>
    <p className={`description ${styles.detailText}`}>
      <strong>22 points × 2 contracts (USD $2 per point) = USD $44</strong>
    </p>

    <h4 className={styles.detailTitle}>Opening the position</h4>
    <p className={`description ${styles.detailText}`}>
      The price of the US 500 Index is quoted at <strong>6,497.0 / 6,498.0</strong>.
      You believe the broader US market is likely to move higher, so you decide to buy{" "}
      <strong>2 contracts</strong> at <strong>6,498.0</strong>.
    </p>

    <p className={`description ${styles.detailText}`}>
      Each contract is valued at <strong>USD $1 per index point</strong>, giving a total exposure
      of <strong>USD $2 per point</strong>. No commission is charged on index CFD trades.
    </p>

    <h4 className={styles.detailTitle}>Closing the position</h4>
    <p className={`description ${styles.detailText}`}>
      Four days later, the US 500 Index rises to <strong>6,520.0 / 6,521.0</strong>. You decide
      to take profit and close your position by selling <strong>2 contracts</strong> at{" "}
      <strong>6,520.0</strong>.
    </p>

    <h4 className={styles.detailTitle}>Trade result</h4>

    <p className={`description ${styles.detailText}`}>
      Price movement
    </p>
    <div className={styles.miniMath}>
      <span className={styles.miniLeft}>6,520.0 − 6,498.0</span>
      <span className={styles.miniRight}>= 22 points</span>
    </div>

    <p className={`description ${styles.detailText}`}>
      Gross profit
    </p>
    <div className={styles.miniMath}>
      <span className={styles.miniLeft}>22 points × USD $2 per point</span>
      <span className={styles.miniRight}>= USD $44</span>
    </div>
  </div>

  <div className={styles.cardCta}>
    <a className={`button ${styles.ctaButton}`} href="/indices">
      Explore Index CFDs
    </a>
  </div>
</aside>

        </div>
      </div>
    </section>
  );
}
