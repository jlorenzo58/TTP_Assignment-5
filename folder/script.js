let addRowBtn= document.getElementById("addRowBtn");
let grid=document.querySelector(".grid");
var counter=3;

function addRow(){
    let newRow = document.createElement("div");
    newRow.setAttribute("class","row");
    for(let i=0; i<counter; i++){
        const newNode=document.createElement("div");
        newNode.setAttribute("class", "col-sm border border-dark box white");
        newRow.appendChild(newNode)
    }
    grid.appendChild(newRow);
}
addRowBtn.onclick = ()=>{
    addRow();
}


let delRowBtn = document.getElementById("delRowBtn");
function delRow(){
    let rows=document.querySelectorAll(".row");
    if(rows.length==0){
        return alert("cant delete any more.");
    }
    var ele = rows[(rows.length)-1];
    ele.remove();
}
delRowBtn.onclick = ()=>{
    delRow();
}


let addColBtn = document.getElementById("addColBtn");
function addCol(){
    for (let i = 0; i < grid.children.length; i++) {
        const newCol = document.createElement("div");
        newCol.setAttribute("class", "col-sm border border-dark box white");
        grid.children[i].appendChild(newCol);
    }
}
addColBtn.onclick = ()=>{
    addCol();
    counter++;
}


let delColBtn = document.getElementById("delColBtn");
function delCol(){
    let rowCount = grid.children.length;
    let lastCol = grid.children[rowCount-1].children.length - 1;
    if(lastCol==0){
        return alert("cant delete any more");
    }
    for(let i=0; i < rowCount;i++){
        let row = grid.children[i];
        row.removeChild(row.children[lastCol]);
    }
}
delColBtn.onclick = ()=>{
    delCol();
    counter--;
}

