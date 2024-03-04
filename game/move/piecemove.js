import { globalstate } from "../../app.js";

import { whitepawnclick } from "./pawn.js";
import { blackpawnclick } from "./pawn.js";
import { whitebishopclick } from "./bishop.js";
import { blackbishopclick } from "./bishop.js";
import {whiterookclick} from "./rook.js"
import {blackrookclick} from "./rook.js"
import {whitekingclick} from "./king.js"
import {blackkingclick} from "./king.js"
import {whitequeenclick} from "./queen.js"
import {blackqueenclick} from "./queen.js"
import {whiteknightclick} from "./knight.js"
import {blackknightclick} from "./knight.js"


function piece_move(){
    document.getElementById("root").addEventListener("click" , function(event){
        if(event.target.localName=="img"){
            const clickedid = event.target.parentNode.id;
            const flatarr = globalstate.flat();
            const square = (flatarr.find(el => el.id === clickedid));
            if (square.piece.piece_name === "White_pawn") {
                whitepawnclick(square);
            }
            else if (square.piece.piece_name === "Black_pawn") {
                blackpawnclick(square);
            }
            if (square.piece.piece_name === "White_bishop") {
                whitebishopclick(square);
            }
            else if (square.piece.piece_name === "Black_bishop") {
                blackbishopclick(square);
            }
            if (square.piece.piece_name === "White_rook") {
                whiterookclick(square);
            }
            else if (square.piece.piece_name === "Black_rook") {
                blackrookclick(square);
            }
            if (square.piece.piece_name === "White_king") {
                whitekingclick(square);
            }
            else if (square.piece.piece_name === "Black_king") {
                blackkingclick(square);
            }
            if (square.piece.piece_name === "White_queen") {
                whitequeenclick(square);
            }
            else if (square.piece.piece_name === "Black_queen") {
                blackqueenclick(square);
            }
            if (square.piece.piece_name === "White_knight") {
                whiteknightclick(square);
            }
            else if (square.piece.piece_name === "Black_knight") {
                blackknightclick(square);
            }
        }
    })
}

export { piece_move };
