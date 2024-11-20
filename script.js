// Conecta con el servidor de Socket.IO
const socket = io();

// Detectar el botón de envío y enviar mensajes
document.getElementById('sendButton').addEventListener('click', () => {
    const input = document.getElementById('messageInput');
    const mensaje = input.value;
    const usuario = 'Usuario'; // Cambiar por el nombre del usuario si es necesario

    if (mensaje.trim() !== '') {
        socket.emit('mensaje', { usuario, texto: mensaje }); // Envía el mensaje al servidor
        input.value = ''; // Limpia el campo de entrada
    }
});

// Escucha mensajes desde el servidor
socket.on('mensaje', (data) => {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('p');
    messageElement.textContent = `${data.usuario}: ${data.texto}`;
    messagesContainer.appendChild(messageElement);
});
