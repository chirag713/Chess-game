import { globalstate } from "../app.js";

function removecircle() {
    const flatarr = globalstate.flat();
    flatarr.forEach(x => {
        const element = document.getElementById(x.id);
        // Check if the first child element is a span
        if (element.firstElementChild && element.firstElementChild.nodeName === "SPAN") {
            element.innerHTML="";
        }
    });
}

function highlightcircle(arr) {
    removecircle();

    arr.forEach(element => {
        const highlightSpan = document.createElement("span");
        highlightSpan.classList.add("circle");
        document.getElementById(element).appendChild(highlightSpan);
    });
}

export { highlightcircle ,removecircle }