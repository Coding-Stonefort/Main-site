"use client";

import { useEffect, useRef } from "react";

type LiveChartProps = {
  className?: string;
};

export default function LiveChart({ className }: LiveChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;

    const pointsCount = 120;
    let points = new Array(pointsCount).fill(0).map(() => 0.5);
    let last = 0.5;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      w = Math.max(1, Math.floor(rect.width * dpr));
      h = Math.max(1, Math.floor(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;

      // draw in CSS pixels
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    const tick = () => {
      // Smooth-ish movement: noise + slight sine wave drift
      t += 0.035;
      const drift = Math.sin(t) * 0.02;
      const noise = (Math.random() - 0.5) * 0.06;

      let next = last + drift + noise;
      next = clamp(next, 0.08, 0.92);

      points.shift();
      points.push(next);
      last = next;
    };

    const drawGrid = (width: number, height: number) => {
      // Subtle grid
      ctx.save();
      ctx.globalAlpha = 0.22;
      ctx.lineWidth = 1;

      const step = 28;
      ctx.strokeStyle = "rgba(255,255,255,0.10)";
      for (let x = 0; x <= width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Major grid
      ctx.globalAlpha = 0.18;
      const big = 84;
      ctx.strokeStyle = "rgba(135,171,147,0.18)";
      for (let x = 0; x <= width; x += big) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += big) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawLine = (width: number, height: number) => {
      const rect = canvas.getBoundingClientRect();
      const cw = rect.width;
      const ch = rect.height;

      // Work in CSS pixels (ctx transform already handled)
      const margin = ch * 0.14;
      const usableH = ch - margin * 2;
      const stepX = cw / (pointsCount - 1);

      // Glow stroke (behind)
      ctx.save();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const x = i * stepX;
        const y = margin + (1 - points[i]) * usableH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(0,211,198,0.22)";
      ctx.lineWidth = 6;
      ctx.globalAlpha = 1;
      ctx.shadowColor = "rgba(0,211,198,0.20)";
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.restore();

      // Main stroke
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const x = i * stepX;
        const y = margin + (1 - points[i]) * usableH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(135,171,147,0.95)"; // Stonefort green feel
      ctx.lineWidth = 2.2;
      ctx.shadowColor = "rgba(135,171,147,0.20)";
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // End dot
      const endX = (pointsCount - 1) * stepX;
      const endY = margin + (1 - points[points.length - 1]) * usableH;

      ctx.save();
      ctx.fillStyle = "rgba(0,211,198,0.95)";
      ctx.shadowColor = "rgba(0,211,198,0.35)";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(endX, endY, 3.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Base tint (subtle)
      ctx.save();
      const g = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      g.addColorStop(0, "rgba(12,18,24,0.60)");
      g.addColorStop(1, "rgba(12,18,24,0.20)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.restore();

      drawGrid(rect.width, rect.height);
      drawLine(rect.width, rect.height);

      tick();
      rafRef.current = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
