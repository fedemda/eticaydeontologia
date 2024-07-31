// text-to-speech.js

// Función para obtener la voz latina
function getLatinVoice() {
  const voices = window.speechSynthesis.getVoices();
  // Busca una voz latina específica, por ejemplo, "Google español" o "Microsoft Sabina"
  const latinVoice = voices.find(voice => 
      voice.lang.includes('es') && (voice.name.includes('Google') || voice.name.includes('Microsoft'))
  );
  return latinVoice;
}

// Función para convertir texto a voz
function speakText(text) {
  if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const latinVoice = getLatinVoice();
      if (latinVoice) {
          utterance.voice = latinVoice;
      } else {
          console.warn('No se encontró una voz latina. Se usará la voz predeterminada.');
      }
      window.speechSynthesis.speak(utterance);
  } else {
      alert('Tu navegador no soporta la síntesis de voz.');
  }
}

// Event listener para el botón de hablar
document.getElementById('speak-button').addEventListener('click', () => {
  const textInput = document.getElementById('text-input').value;
  speakText(textInput);
});

// Asegúrate de que las voces estén cargadas antes de obtener la voz latina
window.speechSynthesis.onvoiceschanged = () => {
  getLatinVoice();
};