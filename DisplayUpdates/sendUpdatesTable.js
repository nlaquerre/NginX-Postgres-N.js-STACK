/**
 * 
 * @author Nick LaQuerre
 * 
 */


//Instance Variables and Objects:
const envVar = require('./getENV_webServer-emp1_dbclient');
const { Pool,Client } = require('pg');
var express = require('express');
const { publicDecrypt } = require('crypto');
var app = express();
const cors = require('cors');
httpServer = require('http').createServer(app);
const port = 4995;

app.use(express.static('front'));
app.use(cors({
  origin: ['https://nlaquerregis.com']
}))


console.log("STARTING sendUpdatesTable:")
console.log(".... .....:")




app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var index_vars = {
index_db_USER: process.env.PGUSER,
index_db_PASS: process.env.PGPASS,
index_db_HOST: process.env.PGHOST,
index_db_PORT: parseInt(process.env.PGPORT),
index_db_DATABASE: process.env.PGDATABASE,
};

PGUSER = index_vars.index_db_USER;
PGPASS = index_vars.index_db_PASS;
PGHOST = index_vars.index_db_HOST;
PGPORT = index_vars.index_db_PORT;
PGDATABASE = index_vars.index_db_DATABASE;
const client = new Client({
    user: '' + PGUSER,
    password: '' + PGPASS,
    host: '' + PGHOST,
    port: PGPORT,
    database: '' + PGDATABASE
});
lists = {};


app.listen(port, () => {
    console.log(`Example app listening at http://127.0.0.1t:${port}`);
});


async function pg3Connect() {
    try {
        console.log("3 " + process.env.db_DATABASE);
        index_vars = {
            index_db_USER: process.env.PGUSER,
            index_db_PASS: PGPASS,
            index_db_HOST: process.env.PGHOST,
            index_db_PORT: process.env.PGUSER,
            index_db_DATABASE: process.env.PGDATABASE,
        }
        PGUSER = index_vars.index_db_USER;
        PGPASS = index_vars.index_db_PASS;
        PGHOST = index_vars.index_db_HOST;
        PGPORT = index_vars.index_db_PORT;
        PGDATABASE = index_vars.index_db_DATABASE;
        console.log(index_vars.index_db_PASS);
        await client.connect()
    }
    catch (ex) {
        console.log("<async pg3Connect()> Unable to connect to database: " + ex)
    }
}
app.get('/updates/hey', (req, res) => {
    res.send('what you doin brah');
})

app.get("/updates", (req, res) => {
    res.send("yo yo yo! This is secured by NginX, the same way I encrypt static web content.  Except now, this msg is created by a node.js file, able to implement dynamic content.")
});


app.get("/updates/all", async (req, res) => {
    const fromDate = new Date();
    console.log("connecting to Server");

    await pg3Connect();
    console.log("connected to Server");
    /*const client = new Client({
        "host": process.env.db_HOST,
        "port": process.env.db_PORT,
        "user": process.env.db_USER,
        "password": process.env.db_PASS,
        "database": process.env.db_DATABASE
    })*/
    console.log("connected to Server");

    //connect
    //await client.connect();

    //return all rows
    const results = await client.query('SELECT time_inserted AS "Form Sent At", table_name1 AS "Signup Category", insert_id, signupmethod_client_id  FROM public."all_inserts" ORDER BY time_inserted DESC;');
    console.table(results.rows);
    //end
    client.end();

    const toDate = new Date();
    const elapsed = toDate.getTime() - fromDate.getTime();
    console.log(toDate);

    //send it to the wire
    res.send({"elapsed": elapsed, "recived_on": toDate,  "rows": results.rows, "elapsed": elapsed, "recived_on": toDate });
});


app.get('/hey', (req, res) => {
    res.send('what you doin brah');
})



/*
//const { Pool } = require('pg')
var express = require('express');
var app = express();
httpServer = require('http').createServer(app);
// Then close the server when done...

/*const pool = new Pool({
    "max": 20,
    "connectionTimeoutMillis": 0,
    "idleTimeoutMillis": 0
})

console.log(process.env);
httpServer.listen('2255', '162.0.225.46');
*/



//app.get("/", (req, res) =>
//    res.send("Node Showing through OPEN PORT"));
