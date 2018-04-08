import socketIO from 'socket.io-client';
import { toast } from 'react-toastify';
import { addResponseMessage as widgetResponse } from 'react-chat-widget';
import React from 'react';

const io = socketIO();
const LOGIN = 'user_logged_in';
const MESSAGE = 'message_push';

const connect = () => {
  io.on(LOGIN, (u) => {
    widgetResponse(`${u.first} ${u.last} just joined the party! 🎉`);
    toast(<span><b>{u.first} {u.last}</b> just joined the party <span role="img" aria-label="party">🎉</span></span>, { autoClose: 8000 })
  });

  io.on(MESSAGE, (m) => {
    console.warn("GOT CHAT MESSAGE:", m);
    widgetResponse(m);
  });
}

const pushMessage = (m) => {
  io.emit(MESSAGE, m);
  widgetResponse(m);
  console.warn("PUSH CHAT MESSAGE:", m);
};

export { connect, pushMessage };
