// js/upload.js
// Upload Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  projectId: "fahrixzstore",
  storageBucket: "fahrixzstore.firebasestorage.app"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/* Upload File */
window.uploadFile = async function(file) {
  if (!file) {
    alert('Pilih file!');
    return;
  }

  try {
    const fileRef = ref(storage, 'uploads/' + file.name);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    alert('Upload gagal: ' + error.message);
    return null;
  }
};

/* Upload Result */
window.uploadResult = async function() {
  const file = document.getElementById('resultFile').files[0];
  if (!file) {
    alert('Pilih file!');
    return;
  }

  const btn = document.querySelector('button');
  btn.disabled = true;
  btn.textContent = '⏳ Upload...';

  try {
    const fileRef = ref(storage, 'results/' + file.name);
    await uploadBytes(fileRef, file);
    alert('File berhasil diupload!');
  } catch (error) {
    alert('Gagal: ' + error.message);
  } finally {
    btn.disabled = false;
    btn.textContent = '📤 Upload';
  }
};

/* Download File */
window.downloadFile = async function(fileName) {
  try {
    const fileRef = ref(storage, 'results/' + fileName);
    const url = await getDownloadURL(fileRef);
    window.open(url, '_blank');
  } catch (error) {
    alert('File tidak ditemukan!');
  }
};

console.log("✅ Upload.js loaded!");