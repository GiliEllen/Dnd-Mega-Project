console.log('this is server.ts')

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.static('public'));
app.use(express.json());

server.listen(3000, () => {
  console.log('listening on *:3000');
});