import Image from "next/image";
import styles from "./TrustSection.module.css";

export default function TrustSection() {
    return (
        <section className={`section ${styles.section}`}>
                            <header className={styles.header}>
                    <h2 className="title">
                        Start Your Trading Journey with {" "}
                        <span className={styles.accent}>Stonefort</span>
                    </h2>
                </header>
            <div className={`container ${styles.inner}`}>



                {/* Left Trust pilot*/}
                <div className={styles.left}>
                    <div className={styles.ratingCard}>
                        <h3 className={styles.name}>
                            Trustpilot
                        </h3>

                        <div className={styles.stars}>
                            ★★★★★
                        </div>

                        <p className={styles.score}>
                            4.8 out of 5
                        </p>

                        <p className={styles.review}>
                            Based on 2,000+ reviews
                        </p>
                    </div>
                </div>

                {/* Right - Content */}
                <div className={styles.right}>

                    <h3 className={styles.badge}>
                        Globally Trusted Broker
                    </h3>

                    <p className={`text ${styles.text}`}>
                        <strong>Trusted by Traders Worldwide</strong><br />
                        Stonefort has earned strong recognition from traders across global markets, reflecting consistent service quality, transparency, and client confidence. As a regulated and professionally managed brokerage, Stonefort is committed to delivering a secure, reliable, and performance-driven trading experience for every client.
                    </p>

                </div>
            </div>
        </section>
    )
}