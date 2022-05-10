import { AdventureLevel } from "../../../constants/adventure";
import { weapons } from "../../../assets/items/weapons";
import { minerals } from "../../../assets/items/minerals";

export default {
    id: "marius",
    name: "Marius",
    description: "Proud racist",
    damagetype: "racist",
    adventureLevel: AdventureLevel.noob,
    hp: 10,
    power: 7,
    expDrop: 17,
    dropTable: {
        [weapons.toothpick.id]: {
            item: weapons.toothpick,
            chance: 40,
            amount: 2,
            randomAmount: true,
        },
        [weapons.pickaxe.id]: {
            item: weapons.pickaxe,
            chance: 20,
            amount: 1,
            randomAmount: true,
        },
        [minerals.salt.id]: {
            item: minerals.salt,
            chance: 100,
            amount: 20,
            randomAmount: true,
        },
    },
};
