import { weapons } from "../../../assets/items/weapons";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "marius",
    name: "Marius",
    description: "Proud racist",
    damagetype: "racist",
    adventureLevel: AdventureLevel.noob,
    hp: 3,
    power: 10,
    expDrop: 10,
    dropTable: {
        [weapons.toothpick.id]: {
            item: weapons.toothpick,
            chance: 40,
            amount: 2,
            randomAmount: true,
        },
    },
};
