// js/invoice-download.js
// Invoice Download Functions

/* Download Invoice */
window.downloadInvoice = function() {
  window.print();
};

/* Print Invoice */
window.printInvoice = function(orderId, product, name, total) {
  const printWindow = window.open('', '_blank');
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice ${orderId}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { color: #00d9ff; }
        .invoice-box { border: 1px solid #ddd; padding: 20px; }
      </style>
    </head>
    <body>
      <h1>🧾 INVOICE</h1>
      <div class="invoice-box">
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Produk:</strong> ${product}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Total:</strong> ${total}</p>
        <p><strong>Tanggal:</strong> ${new Date().toLocaleString()}</p>
      </div>
      <button onclick="window.print()">Print</button>
    </body>
    </html>
  `;
  
  printWindow.document.close();
};

console.log("✅ Invoice-download.js loaded!");