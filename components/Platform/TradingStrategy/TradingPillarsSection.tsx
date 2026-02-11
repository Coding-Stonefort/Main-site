'use client'

import { useMemo, useState } from 'react'
import styles from './TradingPillarsSection.module.css'

type PillarKey = 'risk' | 'mindset' | 'metrics'

type Pillar = {
  key: PillarKey
  title: string
  paragraphs: string[]
}

export default function TradingPillarsSection() {
  const items = useMemo<Pillar[]>(
    () => [
      {
        key: 'risk',
        title: 'Risk Control',
        paragraphs: [
          'The first rule of trading is capital protection. Our risk management tools help you define how much risk you’re willing to take and notify you before limits are exceeded.',
        ],
      },
      {
        key: 'mindset',
        title: 'Trading Mindset',
        paragraphs: [
          'Emotional control is one of the most underestimated factors in trading. Set personalised alerts to help you stay disciplined.',
          'Performance Analytics notifies you when emotional trading patterns emerge, giving you the chance to pause, reassess, and regain control.',
        ],
      },
      {
        key: 'metrics',
        title: 'Performance Metrics',
        paragraphs: [
          'Trading without measurement is guesswork. Knowing which statistics matter is essential for long-term improvement.',
          'By tracking and refining key performance metrics, you can build your trading skills progressively and consistently.',
        ],
      },
    ],
    []
  )

  const [active, setActive] = useState<PillarKey>('risk')
  const current = items.find((x) => x.key === active) ?? items[0]

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT: options */}
        <aside className={styles.left} aria-label="Trading pillars">
          <div className={styles.card}>
            {items.map((item) => {
              const isActive = item.key === active
              return (
                <button
                  key={item.key}
                  type="button"
                  className={`${styles.option} ${isActive ? styles.optionActive : ''}`}
                  onClick={() => setActive(item.key)}
                  aria-pressed={isActive}
                >
                  <span className={styles.optionTitle}>{item.title}</span>
                  <span className={styles.optionMeta}>
                    {isActive ? 'Selected' : 'View details'}
                  </span>
                </button>
              )
            })}
          </div>
        </aside>

        {/* RIGHT: content */}
        <div className={styles.right}>
          <div className={styles.contentCard}>
            <div className={styles.kickerWrap}>
              <span className="badge">Performance Analytics</span>
            </div>

            <h2 className="title">{current.title}</h2>

            <div className={styles.copy}>
              {current.paragraphs.map((p, idx) => (
                <p key={idx} className="description">
                  {p}
                </p>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
