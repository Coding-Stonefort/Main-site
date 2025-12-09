"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const footerMenus = [
  {
    label: "Market",
    baseHref: "/market",
    items: [
      { label: "Forex CFD", href: "/markets/forex-cfd" },
      { label: "Indices CFD", href: "/markets/indices" },
      { label: "Metal CFD", href: "/markets/metal" },
      { label: "Stock CFD", href: "/markets/stock" },
      { label: "Commodity CFD", href: "/markets/commodities" },
      { label: "Crypto CFD", href: "/markets/crypto" },
    ],
  },
  {
    label: "Platform",
    baseHref: "/platform",
    items: [
      { label: "MetaTrader 5", href: "/platform/mt5" },
      { label: "MetaTrader Web", href: "/platform/mt5-web" },
      { label: "SFX Mobile App", href: "/platform/mobile" },
      { label: "SFX Web", href: "/platform/web" },
    ],
  },
  {
    label: "Trading",
    baseHref: "/trading",
    items: [
      { label: "Starter", href: "/trading/starter" },
      { label: "Advance", href: "/trading/advance" },
      { label: "Elite", href: "/trading/elite" },
      { label: "Demo", href: "/trading/demo" },
      { label: "PAMM", href: "/trading/pamm" },
      { label: "Fund Your Account", href: "/funding" },
      { label: "Trading Fees & Conditions", href: "/fees" },
    ],
  },
  {
    label: "Academy",
    baseHref: "/academy",
    items: [
      { label: "Overview", href: "/academy" },
      { label: "Articles", href: "/academy/articles" },
      { label: "E-Book", href: "/academy/ebook" },
      { label: "Trading Terms", href: "/academy/terms" },
      { label: "Blogs", href: "/blog" },
      { label: "Glossary", href: "/academy/glossary" },
    ],
  },
  {
    label: "Company",
    baseHref: "/about",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Regulatory Supervision", href: "/about/regulatory" },
      { label: "Legal Documents", href: "/about/legal" },
      { label: "Contact Us", href: "/about/contact" },
      { label: "Privacy Policy", href: "/about/privacy" },
    ],
  },
  {
    label: "Promotions",
    baseHref: "/promotions",
    items: [
      { label: "Bonus", href: "/promotions/bonus" },
      { label: "Loyalty Program", href: "/promotions/loyalty" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Connect Section */}
      <div className={styles.connectBox}>
        <h3 className={styles.connectTitle}>Connect with us</h3>

        <div className={styles.socialRow}>
          <Link href="#" aria-label="Facebook" className={styles.icon}>
            <Image src="/images/facebook.png" alt="facebook" width={30} height={30} />
          </Link>

          <Link href="#" aria-label="Instagram" className={styles.icon}>
            <Image src="/images/instagramFooter.png" alt="instagram" width={30} height={30} />
          </Link>

          <Link href="#" aria-label="Instagram" className={styles.icon}>
            <Image src="/images/twitter.png" alt="instagram" width={30} height={30} />
          </Link>

          <Link href="#" aria-label="LinkedIn" className={styles.icon}>
            <Image src="/images/linkedin.png" alt="linkedin" width={30} height={30} />
          </Link>

          <Link href="#" aria-label="YouTube" className={styles.icon}>
            <Image src="/images/youtubeFooter.png" alt="youtube" width={30} height={30} />
          </Link>
        </div>
      </div>

      {/* Middle Row */}
      <div className={styles.middleRow}>
        {/* Contact Details - LEFT */}
        <div className={styles.leftCol}>
          <h4 className={styles.heading}>Contact</h4>
          <p>Email: support@stonefort.com</p>
          <p>Phone: +971 00 000 0000</p>
          <p>Address: Dubai, United Arab Emirates</p>
        </div>

        {/* Logo - CENTER */}
        <div className={styles.logoBox}>
          <Image
            src="/images/logowhite.png"
            alt="Stonefort Logo"
            width={270}
            height={110}
          />
        </div>

        {/* Menu - RIGHT WITH HOVER SUBMENUS */}
        <div className={styles.rightCol}>
          <h4 className={styles.heading}>Menu</h4>

          <ul className={styles.menuList}>
            {footerMenus.map((group) => (
              <li key={group.label} className={styles.menuItem}>
                {/* Main menu label (click goes to baseHref) */}
                <Link href={group.baseHref} className={styles.menuTrigger}>
                  {group.label}
                </Link>

                {/* Sub menu (shown on hover desktop, always visible stacked on mobile) */}
                <ul className={styles.submenu}>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottomBox}>
        <p className={styles.license}>
          Stonefort Securities provides Contracts for Difference (CFDs) on Forex, Indices, Commodities,
          Metals, Stocks and Crypto assets.
        </p>

        <p className={styles.riskWarning}>
          Risk Warning: Trading leveraged products such as CFDs involves a high level of risk and may
          not be suitable for all investors. You may lose more than your initial investment. Ensure you
          fully understand the risks involved and seek independent advice if necessary.
        </p>

        <p className={styles.copy}>Copyright © Stonefort. All rights reserved.</p>
      </div>
    </footer>
  );
}
