// text-size-adjust.js

// Función para cambiar el tamaño del texto
function changeTextSize(size) {
  document.body.classList.remove('text-size-small', 'text-size-medium', 'text-size-large');
  document.body.classList.add(`text-size-${size}`);
}

// Event listeners para los botones de tamaño de texto
document.querySelectorAll('.text-size-button').forEach(button => {
  button.addEventListener('click', (event) => {
      const size = event.target.getAttribute('data-size');
      changeTextSize(size);
  });
});