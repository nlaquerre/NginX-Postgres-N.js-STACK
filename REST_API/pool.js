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
httpServer.listen('3333', '127.0.0.1');


app.get("/", (req, res) =>
    res.send("<h1>Welcome to Nick LaQuerre's encrypted REST API.</h2>\
    </br> </br> \
    This is the primary node.js database access portal for my developmental \
    'NginX-node.js-PostgreSQL -- STACK'\
    </br > </br > \
    - Feel free to checkout this web server's design and selected file coding at: \
    <a href='https://github.com/nlaquerre/NginX_node.js_PostgreSQL--STACK'> Nick's Developement Web Server Github. </a>")
);



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