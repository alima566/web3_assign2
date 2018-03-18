require('babel-register')({ presets: ['es2015-node6'] });

const port = 3001;
const express = require('express');
const app = express();
const server = require('http').createServer(app);

require('express-busboy').extend(app);
app.use(express.static(require('path').join(__dirname, 'public')));
app.set('server', server);

//Start API Server
require('./api/server.js')(app);

//Create Socket.io Server and bind to main Server
require('./chat/server.js')(app);

server.listen(port, () => {
  console.log(`API & Chat Server Listening at port ${port}`);
});
