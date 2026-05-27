// js/verify-email.js
// Verify Email Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  projectId: "fahrixzstore"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* Send Verification Email */
window.sendVerifyEmail = async function() {
  const user = auth.currentUser;  if (!user) {
    alert('User belum login!');
    return;
  }

  try {
    await sendEmailVerification(user);
    alert('Email verifikasi berhasil dikirim!');
  } catch (error) {
    alert('Gagal: ' + error.message);
  }
};

/* Check Verified */
window.checkVerified = function() {
  onAuthStateChanged(auth, user => {
    if (user) {
      if (!user.emailVerified) {
        alert('Email belum diverifikasi! Cek inbox email Anda.');
      } else {
        console.log('Email sudah terverifikasi');
      }
    }
  });
};

console.log("✅ Verify-email.js loaded!");