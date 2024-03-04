
import { initgame } from "./data/data.js";
import { initgamerender } from "./render/main.js";
import { piece_move } from "./game/move/piecemove.js";

const globalstate=initgame();
initgamerender(globalstate);
piece_move();
export{globalstate};