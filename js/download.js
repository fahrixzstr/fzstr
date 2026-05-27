// js/download.js
// Download Functions

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  projectId: "fahrixzstore",
  storageBucket: "fahrixzstore.firebasestorage.app"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/* Download File */
window.downloadFile = async function(fileName) {
  if (!fileName) {
    alert('Nama file tidak ditemukan!');
    return;
  }

  const btn = document.getElementById('downloadBtn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Downloading...';
  }

  try {
    const fileRef = ref(storage, 'results/' + fileName);
    const url = await getDownloadURL(fileRef);
    window.open(url, '_blank');
    alert('✅ File berhasil dibuka!');
  } catch (error) {
    alert('❌ File tidak ditemukan!');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Download File';
    }
  }
};

console.log("✅ Download.js loaded!");