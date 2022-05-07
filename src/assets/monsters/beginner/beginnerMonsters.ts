import Monster from "virtual/models/monster";

import karatepanda from "./karatepanda";
import sentienttoaster from "./sentienttoaster";
import karen from "./karen";

export const beginnerMonsters: { [id: string]: Monster | any } = {
    karatepanda,
    sentienttoaster,
    karen,
};
