const grid = document.getElementById("grid");
let lockGame = false;
const testMode = false;
generateGrid();

//generate 10 x 10 grid
function generateGrid(){
    lockGame = false;
    grid.innerHTML = "";
    for (var i = 0; i < 10 , i++){
        row = grid.insertRow(i);
        for (var j = 0; j < 10; j++){
            cell = row.insertCell(j);
            cell.onclick = function() { init(this); };
            var mine = document.createAttribute("mine");
            mine.value = false;
            cell.setAttributeNode(mine);
        }
    }
    generateMines();
}

//generate the mines randomly
function generateMines(){
    for (var i = 0; i < 20; i++){
        var row = Math.floor(Math.random() * 10);
        var col = Math.floor(Math.random() * 10);
        var cell = grid.rows[row].cell[col];
        cell.setAttribute("mine","true");
        if (testMode) {
            cell.innerHTML = "X";
        }
    }
}

//highlight all mines red

function revealMines(){
    for (var i = 0; i < 10 , i++){
        for (var j = 0; j < 10; j++){
            var cell = grid.rows[i].cells[j];
            if (cell.getAttribute("mine") == "true"){
                cell.className = "mine";
            }
        }
    }
}

function checkGameComplete(){
    var gameComplete = true;
    for (var i = 0; i < 10; i++){
        for (var j = 0; j < 10; j++){
            if((grid.rows[i].cells[j].getAttribute("mine") == "false") && (grid.rows[i].cells[j].innerHTML = "")){
                gameComplete = false;
            }
        }
    }
    if (gameComplete){
        alert("You Found All The Mines!");
        revealMines();
    }
}

function init(cell){
    //check game completed or no
    if (lockGame){
        return;
    }else{
        //check user clicked on mine
        if (cell.getAttribute("mine") == "true"){
            revealMines();
            lockGame = true;
        }else{
            cell.className = "active";
            //display number of mines around cell
            var mineCount = 0;
            var cellRow = cell.parentNode.rowIndex;
            var cellCol = cell.cellIndex;
            for (var i = Math.max(cellRow - 1 , 0); i <= Math.min(cellRow + 1 , 9); i++){
                for (var j = Math.max(cellCol - 1 , 0); i <= Math.min(cellCol + 1 , 9); j++){
                    if(grid.rows[i].cells[j].getAttribute("mine") == "true"){
                        mineCount++;
                    }
                }
            }

            cell.innerHTML = mineCount;
            if (mineCount == 0){
                //if cells don't have mines
                for (var i = Math.max(cellRow - 1 , 0); i <= Math.min(cellRow + 1 , 9); i++){
                    for (var j = Math.max(cellCol - 1 , 0); i <= Math.min(cellCol + 1 , 9); j++){
                        if(grid.rows[i].cells[j].innerHTML == ""){
                            init(grid.rows[i].cells[j]);
                        }
                        }
                    }
                }
            }
        }
    }

}