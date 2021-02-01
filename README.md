# NginX-node.js-PostgreSQL -- STACK

</br>

- ## LATEST IMPROVEMENTS 
 ### <i><b>Added on 1-31-21 </i>


1)</b> - My unique design of importing environmental variables is now functional.  It still requires an encryption (for at least database role passwords), and some of my JavaScript could potentially better designed.  The key concept is that .env documents on the primary API(s) are left as null values.  Instead the variables are importorted from off or on server locations sent in by seperate API files.  This allows the API to be completely independant and allows users accessing the API limited access to database login credentials.  As of right now I have a local socket importing these database login variables.

<b>2)</b> -  I establish <i>npm package [pg]</i>'s pooling function, allowing access to my test PostgreSQL database, while using locally imported variables.

<b>3)</b> -  I include an SQL dump of my test PostgreSQL database.

<b> IF ACTIVATED, YOU CAN ACCESS THIS GIT VIA THE CLIENT'S PERSPECTIVE @ <https://api-1.nlaquerregis.com> and <https://api-1.nlaquerregis.com/all> </b> 

</br>

- ## TENTATIVE NEXT UPDATES


<b>1)</b> - I will post some basic static web design material showing the basic login form and accompaning page accessed only by logged in users.

<b>2)</b> -  My API will seperate the pooling access to the database and the listening file(s). These will include SQL gets and puts allowing registering/logging into user accounts and a soft-encryption between the frontend and API hiding entered passwords from the sight of browser and server users.  I hope to also incorperate this encryption to the imported environmental variables.

<b>3)</b> - The database will include a more functional user/password table, hopefully including added timestamps created within the API.

<b>4)</b> - I plan on slightly improving the NginX configuration files to remove the ".html" extensions to the URLs.

</br>

## - GENERAL SUMMARY OF THIS GIT

My first fully successful REST API developement using NginX-controlled static AND Rest API hosting applying SSL encryption; also accompanied by a running but undeveloped PostgreSQL-13 DBMS.

I have a few API's drafted for accessing the database, and plenty of Database/Schema/SQL experience, so my next steps will be developing my skills in html/css/js to create well structured and unique front end web design, while furthing my familiarity when applying javaScript within this REST API.

I have a private, invite-only facebook group where you can find may latest tutorial videos. Here the most inexperienced Linux Virual Server User can learn step-by-step how I've implemented my favorite designs onto my dev server.  To view, just jump to the page and send me a request to join the group!  No awkward formal friend request required! Enjoy!
<https://www.facebook.com/groups/1039467186512067/learning_content/?filter=647295659489285&post=354356735815111>
