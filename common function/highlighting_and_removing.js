import { removecircle } from "./highlighting_and_removing_circles.js";


let yellow_highlight=null;

function removeyellow(){
    if(yellow_highlight)
    document.getElementById(yellow_highlight).classList.remove("highlight-yellow");
    yellow_highlight=null;
}

function highlightyellow(currentpos){
    if(currentpos==yellow_highlight) {
        removeyellow();
        removecircle();
        return;
    }
    removeyellow();
    removecircle();
    yellow_highlight=currentpos;
    document.getElementById(currentpos).classList.add("highlight-yellow");
}

export{highlightyellow , removeyellow , yellow_highlight}