var socket = io();

//escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log("Desconectado del servidor");
});

//Enviar informacion (emitir evento)
socket.emit('enviarMensaje', {
    usuario: 'Sebastián',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('resp servidodr : ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor : ', mensaje);
});