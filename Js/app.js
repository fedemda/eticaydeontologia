document.addEventListener('DOMContentLoaded', () => {
    // Inicializar funciones de texto a voz
    initTextToSpeech();
  
    // Inicializar funciones de reconocimiento de voz
    initSpeechRecognition();
  
    // Inicializar funciones de chat
    initChat();
  
    // Inicializar ajuste de tamaño de texto
    initTextSizeAdjust();
  
    // Inicializar cambio de tema
    initThemeSwitch();
  
    // Inicializar traducción de texto
    initTranslation();
  
    // Inicializar calendario y recordatorios
    initCalendar();
  });

  document.addEventListener('DOMContentLoaded', () => {
    const readHelpButton = document.getElementById('read-help');
  
    readHelpButton.addEventListener('click', () => {
      const helpText = `
        Bienvenido a EducAccess. Aquí encontrarás información sobre cómo utilizar las características de la aplicación:
        Configuraciones: Ajusta el tamaño del texto y el tema de alto contraste para mejorar la legibilidad.
        Calendario: Agrega eventos y establece la fecha y hora para que puedas recordar tus actividades.
        Texto a Voz: Convierte el texto en voz para escuchar el contenido escrito. También podrás grabar audios y convertirlos a texto.
        Traducción: Traduce texto a diferentes idiomas utilizando el selector de idiomas.
        Chat: Participa en el chat para comunicarte con tus compañeros de clase.
      `;
  
      const utterance = new SpeechSynthesisUtterance(helpText);
      utterance.lang = 'es-AR'; // Ajusta el idioma a español de Argentina
      window.speechSynthesis.speak(utterance);
    });
  });
