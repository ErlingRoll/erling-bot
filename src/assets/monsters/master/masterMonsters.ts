import Monster from "virtual/models/monster";

import vampire from "./vampire";
import vilemaw from "./vilemaw";

export const masterMonsters: { [id: string]: Monster | any } = {
    vampire,
    vilemaw,
};
