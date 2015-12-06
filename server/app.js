var express = require('express');
var socketio = require('socket.io');
var app = express();

var io = socketio.listen(app.listen(3000));

io.sockets.on('connection', function (socket) {
  console.log('A user has connected');

  socket.on('ticket-submitted', function (ticket) {
    // Inside this callback it may be a good idea to manipulate the data however you need, maybe persist it to a database, and so on.
    console.log('A ticket has been submitted');
    socket.broadcast.emit('ticket-submitted', ticket);
  });
});
