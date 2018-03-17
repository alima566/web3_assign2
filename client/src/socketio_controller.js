import socketIO from 'socket.io-client';

export default function connect() {
  console.log("config socketio");
  const io = socketIO();

  io.on('user_logged_in', (u) => {
    console.warn(`${u.first} ${u.last} just logged in.`);
  });
}
