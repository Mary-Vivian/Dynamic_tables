function generateTable() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const table = document.getElementById('dynamicTable');

    table.innerHTML = '';  // Clear the table

    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell();
            cell.contentEditable = true;
            cell.setAttribute('data-placeholder', 'Edit');
        }
    }
    saveTable()
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
    if (table.rows.length > 0) {
        table.deleteRow(-1);
    }
}

function addColumn() {
    const table = document.getElementById('dynamicTable');
    for (let i = 0; i < table.rows.length; i++) {
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
    table.innerHTML = ''; // Clear existing table
    tableData.forEach(cell => {
        const row = table.insertRow();
        row.insertCell().innerText = cell.value; // Set cell value
    });
}
