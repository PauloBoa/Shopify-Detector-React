import React, { useEffect, useState } from "react";
import Header from "./Header";
import ShopifyStatus from "./ShopifyStatus";

export default function App() {
  const [isShopify, setIsShopify] = useState(null);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.runtime.sendMessage(
        { type: "GET_SHOPIFY_STATUS", tabId: tabs[0].id },
        (response) => {
          if (response) {
            setIsShopify(response.isShopify);
          } else {
            setIsShopify(null);
          }
        }
      );
    });
  }, []);

  return (
    <div className="p-4 text-center w-64 h-32 flex flex-col justify-center items-center bg-white rounded shadow">
      <Header />
      <ShopifyStatus isShopify={isShopify} />
    </div>
  );
}