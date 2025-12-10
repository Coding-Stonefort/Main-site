"use client";

import { useEffect, useRef, useState } from "react";
import "./MetalsTabMockup.css";

export default function MetalsLaptopTabMockup() {
  return (
    <section className="metals-section">
      {/* ===== Heading + Body Text ===== */}
      <div className="metals-heading-wrap">
        <h2 className="metals-heading">
          How Precious Metals Trading Works with <span>Stonefort</span>
        </h2>

        <p className="metals-paragraph">
          Precious metals trading allows you to speculate on the price movements
          of assets such as gold, silver, and platinum without needing to hold
          the physical commodity. These instruments are often viewed as
          defensive or diversification assets, especially during periods of
          market uncertainty.
        </p>

        <p className="metals-paragraph">
          Through Stonefort, traders can access these markets using leverage,
          which enables control of a larger position size relative to the
          capital placed as margin. While leverage offers flexibility, it also
          increases both potential gains and potential losses, so it should be
          used with appropriate risk management.
        </p>
      </div>

      {/* ===== Laptop mockup ===== */}
      <div className="metal-tab-wrap">
        <div className="laptop-shell">
          <div className="laptop-screen">
            <div className="metal-tab-inner">
              {/* TOP: CHART */}
              <div className="chart-wrapper">
                <div className="chart-logo-bg" />
                <div className="chart-grid" />

                <RunningLineChart />
              </div>

              {/* BOTTOM: BOXES */}
              <div className="metal-bottom-row">
                <TypingBox
                  title="Gold (XAUUSD) Leverage"
                  text="Leverage of up to 1:1000, depending on your account’s leverage settings."
                />
                <TypingBox
                  title="Silver (XAGUSD) & Platinum (XPTUSD)"
                  text="Leverage of up to 1:200, typically set at one-fifth of your account’s leverage."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========== Typing box =========== */

function TypingBox({ title, text }: { title: string; text: string }) {
  const [display, setDisplay] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        setDisplay(text.slice(0, indexRef.current));
        indexRef.current += 1;

        if (indexRef.current > text.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setDisplay("");
            indexRef.current = 0;
            startTyping();
          }, 1500);
        }
      }, 40);
    };

    startTyping();
    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div className="typing-box">
      <h3 className="typing-title">{title}</h3>
      <p className="typing-text">{display}</p>
    </div>
  );
}
function RunningLineChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let points: number[] = [];
    let width = 0;
    let height = 0;
    const pointCount = 120;

    const upColor = "#16a34a";  
    const downColor = "#dc2626"; 

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      width = rect.width * dpr;
      height = rect.height * dpr;

      canvas.width = width;
      canvas.height = height;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initPoints = () => {
      points = [];
      const mid = 0.5;
      let current = mid;
      for (let i = 0; i < pointCount; i++) {
        current += (Math.random() - 0.5) * 0.08;
        current = Math.max(0.1, Math.min(0.9, current));
        points.push(current);
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      const w = rect.width;
      const h = rect.height;
      const stepX = w / (pointCount - 1);
      const margin = h * 0.12;

      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (let i = 1; i < points.length; i++) {
        const prevX = (i - 1) * stepX;
        const prevY =
          margin + (h - margin * 2) * (1 - points[i - 1]);

        const x = i * stepX;
        const y = margin + (h - margin * 2) * (1 - points[i]);

        // Choose color based on direction of move
        const isUp = points[i] > points[i - 1];
        ctx.strokeStyle = isUp ? upColor : downColor;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const tick = () => {
      points.shift();
      const last = points[points.length - 1] ?? 0.5;
      let next = last + (Math.random() - 0.5) * 0.12;
      next = Math.max(0.05, Math.min(0.95, next));
      points.push(next);
    };

    const loopTick = () => {
      tick();
      setTimeout(loopTick, 120);
    };

    resize();
    initPoints();
    draw();
    loopTick();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="running-chart-canvas" />;
}
