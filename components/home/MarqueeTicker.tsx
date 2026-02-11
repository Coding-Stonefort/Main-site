"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./MarqueeTicker.module.css";

import SpeedImg from "@/public/images/speed.webp";
import ToolsImg from "@/public/images/tradingtools.webp";
import DepositImg from "@/public/images/deposit.webp";
import FundsImg from "@/public/images/funds.webp";
import InstrumentsImg from "@/public/images/instruments.webp";
import SupportImg from "@/public/images/support.webp";
import RegulatedImg from "@/public/images/forex.png";
import NegativeImg from "@/public/images/negative.webp";
import LeverageImg from "@/public/images/leverage.webp";
import SpreadImg from "@/public/images/spread.webp";

type Item = {
  label: string;
  value: string;
  img: StaticImageData;
};

const ITEMS: Item[] = [
  { label: "Speed of Implementation", value: "<30 ms", img: SpeedImg },
  { label: "Trading Tools", value: "50+", img: ToolsImg },
  { label: "Minimum Deposit", value: "$50", img: DepositImg },
  { label: "Segregated Clients Funds", value: "100%", img: FundsImg },
  { label: "Trading Instruments", value: "1500+", img: InstrumentsImg },
  { label: "Customer Support", value: "24/7 Multilingual", img: SupportImg },
  { label: "Regulated By", value: "SCA, FSC, St. Lucia, St. Vincent", img: RegulatedImg },
  { label: "Negative Balance", value: "Protection", img: NegativeImg },
  { label: "Leverage", value: "1:1000", img: LeverageImg },
  { label: "Tightest Spreads", value: "From 0.4 Pips", img: SpreadImg },
];

function Row() {
  return (
    <div className={styles.row}>
      {ITEMS.map((item, i) => (
        <div key={i} className={styles.item}>
          <Image
            src={item.img}
            alt={item.label}
            className={styles.icon}
            width={65}
            height={65}
          />

          <span className={styles.label}>{item.label}</span>
          <span className={styles.value}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function MarqueeTicker({
  speedSeconds = 250,
  className = "",
}: {
  speedSeconds?: number;
  className?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowMeasureRef = useRef<HTMLDivElement>(null);
  const [rowPx, setRowPx] = useState(0);

  useLayoutEffect(() => {
    const el = rowMeasureRef.current;
    if (!el) return;

    const setWidth = () => setRowPx(el.offsetWidth);
    setWidth();

    let ro: ResizeObserver | undefined;
    if (typeof window !== "undefined" && "ResizeObserver" in window) {
      ro = new ResizeObserver(() => setWidth());
      ro.observe(el);
    }

    const onLoad = () => setWidth();
    const onResize = () => setWidth();
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", onResize);

    return () => {
      ro?.disconnect();
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    vp.style.setProperty("--sf-speed", `${speedSeconds}s`);
    vp.style.setProperty("--sf-h", "150px");
    vp.style.setProperty("--rowpx", `${rowPx}px`);

    // theme-aware separator using tokens (works in light + dark)
    vp.style.setProperty("--sf-sep", "var(--border)");
  }, [rowPx, speedSeconds]);

  const isRunning = rowPx > 0;

  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.viewport} ref={viewportRef}>
        <div className={`${styles.track} ${styles.trackA} ${isRunning ? styles.run : ""}`}>
          <Row />
        </div>

        <div
          className={`${styles.track} ${styles.trackB} ${isRunning ? styles.run : ""}`}
          aria-hidden="true"
        >
          <Row />
        </div>

        <div className={`${styles.fade} ${styles.left}`} aria-hidden="true" />
        <div className={`${styles.fade} ${styles.right}`} aria-hidden="true" />

        {/* Hidden measurer */}
        <div className={styles.measure} aria-hidden="true">
          <div ref={rowMeasureRef}>
            <Row />
          </div>
        </div>
      </div>
    </div>
  );
}
