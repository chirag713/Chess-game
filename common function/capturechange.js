import { globalstate } from "../app.js";

let redarray=[];

function check(id,opponentcolor) {
    const flatarr = globalstate.flat();
    for (let index = 0; index < flatarr.length; index++) {
        const element = flatarr[index];
        if (element.id === id) {
            if (element.piece && element.piece.piece_name.includes(opponentcolor)) {
                return true;
            }
            break;
        }
    }
    return false;
}

function removecapture() {
    redarray.forEach(element => {
        document.getElementById(element).classList.remove("capture-color");
    });
    redarray=[];
}


function capture(arr, opponentcolor) {
    removecapture();
    arr.forEach(element => {
        if(check(element,opponentcolor)){
            document.getElementById(element).classList.add("capture-color");
            redarray.push(element);
        }
    });
}

export { capture ,removecapture}