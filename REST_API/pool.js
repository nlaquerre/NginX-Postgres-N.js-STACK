const { Pool } = require("pg");
const app = require('express')();
httpServer = require('http').createServer(app);

//grab environmental variables
var envVar = require('./getENV_webServer-emp1')
process.env.db_USER = envVar.db_USER;
process.env.db_PASS = envVar.db_PASS;
process.env.db_HOST = envVar.db_HOST;
process.env.db_PORT = envVar.db_PORT;
process.env.db_DATABASE = envVar.db_DATABASE;
console.log(process.env);

//listen
httpServer.listen('2222', '127.0.0.1');


app.get("/", (req, res) =>
    res.send("yo yo yo! This is secured by NginX, the same way I encrypt static web content.  Except now, this msg is created by a node.js file, able to implement dynamic content."));



app.get("/all", async (req, res) => {
    const fromDate = new Date();

    console.log("connecting to Server");


    const pool = new Pool({
        "host": process.env.db_HOST,
        "port": process.env.db_PORT,
        "user": process.env.db_USER,
        "password": process.env.db_PASS,
        "database": process.env.db_DATABASE,
        "max": 50,
        "connectionTimeoutMillis": 0,
        "idleTimeoutMillis": 0
    })
    console.log("connected to Server");


    //return all rows
    const results = await pool.query("select * from employee_pool_tutorial.employees");
    console.table(results.rows);

    const toDate = new Date();
    const elapsed = toDate.getTime() - fromDate.getTime();

    //send it to the wire
    res.send({ "rows": results.rows, "elapsed": elapsed, "method": "pool" });
});