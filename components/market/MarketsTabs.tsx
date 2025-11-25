"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type MarketTabId = "forex" | "indices" | "metals" | "stock" | "commodity" | "crypto" 

type MarketTab = {
  id : MarketTabId;
  label: string;
  href: string;
};

const MARKET_TABS: MarketTab[] = [
  {id: "forex", label: "Forex CFD", href: "/markets/forex-cfd"},
  {id: "indices", label: "Indices CFD", href: "/markets/indices-cfd"},
  {id: "metals", label: " Metal CFD", href: "/markets/metal-cfd"},
  {id: "stock", label: " Stock CFD ", href: "/market/stock-cfd"},
  {id: "commodity", label: " Commodity CFD", href: "/markets/commodity-cfd"},
  {id: "crypto", label: " Stock CFD ", href: "/market/crypto-cfd"},
];

export default function MarketsTabs () {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<MarketTabId> ("forex");

  // config of the active tab
  const currentTab = MARKET_TABS.find((tab) => tab.id === activeTab)!;

  function handleTabClick(id: MarketTabId) {
    setActiveTab(id);

    const tab = MARKET_TABS.find((t) => t.id === id);
    if (!tab) return;

    router.push(tab.href);
  }

  return (
  <section style={{ padding: "24px", background: "#f9fafb" }}>

    <h2>Simple Tabs</h2>

    {/* Tab Buttons */}
    <div style={{ display: "flex", gap: "8px", marginTop: "12px"}}>
      {MARKET_TABS.map((tab) => (
        <button 
        key={tab.id}
        type="button"
        onClick={() => handleTabClick(tab.id)}
        style={{
          padding: "8px 16px",
          borderRadius: "999px",
          border: tab.id === activeTab ? "2px solid #4d6e55" : "1px solid #ccc",
          background: tab.id === activeTab ? "#e6f0ea" : "#ffffff",
          cursor: "pointer",
        }}
        >
          {tab.label}

        </button>
      ))}
    </div>

      {/* Active Tab Info */}
      <p style={{ marginTop: "16px"}}>
        Active tab: <strong> {currentTab.label}</strong>
        (target page will be: <code>{currentTab.href}</code>)
      </p>

  </section>
  
  )
}