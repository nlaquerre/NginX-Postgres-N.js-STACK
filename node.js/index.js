//const { Pool } = require('pg')
var express = require('express');
var app = express();
httpServer = require('http').createServer(app);
// Then close the server when done...

/*const pool = new Pool({
    "max": 20,
    "connectionTimeoutMillis": 0,
    "idleTimeoutMillis": 0
})*/


httpServer.listen('2222', '127.0.0.1');


app.get("/", (req, res) =>
    res.send("yo yo yo! This is secured by NginX, the same way I encrypt static web content.  Except now, this msg is created by a node.js file, able to implement dynamic content."));

