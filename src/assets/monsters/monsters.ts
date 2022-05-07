import Monster from "../../virtual/models/monster";
import { AdventureLevel } from "../../constants/adventure";
import { beginnerMonsters } from "./beginner/beginnerMonsters";
import { noobMonsters } from "./noob/noobMonsters";
import { intermediateMonsters } from "./intermediate/intermediateMonsters";
import { legendaryMonsters } from "./legendary/legendaryMonsters";
import { epicMonsters } from "./epic/epicMonsters";
import { masterMonsters } from "./master/masterMonsters";
import { expertMonsters } from "./expert/expertMonsters";

export const monsters: {
    [adventureLevel: AdventureLevel | number]: { [monsterId: string]: Monster | any };
} = {
    [AdventureLevel.noob]: noobMonsters,
    [AdventureLevel.beginner]: beginnerMonsters,
    [AdventureLevel.intermediate]: intermediateMonsters,
    [AdventureLevel.expert]: expertMonsters,
    [AdventureLevel.master]: masterMonsters,
    [AdventureLevel.epic]: epicMonsters,
    [AdventureLevel.legendary]: legendaryMonsters,
};
