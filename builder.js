var table = document.createElement("table");

document.body.appendChild(table);

var x,y;
var letra = "`";
var pos;
var isWhite = true;

for(x=0;x<9;x++){
    var row = document.createElement("tr");
    table.appendChild(row);
    for(y=0;y<9;y++){
        var cell = document.createElement("td");
        if(y==0&&x>0){
            cell.innerHTML = x;
        }
        else if(y>0&&x==0){
            cell.innerHTML = String.fromCharCode(letra.charCodeAt(0) + y);
        }
        else{
            cell.id = String.fromCharCode(letra.charCodeAt(0) + y) + x;
        }
        row.appendChild(cell);
    }
}

for(x=0;x<8;x++){
    for(y=0;y<8;y++){
        pos = String.fromCharCode(letra.charCodeAt(0) + (y+1)) + (x+1);
        var elemento = document.getElementById(pos);
        if(isWhite){
            elemento.style.backgroundColor = "white";
            if(y<7){
                isWhite = false;
            }
        }
        else{
            elemento.style.backgroundColor = "black";
            if(y<7){
                isWhite = true;
            }
        }
    }
}