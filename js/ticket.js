// js/ticket.js
// Ticket Functions

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

/* Send Ticket */
window.sendTicket = function() {
  const title = document.getElementById('ticketTitle').value;
  const message = document.getElementById('ticketMessage').value;

  if (!title || !message) {
    alert('Lengkapi data!');
    return;
  }

  push(ref(db, 'tickets/'), {
    title, message,
    status: 'Pending',
    createdAt: Date.now()
  });

  alert('Ticket dikirim!');
};

/* Load Tickets */
onValue(ref(db, 'tickets/'), snapshot => {
  const data = snapshot.val();
  const container = document.getElementById('ticketList');
  if (!container) return;

  if (!data) {
    container.innerHTML = '<p>Belum ada ticket</p>';
    return;
  }

  let html = '';
  for (let id in data) {
    const item = data[id];
    html += `<div class="order-card"><h3>${item.title}</h3><p>${item.message}</p><p style="color:#f59e0b;">${item.status}</p></div>`;
  }
  container.innerHTML = html;
});

console.log("✅ Ticket.js loaded!");