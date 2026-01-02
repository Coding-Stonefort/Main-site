import Link from "next/link";
import styles from "./JoinGlobalTraders.module.css";

type Step = {
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    title: "Apply for a Live Account",
    desc: "Complete a simple online application to get started.",
  },
  {
    title: "Fund Your Account",
    desc: "Add funds securely using convenient payment options.",
  },
  {
    title: "Start Trading Instantly",
    desc: "Access global markets and begin trading without delay.",
  },
];

export default function JoinGlobalTraders({
  ctaHref = "/open-account",
  ctaLabel = "Open an account",
}: {
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <h2 className={`title ${styles.heading}`}>
            Join a Fast-Growing Global Community of Traders
          </h2>

          <p className={`text ${styles.sub}`}>
            Trade with confidence on Stonefort’s award-winning trading platform.
          </p>
        </div>

        <div className={styles.grid} role="list">
          {steps.map((s) => (
            <div className={styles.card} role="listitem" key={s.title}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href={ctaHref} className={`button ${styles.cta}`}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
