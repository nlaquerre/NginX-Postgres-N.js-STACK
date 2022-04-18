# NginX-node.js-PostgreSQL--STACK

</br>

- ## LATEST IMPROVEMENTS 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>*Added 1-19-22</i>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>HUGE Display Overhaul/Reorganization!!  Woohoo!</b>
<br>

Brand New Organization -- New Display Recent Updates Table

For the most part, now this stack includes a final simple, but fully dynamic display table, using front end JavaScript along with my back end Node.js RestAPI, for showing up-to-date form submissions.  This completely revamped repository is now ready to checkout with a much more precise PostgreSQL table schema w/ trigger function, a sample html submissions form from my company's website w/ accompanying giant-messy css file, as well as a completely new organization to my stack.  Enjoy!
<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>*Added 1-19-22</i>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>An Entire Year Later!!</b>
<br>


The first addition, of what will hopefully be many, relates to incorporating a trigger for each table, all utilizing one central trigger function, creating a 4th table representing a backup/log for what I hope will eventually be the start of a very elaborate and careful backup design ensuring database stability personalizable for any scale!
<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>*Added 1-31-21</i>

<b>1)</b> - My unique design of importing environmental variables is now functional.  It still requires an encryption (for at least database role passwords), and some of my JavaScript could potentially better designed.  The key concept is that .env documents on the primary API(s) are left as null values.  Instead the variables are imported from off or on server locations sent in by separate API files.  This allows the API to be completely independent and allows users accessing the API limited access to database login credentials.  As of right now I have a local socket importing these database login variables.

<b>2)</b> -  I establish <i>npm package [pg]</i>'s pooling function, allowing access to my test PostgreSQL database, while using locally imported variables.

<b>3)</b> -  I include an SQL dump of my test PostgreSQL database.

<b> IF ACTIVATED, YOU CAN ACCESS THIS GIT VIA THE CLIENT'S PERSPECTIVE @ <https://api-1.nlaquerregis.com> and <https://api-1.nlaquerregis.com/all> </b> 

</br>

- ## TENTATIVE NEXT UPDATES


<b>1)</b> - I will post some basic static web design material showing the basic login form and accompanying page accessed only by logged in users.

<b>2)</b> -  My API will separate the pooling access to the database and the listening file(s). These will include SQL gets and puts allowing registering/logging into user accounts and a soft-encryption between the front-end and API hiding entered passwords from the sight of browser and server users.  I hope to also incorporate this encryption to the imported environmental variables.

<b>3)</b> - The database will include a more functional user/password table, hopefully including added timestamps created within the API.

<b>4)</b> - I plan on slightly improving the NginX configuration files to remove the ".html" extensions to the URLs.

</br>

- ## GENERAL SUMMARY OF THIS GIT

My first fully successful REST API development using NginX-controlled static AND Rest API hosting applying SSL encryption; also accompanied by a running but undeveloped PostgreSQL-13 DBMS.

I have a few API's drafted for accessing the database, and plenty of Database/Schema/SQL experience, so my next steps will be developing my skills in html/css/js to create well structured and unique front end web design, while furthering my familiarity when applying JavaScript within this REST API.

I have a private, invite-only Facebook group where you can find may latest tutorial videos. Here the most inexperienced Linux Virtual Server User can learn step-by-step how I've implemented my favorite designs onto my dev server.  To view, just jump to the page and send me a request to join the group!  No awkward formal friend request required! Enjoy!
<https://www.facebook.com/groups/1039467186512067/learning_content/?filter=647295659489285&post=354356735815111>
