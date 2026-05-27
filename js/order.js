// js/order.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
  projectId: "fahrixzstore",
  storageBucket: "fahrixzstore.firebasestorage.app",
  messagingSenderId: "1070736619563",
  appId: "1:1070736619563:web:735cdd57d5c90373e1526e",
  measurementId: "G-H7QL79SSMX"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* Generate Order ID */
window.generateOrderId = function() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ORD-${year}${month}-${random}`;
};

/* Submit Order */
window.submitOrder = async function() {
  const name = document.getElementById('customerName').value;
  const wa = document.getElementById('customerWa').value;
  const product = document.getElementById('productSelect').value;
  const brief = document.getElementById('orderBrief').value;
  const deadline = document.getElementById('deadlineInput').value;

  if (!name || !wa || !product) {
    alert('Lengkapi data!');
    return;
  }

  const orderId = window.generateOrderId();
  const btn = document.querySelector('button[type="submit"]');

  try {
    btn.disabled = true;
    btn.textContent = '⏳ Memproses...';

    await set(ref(db, 'orders/' + orderId), {
      orderId, name, wa, product, brief, deadline,
      status: 'Pending', createdAt: Date.now()
    });

    document.getElementById('orderResult').innerHTML = `
      <div style="background:#12121a;padding:20px;border-radius:15px;margin-top:20px;border:1px solid #00d9ff;">
        <h3 style="color:#00d9ff;">✅ Pesanan Berhasil!</h3>
        <p>Order ID: <strong>${orderId}</strong></p>
        <p>Status: <span style="color:#f59e0b;">Pending</span></p>
      </div>
    `;

    // Send to WhatsApp
    const message = `Halo Admin FahriXZ,\nSaya mau order:\n\nOrder ID: ${orderId}\nProduk: ${product}\nNama: ${name}\nWhatsApp: ${wa}\nBrief: ${brief}`;
    window.open(`https://wa.me/6285609949819?text=${encodeURIComponent(message)}`, '_blank');

  } catch (error) {
    alert('Gagal: ' + error.message);
  } finally {
    btn.disabled = false;
    btn.textContent = '📦 Buat Pesanan';
  }
};

console.log("✅ Order.js loaded!");