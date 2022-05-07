import { items } from "../../../assets/items/items";
import { minerals } from "../../../assets/items/minerals";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "dog",
    name: "Dog",
    description: "Ed..Ward..",
    damagetype: "emotional",
    adventureLevel: AdventureLevel.expert,
    hp: 30,
    power: 25,
    expDrop: 28,
    dropTable: {
        [minerals.gold.id]: {
            item: minerals.gold,
            chance: 70,
            amount: 6,
            randomAmount: true,
        },
        [items.steamedham.id]: {
            item: items.steamedham,
            chance: 20,
            amount: 2,
            randomAmount: true,
        },
    },
};
