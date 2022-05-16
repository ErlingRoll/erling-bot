import Monster from "virtual/models/monster";

import evilchicken from "./evilchicken";
import flyingpig from "./flyingpig";
import stoat from "./stoat";
import poisoneyvind from "./poisoneyvind";

export const intermediateMonsters: { [id: string]: Monster | any } = {
    evilchicken,
    flyingpig,
    stoat,
    poisoneyvind,
};
