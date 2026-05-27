// js/notification.js
// Notification Functions

/* Show Toast */
window.showToast = function(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

/* Request Permission */
window.requestNotificationPermission = async function() {
  if (!("Notification" in window)) {
    alert('Browser tidak mendukung notifikasi');
    return;
  }

  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    showLocalNotification('FahriXZ Store', 'Notifikasi berhasil diaktifkan!');
  }
};

/* Show Local Notification */
window.showLocalNotification = function(title, body) {
  new Notification(title, {
    body: body,
    icon: 'assets/icons/icon-192.png'
  });
};

/* Promo Popup */
window.showPromoPopup = function() {
  const popup = document.createElement('div');
  popup.className = 'promo-popup';
  popup.innerHTML = `
    <div class="promo-content">
      <h2>🎉 Promo Hari Ini</h2>
      <p>Diskon hingga 50% untuk semua layanan digital!</p>
      <button onclick="closePromoPopup()">Tutup</button>
    </div>
  `;
  document.body.appendChild(popup);
};

window.closePromoPopup = function() {
  const popup = document.querySelector('.promo-popup');
  if (popup) popup.remove();
};

// Auto show promo after 5 seconds
setTimeout(() => {
  // showPromoPopup();
}, 5000);

console.log("✅ Notification.js loaded!");