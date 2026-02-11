import Link from "next/link";
import Image from "next/image";
import styles from "./MaximiseWebTradingExperience.module.css";
import MaximiseTradingImg from "@/public/images/maximiseTrading.webp";

export default function MaximiseWebTradingExperience() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          {/* LEFT: IMAGE */}
          <div className={styles.media} aria-hidden="true">
            <Image
              src={MaximiseTradingImg}
              alt="Web trading chart preview"
              fill
              priority
              className={styles.mediaImg}
            />
            <div className={styles.grid} />
          </div>

          {/* RIGHT: CONTENT */}
          <div className={styles.content}>
            <span className={styles.kicker}>Trading Experience</span>

            <h2 className={`heading ${styles.title}`}>
              Maximise Your Web Trading Experience
            </h2>

            <p className={`text ${styles.desc}`}>
              Learn how to use our web trading platform efficiently through step-by-step video guides.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/platform-tutorial" className={`button ${styles.cta}`}>
                Platform Tutorial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
