// js/tracking.js
// Tracking Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
  projectId: "fahrixzstore"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* Track Order */
window.trackOrder = function() {
  const orderId = document.getElementById('trackInput').value;
  const result = document.getElementById('trackResult');

  if (!orderId) {
    result.innerHTML = '<p>Masukkan Order ID!</p>';
    return;
  }

  onValue(ref(db, 'orders/' + orderId), snapshot => {
    const data = snapshot.val();
    
    if (!data) {
      result.innerHTML = '<p>Order tidak ditemukan</p>';
      return;
    }

    const statusIndex = data.status === 'Pending' ? 0 : data.status === 'Diproses' ? 1 : 2;
    
    result.innerHTML = `
      <div class="order-card">
        <h3>${data.orderId}</h3>
        <p>Produk: ${data.product}</p>
        <p>Status: <span style="color:#00d9ff;">${data.status}</span></p>
        <div class="tracking-step ${statusIndex >= 0 ? 'active' : ''}">🟡 Pending</div>
        <div class="tracking-step ${statusIndex >= 1 ? 'active' : ''}">🔵 Diproses</div>
        <div class="tracking-step ${statusIndex >= 2 ? 'active' : ''}">🟢 Selesai</div>
      </div>
    `;
  }, { onlyOnce: true });
};

console.log("✅ Tracking.js loaded!");