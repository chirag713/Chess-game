import { highlightcircle } from "../../common function/highlighting_and_removing_circles.js";
import { highlightyellow } from "../../common function/highlighting_and_removing.js";

function moveplace(currentpos){
    let queen = document.getElementById(currentpos);
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const currentrow = currentpos[1] - 1;
    const currentcol = currentpos[0].charCodeAt(0) - 97;
    let tomovepos = [];
    var i = currentcol + 1, j = currentrow + 1;
    for(;i<=7 && j<=7;){
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
        i++;
        j++;
    }
    var i = currentcol + 1, j = currentrow - 1;
    for(;i<=7 && j>=0;){
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
        i++;
        j--;
    }
    var i = currentcol - 1, j = currentrow + 1;
    for(;i>=0 && j<=7;){
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
        i--;
        j++;
    }
    var i = currentcol - 1, j = currentrow - 1;
    for(;i>=0 && j>=0;){
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
        i--;
        j--;
    }
    for (var i = currentrow - 1; i >= 0; i--) {
        const mn = col[currentcol] + row[i];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
    }
    for (var i = currentrow + 1; i < 8; i++) {
        const mn = col[currentcol] + row[i];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
    }
    for (var i = currentcol + 1; i < 8; i++) {
        const mn = col[i] + row[currentrow];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
    }
    for (var i = currentcol - 1; i >= 0; i--) {
        const mn = col[i] + row[currentrow];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
    }
    if (queen.classList.contains("highlight-yellow"))
        highlightcircle(tomovepos);
}

function whitequeenclick({piece}){
    console.log("white queen");
    let currentpos = piece.current_position;
    highlightyellow(currentpos);
    moveplace(currentpos);
}

function blackqueenclick({piece}){
    console.log("black queen");
    let currentpos = piece.current_position;
    highlightyellow(currentpos);
    moveplace(currentpos);
}

export {whitequeenclick , blackqueenclick}