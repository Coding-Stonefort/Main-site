import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Free, no key, no limits
    const res = await fetch(
      "https://api.frankfurter.dev/v1/latest?base=USD&symbols=EUR,JPY,GBP,AUD,CAD"
    );

    if (!res.ok) {
      console.error("Frankfurter response not OK", res.status);
      return NextResponse.json(
        { error: "Failed to fetch rates" },
        { status: 500 }
      );
    }

    const json = await res.json();
    const rates = json.rates as Record<string, number> | undefined;

    // Defensive check – avoid crashing if structure is unexpected
    if (!rates) {
      console.error("Unexpected Frankfurter payload:", json);
      return NextResponse.json(
        { error: "Invalid rates response" },
        { status: 500 }
      );
    }

    // json.rates is 1 USD -> X currency
    // For XXXUSD pairs we invert (1 / rate) to get USD per XXX.
    const quotes = [
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

    return NextResponse.json(quotes);
  } catch (err) {
    console.error("Forex API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
