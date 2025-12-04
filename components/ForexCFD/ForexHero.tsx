"use client";

import Link from "next/link";
import "./ForexHero.css";


export default function ForexHero() {
  return (
    <section className="fx-hero">
      {/* Background Image */}
      <div
        className="fx-hero-bg"
        style={{ backgroundImage: `url("/images/forexhero.webp")` }}
      />

      {/* Inner Content */}
      <div className="fx-hero-content">

        {/* LEFT TEXT BLOCK */}
        <div className="fx-left">
          <h1 className="fx-title">
            Forex Trading with<br/> Stonefort
          </h1>

          <p className="fx-subtitle">
            Trade FX CFDs on 90+ currency pairs with spreads starting from 0.4 pips. Elevate your trading with our advanced, high-performance platforms and experience the world’s largest financial market with competitive pricing and fast execution on 60+ major, minor, and exotic pairs.
          </p>

          <div className="fx-cta-row">
            <Link href="/register" className="fx-btn-primary">
              Open an Account
            </Link>
            <Link href="/demo" className="fx-btn-secondary">
              Trade Now
            </Link>
          </div>
          <div className="fx-right">

          </div>
        </div>
      </div>
    </section>
  );
}
