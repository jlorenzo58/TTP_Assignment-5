let grid=document.querySelector(".grid");
var counter=3;

//add rows to the grid
let addRowBtn= document.getElementById("addRowBtn");
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

//remove rows from the grid
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

//add columns to the grid
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

//remove columns from the grid
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

let box = document.querySelectorAll(".box");

//click on a single cell, changing its color to the currently selected color
function changingOneBoxColorSelector(){
    let boxes = document.querySelectorAll(".box");
    const tempVal = document.querySelector("#changingOneBoxColorSelector");
     for (let i = 0; i < boxes.length ; i++){
        box[i].onclick=()=>{
        box[i].style.backgroundColor=tempVal.options[tempVal.selectedIndex].value;
        }
    }
}
changingOneBoxColorSelector();


//fill all uncolored cells with the currently selected color
let colorAllUnclrdBtn = document.getElementById("fillWhiteBoxes");
colorAllUnclrdBtn.onclick=()=>{
    let boxes = document.querySelectorAll(".box");
    const val = document.querySelector("#replaceWhiteSelector");
    boxes.forEach((box)=>{
        if(box.style.backgroundColor ===""){
            box.style.backgroundColor = val.options[val.selectedIndex].value;
        }
    })
}

//fill all cells with the currently selected color
let colorAllBtn = document.getElementById("changeAllBoxes");
colorAllBtn.onclick=()=>{
    let boxes = document.querySelectorAll(".box");
    const length = document.querySelectorAll(".box").length;
    const val = document.querySelector("#changingAllBoxesSelector");
    for(let i=0;i<length;i++){
        boxes[i].style.backgroundColor=val.options[val.selectedIndex].value;
    }
}

//click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
const val = document.querySelector("#draggingColorSelector");
const tempLength = document.querySelectorAll(".box").length;
function mouseoverFunction(selColor){
    selColor.target.style.background = val.options[val.selectedIndex].value;
}
grid.addEventListener("mousedown",function () {
    for(let i = 0 ; i<tempLength;i++){
        box[i].addEventListener("mouseover",mouseoverFunction);
    }
})
grid.addEventListener("mouseup",function () {
    for(let i = 0; i < tempLength; i++){
        box[i].removeEventListener("mouseover",mouseoverFunction);
    }
})