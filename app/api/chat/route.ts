// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { searchMdx } from "@/lib/chat/search";

export const runtime = "nodejs";

const BodySchema = z.object({
  message: z.string().min(1).max(800),
});

function isRiskyQuery(text: string) {
  const q = text.toLowerCase();
  return (
    q.includes("what should i invest") ||
    q.includes("guaranteed profit") ||
    q.includes("signal") ||
    q.includes("best leverage") ||
    q.includes("recommend a trade")
  );
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { message } = BodySchema.parse(json);

    // guardrails (no advice / no signals)
    if (isRiskyQuery(message)) {
      return NextResponse.json({
        reply:
          "I can’t provide investment advice, trading signals, or guarantee outcomes. I *can* help by showing official information from our website (accounts, platforms, deposits/withdrawals, policies, and risk disclosures).",
        sources: [],
      });
    }

    const hits = searchMdx(message, 5);

    if (!hits.length) {
      return NextResponse.json({
        reply:
          "I couldn’t find this information in our website content yet. Try rephrasing using keywords (e.g., “account types”, “deposit”, “withdrawal”, “platform”, “fees”), or contact support.",
        sources: [],
      });
    }

    const top = hits[0];

    //  IMPORTANT: no generation, only MDX snippet
    const reply = [
      "Here's what I found in our official website content:",
      "",
      `**${top.title}** → ${top.heading}`,
      top.snippet,
    ].join("\n");

    return NextResponse.json({
      reply,
      sources: hits.map((h) => ({
        title: h.title,
        url: h.url,
        heading: h.heading,
        snippet: h.snippet,
      })),
    });
  } catch (err) {
    return NextResponse.json(
      { reply: "Something went wrong. Please try again.", sources: [] },
      { status: 400 }
    );
  }
}
