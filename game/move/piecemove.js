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

import { removecircle } from "../../common function/highlighting_and_removing_circles.js";
import { removeyellow } from "../../common function/highlighting_and_removing.js";
import { movepiece } from "../../common function/piecetomove.js";
import { yellow_highlight } from "../../common function/highlighting_and_removing.js";


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
        else{
            const childelementsofclickedel = Array.from(event.target.childNodes);
            if (childelementsofclickedel.length == 1 || event.target.localName == "span") {
                if (event.target.localName == "span") {
                    const id = event.target.parentNode.id;
                    let moveid=yellow_highlight;
                    movepiece(moveid, id);
                }
                else {
                    let moveid=yellow_highlight;
                    const id = event.target.id;
                    movepiece(moveid, id);
                }
            }
            else{
                removecircle();
                removeyellow();
            }
        }
    })
}

export { piece_move };