function initSpeechRecognition() {
  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    alert('El reconocimiento de voz no está disponible en este navegador.');
    return;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  const textInput = document.getElementById('text-input');

  recognition.lang = 'es-AR'; // Ajusta el idioma según tus necesidades
  recognition.interimResults = false; // Opcional: no muestra resultados intermedios

  recognition.onresult = (event) => {
    textInput.value = event.results[0][0].transcript;
  };

  recognition.onerror = (event) => {
    console.error('Error en el reconocimiento de voz:', event.error);
    alert('Error en el reconocimiento de voz: ' + event.error);
  };

  recognition.onend = () => {
    console.log('Reconocimiento de voz finalizado.');
  };

  document.getElementById('start-recognition').addEventListener('click', () => {
    try {
      recognition.start();
    } catch (error) {
      console.error('Error al iniciar el reconocimiento de voz:', error);
      alert('Error al iniciar el reconocimiento de voz: ' + error.message);
    }
  });
}

// Asegúrate de que el DOM esté completamente cargado antes de inicializar el reconocimiento de voz
document.addEventListener('DOMContentLoaded', initSpeechRecognition);
