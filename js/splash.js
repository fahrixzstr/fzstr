// js/splash.js
// Splash Screen

window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = '0';
      setTimeout(() => {
        splash.style.display = 'none';
      }, 500);
    }, 2000);
  }
});

console.log("✅ Splash.js loaded!");