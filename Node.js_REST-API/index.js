/**
 * 
 * @author Nick LaQuerre
 * 
 */


//Instance Variables and Objects:
const envVar = require('./getENV_webServer-emp1_dbclient');
const { Pool,Client } = require('pg');
var express = require('express');
var app = express();
httpServer = require('http').createServer(app);
const port = 4005;





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

app.post('/javascript_course', (req, res) => {
    console.log("hit");
    console.log(req);
    var directorySent = req.body;
    console.log(directorySent);
    var jsc_cfname = req.body.jsc_cfname;
    var jsc_clname = req.body.jsc_clname;
    var jsc_email = req.body.jsc_email;
    var jsc_phone = req.body.jsc_phone;
    var jsc_sfname = req.body.jsc_sfname;
    var jsc_slname = req.body.jsc_slname;
    var jsc_sage = req.body.jsc_sage;
    var jsc_notes = req.body.jsc_notes;
    console.log("Javascript Course Input:" + "\nClient First Name: " + jsc_cfname +
    "\nClient Last Name: " + jsc_clname +
    "\nClient Email Name: " + jsc_email +
    "\nClient Phone# Name: " + jsc_phone +
    "\nStudent First Name: " + jsc_sfname +
    "\nStudent First Name: " + jsc_slname +
    "\nStudent Age: " + jsc_sage +
    "\nNotes: " + jsc_notes);
    try{
    pgINSERTjavascriptCourse(jsc_cfname, jsc_clname, false, 
        jsc_sfname, jsc_slname, jsc_email, jsc_sage, jsc_notes, jsc_phone);
    res.status(200);
    res.redirect('https://stayaheadtutors.com/course-forms/javascript-pay.html');
    }
    catch (ex) {
    console.log(ex);
    res.status(205);
    }
});

app.post('/html_course', (req, res) => {
    console.log("hit");
    console.log(req);
    var directorySent = req.body;
    console.log(directorySent);
    var html_cfname = req.body.html_cfname;
    var html_clname = req.body.html_clname;
    var html_email = req.body.html_email;
    var html_phone = req.body.html_phone;
    var html_sfname = req.body.html_sfname;
    var html_slname = req.body.html_slname;
    var html_sage = req.body.html_sage;
    var html_notes = req.body.html_notes;
    console.log("HTML Course Input:" + "\nClient First Name: " + html_cfname +
    "\nClient Last Name: " + html_clname +
    "\nClient Email Name: " + html_email +
    "\nClient Phone# Name: " + html_phone +
    "\nStudent First Name: " + html_sfname +
    "\nStudent Last Name: " + html_slname +
    "\nStudent Age: " + html_sage +
    "\nNotes: " + html_notes);
    try{
    pgINSERThtmlCourse(html_cfname, html_clname, false, 
        html_sfname, html_slname, html_email, html_sage, html_notes, html_phone);
    res.status(200);
    res.redirect('https://stayaheadtutors.com/course-forms/html-pay.html');
    }
    catch (ex) {
    console.log(ex);
    res.status(205);
    }
});


app.post('/singleSession_course', (req, res) => {
    console.log("hit");
    console.log(req);
    var directorySent = req.body;
    console.log(directorySent);
    var single_session_subject = req.body.single_session_subject;
    var single_session_cfname = req.body.single_session_cfname;
    var single_session_clname = req.body.single_session_clname;
    var single_session_email = req.body.single_session_email;
    var single_session_phone = req.body.single_session_phone;
    var single_session_sfname = req.body.single_session_sfname;
    var single_session_slname = req.body.single_session_slname;
    var single_session_sage = req.body.single_session_sage;
    var single_session_notes = req.body.single_session_notes;
    console.log("Single Session Course Input:" + "\nSubject Desired: " + single_session_subject +
    "\nClient First Name: " + single_session_cfname +
    "\nClient Last Name: " + single_session_clname +
    "\nClient Email Name: " + single_session_email +
    "\nClient Phone# Name: " + single_session_phone +
    "\nStudent First Name: " + single_session_sfname +
    "\nStudent Last Name: " + single_session_slname +
    "\nStudent Age: " + single_session_sage +
    "\nNotes: " + single_session_notes);
    try{
    pgINSERTOneOnOne(single_session_subject, single_session_cfname, single_session_clname, null, 
        single_session_sfname, single_session_slname, single_session_email, single_session_sage,
        single_session_notes, single_session_phone);
    res.status(200);
    res.redirect('https://stayaheadtutors.com/course-forms/one-on-one-pay.html');
    }
    catch (ex) {
    console.log(ex);
    res.status(205);
    }
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



async function pg3Disconnect() {
    try 
        {await client.end()}
    catch (ex) 
        {console.log("<async pg3Disconnect()> WARNING!  Did not disconnect: " + ex)}
}


async function pgINSERTjavascriptCourse(client_fname, client_lname, client_is_student,
    student_fname, student_lname, client_email, student_age, notes, client_phonenum) {
try {
    await pg3Connect();
    await 
    client.query("INSERT INTO public.javascript_signup(client_fname, client_lname, " +
            "client_is_student, student_fname, student_lname, client_email, notes, client_phonenum, student_age) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
            [client_fname, client_lname, client_is_student, student_fname, student_lname,
                     client_email, notes, client_phonenum,student_age]);
    await pg3Disconnect();
    console.log("Database Add Successful!");
    }
    finally{
        await pg3Disconnect();
        console.log("Disconnect Successful!");
    }
}


async function pgINSERThtmlCourse(client_fname, client_lname, client_is_student,
        student_fname, student_lname, client_email, student_age, notes, client_phonenum) {
    try {
        await pg3Connect();
        await client.query("INSERT INTO public.html_signup(client_fname, client_lname, " +
            "client_is_student, student_fname, student_lname, client_email, notes, client_phonenum, " +
            "student_age) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
            [client_fname, client_lname, client_is_student, student_fname, student_lname,
                     client_email, notes, client_phonenum, student_age]);
    await pg3Disconnect();
    console.log("Database Add Successful!");
    }
    finally{
        await pg3Disconnect();
        console.log("Disconnect Successful!");
    }
}

async function pgINSERTOneOnOne(single_session_subject, client_fname, client_lname, client_is_student,
    student_fname, student_lname, client_email, student_age, notes, client_phonenum) {
try {
    await pg3Connect();
    await       
    client.query("INSERT INTO public.one_on_one_signup(session_topic, client_fname, client_lname, " +
        "client_is_student, student_fname, student_lname, client_email, notes, client_phonenum, student_age) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
            [single_session_subject, client_fname, client_lname, client_is_student, student_fname, student_lname,
                    client_email, notes, client_phonenum, student_age]);
    await pg3Disconnect();
    console.log("Database Add Successful!");
    }
    finally{
        await pg3Disconnect();
        console.log("Disconnect Successful!");
    }
}


app.get('/hey', (req, res) => {
    res.send('what you doin brah');
})


/*app.get('/formSubmits', (req, res) => {
    console.log("Web Page Request for Recient Form Submits");
    try{
    pg3getFormSubmits();
    
    res.status(200);
    res.('https://stayaheadtutors.com/course-forms/one-on-one-pay.html');
    }
    catch (ex) {
    console.log(ex);
    res.status(205);
    }
});


async function pg3getFormSubmits() {
try {
    await pg3Connect();
    const query = client.query('SELECT * FROM items ORDER BY id ASC;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
    done();
    await pg3Disconnect();
    return results.json(results);
  });
  
    await pg3Disconnect();
    console.log("Database Pull Successful!");
    }
    finally{
        await pg3Disconnect();
        console.log("Disconnect Successful!");
    }
}*/



/*app.get('/todu/lists', (request, response) => {
    response.send(pg3display);
});*/