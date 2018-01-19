
const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname,'../public')
const socketIO = require('socket.io');
// we use process.env.Port in case we hosted our website and files on server
// that run nodejs and other required tools.
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New User Connected');
//the newEmail should matched exactly with the one on the webpage
  socket.emit('newEmail',{
    from : 'mohammed@testing.com',
    text : 'Hey, What is going on',
    createAt : 123
  });
  socket.emit('newMessage',{
    to : 'mohammed#djjdj/com',
    text : 'test my chat and replay me'
  });
  socket.on('replay',(replay)=>{
    console.log('replay: ',replay);
  })
  socket.on('createEmail',(data)=>{
    console.log('New Email:',data);
  }
  )

  //The socket will listen to the client page if
  //he closed the html.
  socket.on('disconnect',()=>{
    console.log('Disconnected from the client');
  });


})

server.listen(port,()=>{
  console.log('Server is up on port '+port);
})
