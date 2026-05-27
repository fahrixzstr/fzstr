// js/security.js
// Security Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  projectId: "fahrixzstore"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* Check Auth */
window.checkAuth = function() {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = 'login.html';
    }
  });
};

/* Verify Session */
window.verifySession = function() {
  onAuthStateChanged(auth, user => {
    if (!user) {
      console.log('Session expired');
      window.location.href = 'login.html';
    }
  });
};

/* Rate Limit Check */
let attempts = 0;
const maxAttempts = 5;

window.checkRateLimit = function() {
  if (attempts >= maxAttempts) {
    alert('Terlalu banyak percobaan! Coba lagi nanti.');
    return false;
  }
  attempts++;
  return true;
};

/* XSS Protection */
window.sanitizeHTML = function(str) {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

console.log("✅ Security.js loaded!");