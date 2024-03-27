import { highlightcircle } from "../../common function/highlighting_and_removing_circles.js";
import { highlightyellow } from "../../common function/highlighting_and_removing.js";

import { capture, removecapture } from "../../common function/capturechange.js";

function moverook(currentpos, opponentcolor, x) {
    let rook = document.getElementById(currentpos);
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const currenttwo = currentpos[1] - 1;
    const currectone = currentpos[0].charCodeAt(0) - 97;
    let tomovepos = [];
    let tocapture = [];
    for (var i = currenttwo - 1; i >= 0; i--) {
        const mn = col[currectone] + row[i];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else {
            tocapture.push(mn)
            break;
        }
    }
    for (var i = currenttwo + 1; i < 8; i++) {
        const mn = col[currectone] + row[i];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else {
            tocapture.push(mn)
            break;
        }
    }
    for (var i = currectone + 1; i < 8; i++) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else {
            tocapture.push(mn)
            break;
        }
    }
    for (var i = currectone - 1; i >= 0; i--) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML == "")
            tomovepos.push(mn);
        else {
            tocapture.push(mn)
            break;
        }
    }
    if (x == 0) {
        return tocapture;
    }
    else if (rook.classList.contains("highlight-yellow")) {
        highlightcircle(tomovepos);
        capture(tocapture, opponentcolor);
    }
    else {
        removecapture();
    }
}

function whiterookclick({ piece }) {
    console.log("white rook");
    let currentpos = piece.current_position;
    highlightyellow(currentpos);
    moverook(currentpos, "Black");
}

function blackrookclick({ piece }) {
    
    console.log("black rook");
    let currentpos = piece.current_position;
    highlightyellow(currentpos);
    moverook(currentpos, "White");
}

export { whiterookclick, blackrookclick, moverook }