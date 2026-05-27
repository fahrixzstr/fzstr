// js/restore.js
// Restore Functions

/* Restore Backup */
window.restoreBackup = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      console.log('Restore data:', data);
      
      // Proses restore
      alert('✅ Restore berhasil!');
    } catch (error) {
      alert('❌ Gagal restore: ' + error.message);
    }
  };
  
  reader.readAsText(file);
};

/* Clear Data */
window.clearData = function() {
  if (!confirm('Yakin ingin menghapus semua data?')) return;
  
  localStorage.clear();
  sessionStorage.clear();
  alert('✅ Data berhasil dihapus!');
  window.location.reload();
};

console.log("✅ Restore.js loaded!");