// app/api/forex-quotes/route.ts
import { NextResponse } from "next/server";

// ===== 1) FOREX FROM FRANKFURTER (your original logic) =====
async function fetchForexQuotes() {
  const res = await fetch(
    "https://api.frankfurter.dev/v1/latest?base=USD&symbols=EUR,JPY,GBP,AUD,CAD"
  );

  if (!res.ok) throw new Error("Frankfurter response not OK: " + res.status);

  const json = await res.json();
  const rates = json.rates as Record<string, number> | undefined;

  if (!rates) throw new Error("Invalid Frankfurter payload");

  return [
    {
      symbol: "EURUSD",
      bid: 1 / rates.EUR,
      ask: 1 / rates.EUR + 0.0002,
    },
    {
      symbol: "USDJPY",
      bid: rates.JPY,
      ask: rates.JPY + 0.02,
    },
    {
      symbol: "GBPUSD",
      bid: 1 / rates.GBP,
      ask: 1 / rates.GBP + 0.0002,
    },
    {
      symbol: "AUDUSD",
      bid: 1 / rates.AUD,
      ask: 1 / rates.AUD + 0.0002,
    },
    {
      symbol: "USDCAD",
      bid: rates.CAD,
      ask: rates.CAD + 0.0002,
    },
  ];
}

// ===== 2) METALS FROM METALS.DEV =====
async function fetchMetalQuotes() {
  const apiKey = process.env.METALS_DEV_KEY;
  if (!apiKey) {
    console.warn("METALS_DEV_KEY is missing – no metals will be returned.");
    return [];
  }

  const url = `https://api.metals.dev/v1/latest?api_key= &currency=USD&unit=toz`;

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Metals.Dev response not OK:", res.status);
    return [];
  }

  const json = await res.json();

  if (json.status !== "success" || !json.metals) {
    console.error("Unexpected Metals.Dev payload:", json);
    return [];
  }

  // Response example (simplified):
  // metals: { gold: 1923.86, silver: 22.905, platinum: 916.569, ... } :contentReference[oaicite:1]{index=1}
  const { gold, silver, platinum } = json.metals;

  const out: { symbol: string; bid: number; ask: number }[] = [];

  if (typeof gold === "number") {
    const spread = 0.40; // tweak as you like
    const half = spread / 2;
    out.push({
      symbol: "XAUUSD",
      bid: gold - half,
      ask: gold + half,
    });
  }

  if (typeof silver === "number") {
    const spread = 0.03;
    const half = spread / 2;
    out.push({
      symbol: "XAGUSD",
      bid: silver - half,
      ask: silver + half,
    });
  }

  if (typeof platinum === "number") {
    const spread = 0.50;
    const half = spread / 2;
    out.push({
      symbol: "XPTUSD",
      bid: platinum - half,
      ask: platinum + half,
    });
  }

  return out;
}

// ===== 3) COMBINED HANDLER =====
export async function GET() {
  try {
    const [forexQuotes, metalQuotes] = await Promise.all([
      fetchForexQuotes(),
      fetchMetalQuotes(),
    ]);

    // One array: Forex + Metals
    return NextResponse.json([...forexQuotes, ...metalQuotes]);
  } catch (err) {
    console.error("Forex / Metals API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
