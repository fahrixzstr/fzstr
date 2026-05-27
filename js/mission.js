// js/mission.js
// Mission Functions

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

/* Load Missions */
window.loadMissions = function() {
  const missionRef = ref(db, 'missions');
  
  onValue(missionRef, snapshot => {
    const data = snapshot.val();
    const container = document.getElementById('missionContainer');
    
    if (!data) {
      container.innerHTML = '<p>Belum ada misi</p>';
      return;
    }

    let html = '';
    for (let id in data) {
      const item = data[id];
      html += `
        <div class="order-card">
          <h3>${item.title}</h3>
          <p>Reward: Rp${item.reward}</p>
          <p>Status: ${item.status}</p>
          <button onclick="joinMission('${id}')">Ikuti</button>
        </div>
      `;
    }
    container.innerHTML = html;
  });
};

/* Join Mission */
window.joinMission = function(id) {
  push(ref(db, 'mission_join/'), {
    missionId: id,
    status: 'Verifikasi',
    createdAt: Date.now()
  });
  
  alert('Berhasil mengikuti misi!');
};

console.log("✅ Mission.js loaded!");