# Display Updates Front End

</br>

- ## LATEST IMPROVEMENTS:

<b> 4-28-22 </b>

Using my less publicly marketed domain, this admin-oriented view brings you an up-to-date table showing user form submissions.  The dynamic
nature of this page has the html document supply limited code in the body, as the client-side javascript recieves the live row data from the
database and builds the table from scratch.

In addition, the table further attaches a link for each row that supplies the "details".  This is accomplished by holding client-side browser
local storage variables for each row, which are called by arguement within a function activated when the link is clicked.  The function aquires
the correct local variables, and then sends these to the backend in order to next display the correct appropriate details regarding the row clicked.
