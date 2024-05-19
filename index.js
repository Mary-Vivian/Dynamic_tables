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
<<<<<<< HEAD

function deleteRow() {
    const table = document.getElementById('dynamicTable');
    if (table.rows.length > 0) {
        table.deleteRow(-1);
    }
}

=======
function addColumn() {
    const table = document.getElementById('dynamicTable');
    for (let i = 0; i < table.rows.length; i++) {
        const cell = table.rows[i].insertCell();
        cell.contentEditable = true;
        cell.setAttribute('data-placeholder', 'Edit...');
    }
}
>>>>>>> feature4/js
