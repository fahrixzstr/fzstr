// js/wishlist.js
// Wishlist Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
  projectId: "fahrixzstore"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* Add to Wishlist */
window.addWishlist = function(product) {
  push(ref(db, 'wishlist/'), {
    product,
    createdAt: Date.now()
  });
  alert('Ditambahkan ke wishlist!');
};

/* Load Wishlist */
onValue(ref(db, 'wishlist/'), snapshot => {
  const data = snapshot.val();
  const container = document.getElementById('wishlistContainer');
  if (!container) return;

  if (!data) {
    container.innerHTML = '<p>Wishlist kosong</p>';
    return;
  }

  let html = '';
  for (let id in data) {
    const item = data[id];
    html += `<div class="order-card"><h3>${item.product}</h3></div>`;
  }
  container.innerHTML = html;
});

console.log("✅ Wishlist.js loaded!");