// js/analytics.js
// Analytics Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  projectId: "fahrixzstore",
  appId: "1:1070736619563:web:735cdd57d5c90373e1526e",
  measurementId: "G-H7QL79SSMX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/* Track Visitor */
window.trackVisitor = function() {
  logEvent(analytics, 'page_view');
  console.log("📊 Visitor tracked!");
};

/* Track Event */
window.trackEvent = function(eventName, params = {}) {
  logEvent(analytics, eventName, params);
  console.log(`📊 Event tracked: ${eventName}`);
};

/* Track Product View */
window.trackProductView = function(productName, price) {
  logEvent(analytics, 'view_item', {
    currency: 'IDR',
    value: parseInt(price),
    items: [{ item_name: productName }]
  });
};

/* Track Add to Cart */
window.trackAddToCart = function(productName, price) {
  logEvent(analytics, 'add_to_cart', {
    currency: 'IDR',
    value: parseInt(price),
    items: [{ item_name: productName }]
  });
};

/* Track Purchase */
window.trackPurchase = function(orderId, total) {
  logEvent(analytics, 'purchase', {
    currency: 'IDR',
    value: total,
    transaction_id: orderId
  });
};

// Auto track on load
document.addEventListener('DOMContentLoaded', () => {
  trackVisitor();
});

console.log("✅ Analytics.js loaded!");