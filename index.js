function generateTable() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const table = document.getElementById('dynamicTable');
    table.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell();
            cell.contentEditable = true;
            cell.setAttribute('data-placeholder', 'Edit');
        }
    }
}
document.getElementById('downloadAsCSV').addEventListener('click', function() {
    var table = document.querySelector('#myTable'); // Replace #myTable with your table's ID
    var csvContent = "data:text/csv;charset=utf-8," + tableToCsv(table);

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "table.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
});

function tableToCsv(table) {
    var rows = Array.from(table.querySelectorAll("tr"));
    var headerCells = Array.from(rows[0].querySelectorAll("th"));

    var csvRows = rows.slice(1).map(row => {
        var cells = Array.from(row.querySelectorAll("td"));
        return headerCells.map(headerCell => cells[headerCells.indexOf(headerCell)] || "").join(",");
    });

    return csvRows.join("\n") + "\n" + headerCells.map(headerCell => headerCell.textContent || "").join(",") + "\n";
}

function addRow() {
    const table = document.getElementById('dynamicTable');
    const columns = table.rows[0].cells.length;
    const row = table.insertRow();
    for (let i = 0; i < columns; i++) {
        const cell = row.insertCell();
        cell.contentEditable = true;
        cell.setAttribute('data-placeholder', 'Edit...');
    }
}

function deleteRow() {
    const table = document.getElementById('dynamicTable');
    if (table.rows.length > 0){
        table.deleteRow(-1);
    if (table.rows.length > 0) {
        table.deleteRow(-1);
        table.deleteRow(table.rows.length-1);
    }
}
}

function addColumn() {
    const table = document.getElementById('dynamicTable');
    for (let i = 0; i < table.rows.length; i++){
        const cell = table.rows[i].insertCell();
        cell.contentEditable = true;
        cell.setAttribute('data-placeholder', 'Edit...');
    }
}
function deleteColumn() {
    const table = document.getElementById('dynamicTable');
    if (table.rows[0].cells.length > 0) {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
}
document.getElementById('downloadAsCSV').addEventListener('click', function() {
    var table = document.querySelector('#myTable'); // Replace #myTable with your table's ID
    var csvContent = "data:text/csv;charset=utf-8," + tableToCsv(table);

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "table.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
});

function tableToCsv(table) {
    var rows = Array.from(table.querySelectorAll("tr"));
    var headerCells = Array.from(rows[0].querySelectorAll("th"));

    var csvRows = rows.slice(1).map(row => {
        var cells = Array.from(row.querySelectorAll("td"));
        return headerCells.map(headerCell => cells[headerCells.indexOf(headerCell)] || "").join(",");
    });

    return csvRows.join("\n") + "\n" + headerCells.map(headerCell => headerCell.textContent || "").join(",") + "\n";
}

