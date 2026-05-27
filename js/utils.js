// js/utils.js
// Utility Functions

/* Format Rupiah */
window.formatRupiah = function(number) {
  if (number === null || number === undefined || isNaN(number)) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

/* Copy Text */
window.copyText = async function(text, showMessage = true) {
  if (!text) {
    showToast('Tidak ada teks!', 'error');
    return false;
  }
  
  try {
    await navigator.clipboard.writeText(text);
    if (showMessage) showToast('✅ Disalin!', 'success');
    return true;
  } catch (error) {
    showToast('❌ Gagal menyalin', 'error');
    return false;
  }
};

/* Show Toast */
window.showToast = function(message, type = 'info', duration = 3000) {
  const existingToasts = document.querySelectorAll('.toast');
  existingToasts.forEach(toast => toast.remove());
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> <span>${message}</span>`;
  
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

/* Show Loader */
window.showLoader = function(message = 'Loading...') {
  const existingLoader = document.querySelector('.global-loader');
  if (existingLoader) existingLoader.remove();
  
  const loader = document.createElement('div');
  loader.className = 'global-loader';
  loader.innerHTML = `<div class="spinner-loader"></div><p>${message}</p>`;
  
  document.body.appendChild(loader);
  setTimeout(() => loader.classList.add('show'), 10);
};

window.hideLoader = function() {
  const loader = document.querySelector('.global-loader');
  if (loader) {
    loader.classList.remove('show');
    setTimeout(() => loader.remove(), 300);
  }
};

/* Generate Random ID */
window.generateId = function(prefix = 'ID') {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
};

/* Format Date */
window.formatDate = function(timestamp, includeTime = true) {
  if (!timestamp) return '-';
  
  const date = new Date(timestamp);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  if (includeTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
  }
  
  return date.toLocaleString('id-ID', options);
};

/* Time Ago */
window.timeAgo = function(timestamp) {
  if (!timestamp) return '-';
  
  const now = Date.now();
  const diff = now - timestamp;
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (seconds < 60) return 'Baru saja';
  if (minutes < 60) return `${minutes} menit yang lalu`;
  if (hours < 24) return `${hours} jam yang lalu`;
  if (days < 7) return `${days} hari yang lalu`;
  
  return formatDate(timestamp);
};

/* Validation */
window.isValidEmail = function(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

window.isValidPhone = function(phone) {
  const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/* Debounce */
window.debounce = function(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

console.log("✅ Utils.js loaded!");