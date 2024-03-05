import { highlightyellow } from "../../common function/highlighting_and_removing.js";
import { highlightcircle } from "../../common function/highlighting_and_removing_circles.js";

function whitepawnclick({ piece }) {
    console.log("white pawn");
    let whitepawn = document.getElementById(piece.current_position);
    let currentpos = piece.current_position;
    highlightyellow(currentpos);

    let tomovepos = [];

    if (currentpos[1] == '2') {
        let x = currentpos[0] + '3';
        let y = currentpos[0] + '4';
        if (document.getElementById(x).innerHTML) {
        }
        else {
            tomovepos.push(x);
            if (document.getElementById(y).innerHTML) {
            }
            else {
                tomovepos.push(y);
            }
        }
        if (whitepawn.classList.contains("highlight-yellow"))
            highlightcircle(tomovepos);
    }
    else {
        let tomovepos = [];
        let num = +currentpos[1] + 1;
        let x = currentpos[0] + num.toString();
        if (document.getElementById(x).innerHTML) {
        }
        else {
            tomovepos.push(x);
        }
        if (whitepawn.classList.contains("highlight-yellow"))
            highlightcircle(tomovepos);
    }
}

function blackpawnclick({ piece }) {
    let blackpawn = document.getElementById(piece.current_position);
    console.log("black pawn");
    let currentpos = piece.current_position;
    highlightyellow(currentpos);
    let tomovepos = [];
    if (currentpos[1] == '7') {
        let x = currentpos[0] + '6';
        let y = currentpos[0] + '5';
        if (document.getElementById(x).innerHTML) {
            
        }
        else {
            tomovepos.push(x);
            if (document.getElementById(y).innerHTML) {
            }
            else {
                tomovepos.push(y);
            }
        }
        if (blackpawn.classList.contains("highlight-yellow"))
            highlightcircle(tomovepos);
    }
    else {
        let tomovepos = [];
        let num = +currentpos[1] - 1;
        let x = currentpos[0] + num.toString();
        if (document.getElementById(x).innerHTML) {
        }
        else {
            tomovepos.push(x);
        }
        if (blackpawn.classList.contains("highlight-yellow"))
            highlightcircle(tomovepos);
    }
}

export { whitepawnclick, blackpawnclick }