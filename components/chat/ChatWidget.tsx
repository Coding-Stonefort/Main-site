"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ChatWidget.module.css";

type Source = {
  title: string;
  url?: string;
  heading?: string;
  snippet?: string;
};

type ApiResponse = {
  reply: string;
  sources?: Source[];
};

type Msg = {
  role: "user" | "bot";
  text: string;
  sources?: Source[];
};

export default function ChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi! Ask me anything about Stonefort. I’ll answer only using official website content.",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);
  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  }, [open, msgs.length]);

  async function send() {
    const message = input.trim();
    if (!message || loading) return;

    setInput("");
    setLoading(true);
    setMsgs((prev) => [...prev, { role: "user", text: message }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = (await res.json()) as ApiResponse;
      if (!res.ok) throw new Error(data?.reply || "Request failed");

      setMsgs((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply || "I couldn’t find that in the website content.",
          sources: data.sources || [],
        },
      ]);
    } catch {
      setMsgs((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send();
    if (e.key === "Escape") setOpen(false);
  }

  if (!mounted) return null;

  const ui = (
    <div
      className={styles.wrap}
      data-open={open ? "1" : "0"}

    >
      {/* Panel FIRST so it opens UPWARDS */}
      <div
        id="stonefort-chat-panel"
        className={styles.panel}
        role="dialog"
        aria-label="Chatbot"
        // style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <div className={styles.title}>
              <span className={styles.dot} aria-hidden="true" />
              Stonefort Help
            </div>
            <div className={styles.sub}>Answers come only from official site content</div>
          </div>

          <button
            type="button"
            className={styles.close}
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            style={{ pointerEvents: "auto" }}
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div className={styles.list} ref={listRef}>
          {msgs.map((m, idx) => (
            <div key={idx} className={`${styles.msg} ${m.role === "user" ? styles.user : styles.bot}`}>
              <div className={styles.bubble}>
                <pre className={styles.text}>{m.text}</pre>

                {m.role === "bot" && m.sources && m.sources.length > 0 && (
                  <div className={styles.sources}>
                    <div className={styles.sourcesTitle}>Sources</div>
                    <ul className={styles.sourcesList}>
                      {m.sources.slice(0, 4).map((s, i) => (
                        <li key={i} className={styles.sourceItem}>
                          {s.url ? (
                            <a className={styles.sourceLink} href={s.url}>
                              {s.title}
                            </a>
                          ) : (
                            <span className={styles.sourcePlain}>{s.title}</span>
                          )}
                          {s.heading ? <span className={styles.sourceMeta}> — {s.heading}</span> : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className={`${styles.msg} ${styles.bot}`}>
              <div className={styles.bubble}>
                <div className={styles.typing}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input footer */}
        <div className={styles.footer}>
          <input
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Ask about account types, platforms, deposits, policies..."
            disabled={loading}
          />
          <button className={styles.send} onClick={send} disabled={!canSend}>
            Send
          </button>
        </div>
      </div>

      {/* ===== FAB: LIQUID WAVY RING (no SVG needed) ===== */}
 {/* ===== FAB: FLUFFY WAVY RING (SVG displacement) ===== */}
<svg className={styles.fabSvg} aria-hidden="true">
  <filter id="sf-fab-wobble" x="-35%" y="-35%" width="170%" height="170%">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.9"
      numOctaves="2"
      seed="8"
      result="noise"
    >
      {/* This makes the “fluff” move all around */}
      <animate
        attributeName="baseFrequency"
        dur="2.8s"
        values="0.65;1.05;0.65"
        repeatCount="indefinite"
      />
    </feTurbulence>

    <feDisplacementMap
      in="SourceGraphic"
      in2="noise"
      scale="18"
      xChannelSelector="R"
      yChannelSelector="G"
    >
      <animate
        attributeName="scale"
        dur="2.8s"
        values="12;22;12"
        repeatCount="indefinite"
      />
    </feDisplacementMap>
  </filter>
</svg>

{/* ===== FAB: TRUE WAVY RING (SVG) ===== */}
<button
  type="button"
  className={styles.fab}
  data-open={open ? "1" : "0"}
  onClick={() => setOpen((v) => !v)}
  aria-expanded={open}
  aria-controls="stonefort-chat-panel"
  aria-label={open ? "Close chat" : "Open chat"}
  style={{ pointerEvents: "auto" }}
>
  {/* Wavy ring lives as SVG so the SHAPE becomes waves */}
  <svg className={styles.fabRingSvg} viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <filter id="sfWavyStroke" x="-40%" y="-40%" width="180%" height="180%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012"
          numOctaves="2"
          seed="9"
          result="noise"
        >
          {/* noise motion = waves moving */}
          <animate
            attributeName="baseFrequency"
            dur="2.4s"
            values="0.010;0.016;0.010"
            repeatCount="indefinite"
          />
        </feTurbulence>

        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="18"
          xChannelSelector="R"
          yChannelSelector="G"
        >
          {/* wave intensity pulsing */}
          <animate
            attributeName="scale"
            dur="2.4s"
            values="14;22;14"
            repeatCount="indefinite"
          />
        </feDisplacementMap>
      </filter>

      {/* soft glow blur */}
      <filter id="sfGlow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="1.2" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* rotate the WHOLE distorted ring, so waves travel around */}
    <g filter="url(#sfWavyStroke)">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="3.2s"
        repeatCount="indefinite"
      />

      {/* main ring stroke */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="url(#sfGrad)"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </g>

    {/* gradient definition AFTER usage is OK in SVG */}
    <defs>
      <radialGradient id="sfGrad" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="rgba(140,240,255,0.95)" />
        <stop offset="55%" stopColor="rgba(0,150,255,0.65)" />
        <stop offset="100%" stopColor="rgba(30,90,255,0.45)" />
      </radialGradient>
    </defs>

    {/* extra outer glow ring */}
    <g filter="url(#sfGlow)" opacity="0.75">
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="rgba(80,220,255,0.55)"
        strokeWidth="10"
      />
    </g>
  </svg>

  {/* inner disk */}
  <span className={styles.fabCore} aria-hidden="true">
    <span className={styles.fabText}>{open ? "×" : "Hi"}</span>
  </span>
</button>


    </div>
  );

  return createPortal(ui, document.body);
}
