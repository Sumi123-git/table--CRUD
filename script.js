var selectedrow = null;

function onformsubmit(){
var formdata = readformdata();
if(selectedrow == null)
    insertnewrecord(formdata);
    else
    updaterecord(formdata);
resetform();
}
function readformdata(){
    var formdata={};
    formdata["playercode"]=document.getElementById("playercode").value;
    formdata["fullname"]=document.getElementById("fullname").value;
    formdata["cnname"]=document.getElementById("cnname").value;
    formdata["nogames"]=document.getElementById("nogames").value;
    formdata["toscore"]=document.getElementById("toscore").value;
    return formdata;
}
function insertnewrecord(data){
var table= document.getElementById("playerlist").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerhHTML = data.playerCode;
cell2 = newRow.insertCell(1);
cell2.innerhHTML = data.fullname;
cell3 = newRow.insertCell(2);
cell3.innerhHTML = data.cnname;
cell4 = newRow.insertCell(3);
cell4.innerhHTML = data.nogames;
cell5 = newRow.insertCell(4);
cell5.innerhHTML = data.toscore;
cell6 = newRow.insertCell(5);
cell6.innerhHTML = '<a onclick="onedit(this)">Edit</a><a onclick="ondelete(this)">Delete</a>';
}

function resetform(){
    document.getElementById("playercode").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("cnname").value = "";
    document.getElementById("nogames").value = "";
    document.getElementById("toscore").value = "";
    selectedrow = null;

}
function onedit(td){
    selectedrow =td.parentelement.parentelement;
    document.getElementById("playercode").value = selectedrow.cells[0].innerHTML;
    document.getElementById("fullname").value = selectedrow.cells[1].innerHTML;
    document.getElementById("cnname").value = selectedrow.cells[2].innerhHTML;
    document.getElementById("nogames").value = selectedrow.cells[3].innerHTML;
    document.getElementById("toscore").value = selectedrow.cells[4].innerHTML;
}
function updaterecord(){
    selectedrow.cells[0].innerhHTML = formdata.#id;
    selectedrow.cells[1].innerhHTML = formdata.fullname;
    selectedrow.cells[2].innerhHTML = formdata.cnname;
    selectedrow.cells[3].innerhHTML = formdata.nogames;
    selectedrow.cells[4].innerhHTML = formdata.toscore;
}
function ondelete(td){
    if(confirm('are you sure u want to delete the record?')){
    row = td.parentelement.parentelement;
    document.getElementById("playerlist").deletedrow(row.rowindex);
 resetform();
}
}
