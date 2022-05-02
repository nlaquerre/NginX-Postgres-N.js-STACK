# REST_API
<ul>
  <li><b>Index.js</b></li>
This backend script distributes the fields submitted by the primary client-information forms prior to the payment page.  It connects securely to the Postgres database using the npm package "<u>pg</u>" by first calling `getENV_webServer-emp1.js` which alters the fields within the local `.env` document.  After connected, it sends the recieved variables to the database via an INSERT SQL query.
  
  <li><b>sendUpdatesTable.js</b></li>
This initial REST-API oriented script recieves from the database all the rows accumlated in the "all_inserts" table, which has pooled all the submitted forms from each category via a internal SQL function trigger.
  
  <li><b>sendDetailsTable.js</b></li>
This secondary REST-API oriented script recieves a post call after the client chooses a row from the updatesTable, containing the variables concerning the specific table and unique submission ID.  It then sends back the single row called for back to the client.
