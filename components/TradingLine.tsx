"use client";

import { useEffect, useRef } from "react";
import styles from "./TradingLine.module.css";

type TradingLineProps = {
  className?: string;
};

export default function TradingLine({ className }: TradingLineProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let points: number[] = [];
    const pointCount = 120;

    const upColor = "#22c55e";
    const downColor = "#ef4444";

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initPoints = () => {
      points = [];
      let current = 0.5;
      for (let i = 0; i < pointCount; i++) {
        current += (Math.random() - 0.5) * 0.08;
        current = Math.max(0.1, Math.min(0.9, current));
        points.push(current);
      }
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const stepX = width / (pointCount - 1);
      const margin = height * 0.15;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < points.length; i++) {
        const x1 = (i - 1) * stepX;
        const y1 = margin + (height - margin * 2) * (1 - points[i - 1]);
        const x2 = i * stepX;
        const y2 = margin + (height - margin * 2) * (1 - points[i]);

        ctx.strokeStyle =
          points[i] >= points[i - 1] ? upColor : downColor;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const tick = () => {
      points.shift();
      let next =
        points[points.length - 1] + (Math.random() - 0.5) * 0.12;
      next = Math.max(0.05, Math.min(0.95, next));
      points.push(next);
    };

    const loop = () => {
      tick();
      setTimeout(loop, 120);
    };

    resize();
    initPoints();
    draw();
    loop();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`${styles.wrap} ${className || ""}`}>
      <div className={styles.grid} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
