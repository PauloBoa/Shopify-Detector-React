let shopifyStatusByTab = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SHOPIFY_DETECTION") {
    shopifyStatusByTab[sender.tab.id] = message.isShopify;
  }

  if (message.type === "GET_SHOPIFY_STATUS") {
    const isShopify = shopifyStatusByTab[message.tabId];
    sendResponse({ isShopify });
  }

  return true;
});