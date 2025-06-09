(function () {
  function checkIfShopify(html) {
    const shopifyMetaPatterns = [
      /<meta[^>]+name=["']shopify-digital-wallet["'][^>]*>/i,
      /<meta[^>]+name=["']shopify-checkout-api-token["'][^>]*>/i,
      /<meta[^>]+name=["']shopify-section-id["'][^>]*>/i,
      /cdn\.shopify\.com/i,
      /window\.Shopify\s*=\s*/i,
      /shopify-section/i
    ];

    return shopifyMetaPatterns.some((pattern) => pattern.test(html));
  }

  const html = document.documentElement.outerHTML;
  const isShopify = checkIfShopify(html);

  chrome.runtime.sendMessage({ type: "SHOPIFY_DETECTION", isShopify });
})();