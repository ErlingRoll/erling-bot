import { consumables } from "../../items/consumables";
import { minerals } from "../../items/minerals";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "dog",
    name: "Dog",
    description: "Ed..Ward..",
    damagetype: "emotional",
    adventureLevel: AdventureLevel.expert,
    hp: 27,
    power: 22,
    expDrop: 28,
    dropTable: {
        [minerals.gold.id]: {
            item: minerals.gold,
            chance: 70,
            amount: 6,
            randomAmount: true,
        },
        [consumables.steamedham.id]: {
            item: consumables.steamedham,
            chance: 20,
            amount: 2,
            randomAmount: true,
        },
    },
};
