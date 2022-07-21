console.log('this is server.ts');
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});
server.listen(3000, function () {
    console.log('listening on *:3000');
});
