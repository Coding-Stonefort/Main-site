// components/IsometricCubes.tsx
import React from "react";
import styles from "./IsometricCubes.module.css";

const ALTCOINS = [
  "TON",
  "LINK",
  "MATIC",
  "LTC",
  "SHIB",
  "XLM",
  "UNI",
  "BCH",
  "APT",
  "ATOM",
  "ADA",
  "DOGE",
  "AVAX",
  "DOT",
  "TRX",
  "BTC",
  "ETH",
  "BNB",
  "SOL",
  "XRP",
];

export default function IsometricCubes() {
  const positions = [-1, 0, 1];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {[0, 1, 2].map((cubeIndex) => (
          <div key={cubeIndex} className={styles.cube}>
            {positions.map((x, colIndex) => (
              <div
                key={x}
                style={{ "--x": x, "--y": 0 } as React.CSSProperties}
              >
                {[3, 2, 1].map((i, rowIndex) => {
                  // Flattened index across all cubes (3 cubes × 9 blocks each = 27)
                  const blockIndex = cubeIndex * 9 + colIndex * 3 + rowIndex;
                  const label =
                    ALTCOINS[blockIndex % ALTCOINS.length]; // repeat when > 20

                  return (
                    <span
                    key={`${cubeIndex}-${colIndex}-${i}`}
                    style={{ "--i": i } as React.CSSProperties}
                    >
                    <span className={styles.frontLabel}>{label}</span>
                    <span className={styles.leftLabel}>{label}</span>
                    <span className={styles.topLabel}>{label}</span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}



