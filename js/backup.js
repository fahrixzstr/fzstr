// js/backup.js
// Backup & Restore

/* Backup Database */
window.backupData = function() {
  const data = {
    store: 'FahriXZ Store',
    backupAt: new Date().toISOString(),
    version: '1.0'
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json'
  });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `fahrixz-backup-${Date.now()}.json`;
  a.click();
};

/* Restore Backup */
window.restoreBackup = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      console.log('Restore data:', data);
      alert('✅ Restore berhasil!');
    } catch (error) {
      alert('❌ Gagal restore: ' + error.message);
    }
  };
  reader.readAsText(file);
};

console.log("✅ Backup.js loaded!");