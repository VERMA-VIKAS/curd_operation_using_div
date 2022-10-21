var data = [];
var selectedRow = null

function readData() {
    var person = {
        name: document.getElementById("fullName").value,
        adress: document.getElementById("adress").value,
        Country: document.getElementById("country").value,
        email: document.getElementById("email").value,
        Number: document.getElementById("mobile").value
    }

    data.push(person);
    // console.log(data)
    return person;
}

function done() {
    readData()
    if (validate()) {
        var data = readData();
        if (selectedRow == null) {
            insertNewRecord(data);
            resetForm();
        } else {
            updateRecord(data);
            resetForm();
        }
    }
}

// console.log(data.name)
// console.log(data.adress)
// console.log(data.Country)
// console.log(data.email)
// console.log(data.Number)



function insertNewRecord(data) {
    console.log(data, 'datadatadata');

    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = `<input type="checkbox" />`;
    cell2 = newRow.insertCell(1);
    console.log(data.name)
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.adress;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Country;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Number;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}



function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("adress").value = selectedRow.cells[2].innerHTML;
    document.getElementById("country").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[5].innerHTML;
    document.getElementById("submit").innerHTML = "Update"
}
function updateRecord(data) {
    data.map([
        selectedRow.cells[1].innerHTML = document.getElementById('fullName').value,
        selectedRow.cells[2].innerHTML = document.getElementById('adress').value,
        selectedRow.cells[3].innerHTML = document.getElementById('country').value,
        selectedRow.cells[4].innerHTML = document.getElementById('email').value,
        selectedRow.cells[5].innerHTML = document.getElementById("mobile").value,
        resetForm(),
        document.getElementById("submit").innerHTML = "submit"
    ]);

}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);
        resetForm();
    }
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("adress").value = "";
    document.getElementById("country").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    selectedRow = null;
}

function checkAll(ele) {
    var checkboxes = document.getElementsByTagName('input');
    // console.log(ele.checked)
    if (ele.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = true;
            }
        }
    }
    else {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = false;
            }
        }
    }
    for (var i = 0; i < checkboxes.length; i++) {
        var checked = (document.getElementsByTagName('td')[i * 7]);
        console.log(checked);
    }
    // var table = document.getElementById("List");
    // var rowCount = table.rows.length;
    // for (var i = 1; i < rowCount; i++) {
    //     var row = table.rows[i];
    //     var chkbox = row.cells[0].childNodes[0];
    //     console.log(chkbox.checked)
    //     if (chkbox.checked=true){
    //         console.log("done")
    //     }
      
    // }
    // let main = document.getElementById('List');
    // console.log(main)

}

function deleteRow(tableID) {

    if (confirm('Are you sure to delete this record ?')) {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;

        for (var i = 1; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }
            resetForm();
        }
    }

}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
