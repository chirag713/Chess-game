import { highlightcircle } from "../../common function/highlighting_and_removing_circles.js";
import { highlightyellow } from "../../common function/highlighting_and_removing.js";

function moveplace(currentpos) {
    let rook = document.getElementById(currentpos);
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const currenttwo = currentpos[1] - 1;
    const currectone = currentpos[0].charCodeAt(0) - 97;
    let tomovepos = [];
    for (var i = currenttwo - 1; i >= 0; i--) {
        const mn = col[currectone] + row[i];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
    }
    for (var i = currenttwo + 1; i < 8; i++) {
        const mn = col[currectone] + row[i];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
    }
    for (var i = currectone + 1; i < 8; i++) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
    }
    for (var i = currectone - 1; i >= 0; i--) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else break;
    }
    if (rook.classList.contains("highlight-yellow"))
        highlightcircle(tomovepos);
}

function whiterookclick({ piece }) {
    console.log("white rook");
    let currentpos = piece.current_position;
    highlightyellow(currentpos);
    moveplace(currentpos);
}

function blackrookclick({ piece }) {
    console.log("black rook");
    let currentpos = piece.current_position;
    highlightyellow(currentpos);
    moveplace(currentpos);
}

export { whiterookclick, blackrookclick }