// theme-switch.js

document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');

  // Cargar el estado del tema desde localStorage
  const isHighContrast = localStorage.getItem('high-contrast') === 'true';
  if (isHighContrast) {
    document.body.classList.add('high-contrast');
    themeSwitch.checked = true;
  }

  // Cambiar el tema cuando se cambia el checkbox
  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      document.body.classList.add('high-contrast');
      localStorage.setItem('high-contrast', 'true');
    } else {
      document.body.classList.remove('high-contrast');
      localStorage.setItem('high-contrast', 'false');
    }
  });
});