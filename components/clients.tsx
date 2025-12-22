// components/clients.tsx
import Image from "next/image";
import Particles from "./particles";
import styles from "./clients.module.css";

/* ========== Payment Logos ========== */
import Maya from "@/public/images/Maya.webp";
import UPI from "@/public/images/UPI.webp";
import Visa from "@/public/images/Visa.webp";
import BankTransfer from "@/public/images/Bank-Transfer.webp";
import Bitcoin from "@/public/images/BitCoin.png";
import Cryptos from "@/public/images/Cryptos.webp";
import FAB from "@/public/images/FAB.webp";
import GPay from "@/public/images/G-Pay.webp";
import Help2Pay from "@/public/images/Help2-pay.webp";
import MasterCardSecure from "@/public/images/Mastercard-Secure-Code.webp";
import Mastercard from "@/public/images/MAstercard.webp";
import MyFatoorah from "@/public/images/My-Faatoorah.webp";
import PaymentAsia from "@/public/images/Payment-Asia.webp";
import VerifiedVisa from "@/public/images/Verified-by-VISA.webp";
import ApplePay from "@/public/images/Apple-Pay.webp";
import EasyPaisa from "@/public/images/EasyPaisa.webp";
import GCash from "@/public/images/G-Cash.webp";
import Korapay from "@/public/images/Korapay.webp";

/* ========== Logos Array ========== */
const logos = [
  { src: Maya, alt: "Maya" },
  { src: UPI, alt: "UPI" },
  { src: Visa, alt: "Visa" },
  { src: BankTransfer, alt: "Bank Transfer" },
  { src: Bitcoin, alt: "Bitcoin" },
  { src: Cryptos, alt: "Cryptocurrencies" },
  { src: FAB, alt: "First Abu Dhabi Bank" },
  { src: GPay, alt: "Google Pay" },
  { src: Help2Pay, alt: "Help2Pay" },
  { src: MasterCardSecure, alt: "MasterCard SecureCode" },
  { src: Mastercard, alt: "Mastercard" },
  { src: MyFatoorah, alt: "My Fatoorah" },
  { src: PaymentAsia, alt: "Payment Asia" },
  { src: VerifiedVisa, alt: "Verified by Visa" },
  { src: ApplePay, alt: "Apple Pay" },
  { src: EasyPaisa, alt: "EasyPaisa" },
  { src: GCash, alt: "GCash" },
  { src: Korapay, alt: "Korapay" },
];

export default function Clients() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="payment-logos-title">
      <h2 id="payment-logos-title" className={styles.srOnly}>
        Payment Methods & Partners
      </h2>

      <div className={`container ${styles.inner}`}>
        {/* Heading */}
        <header className={styles.header}>
          <h2 className={`title ${styles.title}`}>Your Funds, Your Control</h2>

          <p className={`text ${styles.subtitle}`}>
            Your money, your way: secure, seamless, and always accessible.
          </p>

          <div className={styles.points}>
            <div className={styles.point}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M8 11l4 4 4-4" />
                <rect x="3" y="15" width="18" height="6" rx="2" />
              </svg>
              <span>Effortless Deposits</span>
            </div>

            <div className={styles.point}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
                aria-hidden="true"
              >
                <path d="M12 21V9" />
                <path d="M16 13l-4-4-4 4" />
                <rect x="3" y="3" width="18" height="6" rx="2" />
              </svg>
              <span>Instant Withdrawals</span>
            </div>

            <div className={styles.point}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.iconSuccess}
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <span>Zero Fees</span>
            </div>
          </div>
        </header>

        {/* Particles */}
        <Particles
          className={styles.particles}
          quantity={8}
          staticity={30}
          ease={50}
          color="#4D6E55"
        />

        {/* Full-bleed scrolling row */}
        <div className={styles.fullBleed}>
          <div className={styles.marquee} aria-label="Payment logos">
            <ul className={styles.track}>
              {logos.map((logo, index) => (
                <li key={`row1-${index}`} className={styles.logoItem}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={155}
                    height={80}
                    className={styles.logoImg}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>

            <ul className={styles.track} aria-hidden="true">
              {logos.map((logo, index) => (
                <li key={`row2-${index}`} className={styles.logoItem}>
                  <Image
                    src={logo.src}
                    alt=""
                    width={155}
                    height={80}
                    className={styles.logoImg}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
