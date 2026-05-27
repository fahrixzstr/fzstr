// js/dashboard.js
// Dashboard Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
  projectId: "fahrixzstore"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

/* Check Auth */
window.checkAuth = function() {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = 'login.html';
    } else {
      loadDashboard(user);
    }
  });
};

/* Load Dashboard */
function loadDashboard(user) {
  document.getElementById('userProfile').innerHTML = `
    <h2>${user.email}</h2>
    <p>Status: Aktif</p>
  `;
  
  loadOrders();
}

/* Load Orders */
function loadOrders() {
  onValue(ref(db, 'orders/'), snapshot => {
    const data = snapshot.val();
    const list = document.getElementById('orderList');
    
    if (!data) {
      list.innerHTML = '<p>Belum ada order</p>';
      return;
    }
    
    let html = '';
    let count = 0;
    for (let id in data) {
      count++;
      const item = data[id];
      html += `
        <div class="order-card">
          <h3>${item.product}</h3>
          <p>Order ID: ${item.orderId}</p>
          <p>Status: <span style="color:${item.status === 'Selesai' ? '#22c55e' : '#f59e0b'};">${item.status}</span></p>
        </div>
      `;
    }
    
    document.getElementById('totalOrders').textContent = count;
    list.innerHTML = html;
  });
}

/* Logout */
window.logoutUser = async function() {
  await signOut(auth);
  window.location.href = 'login.html';
};

console.log("✅ Dashboard.js loaded!");