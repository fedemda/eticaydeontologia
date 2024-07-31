// translate.js

document.addEventListener('DOMContentLoaded', () => {
  const translateButton = document.getElementById('translate-button');
  const textInputTranslate = document.getElementById('text-input-translate');
  const translationResult = document.getElementById('translation-result');
  const languageSelect = document.getElementById('language-select'); // Selector de idioma

  translateButton.addEventListener('click', () => {
    const text = textInputTranslate.value;
    const targetLanguage = languageSelect.value; // Obtener el idioma seleccionado

    if (text.trim() === '') {
      alert('Por favor, escribe algún texto para traducir.');
      return;
    }

    if (targetLanguage === '') {
      alert('Por favor, selecciona un idioma de destino.');
      return;
    }

    translateText(text, targetLanguage);
  });

  function translateText(text, targetLanguage) {
    const encodedText = encodeURIComponent(text);
    const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLanguage}&dt=t&q=${encodedText}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data[0] && data[0][0] && data[0][0][0]) {
          translationResult.textContent = 'Traducción: ' + data[0][0][0];
        } else {
          translationResult.textContent = 'Error en la traducción.';
        }
      })
      .catch(error => {
        console.error('Error al traducir:', error);
        translationResult.textContent = 'Error en la traducción.';
      });
  }
});