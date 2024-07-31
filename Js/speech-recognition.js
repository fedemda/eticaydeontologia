function initSpeechRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const textInput = document.getElementById('text-input');
  
    recognition.onresult = (event) => {
      textInput.value = event.results[0][0].transcript;
    };
  
    document.getElementById('start-recognition').addEventListener('click', () => {
      recognition.start();
    });
  }