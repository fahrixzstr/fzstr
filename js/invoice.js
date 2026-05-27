// js/invoice.js
// Invoice Functions

import { jsPDF } from "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/+esm";

/* Generate Invoice PDF */
window.generateInvoice = function(orderId, product, name, total) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("INVOICE", 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.text(`Order ID: ${orderId}`, 20, 40);
  doc.text(`Produk: ${product}`, 20, 50);
  doc.text(`Nama: ${name}`, 20, 60);
  doc.text(`Total: ${total}`, 20, 70);
  doc.text(`Tanggal: ${new Date().toLocaleString('id-ID')}`, 20, 80);

  doc.setLineWidth(0.5);
  doc.line(20, 90, 190, 90);

  doc.setFontSize(10);
  doc.text("Terima kasih atas kepercayaan Anda!", 105, 100, { align: "center" });
  doc.text("FahriXZ Store", 105, 110, { align: "center" });

  doc.save(`invoice-${orderId}.pdf`);
};

/* Download Invoice */
window.downloadInvoice = function() {
  window.print();
};

console.log("✅ Invoice.js loaded!");