document.addEventListener('DOMContentLoaded', () => {
  const addEventButton = document.getElementById('add-event-button');
  const eventInput = document.getElementById('event-input');
  const eventDatetime = document.getElementById('event-datetime');
  const eventList = document.getElementById('event-list');

  // Cargar eventos del almacenamiento local al iniciar
  loadEvents();

  addEventButton.addEventListener('click', () => {
    const event = eventInput.value.trim();
    const datetime = eventDatetime.value;

    if (event === '' || datetime === '') {
      alert('Por favor, ingresa un evento y selecciona una fecha y hora.');
      return;
    }

    const eventObj = {
      event: event,
      datetime: datetime
    };

    // Guardar evento en el almacenamiento local
    saveEvent(eventObj);

    // Limpiar los campos de entrada
    eventInput.value = '';
    eventDatetime.value = '';

    // Mostrar el evento en la lista
    displayEvent(eventObj);
  });

  function saveEvent(eventObj) {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(eventObj);
    localStorage.setItem('events', JSON.stringify(events));
  }

  function loadEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.forEach(displayEvent);
  }

  function displayEvent(eventObj) {
    const eventElement = document.createElement('li');

    // Formatear fecha y hora en español (Argentina) sin "horas"
    const eventDatetimeFormatted = new Date(eventObj.datetime).toLocaleString('es-AR', { hour: '2-digit', minute: '2-digit' });
    
    eventElement.innerHTML = `
      <strong>Evento:</strong> ${eventObj.event} <br>
      <strong>Fecha y Hora:</strong> ${eventDatetimeFormatted}
    `;

    // Añadir funcionalidad de lectura en voz alta
    const readButton = document.createElement('button');
    readButton.textContent = 'Leer Evento';
    readButton.addEventListener('click', () => {
      const utterance = new SpeechSynthesisUtterance(`Evento: ${eventObj.event}, Fecha y Hora: ${eventDatetimeFormatted}`);
      utterance.lang = 'es-AR'; // Ajustar el idioma a español de Argentina

      // Listar voces disponibles y seleccionar la voz en español de Argentina
      const voices = window.speechSynthesis.getVoices();
      const spanishVoice = voices.find(voice => voice.lang === 'es-AR');
      if (spanishVoice) {
        utterance.voice = spanishVoice;
      }

      // Hablar el texto
      window.speechSynthesis.speak(utterance);
    });

    eventElement.appendChild(readButton);
    eventList.appendChild(eventElement);
  }
});

// Para depurar las voces disponibles
speechSynthesis.onvoiceschanged = () => {
  const voices = speechSynthesis.getVoices();
  console.log(voices);
};