// js/app.js

document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 FahriXZ Store loaded!");
  
  // Sembunyikan splash setelah 1.5 detik
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) splash.style.display = 'none';
  }, 1500);
  
  // Render produk jika ada elemen productGrid
  if (document.getElementById('productGrid')) {
    renderProducts(products);
  }
  
  initFAQ();
  initFilter();
});

// Toggle Floating Buttons
const btnToggle = document.getElementById('btnToggle');
const floatingContainer = document.getElementById('floatingContainer');

if (btnToggle && floatingContainer) {
  btnToggle.addEventListener('click', () => {
    floatingContainer.classList.toggle('show');
    btnToggle.classList.toggle('active');
    btnToggle.title = btnToggle.classList.contains('active') ? 'Sembunyikan Semua' : 'Tampilkan Semua';
  });
}

function renderProducts(productList) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  
  grid.innerHTML = productList.map(p => {
    const badgeColor = getBadgeColor(p.badge);
    return `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='assets/image/placeholder.jpg'">
        <span class="badge" style="background:${badgeColor};">${p.badge}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <h2>${p.price}</h2>
        <button class="btn-primary" onclick="orderProduct('${p.name}','${p.price}','${p.category}')">Order Sekarang</button>
      </div>
    `;
  }).join('');
}

function getBadgeColor(badge) {
  const colors = {
    'Best Seller': '#00d9ff',
    'Popular': '#667eea',
    'Premium': '#f59e0b',
    'Fast Process': '#22c55e',
    'Hot': '#ef4444',
    'Murah': '#06b6d4'
  };
  return colors[badge] || '#00d9ff';
}

window.orderProduct = function(name, price, category) {
  window.location.href = `order.html?product=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&category=${encodeURIComponent(category)}`;
};

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('span');
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
      } else {
        answer.style.display = 'block';
        icon.textContent = '-';
      }
    });
  });
}

function initFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.style.background = '#12121a';
        b.style.color = '#fff';
      });
      
      btn.style.background = '#00d9ff';
      btn.style.color = '#000';
      
      const category = btn.dataset.category;
      const filtered = category === 'all' ? products : products.filter(p => p.category === category);
      renderProducts(filtered);
    });
  });
}

window.generateOrderId = function() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ORD-${year}${month}-${random}`;
};

console.log("✅ App.js loaded!");