var socket = io();
socket.on('connect',function(){
console.log('Connected to server');


});
socket.on('disconnect',function(){
console.log('Disconnected from the server');
});

socket.on('newEmail',function(email){
  console.log('New Email:', email);
});
socket.emit('createEmail', {
  to : 'mohammed@testing.com',
  text : 'hey this is ali'
});
socket.on('newMessage',function(newMessage){
  console.log('A new Message arrived: ',newMessage);
});
socket.emit('replay',{
  to : 'yaser@ddkkd.com',
  text : 'this is my ansewer'
});
