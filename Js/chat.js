document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');
  const chatInput = document.getElementById('chat-input');
  const chatWindow = document.getElementById('chat-window');
  const userNameInput = document.getElementById('user-name');

  // Cargar mensajes del almacenamiento local al iniciar
  loadMessages();

  sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    const userName = userNameInput.value.trim();
    
    if (message === '' || userName === '') {
      alert('Por favor, ingresa un mensaje y tu nombre.');
      return;
    }

    const timestamp = new Date().toLocaleString();
    const messageObj = {
      userName: userName,
      message: message,
      timestamp: timestamp
    };

    // Guardar mensaje en el almacenamiento local
    saveMessage(messageObj);

    // Limpiar el campo de entrada
    chatInput.value = '';

    // Mostrar el mensaje en el chat
    displayMessage(messageObj);
  });

  function saveMessage(messageObj) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(messageObj);
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(displayMessage);
  }

  function displayMessage(messageObj) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    // Asigna una clase de color aleatoria
    const colorClass = 'message-color-' + (Math.floor(Math.random() * 3) + 1); // Cambia el número según el rango de colores que tengas
    messageElement.classList.add(colorClass);
    messageElement.innerHTML = `
      <strong>${messageObj.userName}</strong> <em>${messageObj.timestamp}</em>: ${messageObj.message}
    `;
    chatWindow.appendChild(messageElement);
  }
});
