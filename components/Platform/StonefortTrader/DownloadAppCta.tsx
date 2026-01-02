import Image from "next/image";
import Link from "next/link";
import styles from "./DownloadAppCta.module.css";

type Props = {
  googlePlayHref?: string;
  appStoreHref?: string;
};

export default function DownloadAppCta({
  googlePlayHref = "#",
  appStoreHref = "#",
}: Props) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          <div className={styles.inner}>
            {/* LEFT */}
            <div className={styles.content}>
              <div className={`badge ${styles.badge}`}>Get Started in Minutes</div>

              <h2 className={`title ${styles.title}`}>
                Download the <span className={styles.accent}>Stonefort App</span> and Start Trading Today
              </h2>

              <p className={`text ${styles.text}`}>
                Fast setup, secure access, and trading tools built for a smooth experience on the go.
              </p>

              <div className={styles.actions}>
                <Link
                  href={googlePlayHref}
                  className={styles.storeBtn}
                  aria-label="Get it on Google Play"
                >
                  <span className={styles.icon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" role="img" focusable="false">
                      <path
                        d="M4.7 3.4c-.5.3-.7.8-.7 1.5v14.2c0 .7.2 1.2.7 1.5l9-8.6-9-8.6Zm10.2 9.5 2.4 2.3 3.6-2.1c.8-.5.8-1.8 0-2.2l-3.6-2.1-2.4 2.3 2.1 2-2.1 2Zm-1.3-1.2 2.5-2.4-6.6-3.8 4.1 6.2Zm0 2.6-4.1 6.2 6.6-3.8-2.5-2.4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <span className={styles.storeText}>
                    <span className={styles.kicker}>Get it on</span>
                    <span className={styles.storeName}>Google Play</span>
                  </span>
                </Link>

                <Link
                  href={appStoreHref}
                  className={styles.storeBtn}
                  aria-label="Download on the App Store"
                >
                  <span className={styles.icon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" role="img" focusable="false">
                      <path
                        d="M16.9 13.1c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.5-1.7-3.1-1.7-1.3-.1-2.5.8-3.2.8s-1.7-.8-2.8-.8c-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.4 1.1 8.5.8 1 1.7 2.1 2.9 2.1 1.1 0 1.6-.7 3-.7s1.8.7 3.1.7c1.2 0 2-.9 2.8-1.9.9-1.1 1.3-2.2 1.3-2.2-.1 0-2.4-.9-2.4-3.7ZM14.7 6.8c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <span className={styles.storeText}>
                    <span className={styles.kicker}>Download on the</span>
                    <span className={styles.storeName}>App Store</span>
                  </span>
                </Link>
              </div>

              <div className={styles.note}>
                <span className={styles.dot} aria-hidden="true" />
                Secure install • Quick onboarding • Trade anywhere
              </div>
            </div>

            {/* RIGHT: FULL IMAGE (NO BORDER / NO DEVICE) */}
            <div className={styles.visual} aria-hidden="true">
              <div className={styles.mockupWrap}>
                <Image
                  src="/images/google-app.webp"
                  alt="Stonefort Trading App"
                  fill
                  priority
                  className={styles.mockupImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
