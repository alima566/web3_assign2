import socketIO from 'socket.io-client';
import { toast } from 'react-toastify';
import React from 'react';

export default function connect() {
  const io = socketIO();
  io.on('user_logged_in', (u) => {
    toast(<span><b>{u.first} {u.last}</b> just joined the party <span role="img" aria-label="party">🎉</span></span>, { autoClose: 8000 })
  });
}
