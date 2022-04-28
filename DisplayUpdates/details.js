async function createTableFromJSON() {
    var linkDataVar = JSON.stringify({"detailsCat": localStorage.getItem("detailsCat"),
                                      "detailsID": localStorage.getItem("detailsID")});
    console.log(linkDataVar)

        const { rows } = await fetch("https://api-1.nlaquerregis.com/details/some", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: linkDataVar
    }).then(res => res.json()); 
    console.count(rows);
    
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
    var thead = th.insertRow(-1);                 // TABLE ROW.
    for (var i = 0; i < col.length; i++) {
        var tabCell = thead.insertCell(-1);
        tabCell.innerHTML = ("<b>" + col[i] + "</b>");
    }

    // ADD JSON DATA TO THE TABLE AS ROW.
    tr = table.insertRow(-1);
    tr.setAttribute("id", "detailsRequest");
    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML= rows[0][col[j]];
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showDataDetails");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

function clickOnCell(row_tag){
    console.log("clickOnCell Function");
    rowData1 = localStorage.getItem(row_tag + "-1__rowData")
    rowData3 = localStorage.getItem(row_tag + "-3__rowData")
    console.log("rowData1 = " + rowData1);
    console.log("rowData3 = " + rowData3);
    localStorage.setItem("LinkData", rowData1 + "-" + rowData3);
    console.log(localStorage.getItem("LinkData"));
    window.location.href = "./details.html";
}

createTableFromJSON();

