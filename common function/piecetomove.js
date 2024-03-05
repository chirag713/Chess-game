import { globalstate } from "../app.js";
import { movebishop } from "../game/move/bishop.js";
import { moveknight } from "../game/move/knight.js";
import { movequeen } from "../game/move/queen.js";
import { moverook } from "../game/move/rook.js";
import { removecapture } from "./capturechange.js";
import { removeyellow } from "./highlighting_and_removing.js";
import { removecircle } from "./highlighting_and_removing_circles.js";

let piece = null;

let temp = null;

let checkpiece=null;

function removecheck(){
    if(checkpiece) document.getElementById(checkpiece).classList.remove("check-color");
    checkpiece=null;
}

function placecheck(tocapture,king) {
    temp = null;
    console.log(tocapture);
    let flatdata = globalstate.flat();
    flatdata.forEach(element => {
        if (element.piece) {
            if (element.piece.piece_name === king) {
                temp = element.id;
            }
        }
    });
    console.log(temp);
    tocapture.forEach(element => {
        if (element && element === temp) {
            document.getElementById(temp).classList.add("check-color");
            checkpiece=temp;
        }
    });
}

function check() {
    if (piece.piece_name === "White_pawn") {

    }
    else if (piece.piece_name === "Black_pawn") {

    }
    else if (piece.piece_name === "White_bishop") {
        let tocapture = movebishop(piece.current_position, "Black", 0);
        placecheck(tocapture , "Black_king");
    }
    else if (piece.piece_name === "White_rook") {
        let tocapture = moverook(piece.current_position, "Black", 0);
        placecheck(tocapture,"Black_king");
    }
    else if (piece.piece_name === "White_queen") {
        let tocapture = movequeen(piece.current_position, "Black", 0);
        placecheck(tocapture,"Black_king");
    }
    else if (piece.piece_name === "White_knight") {
        let tocapture = moveknight(piece.current_position, "Black", 0);
        placecheck(tocapture,"Black_king");
    }
    else if (piece.piece_name === "Black_queen") {
        let tocapture = movequeen(piece.current_position, "White", 0);
        placecheck(tocapture,"White_king");
    }
    else if (piece.piece_name === "Black_knight") {
        let tocapture = moveknight(piece.current_position, "White", 0);
        placecheck(tocapture,"White_king");
    }
    else if (piece.piece_name === "Black_rook") {
        let tocapture = moverook(piece.current_position, "White", 0);
        placecheck(tocapture,"White_king");
    }
    else if (piece.piece_name === "Black_bishop") {
        let tocapture = movebishop(piece.current_position, "White", 0);
        placecheck(tocapture,"White_king");
    }
}

function movepiece(currentpos, id) {
    removecheck();
    const flatdata = globalstate.flat();
    flatdata.forEach(el => {
        if (el.id == currentpos) {
            piece = el.piece;
            piece.current_position = id;
        }
    });

    flatdata.forEach(el => {
        if (el.id === currentpos) {
            delete el.piece;
        }
        if (el.id === id) {
            el.piece = piece;
        }
    });

    const previouspiece = document.getElementById(currentpos);
    const currentpiece = document.getElementById(id);
    currentpiece.innerHTML = previouspiece.innerHTML;
    previouspiece.innerHTML = "";
    removeyellow();

    removecircle();
    removecapture();
    check();
}

export { movepiece }