import { globalstate } from "../app.js";
import { removeyellow } from "./highlighting_and_removing.js";
import { removecircle } from "./highlighting_and_removing_circles.js";

let piece=null;

function movepiece(currentpos,id){
    const flatdata = globalstate.flat();

    flatdata.forEach(el => {
        // console.log(el.piece);
        if(el.id==currentpos) {
            piece=el.piece;
            piece.current_position=id;
        }
    });

    flatdata.forEach(el => {
        // console.log(el.piece);
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
}

export {movepiece}