import { consumables } from "../../items/consumables";
import { minerals } from "../../items/minerals";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "humanoiddog",
    name: "Humanoid dog",
    description: "Ed..Ward..",
    damagetype: "emotional",
    adventureLevel: AdventureLevel.expert,
    hp: 190,
    power: 55,
    expDrop: 140,
    dropTable: {
        [minerals.gold.id]: {
            item: minerals.gold,
            chance: 100,
            amount: 20,
            randomAmount: true,
        },
        [consumables.steamedham.id]: {
            item: consumables.steamedham,
            chance: 50,
            amount: 2,
            randomAmount: true,
        },
    },
};
