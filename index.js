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
    }
    showButtons();
}

function showButtons() {
    const buttonsContainer = document.getElementsByClassName('row-column-controls')[0];
    buttonsContainer.style.display = 'block';
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
    showButtons();
}

function addColumn() {
    const table = document.getElementById('dynamicTable');
    for (let i = 0; i < table.rows.length; i++) {
        const cell = table.rows[i].insertCell();
        cell.contentEditable = true;
        cell.setAttribute('data-placeholder', '');
    }
    showButtons();
}

function showButtons() {
    const buttons = document.getElementsByClassName('row-column-controls')[0].getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'inline-block';
    }
}
function deleteRow() {
    const table = document.getElementById('dynamicTable');
    if (table.rows.length > 0) {
        table.deleteRow(table.rows.length-1);
        if (table.rows.length === 0) {
            hideButtons();
        }
    }
}

function deleteColumn() {
    const table = document.getElementById('dynamicTable');
    if (table.rows[0].cells.length > 0) {
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
        if (table.rows[0].cells.length === 0) {
            hideButtons();
        }
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