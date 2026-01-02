import Link from "next/link";
import styles from "./PromotionsActivities.module.css";

type Promo = {
  title: string;
  description: string;
  note?: string;
  href: string;
  tag?: string; // optional small label (e.g. "Coming Soon")
};

type Props = {
  heading?: string;
  intro?: string;
  footerNote?: string;
  items?: Promo[];
};

const defaultItems: Promo[] = [
  {
    title: "Stonefort Cashback Rewards",
    description: "Earn Cashback Rewards Based on Your Trading Activity",
    note: "Terms and Conditions Apply",
    href: "/platforms/cashback", 
    tag: "New",
  },
  {
    title: "Top Trader via App",
    description: "Top three traders earn crypto rewards based on performance.",
    note: "Terms and Conditions Apply",
    href: "/platforms/TopTrader",
    tag: "Popular",
  },
  {
    title: "Bonus Program",
    description:
      "Unlock Added Trading Benefits with Deposit Bonuses and Referral Incentives",
    href: "/platforms/BonusProgramme",
    tag: "Coming Soon",
  },
];

export default function PromotionsActivities({
  heading = "Explore Exclusive Promotions and Trading Activities",
  intro = "Unlock added trading value with Stonefort’s upcoming programs, designed to enhance your trading journey and reward active participation.",
  footerNote = "These features will be available through the Stonefort Trading App, designed to make your trading experience more rewarding and seamless.",
  items = defaultItems,
}: Props) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>{heading}</h2>
          <p className={`text ${styles.intro}`}>{intro}</p>
        </header>

        <div className={styles.grid}>
          {items.slice(0, 3).map((it) => (
            <Link key={it.title} href={it.href} className={styles.card}>
              <div className={styles.cardTop}>
                {it.tag ? <span className={`badge ${styles.tag}`}>{it.tag}</span> : <span />}
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </div>

              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={`text ${styles.cardDesc}`}>{it.description}</p>

              {it.note ? <p className={styles.cardNote}>{it.note}</p> : null}

              <div className={styles.cardFooter}>
                <span className={styles.ctaText}>Learn more</span>
                <span className={styles.ctaDot} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        <p className={`text ${styles.footer}`}>{footerNote}</p>
      </div>
    </section>
  );
}
