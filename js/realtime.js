// js/realtime.js
// Real-time Functions

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

/* Listen Stats */
window.listenStats = function(callback) {
  onValue(ref(db, 'stats/'), snapshot => {
    callback(snapshot.val());
  });
};

/* Update Stats */
window.updateStats = function(stats) {
  console.log('Updating stats:', stats);
};

/* Real-time Order Count */
window.listenOrderCount = function() {
  onValue(ref(db, 'orders/'), snapshot => {
    const data = snapshot.val();
    const count = data ? Object.keys(data).length : 0;
    document.getElementById('orderCount').textContent = count;
  });
};

/* Real-time Revenue */
window.listenRevenue = function() {
  onValue(ref(db, 'orders/'), snapshot => {
    const data = snapshot.val();
    let total = 0;
    if (data) {
      for (let id in data) {
        total += parseInt(data[id].price || 0);
      }
    }
    document.getElementById('totalRevenue').textContent = 'Rp ' + total.toLocaleString();
  });
};

console.log("✅ Realtime.js loaded!");