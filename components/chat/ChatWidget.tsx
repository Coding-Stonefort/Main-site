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

  useEffect(() => {
    setMounted(true);
  }, []);

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
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        top: "auto",
        left: "auto",
        zIndex: 2147483647,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 12,
      }}
    >
      {/*  Panel FIRST so it opens UPWARDS */}
      <div
        id="stonefort-chat-panel"
        className={styles.panel}
        role="dialog"
        aria-label="Chatbot"
        style={{ pointerEvents: open ? "auto" : "none" }}
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

        {/*  Messages */}
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

        {/*  Input footer */}
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

      {/*  Button LAST so it stays bottom-right */}
<button
  type="button"
  className={styles.fab}
  onClick={() => setOpen((v) => !v)}
  aria-expanded={open}
  aria-controls="stonefort-chat-panel"
  style={{ pointerEvents: "auto" }}
>
  {open ? "×" : <span className={styles.fabLabel}>WEB SEARCH</span>}
</button>
    </div>
  );

  return createPortal(ui, document.body);
}
