

//?Comando para establecer la conexion

var socket = io();
var label = $("#lblNuevoTicket");
socket.on("connect", function () {
    console.log("Conectado al servidor");
});

socket.on("disconnect", function () {
    console.log("Desconectado del servidor");
});

// socket.emit("onLoad", null, function (estadoActual) {
//     label.text(estadoActual.actual);
// });

socket.on("estadoActual", function (response) {
    label.text(response.actual);
});

$("button").on("click", function () {

    console.log("Clicked");

    socket.emit("siguienteTicket", null, function (siguienteTicket) {

        label.text(siguienteTicket);

    });

});


// socket.emit("enviarMensaje", {
//     usuario: "Edgar",
//     mensaje: "Hola Sockets"
// }, function (resp) {
//     console.log("Respuesta Server: ", resp);
// });