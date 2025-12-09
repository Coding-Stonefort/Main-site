"use client";

import Link from "next/link";
import "./MetalsHero.css";

export default function MetalsHero() {
  return (
    <section className="metals-hero">
      {/* Background Image */}
      <div
        className="metals-hero-bg"
        style={{ backgroundImage: `url("/images/metalsHero.webp")` }}
      />

      {/* Inner Content */}
      <div className="metals-hero-content">
        {/* LEFT TEXT BLOCK */}
        <div className="metals-left">
          <h1 className="metals-title">
            Precious Metals Trading<br /> with  Stonefort
          </h1>

          <p className="metals-subtitle">
            <strong>Trade with Spreads from 0.05 pts on Gold and 2 pts on Oil </strong><br/>
            Access global commodity markets with competitive pricing and flexible
            leverage through Stonefort’s CFD offering. Trade key assets such as gold
            and oil with spreads designed to support efficient order execution,
            allowing you to navigate market movements with greater clarity and control.
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
