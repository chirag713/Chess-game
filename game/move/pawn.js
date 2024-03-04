import { highlightyellow } from "../../common function/highlighting_and_removing.js";
import { highlightcircle } from "../../common function/highlighting_and_removing_circles.js";
import { globalstate } from "../../app.js";

function whitepawnclick({piece}){
    let flatarr=globalstate.flat();
    console.log("white pawn");
    let whitepawn=document.getElementById(piece.current_position);
    let currentpos=piece.current_position;
    highlightyellow(currentpos);

    let tomovepos=[];

    if(currentpos[1]=='2'){
        let x=currentpos[0]+'3';
        let y=currentpos[0]+'4';
        tomovepos.push(x);
        tomovepos.push(y);
        if(whitepawn.classList.contains("highlight-yellow"))
        highlightcircle(tomovepos);
    }
    else console.log(currentpos[1]);
}

function blackpawnclick({piece}){
    let blackpawn=document.getElementById(piece.current_position);
    console.log("black pawn");
    let currentpos=piece.current_position;
    highlightyellow(currentpos);
    let tomovepos=[];
    if(currentpos[1]=='7'){
        let x=currentpos[0]+'6';
        let y=currentpos[0]+'5';
        tomovepos.push(x);
        tomovepos.push(y)
        if(blackpawn.classList.contains("highlight-yellow"))
        highlightcircle(tomovepos);
    }
    else console.log(currentpos[1]);
}

export {whitepawnclick , blackpawnclick}