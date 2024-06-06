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
            cell.setAttribute('data-placeholder', '');
        }
        // Create buttons and append them to the row
        const buttons = document.createElement('div');
        buttons.className = 'row-column-controls';
        const addButton = document.createElement('button');
        addButton.textContent = 'Add Row';
        addButton.addEventListener('click', addRow);
        buttons.appendChild(addButton);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Row';
        deleteButton.addEventListener('click', deleteRow);
        buttons.appendChild(deleteButton);
        row.appendChild(buttons);
    }
    // No need to call showButtons again here since it's already called inside the loop
    saveTable();
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
    // Create buttons and append them to the row
    const buttons = document.createElement('div');
    buttons.className = 'row-column-controls';
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Row';
    addButton.addEventListener('click', addRow);
    buttons.appendChild(addButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Row';
    deleteButton.addEventListener('click', deleteRow);
    buttons.appendChild(deleteButton);
    row.appendChild(buttons);
    saveTable(); 
}

function deleteRow() {
    const table = document.getElementById('dynamicTable');
    if (table.rows.length > 0){
        table.deleteRow(-1);
        saveTable(); 
    }
}

function addColumn() {
    const table = document.getElementById('dynamicTable');
    for (let i = 0; i < table.rows.length; i++) {
        const cell = table.rows[i].insertCell();
        cell.contentEditable = true;
        cell.setAttribute('data-placeholder', '');
    }
    // Create buttons and append them to the row
    const buttons = document.createElement('div');
    buttons.className = 'row-column-controls';
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Column';
    addButton.addEventListener('click', addColumn);
    buttons.appendChild(addButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Column';
    deleteButton.addEventListener('click', deleteColumn);
    buttons.appendChild(deleteButton);
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].appendChild(buttons);
    }
    saveTable(); 
}

function deleteColumn() {
    const table = document.getElementById('dynamicTable');
    if (table.rows[0].cells.length > 0) {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
        saveTable(); 
    }
}

function hideButtons() {
    const buttons = document.getElementsByClassName('row-column-controls')[0].getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
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
    let maxRows = Math.max(...tableData.map(data => data.row)) + 1;
    let maxColumns = Math.max(...tableData.map(data => data.column)) + 1;
    for (let i = 0; i < maxRows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < maxColumns; j++) {
            const cell = row.insertCell();
            const cellData = tableData.find(data => data.row === i && data.column === j);
            if (cellData) {
                cell.innerText = cellData.value;
            } else {
                cell.innerText = '';
            }
        }
    }
}

const saveButton = document.getElementById('save');
const loadButton = document.getElementById('load');
saveButton.addEventListener('click', () => {
    saveTable();
});
loadButton.addEventListener('click', () => {
    loadTable();
});