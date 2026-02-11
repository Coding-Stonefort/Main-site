'use client'

import Image from 'next/image'
import styles from './TradingHero.module.css'
import TradingIllustration from '@/public/images/toptraderhero.webp'

export default function TradingHero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <h1 className="heading">
            Trade with a Structured Plan
          </h1>

          <p className="description">
            Most traders start with good intentions, but consistently tracking,
            measuring, and maintaining a trading plan can be challenging over time.
          </p>

          <p className="description">
            With Performance Analytics – Trading Plan, the heavy lifting is done for you—
            so you can focus on executing one trade at a time with clarity and discipline.
          </p>

          <ul className={styles.features}>
            <li>Define your money management rules</li>
            <li>Control emotional triggers</li>
            <li>Set and monitor target performance metrics</li>
          </ul>

          <div className={styles.ctaButtons}>
            <button className="button">Open an Account</button>
            <button className="button">Trade Now</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.heroImage}>
          <Image
            src={TradingIllustration}
            alt="Trading Strategy Illustration"
            priority
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>

      </div>
    </section>
  )
}
