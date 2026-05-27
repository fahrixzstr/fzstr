// js/chat.js
// Chat Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
  projectId: "fahrixzstore"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* Send Chat */
window.sendChat = function() {
  const input = document.getElementById('chatInput');
  if (!input.value) return;

  push(ref(db, 'chat/'), {
    message: input.value,
    sender: 'user',
    createdAt: serverTimestamp()
  });

  input.value = '';
};

/* Load Chat */
const chatRef = ref(db, 'chat/');

onValue(chatRef, snapshot => {
  const data = snapshot.val();
  const container = document.getElementById('chatMessages');
  if (!container) return;

  let html = '';
  for (let id in data) {
    const item = data[id];
    html += `<div class="chat-message ${item.sender}">${item.message}</div>`;
  }
  container.innerHTML = html;
  container.scrollTop = container.scrollHeight;
});

console.log("✅ Chat.js loaded!");