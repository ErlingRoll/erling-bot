import { weapons } from "../../../assets/items/weapons";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "karatepanda",
    name: "Karate panda",
    description: "Probably also knows kung fu!",
    damagetype: "screeching",
    adventureLevel: AdventureLevel.beginner,
    hp: 35,
    power: 12,
    expDrop: 29,
    dropTable: {
        [weapons.toothpick.id]: {
            item: weapons.toothpick,
            chance: 40,
            amount: 1,
        },
        [weapons.pickaxe.id]: {
            item: weapons.pickaxe,
            chance: 20,
            amount: 1,
        },
    },
};
