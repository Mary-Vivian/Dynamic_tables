function generateTable() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const table = document.getElementById('dynamicTable');

    // Clear the table and local storage
    table.innerHTML = '';  // Clear the table
    localStorage.removeItem('tableData'); // Remove old data

    // Create new table structure
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell();
            cell.contentEditable = true;
            cell.setAttribute('data-placeholder', '');
        }
    }

    // Save the newly generated table structure
    saveTable();
}

function addRow() {
    const table = document.getElementById('dynamicTable');
    const lastRow = table.rows[table.rows.length - 1];
    const newRow = table.insertRow(lastRow.rowIndex + 1);
    for (let i = 0; i < table.rows[0].cells.length; i++) {
        const cell = newRow.insertCell(i);
        cell.contentEditable = true;
        cell.setAttribute('data-placeholder', '');
    }
}

function deleteRow() {
    const table = document.getElementById('dynamicTable');
    if (table.rows.length > 1) { // Ensure there's at least one row left
        table.deleteRow(-1);
    }
}

function addColumn() {
    const table = document.getElementById('dynamicTable');
    for (let i = 0; i < table.rows.length; i++) {
        const cell = table.rows[i].insertCell(-1);
        cell.contentEditable = true;
        cell.setAttribute('data-placeholder', '');
    }
}

function deleteColumn() {
    const table = document.getElementById('dynamicTable');
    if (table.rows[0].cells.length > 1) { // Ensure there's at least one cell left
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    loadTable();
});

function saveTable() {
    let tableData = [];
    const table = document.getElementById('dynamicTable');
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            tableData.push({
                value: table.rows[i].cells[j].innerText,
                row: i,
                column: j
            });
        }
    }
    localStorage.setItem('tableData', JSON.stringify(tableData));
}

function loadTable() {
    const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
    const table = document.getElementById('dynamicTable');
    table.innerHTML = ''; 

    // Determine the maximum number of rows and columns needed
    let maxRows = Math.max(...tableData.map(data => data.row)) + 1;
    let maxColumns = Math.max(...tableData.map(data => data.column)) + 1;

    // Generate the table structure based on the stored data
    for (let i = 0; i < maxRows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < maxColumns; j++) {
            const cell = row.insertCell();
            // Find the cell data for the current position, if it exists
            const cellData = tableData.find(data => data.row === i && data.column === j);
            if (cellData) {
                cell.innerText = cellData.value;
            } else {
                // If no data is found for this cell, clear its content
                cell.innerText = '';
            }
        }
    }
}


