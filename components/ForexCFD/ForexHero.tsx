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
            Forex trading with low and stable spreads<span className="fx-sup">¹</span>
          </h1>

          <p className="fx-subtitle">
            Access the global forex market and trade the world’s most popular
            currency pairs with better-than-market conditions.
          </p>

          <div className="fx-cta-row">
            <Link href="/register" className="fx-btn-primary">
              Register
            </Link>
            <Link href="/demo" className="fx-btn-secondary">
              Try free demo
            </Link>
          </div>
          <div className="fx-right">

          </div>
        </div>
      </div>
    </section>
  );
}
