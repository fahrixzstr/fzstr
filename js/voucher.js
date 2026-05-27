// js/voucher.js
// Voucher Functions

/* Apply Voucher */
window.applyVoucher = function(code) {
  const validCodes = {
    'WELCOME50': { discount: 50, type: 'percent' },
    'NEWUSER': { discount: 10000, type: 'fixed' },
    'GOLDMEMBER': { discount: 20000, type: 'fixed' },
    'FLASH10': { discount: 10, type: 'percent' }
  };
  
  const voucher = validCodes[code.toUpperCase()];
  
  if (!voucher) {
    alert('Kode voucher tidak valid!');
    return null;
  }
  
  return voucher;
};

/* Calculate Discount */
window.calculateDiscount = function(total, voucher) {
  if (voucher.type