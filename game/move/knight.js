import { highlightcircle } from "../../common function/highlighting_and_removing_circles.js";
import { highlightyellow } from "../../common function/highlighting_and_removing.js";
import { capture } from "../../common function/capturechange.js";
import { removecapture } from "../../common function/capturechange.js";

function moveknight(current_pos, opponentcolor, x) {

    let knight = document.getElementById(current_pos);
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const currentrow = current_pos[1] - 1;
    const currentcol = current_pos[0].charCodeAt(0) - 97;
    var requirecol = [currentcol + 2, currentcol + 2, currentcol + 1, currentcol + 1, currentcol - 1, currentcol - 1, currentcol - 2, currentcol - 2];
    var requirerow = [currentrow + 1, currentrow - 1, currentrow + 2, currentrow - 2, currentrow + 2, currentrow - 2, currentrow - 1, currentrow + 1];
    let tomovepos = [];
    let tocapture = [];
    for (var i = 0; i < 8; i++) {
        if (requirecol[i] < 8 && requirerow[i] < 8 && requirecol[i] >= 0 && requirerow[i] >= 0) {
            var mn = col[requirecol[i]] + row[requirerow[i]];
            if (document.getElementById(mn).innerHTML == "")
                tomovepos.push(mn);
            else {
                tocapture.push(mn);
            }
        }
    }

    if (x == 0) {
        return tocapture;
    }
    if (knight.classList.contains("highlight-yellow")) {
        highlightcircle(tomovepos);
        capture(tocapture, opponentcolor);
    } else {
        removecapture();
    }
}

function whiteknightclick({ piece }) {
    console.log("hwite knight");
    let currentpos = piece.current_position;
    highlightyellow(currentpos);
    moveknight(currentpos, "Black");
}

function blackknightclick({ piece }) {
    console.log("black knight");
    let currentpos = piece.current_position;
    highlightyellow(currentpos);
    moveknight(currentpos, "White");

}

export { whiteknightclick, blackknightclick, moveknight } 