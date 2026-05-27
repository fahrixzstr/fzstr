// js/review.js
// Review Functions

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

/* Send Review */
window.sendReview = function() {
  const name = document.getElementById('reviewName').value;
  const rating = document.getElementById('reviewRating').value;
  const message = document.getElementById('reviewMessage').value;

  if (!name || !message) {
    alert('Lengkapi data!');
    return;
  }

  push(ref(db, 'reviews/'), {
    name, rating, message,
    createdAt: Date.now()
  });

  alert('Review dikirim!');
};

/* Load Reviews */
onValue(ref(db, 'reviews/'), snapshot => {
  const data = snapshot.val();
  const container = document.getElementById('reviewContainer');
  if (!container) return;

  if (!data) {
    container.innerHTML = '<p>Belum ada review</p>';
    return;
  }

  let html = '';
  for (let id in data) {
    const item = data[id];
    html += `<div class="order-card"><h3>${item.name}</h3><p>${'⭐'.repeat(item.rating)}</p><p>${item.message}</p></div>`;
  }
  container.innerHTML = html;
});

console.log("✅ Review.js loaded!");