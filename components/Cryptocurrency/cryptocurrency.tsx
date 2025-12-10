"use client";

import Link from "next/link";
import "../metals/MetalsHero.css";

export default function Cryptocurrency() {
  return (
    <section className="metals-hero">
      {/* Background Image */}
      <div
        className="metals-hero-bg"
        style={{ backgroundImage: `url("/images/cryptocurrencyHero.webp")` }}
      />

      {/* Inner Content */}
      <div className="metals-hero-content">
        {/* LEFT TEXT BLOCK */}
        <div className="metals-left">
          <h1 className="metals-title">
            Cryptocurrency Trading with <br /> Stonefort
          </h1>

          <p className="metals-subtitle">
            Access some of the most widely traded cryptocurrencies through Stonefort’s margin trading environment. Trade price movements in global crypto markets without the need for a digital wallet, allowing you to participate with added convenience while benefiting from a regulated and secure trading framework. 
          </p>

          <div className="metals-cta-row">
            <Link href="/register" className="metals-btn-primary">
              Open an Account
            </Link>
            <Link href="/demo" className="metals-btn-secondary">
              Trade Now
            </Link>
          </div>

          <div className="metals-right"></div>
        </div>
      </div>
    </section>
  );
}
