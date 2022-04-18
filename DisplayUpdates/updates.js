async function createTableFromJSON() {
    const { rows } = await fetch("https://api-1.nlaquerregis.com/updates/all").then(res => res.json());
    console.count(rows);
    /*fetch("https://api-1.nlaquerregis.com/updates/all", {
        method: "GET"
    }).then(res => res.json())
    .then(data => data.rows)
    .catch((err) => {
        console.log("ERROR: " + err);
});*/

    /*var myBooks = [
        {
            "Book ID": "1",
            "Book Name": "Computer Architecture",
            "Category": "Computers",
            "Price": "125.60"
        },
        {
            "Book ID": "2",
            "Book Name": "Asp.Net 4 Blue Book",
            "Category": "Programming",
            "Price": "56.00"
        },
        {
            "Book ID": "3",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40"
        }
    ]*/

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < rows.length; i++) {
        for (var key in rows[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    console.count(col);
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var th = table.createTHead(-1);  
    var row = th.insertRow(-1);                 // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        //var th = document.createElement("th.top-results-table-th");      // TABLE HEADER.
        //th.innerHTML = col[i];
        var tabCell = row.insertCell(-1);
        //tr.appendChild(th);
        tabCell.innerHTML = ("<b>" + col[i] + "</b>");
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < rows.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = rows[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
createTableFromJSON();