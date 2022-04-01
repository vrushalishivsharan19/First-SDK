var PORT = process.env.PORT || 5000;
var express = require('express');
let dotenv = require('dotenv');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'First-SDK', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'First-SDK', 'build', 'index.html'))
    });
    
  }

server.listen(PORT, function() {
  console.log('Chat server running');
});


var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
    console.log('server running');
  });
});
