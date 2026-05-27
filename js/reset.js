// js/reset.js
// Reset Password Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  projectId: "fahrixzstore"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* Reset Password */
window.resetPassword = async function() {
  const email = document.getElementById('resetEmail').value;
  
  if (!email) {
    alert('Masukkan email!');
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert('Link reset password dikirim ke email!');
    window.location.href = 'login.html';
  } catch (error) {
    alert('Gagal: ' + error.message);
  }
};

console.log("✅ Reset.js loaded!");