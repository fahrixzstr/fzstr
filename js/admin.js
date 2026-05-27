// js/admin.js
// Admin Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, set, onValue, update, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
  projectId: "fahrixzstore",
  storageBucket: "fahrixzstore.firebasestorage.app",
  messagingSenderId: "1070736619563",
  appId: "1:1070736619563:web:735cdd57d5c90373e1526e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

/* Check Auth */
onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = 'login.html';
  }
});

/* Logout */
window.logoutAdmin = async function() {
  try {
    await signOut(auth);
    window.location.href = 'login.html';
  } catch (error) {
    alert('Logout gagal: ' + error.message);
  }
};

/* Save Product */
window.saveProduct = async function() {
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const category = document.getElementById('productCategory').value;

  if (!name || !price || !category) {
    alert('Lengkapi data produk!');
    return;
  }

  try {
    const productRef = ref(db, 'products');
    await push(productRef, { name, price, category, createdAt: Date.now() });
    alert('Produk berhasil disimpan!');
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
  } catch (error) {
    alert('Gagal menyimpan: ' + error.message);
  }
};

/* Load Orders */
const orderRef = ref(db, 'orders');

onValue(orderRef, snapshot => {
  const data = snapshot.val();
  const container = document.getElementById('adminOrders');
  if (!container) return;

  if (!data) {
    container.innerHTML = '<p class="empty-state">Belum ada pesanan</p>';
    return;
  }

  let html = '';
  let totalOrders = 0;

  for (let id in data) {
    totalOrders++;
    const item = data[id];
    html += `
      <div class="order-admin-card">
        <h3>${item.product || '-'}</h3>
        <p>Order ID: ${item.orderId}</p>
        <p>Nama: ${item.name}</p>
        <p>WhatsApp: ${item.wa}</p>
        <p>Status: <span class="status-badge" style="background:${item.status === 'Selesai' ? '#22c55e' : '#f59e0b'};color:#000;padding:3px 10px;border-radius:10px;font-size:12px;">${item.status}</span></p>
        <div style="display:flex;gap:10px;margin-top:10px;">
          <button onclick="updateOrderStatus('${id}','Diproses')" style="padding:8px 15px;background:#667eea;color:#fff;border:none;border-radius:8px;cursor:pointer;">Proses</button>
          <button onclick="updateOrderStatus('${id}','Selesai')" style="padding:8px 15px;background:#22c55e;color:#fff;border:none;border-radius:8px;cursor:pointer;">Selesai</button>
          <button onclick="deleteOrder('${id}')" style="padding:8px 15px;background:#ef4444;color:#fff;border:none;border-radius:8px;cursor:pointer;">Hapus</button>
        </div>
      </div>
    `;
  }

  document.getElementById('totalOrders').textContent = totalOrders;
  container.innerHTML = html;
});

/* Update Order Status */
window.updateOrderStatus = async function(id, status) {
  try {
    await update(ref(db, 'orders/' + id), { status });
    alert('Status diperbarui!');
  } catch (error) {
    alert('Gagal update: ' + error.message);
  }
};

/* Delete Order */
window.deleteOrder = async function(id) {
  if (!confirm('Yakin hapus order ini?')) return;
  
  try {
    await remove(ref(db, 'orders/' + id));
    alert('Dihapus!');
  } catch (error) {
    alert('Gagal hapus: ' + error.message);
  }
};

/* Backup Data */
window.backupData = function() {
  const data = { backup: 'FahriXZ Store', createdAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'backup.json';
  a.click();
};

/* Restore Data */
window.restoreBackup = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const data = JSON.parse(e.target.result);
    console.log(data);
    alert('Restore berhasil!');
  };
  reader.readAsText(file);
};

console.log("✅ Admin.js loaded!");