// js/admin-role.js
// Admin Role Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, update, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
  projectId: "fahrixzstore"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

/* Check Admin Role */
window.checkAdminRole = function() {
  onAuthStateChanged(auth, user => {
    if (!user) return;
    
    onValue(ref(db, 'users/' + user.uid), snapshot => {
      const data = snapshot.val();
      
      if (!data || data.role !== 'admin') {
        alert('Akses ditolak! Hanya admin yang bisa mengakses.');
        window.location.href = 'index.html';
      }
    });
  });
};

/* Update User Role */
window.updateUserRole = function(userId, role) {
  update(ref(db, 'users/' + userId), { role: role })
    .then(() => alert('Role diperbarui!'))
    .catch(err => alert('Gagal: ' + err.message));
};

console.log("✅ Admin-role.js loaded!");