document.addEventListener('DOMContentLoaded', () => {
    // Cargar sonidos
   const clickSound = new Audio('https://fedemda.github.io/eticaydeontologia/sounds/y2mate.com%20-%20Click%20%20Sound%20Effect%20HD.mp3'); // Ruta al archivo de sonido de clic
const toggleSound = new Audio('https://fedemda.github.io/eticaydeontologia/sounds/y2mate.com%20-%20Toggle%20Sound%20Effect.mp3'); // Ruta al archivo de sonido de cambio de estado
  
  // Obtener el checkbox de feedback auditivo
  const feedbackSoundCheckbox = document.getElementById('feedback-sound');

  // Función para reproducir sonido de clic
  function playClickSound() {
    if (feedbackSoundCheckbox.checked) {
      clickSound.play();
    }
  }

  // Función para reproducir sonido de cambio de estado
  function playToggleSound() {
    if (feedbackSoundCheckbox.checked) {
      toggleSound.play();
    }
  }

  // Agregar eventos a los botones de ajuste de tamaño de texto en el section 'settings-section'
  const textSizeButtons = document.querySelectorAll('#settings-section #text-size-adjust .text-size-button');
  textSizeButtons.forEach(button => {
    button.addEventListener('click', playClickSound);
  });

  // Agregar evento al checkbox de tema de alto contraste en el section 'settings-section'
  const themeSwitch = document.getElementById('theme-switch');
  themeSwitch.addEventListener('change', playToggleSound);

  // Agregar evento al botón de enviar mensaje en el chat
  const sendButton = document.getElementById('send-button');
  if (sendButton) {
    sendButton.addEventListener('click', playClickSound);
  }

  // Agregar evento al botón de traducir texto en el section 'translate-section'
  const translateButton = document.getElementById('translate-button');
  if (translateButton) {
    translateButton.addEventListener('click', playClickSound);
  }
});
