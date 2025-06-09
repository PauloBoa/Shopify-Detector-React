import React from "react";

export default function ShopifyStatus({ isShopify }) {
  if (isShopify === null) return <p>🔍 Detecting...</p>;
  if (isShopify) return <p>✅ This page is a Shopify store.</p>;
  return <p>❌ This page is NOT a Shopify store.</p>;
}