//const { Pool } = require('pg')

var express = require('express');
var app = express();
httpServer = require('http').createServer(app);
// Then close the server when done...

const dotenv = require('dotenv').config();

console.log(dotenv.parsed);
console.log(process.env);


var envUSER = process.env.db_admin1_USER;
var envPASS = process.env.db_admin1_PASS;
var envHOST = process.env.db_admin1_HOST;
var envPORT = process.env.db_admin1_PORT;
var envDATABASE = process.env.db_admin1_DATABASE;



console.log(envUSER);
console.log("*PASSORD*");
console.log(envHOST);
console.log(envPORT);
console.log(envDATABASE);

httpServer.listen('9387', '127.0.0.1');



app.get("/USER", (req, res) =>
    res.send(envUSER));

app.get("/PASS", (req, res) =>
    res.send(envPASS));

app.get("/HOST", (req, res) =>
    res.send(envHOST));

app.get("/PORT", (req, res) =>
    res.send(envPORT));

app.get("/DATABASE", (req, res) =>
    res.send(envDATABASE));