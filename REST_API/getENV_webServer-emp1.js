const dotenv = require('dotenv').config();
var http_localEnv = require('http');


console.log("Altering Envirnmental Variables");


webServer_USER = function (response) {
    let webServer_env = '';
    response.on('data', function (chunk) {
        webServer_env += chunk;
    });
    response.on('end', function () {
        process.env.db_USER = webServer_env;
    });
}
http_localEnv.request("http://127.0.0.1:9387/USER", webServer_USER).end();


webServer_PASS = function (response) {
    let webServer_env = '';
    response.on('data', function (chunk) {
        webServer_env += chunk;
    });
    response.on('end', function () {
        process.env.db_PASS = webServer_env;
    });
}
http_localEnv.request("http://127.0.0.1:9387/PASS", webServer_PASS).end();


webServer_HOST = function (response) {
    let webServer_env = '';
    response.on('data', function (chunk) {
        webServer_env += chunk;
    });
    response.on('end', function () {
        process.env.db_HOST = webServer_env;
    });
}
http_localEnv.request("http://127.0.0.1:9387/HOST", webServer_HOST).end();


webServer_PORT = function (response) {
    let webServer_env = '';
    response.on('data', function (chunk) {
        webServer_env += chunk;
    });
    response.on('end', function () {
        process.env.db_PORT = webServer_env;
    });
}
http_localEnv.request("http://127.0.0.1:9387/PORT", webServer_PORT).end();


webServer_DATABASE = function (response) {
    let webServer_env = '';
    response.on('data', function (chunk) {
        webServer_env += chunk;
    });
    response.on('end', function () {
        process.env.db_DATABASE = webServer_env;
        console.log("Ready To Connect to: " + process.env.db_DATABASE + "\nThrough User: " + process.env.db_USER);
    });
}
http_localEnv.request("http://127.0.0.1:9387/DATABASE", webServer_DATABASE).end();

console.log("Ready To Connect to: " + process.env.db_DATABASE + "\n Through User:  + process.env.db_USER");

