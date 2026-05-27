import { initializeApp } from
'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from
'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

/* =========================
FIREBASE CONFIG
========================= */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* =========================
REGISTER EMAIL
========================= */

window.registerUser = async function () {

  const name =
    document.getElementById('registerName').value;

  const email =
    document.getElementById('registerEmail').value;

  const password =
    document.getElementById('registerPassword').value;

  if (!name || !email || !password) {
    alert('Lengkapi data');
    return;
  }

  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    // kirim OTP/verifikasi email
    await sendEmailVerification(
      userCredential.user
    );

    alert(
      'Akun berhasil dibuat. Silakan cek email untuk verifikasi OTP.'
    );

    window.location = 'login.html';

  } catch (error) {

    alert(error.message);

  }

};

/* =========================
LOGIN EMAIL
========================= */

window.loginUser = async function () {

  const email =
    document.getElementById('loginEmail').value;

  const password =
    document.getElementById('loginPassword').value;

  if (!email || !password) {

    alert('Isi email dan password');
    return;

  }

  try {

    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    // cek email sudah diverifikasi
    if (!userCredential.user.emailVerified) {

      alert(
        'Verifikasi email terlebih dahulu'
      );

      return;

    }

    alert('Login berhasil');

    window.location = 'user.html';

  } catch (error) {

    alert(error.message);

  }

};

/* =========================
LOGIN GOOGLE
========================= */

window.googleLogin = async function () {

  try {

    const provider =
      new GoogleAuthProvider();

    await signInWithPopup(
      auth,
      provider
    );

    alert('Login Google berhasil');

    window.location = 'user.html';

  } catch (error) {

    alert(error.message);

  }

};

/* =========================
RESET PASSWORD
========================= */

window.resetPassword = async function () {

  const email =
    document.getElementById('resetEmail').value;

  if (!email) {

    alert('Masukkan email');
    return;

  }

  try {

    await sendPasswordResetEmail(
      auth,
      email
    );

    alert(
      'Link reset password dikirim ke email'
    );

  } catch (error) {

    alert(error.message);

  }

};

/* =========================
SETUP RECAPTCHA
========================= */

window.recaptchaVerifier =
  new RecaptchaVerifier(
    auth,
    'recaptcha-container',
    {
      size: 'normal',
      callback: () => {
        console.log('reCAPTCHA selesai');
      }
    }
  );

/* =========================
KIRIM OTP NOMOR HP
========================= */

window.sendPhoneOTP = async function () {

  const phoneNumber =
    document.getElementById('phoneNumber').value;

  if (!phoneNumber) {

    alert('Masukkan nomor HP');
    return;

  }

  try {

    const confirmationResult =
      await signInWithPhoneNumber(
        auth,
        phoneNumber,
        window.recaptchaVerifier
      );

    window.confirmationResult =
      confirmationResult;

    alert('OTP dikirim');

  } catch (error) {

    alert(error.message);

  }

};

/* =========================
VERIFIKASI OTP NOMOR HP
========================= */

window.verifyPhoneOTP =
  async function () {

    const code =
      document.getElementById('otpCode').value;

    if (!code) {

      alert('Masukkan kode OTP');
      return;

    }

    try {

      await window.confirmationResult.confirm(
        code
      );

      alert(
        'Login/Register nomor HP berhasil'
      );

      window.location = 'user.html';

    } catch (error) {

      alert(error.message);

    }

  };