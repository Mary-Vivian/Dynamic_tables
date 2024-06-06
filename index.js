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
    const row = table.insertRow();
    for (let j = 0; j < columns; j++) {
    const cell = row.insertCell();
    cell.contentEditable = true;
    cell.setAttribute('data-placeholder', '');
}
document.getElementById('downloadAsCSV').addEventListener('click', function() {
    var table = document.querySelector('#myTable'); 
    var csvContent = "data:text/csv;charset=utf-8," + tableToCsv(table);
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
}

function deleteRow() {
    const table = document.getElementById('dynamicTable');
    if (table.rows.length > 0){
        table.deleteRow(-1);
    if (table.rows.length > 0) {
        table.deleteRow(table.rows.length-1);

    }}}

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
// function saveTable() {
//     const tableData = [];
//     const table = document.getElementByI>>>>>>> feature1/landingpaged('dynamicTable');
//     for (let i = 0; i < table.rows.length; i++) {
//         for (let j = 0; j < table.rows[i].cells.length; j++) {
//             tableData.push({
//                 value: table.rows[i].cells[j].innerText,
//                 row: i,
//                 column: j
//             });
//         }
//     }
//     localStorage.setItem('tableData', JSON.stringify(tableData));
// }

// function updateTableItem(oldRow, oldColumn, newRow, newColumn, value) {
//     let tableData = JSON.parse(localStorage.getItem('tableData')) || [];
//     tableData = tableData.map((item) => {
//         if (item.row === oldRow && item.column === oldColumn) {
//             return { value, row: oldRow, column: oldColumn };
//         }
//         return item;
//     });
//     localStorage.setItem('tableData', JSON.stringify(tableData));
// }

// function removeTableItem(row, column) {
//     let tableData = JSON.parse(localStorage.getItem('tableData')) || [];
//     tableData = tableData.filter((item) => item.row !== row || item.column !== column);
//     localStorage.setItem('tableData', JSON.stringify(tableData));
// }

// function clearTable() {
//     localStorage.removeItem('tableData');
// }
// function saveTable() {
//     const tableData = [];
//     const table = document.getElementById('dynamicTable');
//     for (let i = 0; i < table.rows.length; i++) {
//         for (let j = 0; j < table.rows[i].cells.length; j++) {
//             tableData.push({
//                 value: table.rows[i].cells[j].innerText,
//                 row: i,
//                 column: j
//             });
//         }
//     }
//     localStorage.setItem('tableData', JSON.stringify(tableData));
// }

function loadTable() {
    const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
    const table = document.getElementById('dynamicTable');
    table.innerHTML = '';
    for (let i = 0; i < tableData.length; i++) {
        const row = table.insertRow();
        for (let j = 0; j < tableData[i].length; j++) {
            const cell = row.insertCell();
            cell.innerText = tableData[i][j].value;
        }
    }
}

// Load the table data when the page loads
loadTable();

// Save the table data whenever the table changes
document.getElementById('dynamicTable').addEventListener('DOMSubtreeModified', saveTable);
    for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(-1);}
