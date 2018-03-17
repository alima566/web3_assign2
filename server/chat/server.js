import socketIO from 'socket.io';

module.exports = function (app) {
  const io = socketIO.listen(app.get('server'));

  io.on('connection', function(socket){
    console.log("SocketIO connection made");

    socket.on('user_logged_in', function(usr){
      console.log(`${usr.first} ${usr.last} logged in`);
    });
  });

  app.set('socketio', io);
};
