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
            cell.textContent = "";
        }
    }
    saveTable(); // Call saveTable() after generating the table
}

function addRow() {
    const table = document.getElementById('dynamicTable');
    const columns = table.rows[0].cells.length;
    const row = table.insertRow();
    for (let i = 0; i < columns; i++) {
        const cell = row.insertCell();
        cell.contentEditable = true;
        cell.setAttribute('data-placeholder', '');
    }
}
function deleteRow() {
    const table = document.getElementById('dynamicTable');
    if (table.rows.length > 0) {
        table.deleteRow(table.rows.length-1);
    }
}
function addColumn() {
    const table = document.getElementById('dynamicTable');
    for (let i = 0; i < table.rows.length; i++) {
        const newCell = table.rows[i].insertCell();
        newCell.contentEditable = true;
        newCell.textContent = "";
    }
    saveTable(); // Call saveTable() after adding a column
}
function deleteColumn() {
    const table = document.getElementById('dynamicTable');
    if (table.rows[0].cells.length > 1) {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
    
}
function saveTable() {
    const table = document.getElementById('dynamicTable');
    const tableData = Array.from(table.rows).map(row => Array.from(row.cells).map(cell => ({
        value: cell.textContent,
        row: row.rowIndex,
        column: cell.cellIndex
    }))).flat();
    localStorage.setItem('tableData', JSON.stringify(tableData));
}
saveTable(); 
