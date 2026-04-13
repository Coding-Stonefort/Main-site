"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "../advance-accounts/AdvancedAccountMobileShowcase.module.css";

const accountDetails = [
  { key: "deposit", label: "Minimum Deposit", value: "$10,000" },
  { key: "spreads", label: "Spreads", value: "From 0.1 pips" },
  { key: "leverage", label: "Leverage", value: "1:200" },
  { key: "commission", label: "Commission", value: "$8" },
  { key: "platform", label: "Platform", value: "MT5" },
  { key: "stopout", label: "Stop-Out", value: "50%" },
  { key: "margincall", label: "Margin Call", value: "70%" },
];

type ChatMessage = {
  type: "user" | "bot";
  text: string;
  time: string;
  metaKey: string;
};

const chatSequence: ChatMessage[] = [
  {
    type: "user",
    text: "Hi Stonefort, what is the minimum deposit for the Elite Account?",
    time: "09:14",
    metaKey: "deposit",
  },
  {
    type: "bot",
    text: "The minimum deposit for the Elite Account is $10,000.",
    time: "09:14",
    metaKey: "deposit",
  },
  {
    type: "user",
    text: "What spreads do I get on this account?",
    time: "09:15",
    metaKey: "spreads",
  },
  {
    type: "bot",
    text: "Spreads start from 0.1 pips on the Elite Account.",
    time: "09:15",
    metaKey: "spreads",
  },
  {
    type: "user",
    text: "How much leverage are you giving?",
    time: "09:16",
    metaKey: "leverage",
  },
  {
    type: "bot",
    text: "The Elite Account offers leverage up to 1:200, subject to applicable conditions.",
    time: "09:16",
    metaKey: "leverage",
  },
  {
    type: "user",
    text: "Do I pay any commission?",
    time: "09:17",
    metaKey: "commission",
  },
  {
    type: "bot",
    text: "Yes, the Elite Account includes a commission of $8.",
    time: "09:17",
    metaKey: "commission",
  },
  {
    type: "user",
    text: "Which platform is included?",
    time: "09:18",
    metaKey: "platform",
  },
  {
    type: "bot",
    text: "The Elite Account is available on MT5.",
    time: "09:18",
    metaKey: "platform",
  },
  {
    type: "user",
    text: "What about margin call and stop-out?",
    time: "09:19",
    metaKey: "margincall",
  },
  {
    type: "bot",
    text: "Margin Call is 70% and Stop-Out is 50%.",
    time: "09:19",
    metaKey: "margincall",
  },
];
function PhoneTopBar() {
  return (
    <div className={styles.topBar}>
      <span>11:11</span>
      <div className={styles.topIcons}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function TypingBubble({ side }: { side: "user" | "bot" }) {
  return (
    <div
      className={
        side === "user"
          ? `${styles.typingBubble} ${styles.userTypingBubble}`
          : `${styles.typingBubble} ${styles.botTypingBubble}`
      }
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default function EliteAccountMobileShowcase() {
  const [visibleCount, setVisibleCount] = useState(0);
 const [typingMessage, setTypingMessage] = useState<ChatMessage | null>(null);
  const [activeMetaKey, setActiveMetaKey] = useState<string>("deposit");

  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chatBodyRef.current) return;
    const el = chatBodyRef.current;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: "smooth",
    });
  }, [visibleCount, typingMessage]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (visibleCount >= chatSequence.length) {
      timer = setTimeout(() => {
        setVisibleCount(0);
        setTypingMessage(null);
        setActiveMetaKey("deposit");
      }, 2200);
      return () => clearTimeout(timer);
    }

    const nextMessage = chatSequence[visibleCount];
    setTypingMessage(nextMessage);
    setActiveMetaKey(nextMessage.metaKey);

    const typingDelay = nextMessage.type === "user" ? 1300 : 1600;

    timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
      setTypingMessage(null);
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [visibleCount]);

  const visibleMessages = useMemo(
    () => chatSequence.slice(0, visibleCount),
    [visibleCount]
  );

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.headContent}>
          <span className="badge">Elite Account</span>
          <h2 className={`title ${styles.title}`}>
            Premium Conditions for Experienced Traders
          </h2>
          <p className={`description ${styles.description}`}>
            The Elite Account is designed for experienced traders who require
            tighter spreads, premium execution conditions, and a more refined
            trading environment. It offers strong account parameters with secure
            MT5 access for a higher-level trading experience.
          </p>
        </div>

        <div className={styles.mockupWrap}>
          <div className={styles.phone}>
            <PhoneTopBar />

            <div className={styles.screen}>
              <div className={styles.specHeader}>
                <div>
                  <h3 className={styles.phoneTitle}>Elite Account</h3>
                </div>
                <div className={styles.pill}>MT5</div>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.heroGlow} />
                <p className={styles.heroLabel}>Account Overview</p>
                <p className={styles.heroText}>
                  Premium pricing, tighter spreads, and stronger trading
                  conditions for serious traders.
                </p>
              </div>

              <div className={styles.specList}>
                {accountDetails.map((item) => {
                  const isActive = activeMetaKey === item.key;
                  return (
                    <div
                      key={item.key}
                      className={`${styles.specItem} ${isActive ? styles.specItemActive : ""}`}
                    >
                      <div className={styles.specLeft}>
                        <span className={styles.specDot} />
                        <span className={styles.specLabel}>{item.label}</span>
                      </div>
                      <span className={styles.specValue}>{item.value}</span>
                    </div>
                  );
                })}
              </div>

              <div className={styles.bottomNav}>
                <span className={`${styles.navDot} ${styles.active}`} />
                <span className={styles.navDot} />
                <span className={styles.navDot} />
                <span className={styles.navDot} />
              </div>
            </div>
          </div>

          <div className={styles.phone}>
            <PhoneTopBar />

            <div className={styles.screen}>
              <div className={styles.chatHeader}>
                <div className={styles.chatAvatar}>
                  <img
                    src="/images/stonefortappfav.ico"
                    alt="Stonefort"
                    className={styles.chatAvatarImage}
                  />
                </div>
                <div>
                  <h3 className={styles.chatTitle}>Stonefort Support</h3>
                  <p className={styles.chatStatus}>Online</p>
                </div>
                <button className={styles.chatAction} aria-label="Call support">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.6 10.8c1.4 2.8 3.7 5.1 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.08.36 2.24.54 3.42.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.18.18 2.34.54 3.42a1 1 0 0 1-.24 1l-2.2 2.18Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className={styles.chatBody} ref={chatBodyRef}>
                {visibleMessages.map((msg, index) => (
                  <div
                    key={`${msg.time}-${index}`}
                    className={msg.type === "user" ? styles.userRow : styles.botRow}
                  >
                    <div
                      className={
                        msg.type === "user"
                          ? `${styles.userBubble} ${styles.messageAppear}`
                          : `${styles.botBubble} ${styles.messageAppear}`
                      }
                    >
                      <p>{msg.text}</p>
                      <span>{msg.time}</span>
                    </div>
                  </div>
                ))}

                {typingMessage && (
                  <div
                    className={
                      typingMessage.type === "user" ? styles.userRow : styles.botRow
                    }
                  >
                    <TypingBubble side={typingMessage.type} />
                  </div>
                )}
              </div>

              <div className={styles.chatInput}>
                <span className={styles.inputPlaceholder}>
                  Ask about spreads, leverage, margin call...
                </span>
                <button className={styles.sendBtn} aria-label="Send message">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 20L20 12L4 4L4.01 10L15 12L4.01 14L4 20Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}