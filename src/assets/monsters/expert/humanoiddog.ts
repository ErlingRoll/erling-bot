import { consumables } from "../../items/consumables";
import { minerals } from "../../items/minerals";
import { AdventureLevel } from "../../../constants/adventure";
import { weapons } from "../../items/weapons";

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
            amount: 30,
            randomAmount: true,
        },
        [consumables.steamedham.id]: {
            item: consumables.steamedham,
            chance: 50,
            amount: 2,
            randomAmount: true,
        },
        [weapons.lightsaber.id]: {
            item: weapons.lightsaber,
            chance: 20,
            amount: 2,
            randomAmount: true,
        },
        [weapons.rpg7.id]: {
            item: weapons.rpg7,
            chance: 3,
            amount: 1,
            randomAmount: true,
        },
    },
};
