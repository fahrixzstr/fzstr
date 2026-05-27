import { jsPDF } from "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/+esm";

export function generateInvoice(data) {
  const doc = new jsPDF();

  doc.text("INVOICE", 10, 10);
  doc.text("Order ID: " + data.id, 10, 20);
  doc.text("Total: " + data.total, 10, 30);

  doc.save("invoice.pdf");
}