require('babel-register')({ presets: ['es2015-node6'] });

const port = process.env.PORT || 3001;
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);

require('express-busboy').extend(app);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.set('server', server);

//Start API Server
require('./api/server.js')(app);

//Create Socket.io Server and bind to main Server
require('./chat/server.js')(app);

//Forward all other routes to React build via index.html
app.get('*', function(req, resp) {
  resp.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

server.listen(port, () => {
  console.log(`API & Chat Server Listening at port ${port}`);
});
