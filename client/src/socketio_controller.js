import socketIO from 'socket.io-client';
import { toast } from 'react-toastify';
import { addResponseMessage as widgetResponse, renderCustomComponent } from 'react-chat-widget';
import React from 'react';

const io = socketIO();
const LOGIN = 'user_logged_in';
const MESSAGE_PUSH = 'message_push';
const MESSAGE_RCV = 'message_rcv';

var unread_messages = 0;

const connectSocket = () => {
  io.on(LOGIN, (u) => {
    widgetResponse(`${u.first} ${u.last} just joined the party! 🎉`);
    toast(<span><b>{u.first} {u.last}</b> just joined the party <span role="img" aria-label="party">🎉</span></span>, { autoClose: 8000 })
  });

  io.on(MESSAGE_RCV, (obj) => {
    if (JSON.parse(window.localStorage.getItem('user'))) {
      renderCustomComponent("span", { children: `${obj.user.first} ${obj.user.last}`, className: "username" });
      widgetResponse(obj.message);
      toast(<span><b>{`${obj.user.first} said:`}</b>{` ${obj.message}`}</span>, { autoClose: 8000 });
      unread_messages += 1;
    }
  });
}

const pushMessage = (m) => {
  const u = JSON.parse(window.localStorage.getItem('user')) || {};
  io.emit(MESSAGE_PUSH, { message: m, user: u});
};


export { connectSocket, pushMessage, unread_messages };
