import Monster from "virtual/models/monster";

import evilchicken from "./evilchicken";
import flyingpig from "./flyingpig";
import stoat from "./stoat";

export const intermediateMonsters: { [id: string]: Monster | any } = {
    evilchicken,
    flyingpig,
    stoat,
};
