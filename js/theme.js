// js/theme.js
// Dark/Light Mode Toggle

const THEME_KEY = 'fahrixz_theme';

const themeConfig = {
  dark: {
    '--bg-primary': '#0a0a0f',
    '--bg-secondary': '#12121a',
    '--text-primary': '#ffffff',
    '--text-secondary': '#a0a0b0',
    '--accent': '#00d9ff'
  },
  light: {
    '--bg-primary': '#f8fafc',
    '--bg-secondary': '#ffffff',
    '--text-primary': '#1a1a2e',
    '--text-secondary': '#6c757d',
    '--accent': '#00a8cc'
  }
};

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY)
    if (!savedTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  } else {
    setTheme(savedTheme);
  }
  updateThemeButton();
}

function setTheme(theme) {
  if (theme !== 'dark' && theme !== 'light') return;
  
  document.body.classList.remove('dark-mode', 'light-mode');
  document.body.classList.add(`${theme}-mode`);
  
  const colors = themeConfig[theme];
  const root = document.documentElement;
  
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  
  localStorage.setItem(THEME_KEY, theme);
  console.log(`✅ Theme set to: ${theme}`);
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  updateThemeButton();
}

function updateThemeButton() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  
  const isDark = document.body.classList.contains('dark-mode');
  btn.innerHTML = isDark ? '🌙' : '☀️';
}

if (document.getElementById('themeToggle')) {
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', initTheme);

console.log("✅ Theme.js loaded!");