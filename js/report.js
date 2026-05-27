// js/report.js
// Report Functions

/* Export Report */
window.exportReport = function() {
  alert('📊 Export laporan berhasil!\n\nHubungkan ke backend untuk fitur lengkap.');
};

/* Generate Report */
window.generateReport = function(type) {
  console.log(`Generating ${type} report...`);
  
  const report = {
    type: type,
    generatedAt: new Date().toISOString(),
    data: {}
  };
  
  const blob = new Blob([JSON.stringify(report, null, 2)], {
    type: 'application/json'
  });
  
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `report-${type}-${Date.now()}.json`;
  a.click();
};

/* Print Report */
window.printReport = function() {
  window.print();
};

console.log("✅ Report.js loaded!");